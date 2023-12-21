const toggleBtn = document.getElementById('toggle-btn');
const body = document.body;
let darkMode = localStorage.getItem('dark-mode');

function enableDarkMode() {
  toggleBtn.classList.replace('fa-sun', 'fa-moon');
  body.classList.add('dark');
  localStorage.setItem('dark-mode', 'enabled');
}

function disableDarkMode() {
  toggleBtn.classList.replace('fa-moon', 'fa-sun');
  body.classList.remove('dark');
  localStorage.setItem('dark-mode', 'disabled');
}

function toggleDarkMode() {
  darkMode = localStorage.getItem('dark-mode');
  darkMode === 'disabled' ? enableDarkMode() : disableDarkMode();
}

if (darkMode === 'enabled') {
  enableDarkMode();
}

toggleBtn.addEventListener('click', toggleDarkMode);

const profile = document.querySelector('.header .flex .profile');
const userBtn = document.querySelector('#user-btn');

userBtn.addEventListener('click', () => {
  profile.classList.toggle('active');
  search.classList.remove('active');
});

const search = document.querySelector('.header .flex .search-form');
const searchBtn = document.querySelector('#search-btn');

searchBtn.addEventListener('click', () => {
  search.classList.toggle('active');
  profile.classList.remove('active');
});

const sideBar = document.querySelector('.side-bar');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');

menuBtn.addEventListener('click', () => {
  sideBar.classList.toggle('active');
  body.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
  sideBar.classList.remove('active');
  body.classList.remove('active');
});

window.onscroll = () => {
  profile.classList.remove('active');
  search.classList.remove('active');

  if (window.innerWidth < 1200) {
    sideBar.classList.remove('active');
    body.classList.remove('active');
  }
};
