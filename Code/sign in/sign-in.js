

function toHome() {
    window.location.href = '../../index.html';
}

function addData(){
    var newEmail = document.getElementById('email').value;
    var newUsername = document.getElementById('username').value;
    var currUser = document.getElementById('username').value;
    var newPass = document.getElementById('pw').value;
    
    
    if(localStorage.getItem('email') == null){
        localStorage.setItem('email', '[]');
    }
    if(localStorage.getItem('username') == null){
        localStorage.setItem('username', '[]');
    }
    if(localStorage.getItem('password') == null){
        localStorage.setItem('password', '[]');
    }

    var oldEmail = JSON.parse(localStorage.getItem('email'));
    oldEmail.push(newEmail);
    localStorage.setItem('email', JSON.stringify(oldEmail));

    var oldUsername = JSON.parse(localStorage.getItem('username'));
    oldUsername.push(newUsername);
    localStorage.setItem('username', JSON.stringify(oldUsername));

    var oldPass = JSON.parse(localStorage.getItem('password'));
    oldPass.push(newPass);
    localStorage.setItem('password', JSON.stringify(oldPass));
    
    localStorage.setItem('currentUser', currUser);
}


document.addEventListener('DOMContentLoaded', function() {
    var today = new Date().toISOString().split('T')[0];
    document.getElementById('ultah').setAttribute('max', today);
});

function cek_gmail(email){
    const akhiran = email.slice(-10);
    return akhiran == "@gmail.com"
}


function cekForm(){
    let warning = false;
    const username = document.getElementById('username').value;
    const warning_username = document.getElementById('warning-username');


    if (username.length >= 12||username.length<1) {
        warning_username.classList.add('show');
        warning = true;
    } else {
        warning_username.classList.remove('show');
        
    }
// ====================================================================================
const email = document.getElementById('email').value;
const warning_email = document.getElementById('warning-email');

    if (cek_gmail(email)!=true) {
        warning_email.classList.add('show');
        warning = true;
    } else {
        warning_email.classList.remove('show');
        
    }
// ====================================================================================
    const ultah = document.getElementById('ultah');
    const warning_ultah = document.getElementById('warning-ultah');

    if (!ultah.value) {
        warning_ultah.classList.add('show');
        warning = true;
    } else {
        warning_ultah.classList.remove('show');
        
    }
// ====================================================================================
    const address = document.getElementById('address').value;
    const warning_address = document.getElementById('warning-address');

    if (address.trim() === '') {
        warning_address.classList.add('show');
        warning = true;
    } else {
        warning_address.classList.remove('show');
        
    }

// ====================================================================================
    const pilih = document.querySelector('input[name="gender"]:checked');
            const warning_gender = document.getElementById('warning-gender');

            if (!pilih) {
                warning_gender.classList.add('show');
                warning = true;
            } else {
                warning_gender.classList.remove('show');
            }

// ====================================================================================
        let ada = false;
        const pw = document.getElementById('pw').value; 
        const warning_pw = document.getElementById('warning-pw');
        
        for(let i=0;i<pw.length;i++){
            if(pw[i]==='!'||pw[i]==='@'||pw[i]==='#'||pw[i]==='$'||pw[i]==='%'||pw[i]==='&'){
                ada = true;
            }
        }
        if(ada&&pw.length>5){
            warning_pw.classList.remove('show');
        }else{
            warning_pw.classList.add('show');
            warning = true;
        }
// ====================================================================================

    const conf_pw = document.getElementById('conf-pw').value;
    const warning_conf_pw = document.getElementById('warning-conf-pw');
    if(pw===conf_pw){
        warning_conf_pw.classList.remove('show');
    }else{
        warning_conf_pw.classList.add('show');
            warning = true;
    }
    // ============================================================================

    const policy = document.getElementById('policy');
    const warning_policy = document.getElementById('warning-policy');

    if(policy.checked==false){
        warning_policy.classList.add('show');
        warning = true;
    }else{
        warning_policy.classList.remove('show');
            
    
    }
    let done = false;

    // ============================================================================
    if(warning==false){
        done = true;
    }
    if(done){
        addData();
        toHome();
    }
  
}




