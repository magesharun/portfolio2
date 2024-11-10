document.getElementById('mode-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const icon = document.getElementById('mode-toggle').firstElementChild;
  icon.classList.toggle('bx-sun');
  icon.classList.toggle('bx-moon');
});
