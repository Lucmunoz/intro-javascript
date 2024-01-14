
let ValorUnitario = 400000;
let RootValorUnitario=document.querySelector(".precio-inicial");
/*let RootValorUnitario = document.getElementById("valor-unitario");*/
RootValorUnitario.innerHTML = Number(ValorUnitario);

let RootCantidad = document.querySelector(".cantidad");
/*let RootCantidad = document.getElementById("cantidad-inicial");*/
let Cantidad = Number(RootCantidad.innerHTML);
let CantidadTemporal = Cantidad

let RootValorTotal = document.querySelector(".valor-total");
/*let RootValorTotal = document.getElementById("valor-total");*/
let ValorTotal = Cantidad * ValorUnitario;
RootValorTotal.innerHTML = ValorTotal;

let RootBtnMas = document.querySelector(".btn-mas");
let RootBtnMenos= document.querySelector(".btn-menos");
/*let RootBtnMas = document.getElementById("btn-mas");
let RootBtnMenos= document.getElementById("btn-menos");*/


/*La siguiente funcion buscan responder a la acción de click sobre el boton "+" haciendo que aumente la cantidad*/
RootBtnMas.addEventListener("click",function(e){
    CantidadTemporal=CantidadTemporal+1;
    RootCantidad.innerHTML = CantidadTemporal;
    /* Las siguientes líneas de codigo proponen logica que modifica el total a pagar en función de la cantidad */
    ValorTotal = CantidadTemporal * ValorUnitario;
    RootValorTotal.innerHTML = ValorTotal;
});

/*La siguiente funcion buscan responder a la acción de click sobre el boton "-" haciendo que disminuya la cantidad*/
RootBtnMenos.addEventListener("click",function(e){
    CantidadTemporal=CantidadTemporal-1;
    RootCantidad.innerHTML = CantidadTemporal;
    /* Las siguientes líneas de codigo proponen logica que modifica el total a pagar en función de la cantidad */
    ValorTotal = CantidadTemporal * ValorUnitario;
    RootValorTotal.innerHTML = ValorTotal;
});

/* La siguiente porción de código atiende al uso de elementos INPUT del tipo Boton (código comentado en el HTML)
a fin de utilizar el evento onClick visto en clases*/
/*
function AumentaCantidad() {
    CantidadTemporal=CantidadTemporal+1;
    RootCantidad.innerHTML = CantidadTemporal;
    ValorTotal = CantidadTemporal * ValorUnitario;
    RootValorTotal.innerHTML = ValorTotal;
}

function DisminuyeCantidad() {
    CantidadTemporal=CantidadTemporal-1;
    RootCantidad.innerHTML = CantidadTemporal;
    ValorTotal = CantidadTemporal * ValorUnitario;
    RootValorTotal.innerHTML = ValorTotal;
}*/

