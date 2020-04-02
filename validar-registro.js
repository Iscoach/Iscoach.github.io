function validar() {
   var nombreSU, usuarioSU, telefonoSU, mailSU, passwordSU, expresion;
   nombreSU = document.getElementById("nombreSU").value;
   usuarioSU = document.getElementById("usuarioSU").value;
   telefonoSU = document.getElementById("telefonoSU").value;
   mailSU = document.getElementById("mailSU").value;
   passwordSU = document.getElementById("passwordSU").value;
   expresion = /\w+@\w+\.+[a-z]/;
    
    
    
    
if(nombreSU === "" || usuarioSU === "" || telefonoSU === "" || mailSU === "" || passwordSU === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
else if(passwordSU.length<8){
    alert("La contrasena debe tener al menos 8 caracteres");
    return false;
    }
else if(telefonoSU.length>10){
    alert("El numero de telefono es incorrecto");
    return false;
    }
else if(isNaN(telefonoSU)){
    alert("El numero de telefono es incorrecto");
    return false;
    }
else if(!expresion.test(mailSU)){
    alert("El email no es valido");
    return false;
    }
}

