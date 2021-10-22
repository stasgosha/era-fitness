$('.workers__cards--slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl:true,
    arrows:true,
    prevArrow:'<button type="button" class="slick-prev"><img src="images/arrow-slider-prev.svg" alt="arrow previous"></button>',
    nextArrow:'<button type="button" class="slick-next"><img src="images/arrow-slider-next.svg" alt="arrow next"></button>',
  });






  const header = document.querySelector('.header'),
        headerWrapper = document.querySelector('.header__wrapper');



  window.addEventListener('scroll', () => {
    if(window.pageYOffset > 20){
        header.classList.add('active');
        headerWrapper.classList.add('active');
    }else{
        header.classList.remove('active');
        headerWrapper.classList.remove('active');
    }
  });