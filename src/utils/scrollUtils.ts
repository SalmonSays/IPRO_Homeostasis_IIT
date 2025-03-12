export const scrollToTop = () => {
  const duration = 1000; // Duration in milliseconds
  const start = window.pageYOffset;
  const startTime = performance.now();

  function scroll(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Easing function for smooth deceleration
    const easeOutCubic = 1 - Math.pow(1 - progress, 3);
    
    window.scrollTo(0, start * (1 - easeOutCubic));

    if (progress < 1) {
      requestAnimationFrame(scroll);
    }
  }

  requestAnimationFrame(scroll);
}; 