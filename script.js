
$('.men').on('click', function(){
    $(this).css('background-color', 'white')
    $(this).css('height', '53px')
    $(this).css('color', 'black')
    $('.women, .kids').css('background-color','#252525')
    $('.women, .kids').css('height','20px')
    $('.women, .kids').css('color',' white')
})
$('.women').on('click', function(){
    $(this).css('background-color', 'white')
    $(this).css('height', '53px')
    $(this).css('color', 'black')
    $('.men, .kids').css('background-color','#252525')
    $('.men, .kids').css('height','20px')
    $('.men, .kids').css('color',' white')
})
$('.kids').on('click', function(){
    $(this).css('background-color', 'white')
    $(this).css('height', '53px')
    $(this).css('color', 'black')
    $('.men, .women').css('background-color','#252525')
    $('.men, .women').css('height','20px')
    $('.men, .women').css('color',' white')
})


$('#register').on('click', function(){
    let nom = $('#nom').val()
    let prenom = $('#prenom').val()
    let telephone = $('#telephone').val()
    let email = $('#email').val()
    let mdp = $('#mdp').val()

    let profile = {
        'nom':nom,
        'prenom':prenom,
        'telephone': telephone,
        'email':email,
        'mdp':mdp
    }
    console.log(profile)

    
    
    if(CheckPassword(mdp) && CheckNumber(telephone) && ValidateEmail(email)){
        $('.validate').removeAttr('hidden')
        $('.close').click()
    }


    
    
})
function CheckPassword(psw) { 
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if(psw.match(passw)) {
        $('.error_psw').attr('hidden')
        return true;
    }
    else{ 
        $('.error_psw').removeAttr('hidden')
        return false;
    }
}

function CheckNumber(number){
    let isnum = /^\d+$/.test(number);
    if(isnum==true){
        $('.error_telephone').attr('hidden', true)
        return true;
    }
    else{ 
        $('.error_telephone').removeAttr('hidden')
        return false;
    }
}

function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
        $('.error_email').attr('hidden')
        return true;
    }
    else{
        $('.error_email').removeAttr('hidden')
        return false;
    }
}


