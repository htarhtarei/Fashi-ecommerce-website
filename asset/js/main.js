//swiper slide 
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    clickable: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
// swiper slide for logos
var swiper = new Swiper(".myLogo", {
    slidesPerView: 5,
    spaceBetween: 80,
    loop: true,
    clickable: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// countdown time
let day = document.querySelector('.day');
hrs = document.querySelector('.hrs');
mins = document.querySelector('.min');
secs = document.querySelector('.sec');



const timeCalculate = setInterval(function() {
    expireDay = new Date("jun30, 2023 2:00:00").getTime();
    currentDay = new Date().getTime();

    differDay = expireDay - currentDay;


    let resday = Math.floor(differDay / (60 * 60 * 24 * 1000));
    resHrs = Math.floor((differDay % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    resMins = Math.floor((differDay % (1000 * 60 * 60)) / (1000 * 60));
    resSecs = Math.floor((differDay % (1000 * 60)) / 1000);

    resHrs >= 10 ? resHrs = `${resHrs}` : resHrs = `0${resHrs}`;
    resMins >= 10 ? resMins = `${resMins}` : resMins = `0${resMins}`;
    resSecs >= 10 ? resSecs = `${resSecs}` : resSecs = `0${resSecs}`;

    day.innerHTML = `${resday}<span class="d-block fs-6 text-muted">DAYS</span>`;
    hrs.innerHTML = `${resHrs} <span class="d-block fs-6 text-muted">HRS</span>`;
    mins.innerHTML = `${resMins} <span class="d-block fs-6 text-muted">MINS</span>`;
    secs.innerHTML = `${resSecs} <span class="d-block fs-6 text-muted">SECS</span>`;

}, 1000);

// scroll up btn

const scrollUpbtn = () => {
    // scroll up btn
    scrollUpBtn = document.querySelector(".scrollUpBtn");
    window.scrollY >= 100 ? scrollUpBtn.classList.add('scrollshow') : scrollUpBtn.classList.remove('scrollshow');
}
window.addEventListener("scroll", scrollUpbtn);