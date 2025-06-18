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

document.addEventListener("DOMContentLoaded", () => {
  const topics = {
    portraits: {
      images: Array.from({ length: 15 }, (_, i) => `images/portraits/Portrait_${i + 1}.webp`),
      packages: [
        {
          title: 'Mini Portrait Session',
          price: '200 zł',
          features: ['40 mins, outdoor or indoor', '15 professionally edited photos', 'Online delivery'],
          button: 'Book Portraits',
          note: 'Includes online preview gallery'
        },
        {
          title: 'Standard Portrait',
          price: '300 zł',
          features: ['1 hour session', '30 edited photos', 'Outfit changes allowed'],
          button: 'Book Portraits',
          note: 'USB delivery available'
        },
        {
          title: 'Deluxe Portrait Experience',
          price: '500 zł',
          features: ['2 hours, multiple locations', '50+ edited photos + USB drive', 'Custom background and lighting'],
          button: 'Start Your Custom Quote',
          note: 'Perfect for portfolios or branding'
        }
      ]
    }
  };

  function renderPortfolio(topicKey) {
  const portfolio = document.getElementById('topicPortfolio');
  portfolio.innerHTML = '';
  const images = topics[topicKey]?.images || [];
  const perBatch = 5;
  let currentIndex = 0;

  // Create Load More wrapper & button
  const loadMoreWrapper = document.createElement('div');
  loadMoreWrapper.id = 'loadMoreWrapper';
  loadMoreWrapper.className = 'w-full aspect-[2/3] flex items-center justify-center rounded-lg shadow-md border-4 border-white dark:border-gray-700 bg-purple-600 hover:bg-purple-700 transition duration-300 mt-6';

  const loadMoreBtn = document.createElement('button');
  loadMoreBtn.id = 'loadMoreBtn';
  loadMoreBtn.className = 'w-full h-full flex items-center justify-center text-white text-lg font-semibold';
  loadMoreBtn.textContent = 'Load More Photos';
  loadMoreWrapper.appendChild(loadMoreBtn);

  const noMoreMsg = document.createElement('p');
  noMoreMsg.id = 'noMoreMsg';
  noMoreMsg.className = 'text-center text-gray-500 dark:text-gray-400 mt-4 hidden';
  noMoreMsg.textContent = '🎉 You’ve reached the end of the gallery.';


  function renderNextBatch() {
    const nextBatch = images.slice(currentIndex, currentIndex + perBatch);

    nextBatch.forEach((src, i) => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = `Portrait ${currentIndex + i + 1}`;
      img.className = 'fade-in w-full h-auto rounded-lg shadow-md border-4 border-white dark:border-gray-700 transform hover:scale-105 hover:border-purple-500 transition duration-300';
      img.loading = 'lazy';
      img.width = 1280;
      img.height = 1706;

      portfolio.appendChild(img);
    });

    currentIndex += perBatch;

    // Ensure the button is always last
    portfolio.appendChild(loadMoreWrapper);

    if (currentIndex >= images.length) {
      loadMoreWrapper.remove();
      portfolio.appendChild(noMoreMsg);
      noMoreMsg.classList.remove('hidden');
    }
  }

  // Initial render
  renderNextBatch();

  // Button listener
  loadMoreBtn.addEventListener('click', renderNextBatch);
  }


  function renderPackages(topicKey) {
    const packageGrid = document.getElementById('topicPackages');
    packageGrid.innerHTML = '';

    topics[topicKey]?.packages.forEach((pkg, i) => {
      const isPopular = i === 1;
      const card = document.createElement('div');
      card.className = `relative bg-white dark:bg-gray-800 border ${
        isPopular ? 'border-2 border-purple-600 dark:border-purple-400 shadow-lg -translate-y-2' : 'border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl'
      } rounded-xl p-8 transition`;

      card.innerHTML = `
        ${isPopular ? `<div class="absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold px-4 py-1 rounded-bl-lg rounded-tr-lg">Most Popular</div>` : ''}
        <h3 class="text-xl font-bold mb-4">${pkg.title}</h3>
        <div class="text-4xl font-bold text-purple-600 mb-6">${pkg.price}</div>
        <ul class="space-y-4 mb-6">
          ${pkg.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
        <a href="#contact" class="block w-full text-center bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-full font-medium transition duration-300">
          ${pkg.button}
        </a>
        <p class="mt-4 text-sm text-center text-gray-500 dark:text-gray-400">${pkg.note}</p>
      `;
      packageGrid.appendChild(card);
    });
  }

  // Tab switching
  document.querySelectorAll('#packageTabs .tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const topicKey = btn.textContent.trim().toLowerCase().match(/[a-z]+/g).join('');
      renderPortfolio(topicKey);
      renderPackages(topicKey);
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
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

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        window.scrollTo({ top: target.offsetTop - 100, behavior: 'smooth' });
      }
      document.querySelector('.mobile-menu')?.classList.add('hidden');
    });
  });

  // Active nav on scroll
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

  // ESC to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Click outside modal
  document.getElementById('videoModal')?.addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal();
  });

  // Contact form submit spinner
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

  // Mobile nav toggle
  document.querySelector('.mobile-menu-button')?.addEventListener('click', () => {
    document.querySelector('.mobile-menu')?.classList.toggle('hidden');
  });

  // Dark mode toggle
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

  // Year copyright
  const yearSpan = document.getElementById('copyright-year');
  if (yearSpan) yearSpan.innerHTML = `&copy; ${new Date().getFullYear()}`;

  // Initial load
  renderPortfolio('portraits');
  renderPackages('portraits');
});
