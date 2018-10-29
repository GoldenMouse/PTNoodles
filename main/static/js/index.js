/*** 
   Carousel 
***/

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slider__img");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}


/*** Call Now Btn ***/
var callnow_btn = document.querySelector(".footer__mobile");

callnow_btn.addEventListener("click", function(){
   var modal = document.querySelector(".modal__callnow"); 
   modal.styles.display = "flex";
   
   alert("clicked");
});
