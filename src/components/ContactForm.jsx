import { useState } from 'react'
import { supabase } from '../lib/supabase'
import './ContactForm.css'

function ContactForm() {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const { error } = await supabase
        .from('form_submissions')
        .insert([formData])

      if (error) throw error

      setStatus('success')
      setFormData({ email: '', message: '' })
    } catch (error) {
      console.error('Error submitting form:', error)
      setStatus('error')
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="contact-form">
      <h2>Get in Touch</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
        />
        <button type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
        {status === 'success' && <p className="success">Message sent successfully!</p>}
        {status === 'error' && <p className="error">Error sending message. Please try again.</p>}
      </form>
    </section>
  )
}

export default ContactForm
