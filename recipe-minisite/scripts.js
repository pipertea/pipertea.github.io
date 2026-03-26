// JS for responsive menu

document.addEventListener("DOMContentLoaded", function(){

// respond to clicks on the menu icon
document.querySelector("navIcon").addEventListener("click", function(e){
    document.querySelector("nav").classList.toggle("clicked");
});

// remove menu .clicked if icon is closed
if (iconWasClicked || bodyClicked) {
    let allMenus = document.querySelectorAll("nav > ul > li");
    for (const eachMenu of allMenus) {
        eachMenu.classList.remove("clicked");
    }
}


});