const hamburger = document.querySelector('.hamburger');
const line = document.querySelectorAll('.line');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('.logo');
const headline = document.querySelector('.headline');
const info = document.querySelector('.info');
const nav = document.querySelector('nav');
const box = document.querySelector('.box');


hamburger.addEventListener('click', () => {
    // line.classList.toggle('open');
    //const line = hamburger.childNodes.entries.
    //console.log(line);
    //hamburger.children.forEach(c => c.classList.toggle('open'));
    line.forEach(l => l.classList.toggle('open'));
    logo.firstElementChild.classList.toggle('open');
    navLinks.classList.toggle('open');
    links.forEach(link =>{
        link.classList.toggle("fade");
    });
});

links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        links.forEach(link =>{
            link.classList.remove("fade");
        });
    });
});

logo.addEventListener('click', () => {
    navLinks.classList.remove('open');
});



const tl = new TimelineMax();

tl.fromTo(
    hero,
    1,
    {height: "0%"},
    {height: "80%", ease: Power2.easeInOut})

.fromTo(
    hero,
    1.2,
    {width: "100%"},
    {width: "80%", ease: Power2.easeInOut})

.fromTo(
    slider,
    1.2,
    {x:"-100%"},
    {x: "0%", ease: Power2.easeInOut},
    "-=1.2")

.fromTo(
    nav,
    1.2,
    {x:"-100%"},
    {x: "0%", ease: Power2.easeInOut},
    "-=1.2")


.fromTo(
    logo,
    0.5,
    {opacity: 0, x: 30},
    {opacity: 1, x: 0},
    "-=0.5")

.fromTo(
    hamburger,
    1,
    {opacity: 0, x: 30},
    {opacity: 1, x: 0},
    "-=0.5")

.fromTo(
    headline,
    0.5,
    {opacity: 0, x: 30},
    {opacity: 1, x: 0},
    "-=0.5")

.fromTo(
    info,
    0.5,
    {opacity: 0, x: 30},
    {opacity: 1, x: 0},
    "-=0.5")

/*
function scrollAppear(){
    var boxPosition = box.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 2;
    if(boxPosition < screenPosition){
        box.classList.add('box-appear');
    }
};

window.addEventListener('scroll', scrollAppear);
*/

$('.skill-per').each(function(){
    var $this = $(this);
    var per = $this.attr('per');
    $this.css("width",per+'%');
    $({animatedValue: 0}).animate({animatedValue: per},{
      duration: 1000,
      step: function(){
          /*if(per == 100){
              console.log(this.animatedValue);
          }*/
        $this.attr('per', Math.floor(this.animatedValue) + '%');
      },
      complete: function(){
        $this.attr('per', Math.floor(this.animatedValue) + '%');
      }
    });
});

  

new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 1
}).mount();