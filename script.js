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