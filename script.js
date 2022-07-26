let marca = prompt("Ingrese una marca").toLowerCase()
let precio = parseFloat(prompt("Ingrese un precio"))

if(marca === "audi" && (precio <= 20000 && precio >= 10000)){
    console.log("Se añadio a tu carrito el Audi de $" + precio)
} else if(marca === "toyota" && (precio <= 30000 && precio >= 20000)){
    console.log("Se añadio a tu carrito el Toyota de $" + precio)
} else if(marca === "nissan" && (precio <= 40000 && precio >= 30000)){
    console.log("Se añadio a tu carrito el Nissan de $" + precio)
}else{
    alert("No tenemos ese auto a ese precio, lo sentimos.")
}


//Segundo Desafio, comentado para cuando termine de revisar el primero
/*function elegir(nombre, edad, genero){
    console.log("El nombre de tu personaje es " + nombre)
    console.log("La edad de tu persoanje es " + edad)
    console.log("El genero de tu personaje es " + genero)
}

let nombre, edad, genero, seguir

do{
    do{
        nombre =  prompt("Elija el nombre de su personaje").toLowerCase()
        if(!(isNaN(nombre))){
            alert("Nombre no valido")
        }
    }while(!(isNaN(nombre)))
    do{
        edad = parseFloat(prompt("Elija una edad para su personaje"))
        if(isNaN(edad)){
            alert("Edad no valida")
        }
    }while(isNaN(edad))
    do{
        genero = prompt("Elije entre M/F").toLowerCase()
        if(genero != "m" && genero != "f"){
            alert("Genero no valido")
        }
    }while(genero != "m" && genero != "f")
    elegir(nombre, edad, genero)
    console.log("¡Personaje terminado!")
    seguir = prompt("Quieres continuar Y/N").toLowerCase()
}while(seguir == "y")*/
