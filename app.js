let numeroSecreto = 0;
let intentos = 0;
let listaNumeros = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarNumeroSecreto() {
    let numeroDeUsuario = parseInt(document.getElementById('valorNumeroUsuario').value);

    if (numeroDeUsuario == numeroSecreto) {
        asignarTextoElemento('p', `¡Felicidades! Has adivinado el número secreto en ${intentos} ${(intentos === 1 ? 'intento' : 'intentos')}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        //document.getElementById('reiniciar').disabled = false;
    } else if (numeroDeUsuario < numeroSecreto) {
        asignarTextoElemento('p', 'El número secreto es mayor. Intenta de nuevo.');
        limpiarCampo();
    } else {
        asignarTextoElemento('p', 'El número secreto es menor. Intenta de nuevo.');
        limpiarCampo();
    }

    intentos++;
}

function limpiarCampo(){
    document.getElementById('valorNumeroUsuario').value = '';
}

//otra forma de limpiar el campo con querySelector
// function limpiarCampo(){
//     document.querySelector('#valorNumeroUsuario').value = '';
// }

function condicionesIniciales(){

    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Adivina el número entre 1 y ${numeroMaximo}`);

    //generamos un nuevo número secreto
    numeroSecreto = generarNumeroSecreto();
    // console.log('Número secreto:', numeroSecreto);
    //reiniciamos el contador de intentos
    intentos = 1;
}

function nuevoJuego() {
    //limpiamos la caja de texto
    limpiarCampo();
    //restablecemos las condiciones iniciales del juego
    //generamos un nuevo número secreto
    //reiniciamos el contador de intentos
    //actualizamos el mensaje de si acerto o no
    condicionesIniciales();
    //deshabilitamos el botón de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', true);

}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(numeroGenerado);
    console.log(listaNumeros);

    //Si todos los números sorteados ya han sido generados, reiniciamos la lista para evitar un ciclo infinito
    if(listaNumeros.length == numeroMaximo){
        asignarTextoElemento('p', 'Todos los números han sido generados.');
        
    } else {

        //Si el numero generado esta en la lista hacemos una cosa sino otra
        if (listaNumeros.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumeros.push(numeroGenerado);
            return numeroGenerado;
        }

    }

    
}

condicionesIniciales();



//------------------------
//Desafio
//------------------------

// let saludar = holaMundo();
// console.log(saludar);

// let nombreUsuario = obtenerNombre();
// console.log(nombreUsuario);

// let dobleNumero = elDobleDeUnNumero();
// console.log(dobleNumero);

// let promedioNumeros = calcularPromedioDeTresNumeros();
// console.log(promedioNumeros);

// let mayorNumero = elMayorDeDosNumeros();
// console.log(mayorNumero);

// let numeroMultiplicado = multipicarUnNumeroPorSiMismo();
// console.log(numeroMultiplicado);

// //1 
// function holaMundo(){
//     console.log('Hola Mundo');
// }

// //2
// function obtenerNombre(){
//     let nombre = prompt('¿Cuál es tu nombre?');
//     console.log(`Hola ${nombre}`);
// }

// //3
// function elDobleDeUnNumero(){
//     let numero = parseInt(prompt('Ingresa un número:'));
//     let resultado = numero *2;
//     console.log(`El doble de ${numero} es ${resultado}`);
// }

// //4
// function calcularPromedioDeTresNumeros(){
//     let numero = parseInt(prompt('Ingresa el primer número:'));
//     let numero2 = parseInt(prompt('Ingresa el segundo número:'));
//     let numero3 = parseInt(prompt('Ingresa el tercer número:'));
//     let resultado = (numero + numero2 + numero3) / 3;
//     console.log(`El promedio de ${numero}, ${numero2} y ${numero3} es ${resultado}`);
// }

// //5
// function elMayorDeDosNumeros(){
//     let numero = parseInt(prompt('Ingresa el primer número:'));
//     let numero2 = parseInt(prompt('Ingresa el segundo número:'));

//     if (numero > numero2) {
//         console.log(`El número mayor es ${numero}`);
//     } else if (numero2 > numero) {
//         console.log(`El número mayor es ${numero2}`);
//     } else {
//         console.log('Ambos números son iguales');
//     }
// }

// //6
// function multipicarUnNumeroPorSiMismo(){
//     let numero = parseInt(prompt('Ingresa un número:'));
//     let resultado = numero * numero;    
//     console.log(`El resultado de multiplicar ${numero} por sí mismo es ${resultado}`);
// }

//------------------------
//Desafio
//------------------------

// //1
// function indiceMasaCorporal(altura, peso){
//     let IMC = peso / (altura * altura);
//     console.log(`tu indice de masa corporal debería ser ${IMC}`);
    

// }

