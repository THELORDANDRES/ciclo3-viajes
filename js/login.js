let registros = [];

function validar_captcha(rcaptcha) {
    rcaptcha = document.getElementById('login_captcha').value;
    if (parseInt(rcaptcha, 10) === 16) {
        return true;
    } else {
        return false;
    }
}

function iniciar_sesion(usuario, contrasena, rcaptcha) {
    //implementacion
}

module.exports.registros = registros;
module.exports.validar_captcha = validar_captcha;
module.exports.iniciar_sesion = iniciar_sesion;