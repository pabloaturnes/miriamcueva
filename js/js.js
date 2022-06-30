import form from "./form.js";
import hamburguer from "./hamburguer.js";   // importa la funcion menuhamburguesa desde el archivo menuhamburguesa.js

document.addEventListener("DOMContentLoaded", (event)=>{        // elevento aqui es que cuando se cargue el documento se ejecute esa funcion. es decir se habiite el boton hamburguesa

   hamburguer();   // utilizo la funcion menu hamburguesa y como parametros le paso las clases panel-btn, panel y los enlaces dentro de menu
   form();
})