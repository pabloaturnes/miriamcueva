export default function hamburguer(){                   // exporta la funcion menu hamburguesa

    document.addEventListener("click", (e)=>{                               // asigna el evento click a todo el documento
    
        if(e.target.matches(".hamburguer") || e.target.matches(".menu li a")){
            
            let menu = document.querySelector(".menu")

            menu.classList.toggle("menu-active")

        }

    });
}