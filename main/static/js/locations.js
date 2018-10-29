/** Scroll to top ***/
document.querySelector(".content").onscroll = function() {scrollToTop()};

function scrollToTop() {
    var scrolltop_btn = document.querySelector(".scroll-to-top");
    
    if (document.querySelector(".content").scrollTop > 800) {
        scrolltop_btn.style.display = "flex";
    } else {
        scrolltop_btn.style.display = "none";
    }
}