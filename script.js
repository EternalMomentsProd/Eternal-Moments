// Mobile menu toggle
document.querySelector('.mobile-menu-button').addEventListener('click', () => {
  document.querySelector('.mobile-menu').classList.toggle('hidden');
});

// FAQ accordion functionality
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const ans = btn.nextElementSibling;
    const icon = btn.querySelector('i');
    ans.classList.toggle('hidden');
    icon.classList.toggle('fa-plus');
    icon.classList.toggle('fa-minus');
    document.querySelectorAll('.faq-answer').forEach(a => {
      if (a !== ans && !a.classList.contains('hidden')) {
        a.classList.add('hidden');
        const i = a.previousElementSibling.querySelector('i');
        i.classList.replace('fa-minus', 'fa-plus');
      }
    });
  });
});

// Video modal open/close
const videos = {
  'paul-precious-video': 'https://www.youtube.com/embed/s6GoCyAeIEk',
  'Shelesea & Herlander': 'https://www.youtube.com/embed/81rCxFTbD4I',
};
function openModal(videoId) {
  document.body.style.overflow = 'hidden';
  document.getElementById('videoModal').classList.remove('hidden');
  document.getElementById('modalVideo').src = videos[videoId];
}
function closeModal() {
  document.getElementById('modalVideo').src = '';
  document.getElementById('videoModal').classList.add('hidden');
  document.body.style.overflow = 'auto';
}
document.getElementById('videoModal').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeModal();
});

// Contact form submission simulation
const form = document.getElementById('contactForm');
const btn = form.querySelector('button[type="submit"]');
const txt = btn.querySelector('.submit-text');
const loading = btn.querySelector('.loading');
const successMsg = document.getElementById('formSuccess');

form.addEventListener('submit', e => {
  e.preventDefault();
  txt.classList.add('hidden');
  loading.classList.remove('hidden');
  btn.disabled = true;
  successMsg.classList.remove('hidden');
  setTimeout(() => {
    txt.classList.remove('hidden');
    loading.classList.add('hidden');
    btn.disabled = false;
  }, 2000);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const t = document.querySelector(a.getAttribute('href'));
    if (t) {
      document.querySelector('.mobile-menu').classList.add('hidden');
      window.scrollTo({ top: t.offsetTop - 100, behavior: 'smooth' });
    }
  });
});

// Dark mode toggle & persistence
const toggle = document.getElementById('darkModeToggle');
const root = document.documentElement;
if (
  localStorage.getItem('darkMode') === 'true' ||
  (!localStorage.getItem('darkMode') &&
   window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  root.classList.add('dark');
}
toggle.addEventListener('click', () => {
  root.classList.toggle('dark');
  localStorage.setItem('darkMode', root.classList.contains('dark'));
});

// ECS key to exit media player
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});