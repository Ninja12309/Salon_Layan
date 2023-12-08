
var text = document.querySelector("h1")
    char = text.querySelectorAll("span")
    replacecahr = text.querySelectorAll("span:not([data-feo='.']")

gsap.from("#LuLu",{
    top: -200, // The initial position above the screen
  duration: 3, // Animation duration in seconds
  ease: "power2.out", 
})

gsap.from(".nav2",{
    top: -200, // The initial position above the screen
  duration: 3, // Animation duration in seconds
  ease: "power2.out", 
})
var t1 = gsap.timeline()

t1.set(char,{
    yPercent:-110
})

t1.set(text,{
    // autoAlpha: 1
})
t1.to(char,{
    duration:1,
    yPercent:0,
    stagger:0.05,
    ease:"expo.inOut"
})
t1.to(replacecahr,{
    repeat:-1,
    duration:1,
    yPercent:100,
    ease:"expo.inOut",
    stagger:0.1,
    yoyo: true
})

var controller = new ScrollMagic.Controller()

var scene = new ScrollMagic.Scene({
    triggerElement: ".body2"
})
.setTween("#LuLu",{
    height:"100%",
    width:500,
    top: "80vh",
	left: "60vw",
	opacity: 0.45
})
.addTo(controller);

const mouse = document.querySelector(".mouse");
const body = document.querySelector("body");
const body3 = document.querySelector(".body3");
const body4 = document.querySelector(".body4");
const discount = document.querySelector(".discount");
const discount_h1 = document.querySelector(".discount h1");


body.addEventListener('mousemove', function(e) {
    mouse.style.left = e.clientX + "px";
    mouse.style.top = e.clientY + "px";
});
// discount.addEventListener('mousemove', function(e) {
//     mouse.style.height = "70px";
//     mouse.style.width = "70px";
//     // mouse.style.top = e.clientY + "px";
// });
body3.addEventListener('mousemove', function(e) {
    mouse.style.left = e.clientX + "px";
    mouse.style.top = e.clientY + "px";
    mouse.style.backgroundColor = "black";
});
body4.addEventListener('mousemove', function(e) {
    mouse.style.left = e.clientX + "px";
    mouse.style.top = e.clientY + "px";
    mouse.style.backgroundColor = "white";
});

document.querySelector(".fa-solid").addEventListener("click", function (event) {
    var navInside = document.getElementById("nav_inside_id");

    var currentDisplay = window.getComputedStyle(navInside, null).getPropertyValue("display");

    // Check screen width
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (screenWidth < 480) {
        // Toggle display for small screens
        navInside.style.display = currentDisplay === "none" ? "flex" : "none";

        // Prevent the click event from propagating to the document
        event.stopPropagation();
    }
});

// Add a click event listener to the document
document.addEventListener("click", function (event) {
    var navInside = document.getElementById("nav_inside_id");

    // Check screen width
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    // Check if the clicked element is not inside the navInside element and screen width is less than 450px
    if (screenWidth < 450 && !navInside.contains(event.target)) {
        navInside.style.display = "none";
    }
});
