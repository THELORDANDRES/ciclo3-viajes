function validar_nombre_usuario(){
  var nombre;

  nombre = document.getElementById("nombre_usuario").value;

  if (nombre === ""){
    alert ("Todos los campos son obligatorios");
    return false;
  }
  else if(nombre.length>30){
    alert("El nombre es muy largo");
    return false;
  }
}
module.exports.validar_nombre_usuario = validar_nombre_usuario;