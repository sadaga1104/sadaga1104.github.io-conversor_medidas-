var valor = document.getElementById("valor");
//Detecto el evento cuando se escribe un numero
//A continuación llamo a la función convertir

valor.addEventListener('keyup', convertir);
txtResultado = document.getElementById("resultado");

unidad1 = document.getElementById("unidad1");
//Detecto el evento cuando se selleciona una unidad
unidad1.addEventListener('change', convertir);

unidad2 = document.getElementById("unidad2");
//Detecto el evento cuando se selleciona una unidad
unidad2.addEventListener('change', convertir);

//Variable donde se calculara el resultado
var resultado;

//Función que realiza el calculo
function convertir(){
    //En caso de que no haya nada en el input
    if(valor.value==''){
        return;
    }
    //Tomo el numero del input y lo convierto a numerico
    numero = valor.value;
    numero = parseFloat(numero);

    if(unidad1.value=="Kilometro" && unidad2.value=="Kilometro"){
        resultado = numero * 1;
        txtResultado.innerHTML = numero + " Kilometro/s equivalen a " + resultado + " Kilometro/s";
    }
    if(unidad1.value=="Kilometro" && unidad2.value=="Metro"){
        resultado = numero * 1000;
        txtResultado.innerHTML = numero + " Kilometro/s equivalen a " + resultado + " Metro/s";
    }
    if(unidad1.value=="Kilometro" && unidad2.value=="Centimetro"){
        resultado = numero * 100000;
        txtResultado.innerHTML = numero + " Kilometro/s equivalen a " + resultado + " Centimetro/s";
    }
    if(unidad1.value=="Metro" && unidad2.value=="Kilometro"){
        resultado = numero / 1000;
        txtResultado.innerHTML = numero + " Metro/s equivalen a " + resultado + " Kilometro/s";
    }
    if(unidad1.value=="Metro" && unidad2.value=="Metro"){
        resultado = numero * 1;
        txtResultado.innerHTML = numero + " Metro/s equivalen a " + resultado + " Metro/s";
    }
    if(unidad1.value=="Metro" && unidad2.value=="Centimetro"){
        resultado = numero * 100;
        txtResultado.innerHTML = numero + " Metro/s equivalen a " + resultado + " Centimetro/s";
    }
    if(unidad1.value=="Centimetro" && unidad2.value=="Kilometro"){
        resultado = numero / 100000;
        txtResultado.innerHTML = numero + " Centimetro/s equivalen a " + resultado + " Kilometro/s";
    }
    if(unidad1.value=="Centimetro" && unidad2.value=="Metro"){
        resultado = numero / 100;
        txtResultado.innerHTML = numero + " Centimetro/s equivalen a " + resultado + " Metro/s";
    }
    if(unidad1.value=="Centimetro" && unidad2.value=="Centimetro"){
        resultado = numero * 1;
        txtResultado.innerHTML = numero + " Centimetro/s equivalen a " + resultado + " Centimetro/s";
    }
}