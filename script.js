// ---------- Global Vars ----------
let activeTopic = 'portraits';
let imagesPerLoad = 6;
let currentIndex = 0;

// ---------- Video Modal ----------
const videos = {
  'Paul & Precious Wedding': 'https://www.youtube.com/embed/YnF2N67oHTY?autoplay=1',
  'Shelesea & Herlander': 'https://www.youtube.com/embed/81rCxFTbD4I?autoplay=1',
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

// ---------- DOM Ready ----------
document.addEventListener("DOMContentLoaded", () => {
  renderPortfolio(activeTopic, true);
  renderPackages(activeTopic);

  // Mobile menu
  document.querySelector('.mobile-menu-button')?.addEventListener('click', () => {
    document.querySelector('.mobile-menu')?.classList.toggle('hidden');
  });

  // FAQ toggles
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

  // Video modal overlay click
  document.getElementById('videoModal')?.addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal();
  });

  // Contact form
  const form = document.getElementById('contactForm');
  const btn = form?.querySelector('button[type="submit"]');
  const txt = btn?.querySelector('.submit-text');
  const loading = btn?.querySelector('.loading');
  if (form && btn && txt && loading) {
    form.addEventListener('submit', () => {
      txt.classList.add('hidden');
      loading.classList.remove('hidden');
      btn.disabled = true;
    });
  }

  // Smooth scroll nav
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) window.scrollTo({ top: target.offsetTop - 100, behavior: 'smooth' });

      if (a.classList.contains('nav-link')) {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('text-purple-600'));
        a.classList.add('text-purple-600');
      }

      const mobileMenu = document.querySelector('.mobile-menu');
      if (mobileMenu && !mobileMenu.classList.contains('hidden')) mobileMenu.classList.add('hidden');
    });
  });

  // Dark mode
  const toggle = document.getElementById("darkModeToggle");
  const html = document.documentElement;
  if (localStorage.getItem("theme") === "dark" || (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    html.classList.add("dark");
  }
  toggle?.addEventListener("click", () => {
    html.classList.toggle("dark");
    localStorage.setItem("theme", html.classList.contains("dark") ? "dark" : "light");
  });

  // ESC to close modal
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  // Copyright year
  const yearSpan = document.getElementById('copyright-year');
  if (yearSpan) yearSpan.innerHTML = `&copy; ${new Date().getFullYear()}`;

  // Nav highlight on scroll
  const sections = document.querySelectorAll("section[id], header[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  function activateLinkOnScroll() {
    const scrollY = window.scrollY;
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");
      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(link => {
          link.classList.remove("text-purple-600", "bg-purple-50");
          link.classList.add("text-gray-600");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.remove("text-gray-600");
            link.classList.add("text-purple-600", "bg-purple-50");
          }
        });
      }
    });
  }
  window.addEventListener("scroll", activateLinkOnScroll);
  window.addEventListener("load", activateLinkOnScroll);

  // Infinite Scroll Portfolio
  window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 200) {
      const total = topics[activeTopic]?.images.length || 0;
      if (currentIndex < total) {
        renderPortfolio(activeTopic);
      }
    }
  });
});

// ---------- Portfolio ----------
function renderPortfolio(topicKey, reset = false) {
  const portfolio = document.getElementById('topicPortfolio');
  const allImages = topics[topicKey]?.images || [];

  if (reset) {
    currentIndex = 0;
    portfolio.innerHTML = '';
  }

  const nextBatch = allImages.slice(currentIndex, currentIndex + imagesPerLoad);
  nextBatch.forEach((src, i) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = `Portfolio ${currentIndex + i + 1}`;
    img.loading = 'lazy';
    img.className = 'fade-in';
    portfolio.appendChild(img);
  });

  currentIndex += imagesPerLoad;
}

// ---------- Packages ----------
function renderPackages(topicKey) {
  const packageGrid = document.getElementById('topicPackages');
  packageGrid.innerHTML = '';

  topics[topicKey]?.packages.forEach((pkg, i) => {
    const isPopular = i === 1;

    const card = document.createElement('div');
    card.className = `
      relative bg-white dark:bg-gray-800
      border ${isPopular ? 'border-2 border-purple-600 dark:border-purple-400 shadow-lg -translate-y-2' : 'border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl'}
      rounded-xl p-8 transition
      min-h-[28rem] flex flex-col justify-between
    `.trim();

    card.innerHTML = `
      <h3 class="text-xl font-bold mb-4">${pkg.title}</h3>
      <div class="text-4xl font-bold text-purple-600 mb-6">${pkg.price}</div>
      <ul class="space-y-4 mb-6">${pkg.features.map(f => `<li>${f}</li>`).join('')}</ul>
      <a href="#contact" class="block w-full text-center bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-full font-medium transition duration-300">${pkg.button}</a>
      <p class="mt-4 text-sm text-center text-gray-500 dark:text-gray-400">${pkg.note}</p>
    `;

    if (isPopular) {
      const badge = document.createElement('div');
      badge.className = 'absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold px-4 py-1 rounded-bl-lg rounded-tr-lg z-10';
      badge.textContent = 'Most Popular';
      card.appendChild(badge);
    }

    packageGrid.appendChild(card);
  });
}

// ---------- Topic Tabs ----------
document.querySelectorAll('#packageTabs .tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const topicKey = btn.textContent.trim().toLowerCase().match(/[a-z]+/g).join('');
    activeTopic = topicKey;
    currentIndex = 0;

    renderPortfolio(topicKey, true);
    renderPackages(topicKey);

    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    btn.scrollIntoView({ behavior: 'smooth', inline: 'center' });
  });
});
