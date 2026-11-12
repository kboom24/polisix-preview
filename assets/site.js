/* Polisix site: mobile menu + draft-only contact form. Nothing is sent anywhere. */
(function(){
  var b=document.querySelector('.nav .burger'), m=document.getElementById('mnav');
  if(b&&m){
    var c=m.querySelector('.mclose');
    function open(){m.classList.add('open');b.setAttribute('aria-expanded','true');document.body.style.overflow='hidden';(m.querySelector('a')||c).focus();}
    function close(){m.classList.remove('open');b.setAttribute('aria-expanded','false');document.body.style.overflow='';b.focus();}
    b.addEventListener('click',open); c.addEventListener('click',close);
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&m.classList.contains('open'))close();});
  }
  var f=document.getElementById('partner-form');
  if(f){
    f.addEventListener('submit',function(e){
      e.preventDefault();
      var s=document.getElementById('form-status');
      if(!f.checkValidity()){f.reportValidity();return;}
      s.textContent='Draft site: this form is not connected, so nothing was sent. When the site launches, this message will confirm that your inquiry was received.';
      s.classList.add('show'); s.focus();
    });
  }
  /* console demo: segmented range buttons (visual only) */
  document.querySelectorAll('[data-seg]').forEach(function(g){
    g.addEventListener('click',function(e){var t=e.target.closest('button'); if(!t) return;
      g.querySelectorAll('button').forEach(function(x){x.setAttribute('aria-pressed',x===t?'true':'false');});});
  });
})();
