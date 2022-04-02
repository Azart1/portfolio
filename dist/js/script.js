const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElement = document.querySelector('.menu__close');
const counters = document.querySelectorAll('.skills__count');  
const bars = document.querySelectorAll('.skills__bar');    

      hamburger.addEventListener('click', () => {
          menu.classList.add('active');
      })
      closeElement.addEventListener('click', () => {
        menu.classList.remove('active');
    })

 counters.forEach((item, i) => {
    bars[i].style.width = item.innerHTML;
 })