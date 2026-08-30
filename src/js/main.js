import { projects } from '../data/projects.js';
import { certificates } from '../data/certificates.js';

// Default is always light mode unless explicitly toggled to dark by the user
(function() {
  const savedTheme = localStorage.getItem('momin-theme');
  if (savedTheme === 'dark') {
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
  initStackedCardsScrollEffect();
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
  const lightboxDesc = document.getElementById('lightbox-desc');
  const lightboxClose = document.getElementById('lightbox-close');

  if (!lightbox || !lightboxImg) return;

  const closeLightbox = () => {
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  document.querySelectorAll('[data-cert-id]').forEach(card => {
    card.addEventListener('click', (e) => {
      // Don't hijack if user clicked an explicit external link
      if (e.target.closest('a[target="_blank"]')) return;

      const certId = card.getAttribute('data-cert-id');
      const cert = (certificates || []).find(c => c.id === certId);
      if (cert) {
        lightboxImg.src = cert.image;
        lightboxImg.alt = cert.title || 'Certificate';
        if (lightboxCaption) {
          lightboxCaption.textContent = `${cert.title} — ${cert.issuer} (${cert.date || ''})`;
        }
        if (lightboxDesc) {
          lightboxDesc.textContent = cert.description || '';
        }
        lightbox.classList.add('active');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }
    });
  });

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
   5. PROJECT CASE STUDY & DETAILS MODAL
   -------------------------------------------------------------------------- */
function initProjectModals() {
  const modal = document.getElementById('project-modal');
  if (!modal) return;

  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalTagline = document.getElementById('modal-tagline');
  const modalCategory = document.getElementById('modal-category');
  const modalPwdWrap = document.getElementById('modal-pwd-wrap');
  const modalPwdVal = document.getElementById('modal-pwd-val');
  const modalDesc = document.getElementById('modal-desc');
  const modalDeliverablesSection = document.getElementById('modal-deliverables-section');
  const modalDeliverables = document.getElementById('modal-deliverables');
  const modalCaseSection = document.getElementById('modal-case-section');
  const modalCaseHeading = document.getElementById('modal-case-heading');
  const modalCompliance = document.getElementById('modal-compliance');
  const modalLiveBtn = document.getElementById('modal-live-btn');
  const modalGithubBtn = document.getElementById('modal-github-btn');
  const modalClose = document.getElementById('modal-close');

  const closeModal = () => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  const openProjectModal = (projId) => {
    const proj = (projects || []).find(p => p.id === projId);
    if (!proj) return;

    if (modalImg) {
      modalImg.src = proj.image || '';
      modalImg.alt = proj.title || 'Project Preview';
    }
    if (modalTitle) modalTitle.textContent = proj.title || '';
    if (modalTagline) {
      if (proj.tagline) {
        modalTagline.textContent = proj.tagline;
        modalTagline.style.display = 'block';
      } else {
        modalTagline.style.display = 'none';
      }
    }
    if (modalCategory) {
      modalCategory.textContent = proj.categoryLabel || 'Case Study';
    }

    // Password Indicator
    if (modalPwdWrap && modalPwdVal) {
      if (proj.password) {
        modalPwdVal.textContent = proj.password;
        modalPwdWrap.style.display = 'inline-flex';
      } else {
        modalPwdWrap.style.display = 'none';
      }
    }

    if (modalDesc) {
      modalDesc.textContent = proj.description || '';
    }

    // Deliverables list
    if (modalDeliverables) {
      modalDeliverables.innerHTML = '';
      if (proj.deliverables && proj.deliverables.length) {
        proj.deliverables.forEach(d => {
          const li = document.createElement('li');
          li.textContent = d;
          modalDeliverables.appendChild(li);
        });
        if (modalDeliverablesSection) modalDeliverablesSection.style.display = 'block';
      } else {
        if (modalDeliverablesSection) modalDeliverablesSection.style.display = 'none';
      }
    }

    // Case metrics / Problem-Strategy-Result / GMC Compliance
    if (modalCompliance && modalCaseSection) {
      if (proj.problem || proj.strategy || proj.result) {
        let html = '';
        if (proj.problem) html += `<div class="case-item"><strong class="case-label">Problem / Challenge:</strong><p>${proj.problem}</p></div>`;
        if (proj.strategy) html += `<div class="case-item"><strong class="case-label">Strategy & Implementation:</strong><p>${proj.strategy}</p></div>`;
        if (proj.result) html += `<div class="case-item"><strong class="case-label">Impact & Result:</strong><p>${proj.result}</p></div>`;
        modalCompliance.innerHTML = html;
        if (modalCaseHeading) modalCaseHeading.textContent = 'Case Study Breakdown';
        modalCaseSection.style.display = 'block';
      } else if (proj.gmcCompliance) {
        modalCompliance.innerHTML = `<div class="case-item"><p>${proj.gmcCompliance}</p></div>`;
        if (modalCaseHeading) modalCaseHeading.textContent = 'GMC / Merchant Compliance';
        modalCaseSection.style.display = 'block';
      } else {
        modalCaseSection.style.display = 'none';
      }
    }

    // Action buttons
    if (modalLiveBtn) {
      if (proj.url) {
        modalLiveBtn.href = proj.url;
        modalLiveBtn.style.display = 'inline-flex';
        const spanText = modalLiveBtn.querySelector('span:first-child');
        if (spanText) {
          if (proj.category === 'app' || proj.id === 'fair-prices') {
            spanText.textContent = 'Download APK (Android)';
          } else {
            spanText.textContent = 'Open Live Website';
          }
        }
      } else {
        modalLiveBtn.style.display = 'none';
      }
    }

    if (modalGithubBtn) {
      if (proj.githubUrl) {
        modalGithubBtn.href = proj.githubUrl;
        modalGithubBtn.style.display = 'inline-flex';
      } else {
        modalGithubBtn.style.display = 'none';
      }
    }

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  // Attach event listener with delegation / data-project-id check
  document.addEventListener('click', (e) => {
    // If clicking a direct external link on the card, let it open normally
    if (e.target.closest('a[target="_blank"]')) return;

    const trigger = e.target.closest('[data-project-id]');
    if (trigger) {
      // Don't trigger if clicking inside the open modal itself
      if (trigger.closest('#project-modal') && !e.target.closest('[data-project-id]')) return;
      
      const projId = trigger.getAttribute('data-project-id');
      if (projId) {
        e.preventDefault();
        openProjectModal(projId);
      }
    }
  });

  if (modalClose) modalClose.addEventListener('click', closeModal);
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/* --------------------------------------------------------------------------
   6. COPY ACTION WITH TOAST
   -------------------------------------------------------------------------- */
function initCopyActions() {
  document.querySelectorAll('[data-copy]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`Copied: ${textToCopy}`);
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

/* --------------------------------------------------------------------------
   8. SCROLL-DRIVEN STACKED CARDS DYNAMICS
   -------------------------------------------------------------------------- */
function initStackedCardsScrollEffect() {
  const cards = document.querySelectorAll('.visual-stack-card, .stacked-project-card');
  if (!cards.length) return;

  const handleScroll = () => {
    const navbarHeight = 90;

    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const nextCard = cards[index + 1];

      if (nextCard) {
        const nextRect = nextCard.getBoundingClientRect();
        // If next card is sliding over current card
        const overlap = Math.max(0, rect.bottom - nextRect.top);
        if (overlap > 0 && nextRect.top <= (navbarHeight + 120)) {
          const progress = Math.min(1, overlap / rect.height);
          const scale = 1 - (progress * 0.05);
          const brightness = 1 - (progress * 0.08);
          card.style.transform = `scale(${scale})`;
          card.style.filter = `brightness(${brightness})`;
        } else {
          card.style.transform = 'scale(1)';
          card.style.filter = 'none';
        }
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
}


