export default function form(){


    document.addEventListener("submit", (e)=>{
        e.preventDefault();

        let submitDiv = document.querySelector(".submit-div")
        let successMsj = document.createElement("p")
        successMsj.classList.add("success-msj")
        let errorMsj = document.createElement("p")
        errorMsj.classList.add("error-msj")
        let successMsjText = document.createTextNode("¡El formulario se envio correctamente!");
        let errorMsjText = document.createTextNode("Error en el envio del formulario : Contiene campos vacios");
        successMsj.appendChild(successMsjText); 
        errorMsj.appendChild(errorMsjText); 


        let form = new FormData(e.target)
        let nombre = form.get("nombre")
        let email =form.get("email")
        let telefono = form.get("telefono")
        let consulta = form.get("consulta")

       try {

            fetch("https://formsubmit.co/ajax/pabloaturnes@gmail.com", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: nombre,
                    email : email,
                    telefono : telefono,
                    consulta : consulta
                })
            })
            
            // limpio inputs del formulario
             e.target.reset()

            // muestro mensajes de success y borro si hay uno de error
            if(!submitDiv.querySelector(".success-msj")){
                submitDiv.appendChild(successMsj)
                submitDiv.querySelector(".error-msj")? submitDiv.removeChild(errorMsj) : ""
            }

            setTimeout(()=>{
                submitDiv.removeChild(successMsj)
            },3000)

        } catch (error) {
            console.log(error)
        } 

    })

}