//1er Entrega del Prosiecto Final
class Concesionario{
    constructor(marca, cv, precio, modelo){
        this.marca = marca
        this.cv = cv
        this.precio = precio
        this.modelo = modelo
    }
}

const auto1 = new Concesionario ("toyota", 100, 36550, "corolla")
const auto2 = new Concesionario ("audi", 100, 21840, "a1")
const auto3 = new Concesionario ("nissan", 100, 29800, "juke")
const auto4 = new Concesionario ("bmw", 100, 39400, "serie 3")

const comprarAutos = [auto1, auto2, auto3, auto4]
const autosComprados = []

const listaMarcas = comprarAutos.map(autoMarcas => autoMarcas.marca)
const listaPrecios = comprarAutos.map(autoPrecios => autoPrecios.precio)

do{//Tienes que tener la console abierta antes de este paso
    iniciar = prompt("¡Bienvenido a nuestra Concesionaria! Desea comprar un auto ? Si/No").toLowerCase()
    if(iniciar == "si"){
        alert("Aca podra ver todas nuestras marcas: " + listaMarcas)
        alert("Y estos son los precios de cada auto: " + listaPrecios)
    }else if(iniciar == "no"){
        alert("Porfa diga que si :C")
    }else{
        alert("Eliga una de las opciones")
    }
}while(iniciar != "si")

const autoPrecioMenor = comprarAutos.filter((filtos) => filtos.precio < 30000)
const autoPrecioMayor = comprarAutos.filter((filtos) => filtos.precio > 30000)

do{
    comprar = parseFloat(prompt("Cuanto es su presupuesto?"))
    if(comprar >= 20000 && comprar < 30000){ 
        console.table(autoPrecioMenor) 
        do{
            comprarAu = prompt("Que auto desea comprar ?").toLowerCase()
            switch (comprarAu){
                case "audi" :
                    alert("Auto comprado")
                    autosComprados.push(auto2)
                    break
                case "nissan" :
                    alert("Auto comprado")
                    autosComprados.push(auto3)
                    break
                default : 
                    alert("Ingrese una marca correcta")
                    break
            }
            repetir = prompt("Desea comprar otro auto? Si/No").toLowerCase()
        }while(repetir == "si")
    } else if(comprar >= 30000 && comprar <= 40000){
        console.table(autoPrecioMayor)
        do{
            comprarAu = prompt("Que auto desea comprar ?").toLowerCase()
            switch (comprarAu){
                case "toyota" :
                    alert("Auto comprado")
                    autosComprados.push(auto1)
                    break
                case "bmw" :
                    alert("Auto comprado")
                    autosComprados.push(auto4)
                    break
                default : 
                    alert("Ingrese una marca correcta")
                    break
            }
            repetir = prompt("Desea comprar otro auto? Si/No").toLowerCase()
        }while(repetir == "si")
    } else{
        alert("No tenemos un auto a ese precio")
    }
    seguir = prompt("Desea seguir? Si/No").toLowerCase()
}while(seguir == "si")

function compraFinal(){
    autosComprados.forEach((listaCompras) => {
        console.table(listaCompras)
    })
}

alert("Gracias por su compra y por elegirnos!")
compraFinal()