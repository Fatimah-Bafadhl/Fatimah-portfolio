/* ===========================================
   SCREENSHOT LIGHTBOX
   =========================================== */
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
let currentGroup = [];
let currentIndex = 0;

function collectGroup(groupEl) {
  return Array.from(groupEl.querySelectorAll('img')).map((img) => img.src);
}

document.querySelectorAll('[data-lightbox-group]').forEach((groupEl) => {
  const buttons = Array.from(groupEl.querySelectorAll('.carousel-item'));
  buttons.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      currentGroup = collectGroup(groupEl);
      currentIndex = i;
      openLightbox();
    });
  });
});

function openLightbox() {
  if (!currentGroup.length) return;
  lightboxImg.src = currentGroup[currentIndex];
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
}

function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
}

function stepLightbox(delta) {
  currentIndex = (currentIndex + delta + currentGroup.length) % currentGroup.length;
  lightboxImg.src = currentGroup[currentIndex];
}

document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
document.getElementById('lightbox-prev').addEventListener('click', () => stepLightbox(-1));
document.getElementById('lightbox-next').addEventListener('click', () => stepLightbox(1));
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });

document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') stepLightbox(-1);
  if (e.key === 'ArrowRight') stepLightbox(1);
});

/* ===========================================
   NAV — highlight the section in view
   =========================================== */
const navLinks = Array.from(document.querySelectorAll('.wing-nav a'));
const sections = navLinks
  .map((link) => document.getElementById(link.getAttribute('href').slice(1)))
  .filter(Boolean);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  },
  { rootMargin: '-40% 0px -50% 0px' }
);

sections.forEach((section) => observer.observe(section));
