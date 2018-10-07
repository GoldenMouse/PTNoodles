// NAVS

var nav_btns = document.querySelectorAll(".menu-nav__links");
var appetizer_btn = document.querySelector("#menu-appetizer-btn");
var entrees_btn = document.querySelector("#menu-entrees-btn");
var drinks_btn = document.querySelector("#menu-drinks-btn");
var dessert_btn = document.querySelector("#menu-dessert-btn");

var menu_main_divs = document.querySelectorAll(".menu-main");
var appetizer_div = document.querySelector("#menu-appetizer");
var entrees_div = document.querySelector("#menu-entrees");
var drinks_div = document.querySelector("#menu-drinks");
var dessert_div = document.querySelector("#menu-dessert");

nav_btns.forEach(function(el, index){
    el.addEventListener("click", function(){
        document.querySelector(".selected").classList.toggle("selected");
        this.classList.toggle("selected");
    });
});

entrees_btn.addEventListener("click", function(){
    menu_main_divs.forEach(function(el, index){
        el.classList.add("hidden");
    });
    entrees_div.classList.remove("hidden");
});

appetizer_btn.addEventListener("click", function(){
    menu_main_divs.forEach(function(el, index){
        el.classList.add("hidden");
    });
    appetizer_div.classList.remove("hidden");
});

drinks_btn.addEventListener("click", function(){
    menu_main_divs.forEach(function(el, index){
        el.classList.add("hidden");
    });
    drinks_div.classList.remove("hidden");
});

dessert_btn.addEventListener("click", function(){
    menu_main_divs.forEach(function(el, index){
        el.classList.add("hidden");
    });
    dessert_div.classList.remove("hidden");
});