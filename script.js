// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      e.preventDefault();
      const id = a.getAttribute('href');
      const el = document.querySelector(id);
      if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });
  
  // IntersectionObserver to reveal .fade-up sections and trigger skill bars
  const fadeEls = document.querySelectorAll('.fade-up');
  const observer = new IntersectionObserver((entries, obs)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
  
        // If section contains skill-fill, animate widths
        const fills = entry.target.querySelectorAll('.skill-fill');
        fills.forEach(fill=>{
          const pct = fill.getAttribute('data-fill') || '70';
          setTimeout(()=> fill.style.width = pct + '%', 150);
        });
  
        obs.unobserve(entry.target);
      }
    });
  },{threshold: 0.18});
  
  fadeEls.forEach(el => observer.observe(el));
  
  // Also reveal hero area skill fills when loaded (in case hero changes)
  window.addEventListener('load', ()=>{
    // animate any skill fills already in view (in case skills are visible)
    document.querySelectorAll('.skill-fill').forEach(fill=>{
      fill.style.width = '0%';
    });
  });
  
  // Contact form (simple client-side demo)
  const contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', e=>{
      e.preventDefault();
      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();
      const msg = contactForm.message.value.trim();
      if(!name || !email || !msg){
        alert('Please complete the form before sending.');
        return;
      }
      // Demo: show a success message (no server)
      contactForm.reset();
      alert('Thanks — your message was sent (demo). I will respond via email.');
    });
  }
  