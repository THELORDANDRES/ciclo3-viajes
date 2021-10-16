var registros = [];

function validar_captcha(rcaptcha) {
    //rcaptcha = document.getElementById('login_captcha').value;
    if (rcaptcha == 16) {
        return true;
    } else {
        return false;
    }
}

function iniciar_sesion(usuario, contrasena, rcaptcha) {
    for(i=0;i<registros.length;i++){
        if(usuario==registros[i].usuario && contrasena==registros[i].contrasena && validar_captcha(rcaptcha)==true){
            return true;
        }
    }
    return false;
    
}

module.exports.registros = registros;
module.exports.validar_captcha = validar_captcha;
module.exports.iniciar_sesion = iniciar_sesion;