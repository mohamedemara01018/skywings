const ul = document.querySelector('header ul');
const iconbtn = document.querySelector('header .btn-icon i')
iconbtn.addEventListener('click', () => {
    ul.classList.toggle('open')
    const isoPen = ul.classList.contains('open');
    iconbtn.setAttribute('class', isoPen ? 'ri-close-line' : 'ri-menu-line')
})

ul.addEventListener('click', () => {
    ul.classList.remove('open')
    iconbtn.setAttribute('class', 'ri-menu-line')
})
console.log(iconbtn)


const scrollRevealOption = {
    distance: '50px',
    duration: 1000,
}

ScrollReveal().reveal(".super-container .container .img", {
    ...scrollRevealOption,
    origin: 'right',

})

ScrollReveal().reveal(".super-container .container .img", {
    ...scrollRevealOption,
    origin: 'right',

})


ScrollReveal().reveal(".super-container .container .content p,.super-container .container .content h1", {
    ...scrollRevealOption,
    origin: 'bottom',
    delay: 400,

})

ScrollReveal().reveal(".super-container .container .content div", {
    ...scrollRevealOption,
    origin: 'bottom',
    delay: 800,
})


ScrollReveal().reveal(".popular .content .inner1", {
    ...scrollRevealOption,
    origin: 'bottom',
    delay: 200,
})


ScrollReveal().reveal(".popular .content .inner2", {
    ...scrollRevealOption,
    origin: 'bottom',
    delay: 500,
})

ScrollReveal().reveal(".popular .content .inner3", {
    ...scrollRevealOption,
    origin: 'bottom',
    delay: 800,
})

ScrollReveal().reveal(".unleash .header  .img", {
    ...scrollRevealOption,
    origin: 'left',
    delay: 200,
})

ScrollReveal().reveal(".unleash .header-right h1", {
    ...scrollRevealOption,
    origin: 'bottom',
    delay: 500,
})


ScrollReveal().reveal(".unleash .header-right .paragraph", {
    ...scrollRevealOption,
    origin: 'bottom',
    delay: 800,
})





ScrollReveal().reveal(".unleash .header-right .btn", {
    ...scrollRevealOption,
    origin: 'bottom',
    delay: 1100,
})

ScrollReveal().reveal(".discover .footer ", {
    ...scrollRevealOption,
    origin: 'bottom',
    delay: 150,
})

const swiper = new Swiper(".swiper", {
    loop: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    }
});
