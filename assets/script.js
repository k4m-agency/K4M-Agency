window.addEventListener('DOMContentLoaded', () => {
  document.body.style.opacity = 0;
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    document.body.style.opacity = 1;
  }, 50);
});
