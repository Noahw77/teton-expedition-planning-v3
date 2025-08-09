
// Mobile menu
const toggle = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-nav-primary]');
toggle?.addEventListener('click', ()=> nav?.classList.toggle('open'));

// Dropdown (Itineraries)
const dropdown = document.querySelector('[data-dropdown]');
const dropBtn = document.querySelector('[data-dropbtn]');
dropBtn?.addEventListener('click', ()=>{
  const expanded = dropdown.getAttribute('aria-expanded') === 'true';
  dropdown.setAttribute('aria-expanded', String(!expanded));
});
document.addEventListener('click', (e)=>{ if(!dropdown?.contains(e.target)) dropdown?.setAttribute('aria-expanded','false'); });

// In-view animations
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('is-inview'); observer.unobserve(e.target);} });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

// Contact form handling
const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const success = document.getElementById('successMsg');
    const err = document.getElementById('errorMsg');
    const honeypot = document.getElementById('website');
    err?.classList.remove('show');
    success?.classList.remove('show');

    const name = form.querySelector('#name');
    const email = form.querySelector('#email');
    const party = form.querySelector('#party');
    if(honeypot?.value){ return; }

    if(!name.value.trim() || !email.validity.valid || !party.value){
      err?.classList.add('show'); return;
    }
    setTimeout(()=>{ success?.classList.add('show'); form.reset(); }, 400);
  });
}
