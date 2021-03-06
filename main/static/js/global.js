/*** 
   Hamburgers + Mobile Nav
***/

function openNav() {
    document.querySelector(".nav-mobile").style.maxHeight = "100vh";
    document.querySelector(".hamburger").removeEventListener("click", openNav);
    document.querySelector(".hamburger").addEventListener("click", closeNav);
    document.querySelector("body").style.overflow = "hidden";
}

function closeNav() {
    document.querySelector(".nav-mobile").style.maxHeight = "0";
    document.querySelector(".hamburger").removeEventListener("click", closeNav);
    document.querySelector(".hamburger").addEventListener("click", openNav);
    document.querySelector("body").style.overflow = "visible";
}

var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("change");
    openNav();
});


/***
   SubNav Menu Button Effects 
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
window.addEventListener("scroll", function(){
    resizeHeader();
});

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function resizeHeader() {
    // Get the navbar
    var sidebarMobile = document.querySelector(".sidebar__mobile");
    var mobileNav = document.querySelector(".sidebar__mobile");
    var mobileLogo = document.querySelector(".logo__mobile");
    var mobileEmblem = document.querySelector(".emblem__mobile");
    var content = document.getElementById("content");

    if (window.scrollY >= 100 ) {
       sidebarMobile.style.flexBasis = "5rem";
       sidebarMobile.style.justifyContent= "flex-start";
       sidebarMobile.style.paddingLeft= "1rem";
       mobileLogo.style.display = "none";
       mobileEmblem.style.height = "3.5rem";
    } else {
       sidebarMobile.style.transition =  "flex-basis 0.2s";
       sidebarMobile.style.justifyContent= "center";
       sidebarMobile.style.flexBasis = "6rem";
       sidebarMobile.style.paddingLeft= "0";
       mobileLogo.style.display = "block";
       mobileEmblem.style.height = "4rem";
    }
}

/*** Call Now Btn ***/
var footer_btn = document.querySelector(".footer");
var callnow_btn = document.querySelector(".footer__mobile");
var callnow_close_btn = document.querySelector(".callnow--close");
var callnow_modal = document.querySelector(".modal__callnow"); 

function callnow_open () {
   callnow_modal.style.maxHeight= "100vh";
}

function callnow_close () {
   callnow_modal.style.maxHeight= "0";
}

callnow_btn.addEventListener("click", function(){
    callnow_open();
});

footer_btn.addEventListener("click", function(){
    callnow_open();
});


callnow_close_btn.addEventListener("click", function(){
    callnow_close();
});

