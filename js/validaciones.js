var registros = [];
//var arreglo=[];
var person;

function validar_nombre_usuario(String) {
    var exp = /^[A-Z][a-z]+$/;
    const nombre = document.getElementById('nombre_usuario').value;
    if (exp.test(nombre)) {
        console.log('true');
        return true;
    }
    else {
        console.log('false');
        return false;
    }
}

function validar_anoNacimiento_usuario(valor) {
    if (typeof (valor) == "number") {
        if (valor > 0) {
            if (valor >= 1990 && valor <= 2022) {
                return true;
            }
        }
    }
    return false;

}

function validar_contrasena() {
    const re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    let password = document.getElementById('contrasena_usuario').value;
    if (re.test(password)) {
        return true;
    } else {
        return false;
    }
}

function agregarRegistro() {
    let name = document.getElementById('nombre_usuario').value;
    let yearBirthday = document.getElementById('anoNacimiento_usuario').value;
    let password = document.getElementById('contrasena_usuario').value;

    person = {
        "usuario": name,
        "anoNacimiento": yearBirthday,
        "contrasena": password
    }

    registros.push(person);
    console.log(registros.toString())

    document.getElementById('nombre_usuario').value = "";
    document.getElementById('anoNacimiento_usuario').value = "";
    document.getElementById('contrasena_usuario').value = "";
    return registros;
}

<<<<<<< HEAD
function EncontrarUsuarioPorEdad(registros) {
  
    var puntero=0
    var fechaMayor=registros[0].anoNacimiento;
    for(var i=1;i<registros.length;i++)
    {        
        if(fechaMayor>=registros[i].anoNacimiento)
        {   
            
            puntero=i
            fechaMayor=registros[i].anoNacimiento;            
        }else{
           
        }        
    }
    console.log(registros[puntero]);
    return(registros[puntero]);
=======

function EncontrarUsuarioPorEdad(arreglo) {

    //var arreglo = arreglo || [];
    arreglo = agregarRegistro();
    //console.log(arreglo[1][2]);

    var fechaMayor = 0;
    var usuario = [];
    for (var i = 0; i < arreglo.length; i++) {
        if (fechaMayor <= parseInt(arreglo[i][1])) {
            fechaMayor = parseInt(arreglo[i][1]);
            usuario = arreglo[i];
        }
    }
    console.log(usuario);
    return usuario;
>>>>>>> a43d14f5074fea5f492534f225a2dc9bf47f7dbf
}

module.exports.registros = registros;
module.exports.EncontrarUsuarioPorEdad = EncontrarUsuarioPorEdad;
module.exports.agregarRegistro = agregarRegistro;
module.exports.validar_nombre_usuario = validar_nombre_usuario;
module.exports.validar_contrasena = validar_contrasena;
module.exports.validar_anoNacimiento_usuario = validar_anoNacimiento_usuario;