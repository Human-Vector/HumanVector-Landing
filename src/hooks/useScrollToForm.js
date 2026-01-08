export const useScrollToForm = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    if (!formSection) return;

    // Trigger all scroll animations first to prevent layout shifts during scroll
    const animatedElements = document.querySelectorAll('.animate-on-scroll:not(.is-visible)');
    animatedElements.forEach(el => el.classList.add('is-visible'));

    // Small delay to let animations settle, then scroll
    requestAnimationFrame(() => {
      formSection.scrollIntoView({ behavior: 'smooth' });
    });
  };

  return scrollToForm;
};
