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

document.addEventListener("DOMContentLoaded", function () {
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
  
  document.getElementById('videoModal').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal();
  });

  // Contact form submission simulation
  const form = document.getElementById('contactForm');
  const btn = form.querySelector('button[type="submit"]');
  const txt = btn.querySelector('.submit-text');
  const loading = btn.querySelector('.loading');
  const successMsg = document.getElementById('formSuccess');

  form.addEventListener('submit', () => {
    txt.classList.add('hidden');
    loading.classList.remove('hidden');
    btn.disabled = true;
  });


// Smooth scroll with immediate nav highlight (no delay)
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();

    // Immediately highlight clicked link if it has .nav-link
    if (a.classList.contains('nav-link')) {
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('text-purple-600'));
      a.classList.add('text-purple-600');
    }

    // Scroll to section
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      window.scrollTo({ top: target.offsetTop - 100, behavior: 'smooth' });
    }

    // Hide mobile menu if open
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
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

  document.getElementById('copyright-year').innerHTML = `&copy; ${new Date().getFullYear()}`;

});

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section[id], header[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  function activateLinkOnScroll() {
    const scrollY = window.scrollY;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("text-purple-600", "bg-purple-50");
          link.classList.add("text-gray-600");

          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.remove("text-gray-600");
            link.classList.add("text-purple-600", "bg-purple-50");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", activateLinkOnScroll);
  window.addEventListener("load", activateLinkOnScroll);
});
