$(function() {
  
    var header = $(".menu");
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
  
      if (scroll >= 900) {
        header.addClass("menuScroll");
      } else {
        header.removeClass("menuScroll");

      }
    });
  })
  const btnMobile = document.getElementById('btn-mobile');
  
  function toggleMenu(event) {
    
    if (event.type === 'touchstart') event.preventDefault();
  
  
    const nav = document.getElementById('nav');
       const header2 = document.getElementById('header');
  
    nav.classList.toggle('active');
  
  
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
  
  
      event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
      event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
  }
  
  btnMobile.addEventListener('click', toggleMenu);
  btnMobile.addEventListener('touchstart', toggleMenu);
  