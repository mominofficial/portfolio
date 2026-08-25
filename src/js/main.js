// Immediate theme check to prevent flash
(function() {
  const savedTheme = localStorage.getItem('momin-theme');
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark-theme');
  } else {
    document.documentElement.classList.remove('dark-theme');
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initNavbar();
  initMobileDrawer();
  initScrollReveals();
  initLightbox();
  initProjectModals();
  initCopyActions();
  initFilterTabs();
});

/* --------------------------------------------------------------------------
   0. DARK / LIGHT THEME TOGGLE
   -------------------------------------------------------------------------- */
function initThemeToggle() {
  const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
  if (!toggleBtns.length) return;

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark-theme');
      localStorage.setItem('momin-theme', isDark ? 'dark' : 'light');
    });
  });
}

/* --------------------------------------------------------------------------
   1. NAVBAR SCROLL EFFECT
   -------------------------------------------------------------------------- */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* --------------------------------------------------------------------------
   2. MOBILE DRAWER
   -------------------------------------------------------------------------- */
function initMobileDrawer() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.toggle('open');
    toggleBtn.classList.toggle('active');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close on link click
  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
      toggleBtn.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

/* --------------------------------------------------------------------------
   3. SCROLL REVEAL (IntersectionObserver)
   -------------------------------------------------------------------------- */
function initScrollReveals() {
  const revealElements = document.querySelectorAll('.fade-in-up');
  if (!revealElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

/* --------------------------------------------------------------------------
   4. CERTIFICATE LIGHTBOX
   -------------------------------------------------------------------------- */
function initLightbox() {
  const lightbox = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');

  if (!lightbox || !lightboxImg) return;

  document.querySelectorAll('[data-cert-id]').forEach(card => {
    card.addEventListener('click', () => {
      const certId = card.getAttribute('data-cert-id');
      const cert = certificates.find(c => c.id === certId);
      if (cert) {
        lightboxImg.src = cert.image;
        lightboxImg.alt = cert.title;
        if (lightboxCaption) {
          lightboxCaption.textContent = `${cert.title} — ${cert.issuer}`;
        }
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
}

/* --------------------------------------------------------------------------
   5. PROJECT CASE STUDY MODAL / DRAWER
   -------------------------------------------------------------------------- */
function initProjectModals() {
  const modal = document.getElementById('project-modal');
  if (!modal) return;

  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalCategory = document.getElementById('modal-category');
  const modalDesc = document.getElementById('modal-desc');
  const modalDeliverables = document.getElementById('modal-deliverables');
  const modalCompliance = document.getElementById('modal-compliance');
  const modalLiveBtn = document.getElementById('modal-live-btn');
  const modalClose = document.getElementById('modal-close');

  document.querySelectorAll('[data-project-id]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      // If clicked element was a direct link to the external site, don't hijack unless intended
      if (e.target.closest('a[target="_blank"]')) return;
      
      const projId = trigger.getAttribute('data-project-id');
      const proj = projects.find(p => p.id === projId);
      if (!proj) return;

      if (modalImg) modalImg.src = proj.image;
      if (modalTitle) modalTitle.textContent = proj.title;
      if (modalCategory) modalCategory.textContent = proj.categoryLabel || 'Case Study';
      if (modalDesc) modalDesc.textContent = proj.description;

      if (modalDeliverables) {
        modalDeliverables.innerHTML = '';
        if (proj.deliverables && proj.deliverables.length) {
          proj.deliverables.forEach(d => {
            const li = document.createElement('li');
            li.textContent = d;
            modalDeliverables.appendChild(li);
          });
        }
      }

      if (modalCompliance) {
        if (proj.gmcCompliance) {
          modalCompliance.textContent = proj.gmcCompliance;
          modalCompliance.parentElement.style.display = 'block';
        } else if (proj.problem) {
          modalCompliance.innerHTML = `<strong>Problem:</strong> ${proj.problem}<br><br><strong>Strategy:</strong> ${proj.strategy}<br><br><strong>Result:</strong> ${proj.result}`;
          modalCompliance.parentElement.style.display = 'block';
        } else {
          modalCompliance.parentElement.style.display = 'none';
        }
      }

      if (modalLiveBtn) {
        if (proj.url) {
          modalLiveBtn.href = proj.url;
          modalLiveBtn.style.display = 'inline-flex';
        } else {
          modalLiveBtn.style.display = 'none';
        }
      }

      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (modalClose) modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
}

/* --------------------------------------------------------------------------
   6. COPY ACTION WITH TOAST
   -------------------------------------------------------------------------- */
function initCopyActions() {
  document.querySelectorAll('[data-copy]').forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`Copied to clipboard: ${textToCopy}`);
      }).catch(() => {
        showToast(`Selected: ${textToCopy}`);
      });
    });
  });
}

export function showToast(message) {
  let toast = document.querySelector('.toast-msg');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

/* --------------------------------------------------------------------------
   7. FILTER TABS (ON WORKS PAGE)
   -------------------------------------------------------------------------- */
function initFilterTabs() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card[data-category]');
  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      projectCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
          card.classList.add('fade-in-up', 'visible');
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}
