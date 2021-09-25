function validar_nombre_usuario(){
    
    const nombre = document.getElementById('nombre_usuario').value;


    var exp = /^[A-Z][a-z]+$/;
    
    if (nombre == null || nombre.length == 0){
        alert('El nombre no puede estar vacio\nDebe de empezar con una letra en mayuscula');
    
    }
    else if(nombre.length>30){
        alert('El nombre es muy largo\nDebe de tener máximo 10 letras');
    
    }
    else if(exp.test(nombre)==false){
        alert('El nombre no es valido\nDebe de empezar por una letra en mayuscula');
    
    }
    
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

// module.exports.validar_nombre_usuario = validar_nombre_usuario;
// module.exports.validar_contrasena = validar_contrasena;
// module.exports.validar_anoNacimiento_usuario = validar_anoNacimiento_usuario;