// let imcUsuario = indiceMasaCorporal(1.75, 70);
// console.log(imcUsuario);


// //2
// function factorialDeUnNumero(numero){
//     let factorial = 1;
//     for (let i = 1; i <= numero; i++) {
//         factorial *= i;
//     }
//     return factorial;  

// }

// let factorialUsuario = factorialDeUnNumero(3);
// console.log(factorialUsuario);

// //3
// function deDolarASoles(dolares){
//     let tasaDeCambio = 3.5;
//     let soles = dolares * tasaDeCambio;
//     return soles;
// }

// console.log(deDolarASoles(75));

// //4
// function areaDeUnRectangulo(base, altura){
//     let area = base * altura;
//     return area;
// }

// function perimetroDeUnRectangulo(base, altura){
//     let perimetro = 2 * (base + altura);
//     return perimetro;
// }

// console.log(`El area del rectandulo es: ${areaDeUnRectangulo(5, 3)}`);
// console.log(`El perimetro del rectandulo es: ${perimetroDeUnRectangulo(5, 3)}`);


// //5 
// function areaDeUnCirculo(radio){
//     let areaCirculo = 3.14 * (radio * radio);
//     return areaCirculo;
// }

// console.log(`El area del circulo es: ${areaDeUnCirculo(4)}`);

// //6
// function tablaDeMultiplicar(numero){
//     console.log(`Tabla de multiplicar del ${numero}:`);
//     for (let i = 1; i <= 12; i++) {
//         console.log(`${numero} x ${i} = ${numero * i}`);
//     }
// }

// tablaDeMultiplicar(5);


//------------------------
//Desafio
//------------------------

//1
// let listaGenerica = [];

// //2
// let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// //3
// lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');

// //4
// function mostrarLenguajes() {
//     console.log('Lista Lenguajes de programación:');
//     console.log(lenguajesDeProgramacion);
// }

// mostrarLenguajes();


// //5 Elementos de la lista de forma inversa

// function mostrarLenguajesInverso() {
//     console.log('Lista Lenguajes de programación en orden inverso:');
//     console.log(lenguajesDeProgramacion.slice().reverse());
// }

// mostrarLenguajesInverso();

// //6

// let listaNumerosDesafio = [1, 2, 3, 4, 5, 6];

// function calcularPromedio() {
//     let suma = 0;
//     for (let i = 0; i < listaNumerosDesafio.length; i++) {
//         suma += listaNumerosDesafio[i];
//     }

//     let promedio = suma / listaNumerosDesafio.length;
//     return console.log(`El promedio de los números del 1 al ${listaNumerosDesafio.length} es: ${promedio}`);;
// }

// calcularPromedio();

// // 7
// let listaMaxYMin = [10, 5, 17, 75, 2];
// function numeroMayorYNumeroMenor() {
//     let numeroMayor = Math.max(...listaMaxYMin);
//     let numeroMenor = Math.min(...listaMaxYMin);
//     console.log(`El número mayor es: ${numeroMayor}`);
//     console.log(`El número menor es: ${numeroMenor}`);
// }

// numeroMayorYNumeroMenor();

// //8

// function sumaElementosArreglo(){
//     let suma = 0;
//     for (let i = 0; i < listaMaxYMin.length; i++) {
//         suma += listaMaxYMin[i];
//     }
//     return console.log(`La suma de los elementos del arreglo es: ${suma}`);
// }

// sumaElementosArreglo();

// //9
// let arreglNumeros = [1, 2, 3, 4, 5];
// function posicionElementoEnArreglo(numero) {
//     let posicion = arreglNumeros.indexOf(numero);
//     if (posicion !== -1) {
//         console.log(`El número ${numero} se encuentra en la posición ${posicion}`);
//     } else {
//         console.log(`-1 `);
//     }
// }

// posicionElementoEnArreglo(5);

// //10
// let listaNum1 = [1, 2, 3];
// let listaNum2 = [4, 5, 6];

// function sumarElementosDeDosListas() {
//     if (listaNum1.length !== listaNum2.length) {
//         console.log('Las listas deben tener la misma longitud');
//         return;
//     } else {
//         const listaSuma = [];
//         for (let i = 0; i < listaNum1.length; i++) {
//             listaSuma.push(listaNum1[i] + listaNum2[i]);
//         }
//         console.log('La suma elemento a elemento es:', listaSuma);
//         return listaSuma;
//     }
// }

// sumarElementosDeDosListas();

// //11

// let listaNum3 = [1, 2, 3, 4, 5];

// function cuadradoDeElementos() {
//     let listacuadrados = [];
//     for (let i = 0; i < listaNum3.length; i++) {
//         listacuadrados.push(listaNum3[i] * listaNum3[i]);
//     }
//     return console.log(listacuadrados);
// }

// cuadradoDeElementos();