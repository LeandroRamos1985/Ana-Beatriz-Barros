
document.getElementById('year').textContent=new Date().getFullYear();
const menuBtn=document.querySelector('.menu-btn');
const menu=document.querySelector('.mobile-menu');
const closeBtn=document.querySelector('.menu-close');
let lastFocus=null;
function openMenu(){lastFocus=document.activeElement;menu.hidden=false;menuBtn.setAttribute('aria-expanded','true');document.body.style.overflow='hidden';closeBtn.focus()}
function closeMenu(){menu.hidden=true;menuBtn.setAttribute('aria-expanded','false');document.body.style.overflow='';lastFocus?.focus()}
menuBtn?.addEventListener('click',()=>menu.hidden?openMenu():closeMenu());
closeBtn?.addEventListener('click',closeMenu);
menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!menu.hidden)closeMenu()});
document.addEventListener('keydown',e=>{
  if(e.key!=='Tab'||menu.hidden)return;
  const f=[...menu.querySelectorAll('a[href],button:not([disabled])')];
  if(!f.length)return;const first=f[0],last=f[f.length-1];
  if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}
  else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const vid=document.querySelector('.hero-video'),toggle=document.querySelector('.video-toggle');
toggle?.addEventListener('click',()=>{if(vid.paused){vid.play();toggle.textContent='Pausar movimento';toggle.setAttribute('aria-pressed','false')}else{vid.pause();toggle.textContent='Retomar movimento';toggle.setAttribute('aria-pressed','true')}});
document.querySelectorAll('[data-track]').forEach(el=>el.addEventListener('click',()=>window.dispatchEvent(new CustomEvent('site:conversion',{detail:{event:el.dataset.track}}))));
