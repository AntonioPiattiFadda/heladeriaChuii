const MobileMenuButton = document.querySelector('.menu-icon');
const NavbarTop = document.querySelector('.navbar-top');

MobileMenuButton.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    
    
    console.log("funciona el addEvent");
    NavbarTop.classList.toggle('inactive');
  }