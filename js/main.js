//Header Scroll
let nav = document.querySelector(`.navbar`);
window.onscroll = function(){
    if(document.documentElement.scrollTop>50){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}

// Nav Hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})

// Section Swiper slider
const swiper = new Swiper('.mySwiper', {
    direction: 'vertical',
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
  
   autoplay:{
    delay:3500,
   },
  });
//   counter
document.addEventListener("DOMContentLoaded", () =>{
    function counter(id, start,end, duration){
        let obj = document.getElementById(id),
        current = start,
        range = end- start,
        increment = end > start ? 1 : -1;
        step = Math.abs(Math.floor(duration/range));
        timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current === end){
                clearInterval(timer);
            }
        } , step);

    }
    counter("count1" , 0, 11,4000);
    counter("count2" , 0, 12,4000);
    counter("count3" , 0, 10,5000);
    counter("count4" , 0, 3,6000);
})

