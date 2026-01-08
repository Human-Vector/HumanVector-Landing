export const useScrollToForm = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      // Use a two-step scroll to handle layout shifts from animations/images:
      // 1. First, instantly jump near the target to trigger all animations
      // 2. Then smooth scroll to the final position after a brief delay
      const targetPosition = formSection.offsetTop;

      // Jump to 200px above the target to trigger animations in that area
      window.scrollTo({ top: Math.max(0, targetPosition - 200), behavior: 'instant' });

      // After animations start, smooth scroll to the exact position
      requestAnimationFrame(() => {
        setTimeout(() => {
          const finalPosition = formSection.offsetTop;
          window.scrollTo({ top: finalPosition, behavior: 'smooth' });
        }, 50);
      });
    }
  };

  return scrollToForm;
};
