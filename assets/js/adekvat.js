const navbar = document.querySelector('.navbar-nav');
const navbarToggler = document.querySelector('.navbar-toggler');
const ripple = document.querySelector('.popup-youtube')
let mfp;
navbarToggler.addEventListener('click', () => {
    navbar.classList.toggle('fActive')
})
console.log(ripple)
ripple.addEventListener('click', () => {
    setTimeout(() => {
        mfp = document.querySelector('.mfp-iframe')
        console.log(mfp);
    }, 10);
    setTimeout(() => {
        mfp.src = './images/vid.mp4'

    }, 80);
})

const faq = document.querySelector('#faq');
const shop = document.querySelector('#shop');


shop.onmousemove = (e) => {
    let x = e.clientX;
    let y = e.clientY;
    shop.style.backgroundSize = 'unset';
    shop.style.backgroundPosition = `${-x/10}% ${-y/5}%`
}

shop.onmouseleave = (e) => {
    shop.style.backgroundSize = 'cover';
}

faq.onmousemove = (e) => {
    let x = e.clientX;
    let y = e.clientY;
    faq.style.backgroundSize = 'unset';
    faq.style.backgroundPosition = `${-x/10}% ${-y/5}%`
}

faq.onmouseleave = (e) => {
    faq.style.backgroundSize = 'cover';
}

// const arrOfSec = [document.querySelector('#home'), document.querySelector('#services'), document.querySelector('#video'), document.querySelector('#shop'), document.querySelector('#testimonials'), document.querySelector('#faq')]
// let orderedEl=0
// document.body.onmousewheel = function (e) {
//     if (window.innerWidth > 1200) {
//         if (e.deltaY >0) {
//             orderedEl++;
//             window.scroll({
//                 top:arrOfSec[orderedEl].offsetTop,
//                 left:0,
//                 behavior:'smooth'
//             })
//         }
//         else{
//             orderedEl
//         }
//     }
// }