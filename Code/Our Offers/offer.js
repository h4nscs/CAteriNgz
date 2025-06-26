function toTesti() {
    window.location.href = '../Testimonial/testi.html';
  }
  
  function toAbt() {
    window.location.href = '../About Us/abt.html';
  }
  
  function toOffer() {
    window.location.href = '../Our Offers/offer.html';
  }
  
  
  const menu = document.querySelector('#mobile-menu');
  const menuLinks = document.querySelector('.nav-menu');
  
  menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
  });
  
  var currUser = localStorage.getItem('currentUser');
      const navAcc = document.querySelector('.nav-acc');
  
      if (!currUser) {
          navAcc.innerHTML = '<button id="nav-sign" onclick="toSignIn()">Sign In</button>';
      }
  ;
  
  function toSignIn() {
      window.location.href = '../sign in/sign-in.html'; 
  }
  
  function toLogOut(){
    localStorage.removeItem('currentUser');
    window.location.reload();
    window.location.href = '../Login/login.html'; 
  }