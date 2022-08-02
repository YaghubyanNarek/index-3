const navbar = document.querySelector('.navbar-nav');
const navbarToggler = document.querySelector('.navbar-toggler');
const ripple = document.querySelector('.popup-youtube')
let mfp;

const whitePlay = document.querySelector('.whitePlay');
const forVideoWrapper = document.querySelector('.forVideo-wrapper');
const video = document.querySelector('.videobar');
const closeVideo = document.querySelector('.closeVideo')
whitePlay.addEventListener('click' , function () {
    forVideoWrapper.classList.add('fvw');
    video.play()
})

window.onscroll=()=>{

    if(window.scrollY+100>document.querySelector('#faq').offsetTop){
        document.querySelector('.logo').classList.add('zInd-1')
    }
    else{
        document.querySelector('.logo').classList.remove('zInd-1')
        

    }
    
}
closeVideo.addEventListener('click' , function () {
    forVideoWrapper.classList.remove('fvw');
    video.currentTime = '0';
    video.pause()
})


navbarToggler.addEventListener('click', () => {
    navbar.classList.toggle('fActive')
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



