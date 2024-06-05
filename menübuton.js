const menuBtn = document.getElementById('menuBtn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('menu');
const closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  overlay.style.display = (overlay.style.display === 'block') ? 'none' : 'block';
});

overlay.addEventListener('click', () => {
  menu.classList.remove('active');
  overlay.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('active');
  overlay.style.display = 'none';
});
