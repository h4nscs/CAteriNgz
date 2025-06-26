function toHome() {
    window.location.href = '../../index.html';
}

function check(event){
    event.preventDefault();

    var email = localStorage.getItem('email');
    var password = localStorage.getItem('password');
    var username = localStorage.getItem('username');
    var stored_email = JSON.parse(email);
    var stored_password = JSON.parse(password);
    var stored_username = JSON.parse(username);

    var input_email = document.getElementById('email').value;
    var input_password = document.getElementById('pw').value;

    let ketemu_email = false;
    let ketemu_password = false;

    for(let i = 0;i<stored_email.length;i++){
        if(stored_email[i]===input_email){
            ketemu_email = true;
            if(stored_password[i]===input_password){
                ketemu_password = true;
                var currUser = stored_username[i];
                localStorage.setItem('currentUser', currUser);
                break;
            }else{
                break;
            }
        }
    }
    let warning = false;
    const warning_login = document.getElementById('warning_login');
    if(ketemu_email && ketemu_password){
        warning_login.classList.remove('show');
        
        toHome();
        
    }else{
        warning_login.classList.add('show');
        warning = true;
        
    }    
}