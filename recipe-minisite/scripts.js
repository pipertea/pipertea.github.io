// JS for responsive menu

document.addEventListener("DOMContentLoaded", function(){

// respond to clicks on the menu icon
document.querySelector("navIcon").addEventListener("click", function(e){
    document.querySelector("nav").classList.toggle("clicked");
});


});