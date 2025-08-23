// Icons and year
window.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});

// Smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (!href || !href.startsWith('#')) return;
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  });
});

// Modal scrim (no cart)
const scrim = document.getElementById('scrim');
scrim.addEventListener('click', () => {
  const m = document.getElementById('contactModal');
  if (m && m.open) m.close();
});

// FAQ toggle
document.querySelectorAll('.faq-q').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.closest('.faq-item');
    const open = item.classList.toggle('open');
    q.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
});

// Newsletter
document.getElementById('newsletter').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  if (!/.+@.+\..+/.test(email)) return toast('Please enter a valid email');
  e.target.reset(); toast('Subscribed — thank you!');
});

// Contact modal
const contactModal = document.getElementById('contactModal');
document.getElementById('openContact').addEventListener('click', () => { contactModal.showModal(); scrim.classList.add('on'); });
document.getElementById('contactOpen').addEventListener('click', (e) => { e.preventDefault(); contactModal.showModal(); scrim.classList.add('on'); });
contactModal.addEventListener('close', () => scrim.classList.remove('on'));
document.getElementById('sendMsg').addEventListener('click', () => { toast('Message sent'); });

// Toast
const toastEl = document.getElementById('toast');
let toastTimer;
function toast(msg){
  toastEl.textContent = msg; toastEl.classList.add('on');
  clearTimeout(toastTimer); toastTimer = setTimeout(()=>toastEl.classList.remove('on'), 2200);
}

