document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("darkModeToggle");
  const html = document.documentElement;

  if (localStorage.getItem("theme") === "dark") {
    html.classList.add("dark");
  } else if (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    html.classList.add("dark");
  }

  if (toggle) {
    toggle.addEventListener("click", () => {
      html.classList.toggle("dark");
      localStorage.setItem("theme", html.classList.contains("dark") ? "dark" : "light");
    });
  }
});


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
  const modalImg = document.getElementById('modalImg');

  // 💫 Add transition styles once
  modalImg.classList.add('transition-all', 'duration-300', 'ease-in-out');

  
    let currentImageIndex = 0;
    let currentImageList = [];

    const imageModal = document.getElementById('imageModal');

    closeBtn.addEventListener('click', closeImageModal);

  const topics = {
    portraits: {
      images: Array.from({ length: 15 }, (_, i) => `images/portraits/Portrait_${i + 1}.webp`),
      packages: [
        {
          title: 'Mini Portrait Session',
          price: '200 zł',
          features: ['40 mins, outdoor or indoor', '15 professionally edited photos'],
          button: 'Book Portraits',
          note: 'Includes online preview gallery'
        },
        {
          title: 'Standard Portrait',
          price: '300 zł',
          features: ['1 hour session', '30 edited photos', 'Outfit changes allowed'],
          button: 'Book Portraits',
          note: 'USB delivery available'
        },
        {
          title: 'Deluxe Portrait Experience',
          price: '500 zł',
          features: ['2 hours, multiple locations', '50+ edited photos', 'Custom background and lighting'],
          button: 'Book Portraits',
          note: 'Perfect for portfolios or branding'
        }
      ]
    },
    
    concerts: {
      images: [], // add your concert images path if available
      packages: [
        {
          title: 'Mini Gig',
          price: '100 zł',
          features: ['30 mins coverage', '20 edited photos'],
          button: 'Book Concert',
          note: ''
        },
        {
          title: 'Standard Concert',
          price: '400 zł',
          features: ['Full set (1–2 hrs)', '50+ photos, crowd + artist'],
          button: 'Book Concert',
          note: ''
        },
        {
          title: 'Tour Premium',
          price: '1000 zł',
          features: ['Full event coverage', '100+ photos'],
          button: 'Book Concert',
          note: ''
        }
      ]
    },

    sports: {
      images: [], // add sports-related images
      packages: [
        {
          title: 'Basic Game',
          price: '150 zł',
          features: ['Half‑match coverage', '10–15 action shots'],
          button: 'Book Sports',
          note: ''
        },
        {
          title: 'Full Game',
          price: '300 zł',
          features: ['Full match coverage', '30+ images, team photo'],
          button: 'Book Sports',
          note: ''
        },
        {
          title: 'Tournament Day',
          price: '800 zł',
          features: ['Up to 6 hrs', '80+ images, teams + details'],
          button: 'Book Sports',
          note: ''
        }
      ]
    },

    camps: {
      images: [], // add camp-themed images
      packages: [
        {
          title: 'Quick Visit',
          price: '150 zł',
          features: ['2 hrs, candid & group', '30 edited shots'],
          button: 'Book Camp',
          note: ''
        },
        {
          title: 'Half‑Day Camp',
          price: '400 zł',
          features: ['4 hrs, activities + portraits', '70+ images'],
          button: 'Book Camp',
          note: ''
        },
        {
          title: 'Camp Full Story',
          price: '2500 zł',
          features: ['Full/multi‑day coverage', '200+ photos'],
          button: 'Book Camp',
          note: ''
        }
      ]
    },

    weddings: {
      images: Array.from({ length: 12 }, (_, i) => `images/wedding/Wedding_${i + 1}.webp`),
      packages: [
        {
          title: 'Ceremony Only',
          price: '1000 zł',
          features: ['4 hrs, ceremony + groups', '100 photos + USB drive'],
          button: 'Book Wedding',
          note: ''
        },
        {
          title: 'Full Day',
          price: '1800 zł',
          features: ['8 hrs, all‑day story', '200 photos + USB drive'],
          button: 'Book Wedding',
          note: ''
        },
        {
          title: 'Deluxe Wedding',
          price: '2500 zł',
          features: ['10 hrs, full coverage', '300 photos + USB drive'],
          button: 'Book Wedding',
          note: ''
        },
        {
          title: 'Pre‑Wedding / Engagement Mini Session',
          price: '400 zł',
          features: ['1 hr, 20 photos + USB drive'],
          button: 'Book Engagement',
          note: ''
        }
      ]
    },

    engagements: {
      images: [], // add engagement images
      packages: [
        {
          title: 'Pre‑Wedding / Engagement Mini Session',
          price: '400 zł',
          features: ['1 hr, 20 photos + USB drive'],
          button: 'Book Engagement',
          note: ''
        },
        {
          title: 'Pre‑Wedding / Engagement Mini Session',
          price: '400 zł',
          features: ['1 hr, 20 photos + USB drive'],
          button: 'Book Engagement',
          note: ''
        },
        {
          title: 'Pre‑Wedding / Engagement Mini Session',
          price: '400 zł',
          features: ['1 hr, 20 photos + USB drive'],
          button: 'Book Engagement',
          note: ''
        }
      ]
    },

    school: {
      images: [], // add school/graduation images
      packages: [
        {
          title: 'Grad Portrait',
          price: '150 zł',
          features: ['30 mins, 15 edited shots'],
          button: 'Book Graduation',
          note: ''
        },
        {
          title: 'Prom Night',
          price: '400 zł',
          features: ['2–3 hrs, red carpet & group', '100+ pictures + USB drive'],
          button: 'Book Graduation',
          note: ''
        },
        {
          title: 'School Day Event',
          price: '1000 zł',
          features: ['6 hrs, group photos & activities', '150+ images + USB drive'],
          button: 'Book Graduation',
          note: ''
        }
      ]
    },

    family: {
      images: [], // add family/kids images
      packages: [
        {
          title: 'Mini Family Shoot',
          price: '250 zł',
          features: ['30 mins, 20 photos'],
          button: 'Book Family',
          note: ''
        },
        {
          title: 'Full Family',
          price: '500 zł',
          features: ['80 mins, 30 photos + USB drive', 'Outdoor or at home'],
          button: 'Book Family',
          note: ''
        },
        {
          title: 'Birthday Package',
          price: '700 zł',
          features: ['2 hrs, 50+ photos + USB drive'],
          button: 'Book Family',
          note: ''
        }
      ]
    }
  }

  function renderPortfolio(topicKey) {
    const portfolio = document.getElementById('topicPortfolio');
    portfolio.innerHTML = '';
    const images = topics[topicKey]?.images || [];
    const perBatch = 5;
    let currentIndex = 0;

    const loadMoreWrapper = document.createElement('div');
    loadMoreWrapper.id = 'loadMoreWrapper';
    loadMoreWrapper.className = 'w-full flex justify-center mt-6'; // clean and minimal

    const loadMoreBtn = document.createElement('button');
    loadMoreBtn.id = 'loadMoreBtn';
    loadMoreBtn.className = 'w-full flex justify-center items-center p-4 group';

    loadMoreBtn.innerHTML = `
      <!-- Desktop: SVG Plus Icon -->
      <div class="hidden md:flex justify-center items-center
            w-20 h-20 bg-purple-600 text-white
            rounded-full transform transition 
            hover:scale-110 hover:bg-purple-700 hover:animate-bounce-once shadow-lg">


      <svg xmlns="http://www.w3.org/2000/svg" 
          class="w-8 h-8" fill="none" viewBox="0 0 24 24" 
          stroke="currentColor" stroke-width="1">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </svg>

    </div>


      <!-- Mobile: Text Button -->
      <span class="md:hidden text-white text-lg font-semibold">
        Load More Photos
      </span>
    `;


    loadMoreWrapper.appendChild(loadMoreBtn);


    const noMoreMsg = document.createElement('p');
    noMoreMsg.id = 'noMoreMsg';
    noMoreMsg.className = 'text-center text-gray-500 dark:text-gray-400 mt-4 hidden';
    noMoreMsg.textContent = '🎉 You’ve reached the end of the gallery.';


    function renderNextBatch() {
      const nextBatch = images.slice(currentIndex, currentIndex + perBatch);
      nextBatch.forEach((src, i) => {
        const img = document.createElement('img');
        const trueIndex = currentIndex + i;

        img.src = src;
        img.alt = `Image ${currentIndex + i + 1}`;
        img.className = 'fade-in w-full h-auto rounded-lg shadow-md border-4 border-white dark:border-gray-700 transform hover:scale-105 hover:border-purple-500 transition duration-300';
        img.loading = 'lazy';
        img.width = 1400;
        img.height = 2100;

        // 🧠 Save the true index to the element
        img.dataset.index = trueIndex;

        img.addEventListener('click', (e) => {
          const index = parseInt(e.target.dataset.index);
          openImageModal(index, images);
        });

        portfolio.appendChild(img);

      });

      currentIndex += perBatch;
      portfolio.appendChild(loadMoreWrapper);

      if (currentIndex >= images.length) {
        loadMoreWrapper.remove();
        portfolio.appendChild(noMoreMsg);
        noMoreMsg.classList.remove('hidden');
      }
    }
    renderNextBatch(); // Load initial batch
    loadMoreBtn.addEventListener('click', renderNextBatch); // Attach inside
  }
  


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

      // Inner content (without Most Popular badge)
      card.innerHTML = `
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

      // Add Most Popular badge outside the padded area
      if (isPopular) {
        const badge = document.createElement('div');
        badge.className = 'absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold px-4 py-1 rounded-bl-lg rounded-tr-lg z-10';
        badge.textContent = 'Most Popular';
        card.appendChild(badge);
      }

      packageGrid.appendChild(card);
    });
  }



  // Tab switching
  document.querySelectorAll('#packageTabs .tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const topicKey = btn.textContent.trim().toLowerCase().match(/[a-z]+/g).join('');

      renderPortfolio(topicKey);
      renderPackages(topicKey);

      // Scroll to the packages section
      document.getElementById('portfolio')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      // Update active button styles
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Auto-scroll this button into view horizontally
      btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
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

  // Handle fullscreen image click
  function openImageModal(index, imageArray) {
    if (!imageArray || imageArray.length === 0 || index < 0 || index >= imageArray.length) {
      console.error("Invalid image modal open attempt");
      return;
    }

    currentImageIndex = index;
    currentImageList = imageArray;
    modalImg.src = imageArray[index];
    imageModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    modalImg.onload = () => {
      const isPortrait = modalImg.naturalHeight > modalImg.naturalWidth;
      const isDesktop = window.innerWidth >= 768;

    modalImg.style.width = '';
    modalImg.style.height = '';
    modalImg.style.removeProperty('max-width');
    modalImg.style.removeProperty('max-height');

      if (isDesktop) {
        if (isPortrait) {
          modalImg.style.height = '100vh';
          modalImg.style.width = 'auto';
        } else {
          modalImg.style.width = '100vw';
          modalImg.style.height = 'auto';
        }
      } else {
        modalImg.classList.add('object-contain');
      }
    };

    setTimeout(() => {
      modalImg.classList.remove('opacity-0', 'scale-95');
      modalImg.classList.add('opacity-100', 'scale-100');
    }, 10);
  }


  // Close modal
  function closeImageModal() {
    imageModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }

  // Swipe logic
  let touchStartX = 0, touchStartY = 0;

  imageModal.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  imageModal.addEventListener('touchend', e => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;

    const dx = touchEndX - touchStartX;
    const dy = touchEndY - touchStartY;

    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);

    if (absDx > absDy && absDx > 50) {
      // Swipe Left or Right
      if (dx < 0) showNextImage();
      else showPrevImage();
    } else if (absDy > absDx && dy > 50) {
      // Swipe Down to Close
      closeImageModal();
    }
  }, { passive: true });

  function showNextImage() {
    if (currentImageIndex < currentImageList.length - 1) {
      currentImageIndex++;
      modalImg.src = currentImageList[currentImageIndex];
      modalImg.classList.add('transition-transform', 'duration-200');
    }
  }

  function showPrevImage() {
    if (currentImageIndex > 0) {
      currentImageIndex--;
      modalImg.src = currentImageList[currentImageIndex];
    }
  }

  renderPortfolio('portraits');
  renderPackages('portraits');


});

