import { comprobar } from "./commons.js";
import { updateLocalStorage } from "./commons.js";
comprobar();
let formUpdateUsuario = document.getElementById("formActualizarUsuario");
let nombreUsuario = document.getElementById("nombre");
let correoUsuario = document.getElementById("correo");
//let rolUsuario = document.getElementById("rol");
let Id_usuario = document.getElementById("Id_usuario");

let datos_usuario = JSON.parse(localStorage.getItem("Datos_usuario"));

console.log(datos_usuario)
Id_usuario.value = datos_usuario.Id_usuario;
nombreUsuario.value = datos_usuario.Nombre;
correoUsuario.value = datos_usuario.Correo;
//rolUsuario.value = datos_usuario.rol;

formUpdateUsuario.addEventListener("submit", (event) => {
    event.preventDefault();
console.log('hola')
  let cuerpo={
        "Id_usuario":datos_usuario.Id_usuario,
        "nombre":nombreUsuario.value,
        "Correo":correoUsuario.value,
        "rol":datos_usuario.rol
    }
  updateLocalStorage(datos_usuario.Id_usuario,nombreUsuario.value,correoUsuario.value,datos_usuario.rol);

  let options={
        method: "PUT",
        headers:{'Content-type':'aplication/json'},
        body:JSON.stringify(cuerpo)
            }
    
    fetch("http://localhost/Proyecto/parking/usuarios.php", options)

    alert("su datos de usuario se han cambiado correctamente");
    window.location = "perfil_usuario.html";
});