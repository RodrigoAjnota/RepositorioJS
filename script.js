class Palabras{
    constructor(img, nombre){
        this.img = img
        this.nombre = nombre
    }
}

const palabra1 = new Palabras("https://img.freepik.com/vector-gratis/casa-dos-pisos_1308-16176.jpg", "casa")
const palabra2 = new Palabras("https://www.nadirinteriores.com.ar/wp-content/uploads/2021/02/mesa-nordica-01.jpg", "mesa")
const palabra3 = new Palabras("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjdnXbpx83lev46vxd5ZbYOkLd3DY3uTbS8w&usqp=CAU", "silla")
const palabra4 = new Palabras("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjvYfci6RUK_1AeOMaPtB1mh2LOLQkvcIvHw&usqp=CAU", "sofa")
const palabra5 = new Palabras("https://http2.mlstatic.com/D_NQ_NP_626715-MLA40720837265_022020-O.jpg", "mueble")

const todasPalabras = [palabra2, palabra3, palabra4, palabra5]

const imagen = document.getElementById("img")

imagen.innerHTML = `<img src="https://img.freepik.com/vector-gratis/casa-dos-pisos_1308-16176.jpg" class="card-img-top" alt="...">`

let i = 0
let nivel = 0

const botonSigueinte = document.getElementById("boton")
    botonSigueinte.addEventListener("click", () =>{
        if(nivel == 0){
            bloques("casa")
        } else if(nivel == 1){
            bloques("mesa")
        } else if(nivel == 2){
            bloques("silla")
        } else if(nivel == 3){
            bloques("sofa")
        } else if(nivel == 4){
            bloques("mueble")
            Swal.fire({
                title: 'Quieres guardar tu progreso?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Guardar',
                denyButtonText: `No Guardar`,
                }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    Swal.fire('Guardado!', '', 'success')
                } else if (result.isDenied) {
                    Swal.fire('No guardaste tu progreso', '', 'info')
                }
                })
        } else{
            console.log("No hace falta escribir más")
        }
})

function bloques(nombreDelObjeto) {
    const input = document.querySelector("#input").value
    if(input == nombreDelObjeto){
        const div = document.querySelector("#palabra")
        const h3 = document.createElement("h3")
        h3.innerText = "respuesta correcta"
        div.appendChild(h3)
        nivel++
        console.log(i)
        if(i != todasPalabras.length){
            imagen.innerHTML = `
            <img src="${todasPalabras[i].img}" class="card-img-top" alt="...">`
            i++
        } else{
            console.log("Juego terminado")
        }
    }else{
        Toastify({
            text: "Respuesta equivocada",
            duration: 2000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
            },
        }).showToast();
    }
}