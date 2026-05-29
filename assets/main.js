// ─── Smooth active nav highlight on scroll ───────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function highlightNav() {
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 120;
    if (window.scrollY >= top) current = sec.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === '#' + current
      ? 'var(--yellow)'
      : '';
  });
}

window.addEventListener('scroll', highlightNav, { passive: true });

// ─── Contact form handler ─────────────────────────────────
function handleForm(e) {
  e.preventDefault();
  const name  = document.getElementById('fname').value.trim();
  const email = document.getElementById('femail').value.trim();
  const msg   = document.getElementById('fmsg').value.trim();

  if (!name || !email || !msg) return;

  // Opens the user's mail client with prefilled content
  const subject = encodeURIComponent('Portfolio Enquiry from ' + name);
  const body    = encodeURIComponent(
    'Hi Biswajit,\n\n' + msg + '\n\nFrom: ' + name + '\nEmail: ' + email
  );
  window.location.href = 'mailto:biswajibehura2005@gmail.com'
    + '?subject=' + subject + '&body=' + body;
}

// ─── Fade-in on scroll (lightweight) ─────────────────────
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(
  '.skill-card, .proj-card, .exp-card, .cert-card, .stat-box'
).forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(16px)';
  el.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
  observer.observe(el);
});
