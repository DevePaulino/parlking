import { comprobar } from './commons.js';
comprobar();
let infoUsuario = document.getElementById('infoUsuario')

let datos_usuario = JSON.parse(localStorage.getItem('Datos_usuario'));

infoUsuario.innerHTML = `<p>
                        Nombre: <b>${datos_usuario.Nombre}<br>
                        Correo: <b>${datos_usuario.Correo}<br>
                        </p>`