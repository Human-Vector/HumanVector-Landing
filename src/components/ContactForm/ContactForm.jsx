import { useState, useRef, useEffect } from 'react';
import styles from './ContactForm.module.css';
import SuccessModal from '../SuccessModal/SuccessModal';
import { supabase } from '../../lib/supabaseClient';

// Helper functions for collecting metadata
const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return 'Tablet';
  }
  if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
    return 'Mobile';
  }
  return 'Desktop';
};

const getBrowserInfo = () => {
  const ua = navigator.userAgent;
  let browser = 'Unknown';

  if (ua.includes('Firefox')) browser = 'Firefox';
  else if (ua.includes('Chrome') && !ua.includes('Edg')) browser = 'Chrome';
  else if (ua.includes('Safari') && !ua.includes('Chrome')) browser = 'Safari';
  else if (ua.includes('Edg')) browser = 'Edge';
  else if (ua.includes('Opera') || ua.includes('OPR')) browser = 'Opera';

  return browser;
};

const getOS = () => {
  const ua = navigator.userAgent;

  if (ua.includes('Win')) return 'Windows';
  if (ua.includes('Mac')) return 'macOS';
  if (ua.includes('Linux')) return 'Linux';
  if (ua.includes('Android')) return 'Android';
  if (ua.includes('iOS') || ua.includes('iPhone') || ua.includes('iPad')) return 'iOS';

  return 'Unknown';
};

const getScreenResolution = () => {
  return `${window.screen.width}x${window.screen.height}`;
};

const getTimezone = () => {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
};

const getLanguage = () => {
  return navigator.language || navigator.userLanguage;
};

const getReferrer = () => {
  return document.referrer || 'direct';
};

