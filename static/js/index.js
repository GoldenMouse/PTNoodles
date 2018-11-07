/*** 
   Carousel 

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

***/

/*** Notitfication bar***/

document.querySelector("#notification-bar .close").addEventListener("click", () => {
    document.querySelector("#notification-bar").style.display = "none";
    sessionStorage.noteShownNewLocations = true;
})


if(sessionStorage.noteShownNewLocations) {
    document.querySelector("#notification-bar").style.display = "none";
}
