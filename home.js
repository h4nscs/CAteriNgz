function toTesti() {
    window.location.href = 'Code/Testimonial/testi.html';
  }
  
  function toAbt() {
    window.location.href = 'Code/About Us/abt.html';
  }
  
  function toOffer() {
    window.location.href = 'Code/Our Offers/offer.html';
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
      window.location.href = 'Code/sign in/sign-in.html'; 
  }
  
  function toLogOut(){
    localStorage.removeItem('currentUser');
    window.location.reload();
    window.location.href = 'Code/Login/login.html'; 
  }

//   ====================================================================================

  var currUser = localStorage.getItem('currentUser');

  if (currUser) {
    document.getElementById('welcome').textContent = "Welcome " + currUser + "!";
  } else {
    document.getElementById('welcome').textContent = 'Wel.. wait who are you? Please log in first';
  }