// Location data - disabled to avoid VPN/network issues
// Will be captured server-side if needed
const getLocationData = () => {
  return {
    country: null,
    city: null,
    ip_address: null
  };
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    messengerContact: '',
    email: '',
    teamSize: '20-40',
    challenge: ''
  });

  const videoRef = useRef(null);
  // Detect if device has touch capability (mobile/tablet)
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const isDesktopRef = useRef(!isTouchDevice);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const isDesktop = !isTouchDevice;
    isDesktopRef.current = isDesktop;

    if (isDesktop) {
      // Desktop: seek to last frame when ready
      const handleCanPlay = () => {
        if (video.duration && !isNaN(video.duration)) {
          video.currentTime = video.duration - 0.1;
        }
      };

      if (video.readyState >= 3) {
        handleCanPlay();
      } else {
        video.addEventListener('canplaythrough', handleCanPlay, { once: true });
      }
    }
  }, [isTouchDevice]);

  const [errors, setErrors] = useState({
    name: '',
    messengerContact: '',
    email: '',
    teamSize: ''
  });

  const [touched, setTouched] = useState({
    name: false,
    messengerContact: false,
    email: false,
    teamSize: false
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const teamSizeOptions = [
    { value: '20-40', label: '20-40' },
    { value: '40-60', label: '40-60' },
    { value: '60-100', label: '60-100' },
    { value: '100+', label: '100+' }
  ];

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) {
          return 'Name is required';
        }
        return '';
      case 'messengerContact':
        if (!value.trim()) {
          return 'Messenger contact is required';
        }
        return '';
      case 'email':
        if (!value.trim()) {
          return 'Email is required';
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          return 'Please enter a valid email';
        }
        return '';
      case 'teamSize':
        if (!value) {
          return 'Team size is required';
        }
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Validate on change if field has been touched
    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleVideoClick = () => {
    if (isDesktopRef.current) return;

    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const handleMouseEnter = () => {
    if (!isDesktopRef.current) return;

    const video = videoRef.current;
    if (!video) return;

    video.play();
  };

  const handleMouseLeave = () => {
    if (!isDesktopRef.current) return;

    const video = videoRef.current;
    if (!video) return;

    video.pause();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {
      name: validateField('name', formData.name),
      messengerContact: validateField('messengerContact', formData.messengerContact),
      email: validateField('email', formData.email),
      teamSize: validateField('teamSize', formData.teamSize)
    };

    setErrors(newErrors);
    setTouched({ name: true, messengerContact: true, email: true, teamSize: true });

    // Check if there are any errors
    const hasErrors = Object.values(newErrors).some(error => error !== '');

    if (!hasErrors) {
      try {
        // Collect all metadata
        const locationData = getLocationData();

        const submissionData = {
          // Form data
          name: formData.name,
          email: formData.email,
          team_size: formData.teamSize,
          biggest_challenge: formData.challenge || null,
          messenger_contact: formData.messengerContact,

          // Device & Browser
          device_type: getDeviceType(),
          browser: getBrowserInfo(),
          os: getOS(),

          // Location & Language
          country: locationData.country,
          city: locationData.city,
          language: getLanguage(),
          timezone: getTimezone(),

          // Traffic Source
          referrer: getReferrer(),

          // Screen
          screen_resolution: getScreenResolution(),

          // System
          ip_address: locationData.ip_address
          // submitted_at is auto-generated by database
        };

        console.log('Submitting to Supabase:', submissionData);

        // Submit to Supabase
        const { data, error } = await supabase
          .from('form_submissions')
          .insert([submissionData])
          .select();

        if (error) {
          console.error('Supabase error:', error);
          alert('Failed to submit form. Please try again.');
          return;
        }

        console.log('Form submitted successfully:', data);

        // Show success modal
        setShowSuccessModal(true);
      } catch (error) {
        console.error('Submission error:', error);
        alert('Failed to submit form. Please try again.');
      }
    }
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);

    // Reset form
    setFormData({
      name: '',
      messengerContact: '',
      email: '',
      teamSize: '20-40',
      challenge: ''
    });
    setTouched({ name: false, messengerContact: false, email: false, teamSize: false });
  };

  return (
    <section id="contact-form" className={styles.contactFormSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.heading}>
            Let's have a demo call and get to know each other
          </h2>

          <form className={styles.formCard} onSubmit={handleSubmit} noValidate>
            <div className={styles.formFieldsWrapper}>
              {/* Name Field */}
              <div className={styles.formField}>
                <label htmlFor="name" className={styles.label}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="William"
                  className={`${styles.input} ${errors.name && touched.name ? styles.inputError : ''}`}
                />
                {errors.name && touched.name && (
                  <span className={styles.errorMessage}>{errors.name}</span>
                )}
              </div>

              {/* Messenger Contact Field */}
              <div className={styles.formField}>
                <label htmlFor="messengerContact" className={styles.label}>
                  Messenger contact
                </label>
                <input
                  type="text"
                  id="messengerContact"
                  name="messengerContact"
                  value={formData.messengerContact}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Telegram/WhatsApp/other"
                  className={`${styles.input} ${errors.messengerContact && touched.messengerContact ? styles.inputError : ''}`}
                />
                {errors.messengerContact && touched.messengerContact && (
                  <span className={styles.errorMessage}>{errors.messengerContact}</span>
                )}
              </div>

              {/* Email Field */}
              <div className={styles.formField}>
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="William@gmail.com"
                  className={`${styles.input} ${errors.email && touched.email ? styles.inputError : ''}`}
                />
                {errors.email && touched.email && (
                  <span className={styles.errorMessage}>{errors.email}</span>
                )}
              </div>

              {/* Team Size Field */}
              <div className={styles.formField}>
                <label htmlFor="teamSize" className={styles.label}>
                  Team size
                </label>
                <div className={styles.selectWrapper}>
                  <select
                    id="teamSize"
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`${styles.select} ${errors.teamSize && touched.teamSize ? styles.inputError : ''}`}
                  >
                    <option value="">Select team size</option>
                    {teamSizeOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <img
                    src="/images/contact-form/chevron-down.svg"
                    alt=""
                    className={styles.chevronIcon}
                  />
                </div>
                {errors.teamSize && touched.teamSize && (
                  <span className={styles.errorMessage}>{errors.teamSize}</span>
                )}
              </div>

              {/* Challenge Field (Optional) */}
              <div className={styles.formField}>
                <label htmlFor="challenge" className={styles.label}>
                  Biggest challenge (optional)
                </label>
                <textarea
                  id="challenge"
                  name="challenge"
                  value={formData.challenge}
                  onChange={handleChange}
                  placeholder="We grew from 30 to 45 people this year but profit stayed flat. Something's broken but I can't see where..."
                  className={styles.textarea}
                  rows={5}
                />
              </div>
            </div>

            {/* CTA Container */}
            <div className={styles.ctaContainer}>
              <button type="submit" className={styles.submitButton}>
                Book my demo
              </button>
              <div className={styles.ctaInfo}>
                <p className={styles.ctaTextTop}>
                  30-minute call with <span className={styles.cofounderText}>co-founder</span>
                </p>
                <div className={styles.ctaFounderRow}>
                  <img
                    src="/images/proven-solution/george-avatar.png"
                    alt="George Kachanouski"
                    className={styles.avatar}
                  />
                  <a
                    href="https://www.linkedin.com/in/georgekachanouski/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.ctaLink}
                  >
                    George Kachanouski
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Decorative Video */}
        <div
          className={styles.decorativeImage}
          onClick={handleVideoClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <video
            ref={videoRef}
            autoPlay={isTouchDevice}
            loop
            muted
            playsInline
            preload="auto"
            className={styles.decorativeVideo}
          >
            <source src="/images/contact-form/person-waving.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <SuccessModal
          userName={formData.name}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
}
