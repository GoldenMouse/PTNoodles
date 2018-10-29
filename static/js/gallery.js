var NS = (function(){ 
    var self = {}
    var CurrentSlide = 1;
    
    const lightbox = document.querySelector("#lightbox");
    
    /*** Event Handlers  ****/
    document.querySelectorAll(".gallery__item").forEach(function(el){
        var imgIndex = parseInt(el.dataset.imgCount);
        el.onclick = function(){
            CurrentSlide = imgIndex;
            showSlide(imgIndex);
            openModal();
        }
    });
    
    document.querySelector("#lightbox__close").onclick = closeModal;
    document.querySelector(".lightbox__prev").onclick = function(){ moveSlide(-1) };
    document.querySelector(".lightbox__next").onclick = function(){ moveSlide(1) };
    
    /**************************/
    
    
  
    /******* FUNCTIONS **************/
      
      
    // Next/previous controls
    function moveSlide(n) {
        CurrentSlide += n;
        showSlide(CurrentSlide);
    }
      
     // Close the Modal
    function closeModal() {
        document.querySelector('#lightbox').style.display = "none";
    } 
    
    // Open the Modal
    function openModal() {
        document.querySelector('#lightbox').style.display = "flex";
    }
    
    function showSlide(n) {
        var slides = document.getElementsByClassName("lightbox__slide");
        console.log(n);
        
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        
        if (n > slides.length) {n = CurrentSlide = 1}
        else if (n <= 0) {n = CurrentSlide = slides.length + n}
        slides[n-1].style.display = "block";
    }

    return self;
})();