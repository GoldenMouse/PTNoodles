/*** 
   Hamburgers + Mobile Nav
***/

function openNav() {
    document.querySelector(".nav-mobile").style.maxHeight = "100vh";
    document.querySelector(".hamburger").removeEventListener("click", openNav);
    document.querySelector(".hamburger").addEventListener("click", closeNav);
}

function closeNav() {
    document.querySelector(".nav-mobile").style.maxHeight = "0";
    document.querySelector(".hamburger").removeEventListener("click", closeNav);
    document.querySelector(".hamburger").addEventListener("click", openNav);
}

// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
// On click
/** */
hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("change");
    openNav();
});


/***
   Sub Nav Button Effects 
***/


/* Click on Menus */
document.querySelector("#navs__link--menus").addEventListener("click", function(){
  // clear nav div and insert new navs
  document.querySelector(".navs--menus").classList.remove("hidden");
  document.querySelector("#main-navs").classList.add("hidden");
  
  document.querySelector(".navs--menus").classList.remove("animated", "slideInRight");
  document.querySelector(".navs--menus").offsetWidth;
  document.querySelector(".navs--menus").classList.add("animated", "slideInRight");
});

/* Click on Back Arrow */
document.querySelector(".back-arrow").addEventListener("click", function(){
  // clear nav div and insert new navs
  document.querySelector(".navs--menus").classList.add("hidden");
  document.querySelector("#main-navs").classList.remove("hidden");
  
  
  document.querySelector("#main-navs").classList.remove("animated", "slideInLeft");
  document.querySelector("#main-navs").offsetWidth;
  document.querySelector("#main-navs").classList.add("animated", "slideInLeft");
});