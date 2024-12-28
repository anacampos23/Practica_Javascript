/*
ALERT
*/
//Utilizamos el objeto 'window'
window.alert("Bienvenido/a a mi web!");

/*
FECHA ACTUAL
*/

/*Selecciono el elemento del HTML mediante el objeto 'document' que representa el DOM
y getElementById para seleccionar justo la parte que quiero mediante el Id.
*/
const fechaElemento = document.getElementById("fecha");

//Creo un objeto Date() para obtener la fecha actual
const fechaActual = new Date();

//Formateo la fecha para que quede bonita
const opciones = { year: 'numeric', month: 'numeric', day: 'numeric' };
const fechaFormateada = fechaActual.toLocaleDateString('es-ES', opciones);

//textContent establece o devuelve el contenido textual de un elemento
fechaElemento.textContent = fechaFormateada;


/*
PONER EN MAYÚSCULAS
*/
function modificarTexto() {
    //Selecciono el elemento mediante el objeto document y getElementById
    const textoMinuscula = document.getElementById("textoModificar");
  
    // Obtener el contenido del elemento como una cadena de texto
    const contenido = textoMinuscula.textContent;
  
    // Convertir el contenido a mayúsculas utilizando el objeto 'String'
    const textoMayuscula = contenido.toUpperCase();
  
    // Asignar el texto en mayúsculas al elemento
    textoMinuscula.textContent = textoMayuscula;
  }

    
/*
 Cambiar el tamaño de la ventana del navegador cuando se haga clic en un botón.
 No podemos cambiar directamente el tamaño de la ventana principal del navegador usando 'window'
 al tener incompatibilidad con los navegadores actuales. Por ello, usamos el objeto 'window' para 
 crear una nueva ventana a la que posteriormente añadiremos los cambios
 */

//Primero abrimos una nueva ventana 
let nuevaVentana = document.getElementById("abrirVentanaBtn"); // Selecciono el elemento mediante el objeto document y getElementById

//Utilizamos un evento del ratón para el botón
nuevaVentana.addEventListener("click", function () {

  nuevaVentana = window.open('', '', 'width=400,height=400');   // Objeto 'window' que abre una nueva ventana con tamaño inicial
  nuevaVentana.document.write('<p>Esta es una nueva ventana</p>');
});


//Utilizamos un evento del ratón para el botón
document.getElementById("cambiarTamañoBtn").addEventListener("click", function () {
  if (nuevaVentana && !nuevaVentana.closed) {
    // Cambia el tamaño de la nueva ventana si está abierta
    nuevaVentana.resizeTo(1000, 600);
  } else {
    alert("Primero tienes que abrir la nueva ventana"); //Aparece este mensaje si la ventana no está abierta
  }
});
  

/*
Genera nuevos elementos y textos en la página a través del DOM 
cuando se complete una acción, como un formulario.
*/

//FORMULARIO
let formulario = document.getElementById("miFormulario"); // Selecciono el formulario 
let cambio = document.getElementById("cambio"); // Selecciono el contenedor

// Evento del formulario
formulario.addEventListener("submit", function(event){
  //'confirm()' para interactuar con el usuario
  let respuesta = confirm("¿Quieres que te salude por tu nombre?");
  if (respuesta) { 

    //Si dice que sí
    alert("Genial, ahí lo tienes!");

    //Genero nuevo texto en la página a través del DOM
    event.preventDefault(); // Evitar que el formulario se envíe y se reinicie la página
    let nombre = document.getElementById("nombre").value; // Cojo el valor del nombre

    // Limpio el contenido previo antes de agregar uno nuevo
    cambio.innerHTML = "";

    const nuevoParrafo = document.createElement("p"); // Creo el nuevo párrafo
    nuevoParrafo.textContent = "Hola, " + nombre + "!"; // Le asigno el texto al nuevo párrafo
    cambio.appendChild(nuevoParrafo); // Agrego el nuevo párrafo al contenedor

  } else { 
    //Si dice que no no se saluda.
  alert("Has cancelado la acción.");
  event.preventDefault(); // Evitar que el formulario se envíe y se reinicie la página
  }

});







  