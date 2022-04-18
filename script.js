const hamburgerToggle = document.querySelector(".hamburg-button");
const navMenu = document.querySelector(".navMenu");

let header = document.querySelector("header");


hamburgerToggle.addEventListener("click", () => {
    hamburgerToggle.classList.toggle( "active" );
    navMenu.classList.toggle( "active" );
})

window.addEventListener("scroll", function () {
    let windowPosition = window.scrollY > 0;
        header.classList.toggle("active", windowPosition);
})

function resetToggle( event ){
    hamburgerToggle.classList.remove( "active" );
    navMenu.classList.remove( "active" );
}
  
window.addEventListener("resize", resetToggle);