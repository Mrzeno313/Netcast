var header = document.querySelector("header");
var topbar = document.getElementById("topbar");
var icon = document.getElementById("icon")
var hrr = document.getElementById("hrr")

function add_class_on_scroll() {
    topbar.classList.add("d-none")

    header.style.marginTop = '-57px';
    header.classList.remove("pleft")
    
    icon.classList.remove("d-none")
    
    hrr.classList.remove("leftright")
}

function remove_class_on_scroll() {
    topbar.classList.remove("d-none")
    
    icon.classList.add("d-none")

    header.classList.add("pleft")

    hrr.classList.add("leftright")

    header.style.marginTop = '36px';
}


window.addEventListener('scroll', function(){ 
    scrollpos = window.scrollY;

    if(scrollpos > 50){
        add_class_on_scroll();
    }
    else {
        remove_class_on_scroll();
    }
    console.log(scrollpos)
});

function dnone(id){
    document.getElementById(id).style.display = 'none';
}
        
         
//  <!-- Initialize Swiper -->
 var swiper = new Swiper(".CTSwiper", {
         slidesPerView: 6,
         spaceBetween: 30,
         loop: true,
         loopFillGroupWithBlank: true,
         pagination: {
         el: ".swiper-pagination",
         clickable: true,
         },
         navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
         },
         // Responsive breakpoints
         breakpoints: {
         // when window width is >= 200px
         200: {
         slidesPerView: 1,
         spaceBetween: 10
         },
         // when window width is >= 320px
         320: {
         slidesPerView: 2,
         spaceBetween: 20
         },
         // when window width is >= 480px
         480: {
         slidesPerView: 3,
         spaceBetween: 30
         },
         // when window width is >= 640px
         640: {
         slidesPerView: 4,
         spaceBetween: 30
         },
         // when window width is >= 1000px
         1000: {
         slidesPerView: 6,
         spaceBetween: 30
         },
         }
 });

document.getElementById("playPause").onclick = () => {
if (document.getElementById("playPause").getAttribute("state") === 'pause') {
document.getElementById("playPause").setAttribute("state", "play");
document.getElementById("playPause").innerHTML = '<i class="fas fa-pause"></i>';
} else if (document.getElementById("playPause").getAttribute("state") === 'play') {
document.getElementById("playPause").setAttribute("state", "pause");
document.getElementById("playPause").innerHTML = '<i class="fas fa-play"></i>';
}
};