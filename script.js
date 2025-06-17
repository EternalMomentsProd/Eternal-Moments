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

const videos = {
  'Paul & Precious Wedding': 'https://www.youtube.com/embed/YnF2N67oHTY?autoplay=1',
  'Shelesea & Herlander': 'https://www.youtube.com/embed/81rCxFTbD4I?autoplay=1',
};

document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  document.querySelector('.mobile-menu-button')?.addEventListener('click', () => {
    document.querySelector('.mobile-menu')?.classList.toggle('hidden');
  });

  // FAQ Toggle Logic
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const ans = btn.nextElementSibling;
      const icon = btn.querySelector('i');

      document.querySelectorAll('.faq-answer').forEach(a => {
        if (a !== ans && !a.classList.contains('hidden')) {
          a.classList.add('hidden');
          const i = a.previousElementSibling.querySelector('i');
          i?.classList.replace('fa-minus', 'fa-plus');
        }
      });

      ans.classList.toggle('hidden');
      icon?.classList.toggle('fa-plus');
      icon?.classList.toggle('fa-minus');
    });
  });

  document.getElementById('videoModal')?.addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal();
  });

  // Contact Form Spinner
  const form = document.getElementById('contactForm');
  const btn = form?.querySelector('button[type="submit"]');
  const txt = btn?.querySelector('.submit-text');
  const loading = btn?.querySelector('.loading');
  const successMsg = document.getElementById('formSuccess');

  if (form && btn && txt && loading && successMsg) {
    form.addEventListener('submit', () => {
      txt.classList.add('hidden');
      loading.classList.remove('hidden');
      btn.disabled = true;
    });
  }

  // Smooth Scroll Navigation
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();

      if (a.classList.contains('nav-link')) {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('text-purple-600'));
        a.classList.add('text-purple-600');
      }

      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        window.scrollTo({ top: target.offsetTop - 100, behavior: 'smooth' });
      }

      const mobileMenu = document.querySelector('.mobile-menu');
      if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
      }
    });
  });

  // Dark Mode Toggle
  const toggle = document.getElementById("darkModeToggle");
  const html = document.documentElement;

  if (localStorage.getItem("theme") === "dark") {
    html.classList.add("dark");
  } else if (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    html.classList.add("dark");
  }

  toggle?.addEventListener("click", () => {
    html.classList.toggle("dark");
    localStorage.setItem("theme", html.classList.contains("dark") ? "dark" : "light");
  });

  // ESC Key closes modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Copyright year
  const yearSpan = document.getElementById('copyright-year');
  if (yearSpan) {
    yearSpan.innerHTML = `&copy; ${new Date().getFullYear()}`;
  }

  // Highlight nav on scroll
  const sections = document.querySelectorAll("section[id], header[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  function activateLinkOnScroll() {
    const scrollY = window.scrollY;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
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

  // Portfolio: Load More with Fade-in
  const portraits = Array.from({ length: 15 }, (_, i) => ({
    src: `images/portraits/Portrait_${i + 1}.webp`,
    alt: `Portrait ${i + 1}`,
  }));

  const perBatch = 5;
  let currentIndex = 0;

  const grid = document.getElementById('portfolioGrid');
  const loadBtn = document.getElementById('loadMoreBtn');
  const noMoreMsg = document.getElementById('noMoreMsg');

  function renderBatch() {
    const nextBatch = portraits.slice(currentIndex, currentIndex + perBatch);
    nextBatch.forEach(img => {
      const wrapper = document.createElement('div');
      wrapper.className = 'w-full'; // make it behave properly in the grid
      wrapper.innerHTML = `
        <img src="${img.src}" alt="${img.alt}"
            class="fade-in w-full rounded-lg shadow-md border-4 border-white dark:border-gray-700 transform hover:scale-105 hover:border-purple-500 transition duration-300">
      `;
      grid.appendChild(wrapper);
    });

    currentIndex += perBatch;

    if (currentIndex >= portraits.length) {
      loadBtn.style.display = 'none';
      noMoreMsg?.classList.remove('hidden');
    }
  }

  if (grid && loadBtn) {
    loadBtn.addEventListener('click', renderBatch);
    renderBatch();
  }
});
