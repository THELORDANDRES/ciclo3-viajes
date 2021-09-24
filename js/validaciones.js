function validar_nombre_usuario(){

}

function validar_anoNacimiento_usuario(){

}

function validar_contrasena(){
    var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    let password = document.getElementById('contrasena_usuario').value;
    if(re.test(password)){
        return true;
    }else {
        return false;
    }
}

module.exports.validar_nombre_usuario = validar_nombre_usuario;
module.exports.validar_contrasena = validar_contrasena;
module.exports.validar_anoNacimiento_usuario = validar_anoNacimiento_usuario;