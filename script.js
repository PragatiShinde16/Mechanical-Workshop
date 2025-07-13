// script for swiper
new Swiper('.card-wrapper', {
  loop: true,
  spaceBetween: 30,

  // pagination bullet
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //Responsive breapoints
  breakpoints:{
    0:{
        slidesPerview: 1
    },
    768:{
        slidesPerview: 2
    },
    1024:{
        slidesPerview: 3
    },
  }
});

// script for images
document.querySelectorAll('.images img').forEach(ima =>{
    ima.onclick = () =>{
      document.querySelector('.popup-images').style.display = 'block';
      document.querySelector('.popup-images img').src = ima.getAttribute('src')
    }
});
document.querySelector('.popup-images span').onclick = () =>{
    document.querySelector('.popup-images').style.display = 'none';
}