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
  document.querySelector("#nav-main--menus").classList.remove("hidden");
  document.querySelector("#main-navs").classList.add("hidden");
  
  document.querySelector("#nav-main--menus").classList.remove("animated", "slideInRight");
  document.querySelector("#nav-main--menus").offsetWidth;
  document.querySelector("#nav-main--menus").classList.add("animated", "slideInRight");
});

/* Click on Menus */
document.querySelector("#mobile__links--menus").addEventListener("click", function(){
  // clear nav div and insert new navs
  document.querySelector("#nav-mobile--menus").classList.remove("hidden");
  document.querySelector("#nav-mobile--main").classList.add("hidden");
  
  document.querySelector("#nav-mobile--menus").classList.remove("animated", "slideInRight");
  document.querySelector("#nav-mobile--menus").offsetWidth;
  document.querySelector("#nav-mobile--menus").classList.add("animated", "slideInRight");
});

/* Click on Back Arrow */
document.querySelector("#back-arrow--main").addEventListener("click", function(){
  // clear nav div and insert new navs
  document.querySelector("#nav-main--menus").classList.add("hidden");
  document.querySelector("#main-navs").classList.remove("hidden");
  
  
  document.querySelector("#main-navs").classList.remove("animated", "slideInLeft");
  document.querySelector("#main-navs").offsetWidth;
  document.querySelector("#main-navs").classList.add("animated", "slideInLeft");
});

document.querySelector("#back-arrow--mobile").addEventListener("click", function(){
  // clear nav div and insert new navs
  document.querySelector("#nav-mobile--menus").classList.add("hidden");
  document.querySelector("#nav-mobile--main").classList.remove("hidden");
  
  
  document.querySelector("#nav-mobile--main").classList.remove("animated", "slideInLeft");
  document.querySelector("#nav-mobile--main").offsetWidth;
  document.querySelector("#nav-mobile--main").classList.add("animated", "slideInLeft");
});



/*** 
 * Sticky NavBar 
 * 
****/
// When the user scrolls the page, execute animations
document.getElementById("content").addEventListener("scroll", function(){
    resizeHeader();
});

// Get the navbar
var sidebar = document.querySelector(".sidebar");
var mobileNav = document.querySelector(".sidebar__mobile");
var mobileLogo = document.querySelector(".logo__mobile");
var mobileEmblem = document.querySelector(".emblem__mobile");
var content = document.getElementById("content");

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function resizeHeader() {
    // check if element is visible
    if (mobileNav.offsetParent !== null) {
        if (content.scrollTop >= 100 ) {
           sidebar.style.flexBasis = "5rem";
           mobileLogo.style.display = "none";
           mobileEmblem.style.height = "3.5rem";
           mobileNav.style.justifyContent = "flex-start";
        } else {
           sidebar.style.transition =  "flex-basis 0.5s";
           sidebar.style.flexBasis = "8rem";
           mobileLogo.style.display = "block";
           mobileEmblem.style.height = "5rem";
           mobileNav.style.justifyContent = "center";
        }
    }
}


