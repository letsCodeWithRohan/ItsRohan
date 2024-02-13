let btn = document.querySelector('.menu');
let tl = gsap.timeline();
let currentScrollY = 50;

// Megnatic Code
var magnets = document.querySelectorAll('.magnetic')
var strength = 50

magnets.forEach((magnet) => {
    magnet.addEventListener('mousemove', moveMagnet);
    magnet.addEventListener('mouseout', function (event) {
        TweenMax.to(event.currentTarget, 1, { x: 0, y: 0, ease: Power4.easeOut })
    });
});

function moveMagnet(event) {
    var magnetButton = event.currentTarget
    var bounding = magnetButton.getBoundingClientRect()

    //console.log(magnetButton, bounding)

    TweenMax.to(magnetButton, 1, {
        x: (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * strength,
        y: (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * strength,
        ease: Power4.easeOut
    })

    //magnetButton.style.transform = 'translate(' + (((( event.clientX - bounding.left)/(magnetButton.offsetWidth))) - 0.5) * strength + 'px,'+ (((( event.clientY - bounding.top)/(magnetButton.offsetHeight))) - 0.5) * strength + 'px)';
}
//megnet Over

var tl2 = gsap.timeline({scrollTrigger:{
    trigger : '.page2',
    start: '50% 50%',
    end: '100% 50%',
    scrub: 2,
    markers: true
}})
tl2
.to('.leftMover',{
    x: '-6vw'
})
.to('.rightMover',{
    x: '6vw'
})

btn.addEventListener('click', function () {
    btn.querySelector('h2').classList.toggle('hide');
    btn.querySelector('h3').classList.toggle('hide');
    document.querySelector('aside').classList.toggle('hide');
})
window.addEventListener('scroll',() => {
    if(scrollY < currentScrollY){
        btn.classList.add('disabled');
    }
    else{
        btn.classList.remove('disabled');
    }
})

let ct = 8;
for (let index = 0; index < 4; index++) {
    tl.
to('.preloader .inner p',{
        y: `-${ct}vh`,
        duration: 0.5
    })
    ct+=8;
}
tl
.to('.preloader',{
    y: '-100vh',
    borderRadius : '35%',
    duration: 1
})

let currentScroll = 0;
    let isScrollingDown = true;
    let tween = gsap.to(".marquee_part",{
      xPercent: -100,
      repeat: -1,
      duration: 4,
      ease: "linear"
    }).totalProgress(0.5);

    gsap.set(".marquee_inner",{xPercent: -50});
    window.addEventListener('scroll',() => {
      if(window.pageYOffset > currentScroll){
        isScrollingDown = true;
      }
      else{
        isScrollingDown = false;
      }

      gsap.to(tween,{
        timeScale: isScrollingDown ? 1 : -1,
      });
      currentScroll = window.pageYOffset;
    })