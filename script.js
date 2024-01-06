const menuIcon = document.querySelector('.menu');
const navLinks = document.querySelector('.center-nav');
      
menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('show');
    
});


const terms = ["developer.", "data analyst.", "AI engineer.", "web designer.", "data scientist." ,"software engineer."];
let index = 0;
let currentTerm = terms[index];
let charIndex = 0;

function type() {
    const typingElement = document.getElementById('typing-text');
    typingElement.innerText = currentTerm.slice(0, charIndex);
    charIndex++;

    if (charIndex > currentTerm.length) {
        charIndex = 0;
        index = (index + 1) % terms.length;
        currentTerm = terms[index];
        setTimeout(type, 1000); 
    } else {
        setTimeout(type, 150);
    }
}

type();



var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
}})

var t2 = gsap.timeline({scrollTrigger:{
    trigger: ".one",
    start: "20% 15%",
    end: "40% 10%",
    scrub: true,
    // markers: true,
}})
var t3 = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "-60% 20%",
    end: "-10% 50%",
    scrub: true,
    // markers: true,
}})

var t4 = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "10% 55%",
    end: "30% 40%",
    scrub: true,
    // markers: true,
}})
var t5 = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "30% 40%",
    end: "60% 50%",
    scrub: true,
    // markers: true,
}})
tl.to("#profile",{
    top: "130%",
    left: "9%",
    width: "20%"
})

t2.to("#rocket", {
    top: "30%",
    left: "60%",
    rotate: "50deg",
    width: "30%"
});

t3.to("#rocket", {
    top: "80%",
    left: "60%",
    rotate: "210deg",
});

t4.to("#rocket", {
    top: "100%",
    left: "30%",
    rotate: "130deg",
    width: "20%"
});
t5.to("#rocket", {
    top: "155%",
    left: "19%",
    rotate: "210deg",
    width: "25%"
});


