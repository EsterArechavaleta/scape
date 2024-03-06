// Captuar elementos del DOM
const contenidor = document.querySelector('.contenidor');
const categoria = document.querySelector('.categoria');
const letra = document.querySelectorAll('.letra'); // cada letra del teclado para elegir
const contadorIntentos = document.getElementById('contadorIntentos'); // contador de intentos restantes
//const palabraSecreta = ['PERRO', 'NENE', 'TORTUGA', 'COCHE']; // array de palabras secretas para elegir
const inicio = document.getElementById('inicio'); // boton para reiniciar el juego
const palabra = document.getElementById('palabra');// para mostrar la palabra en pantalla y cambiar por guiones
const contadorErrores = document.getElementById('contadorErrores'); // contador de las letras erróneas
const segundos = document.getElementById('segundos'); // el hueco del reloj para los segundos
const minutos = document.getElementById('minutos'); // hueco para los minutos
const horas = document.getElementById('horas'); // hueco para las horas
segundos.innerText = '00'; // valor inicial de segundos
minutos.innerText = '01'; // valor inicial de minutos
horas.innerText = '00'; // valor inicial de horas
let letrasAcertadas = [];
let arrayIntento = [];

const envoltorio_victoria = document.getElementById('envoltorio-victoria');
const envoltorio_derrota = document.getElementById('envoltorio-derrota');
const cerrar = document.getElementById('cerrar-popup');
//elementos para la cuenta atras
let s;
let m;
let h;
let fecha = new Date();
let cuentaAtra;
// Crear variable para guardar palabra seleccionada
let  palabraSelect = "";
// palabras para temático
const categoriaMusica = ['CRAMBERRIES', 'OASIS', 'MECANO', 'NIRVANA', 'RADIOHEAD'];
const categoriaCine = ['SEVEN', 'MATRIX', 'TITANIC', 'WONCA', 'TESIS'];
const categoriaTelevision = ['TELETUBBIES', 'URGENCIAS', 'FUTURAMA', 'FRIENDS', 'SEINFELD'];
const categoriaVJuegos = ['MORTALCOMBAT', 'SUPERMARIO', 'STREETFIGHTER', 'GRANTURISMO', 'FINALFANTASY'];


/* FUNCIONES */

//función para elegir la palabra secreta del array y pasar las letras a mayúsculas para comparar
function eligePalabra(array) {
  palabraSelect = array[Math.floor(Math.random()*array.length)];
  palabraSelect = palabraSelect.toUpperCase();
  //console.log(palabraSelect);
  ponGuion(palabraSelect);
  //console.log(palabra);
}

//función para sustituir las letras de la palabra por guiones en pantalla
function ponGuion (palabraSelect) {
  arrayIntento = new Array(palabraSelect.length);
  arrayIntento.fill('_');
  palabra.innerHTML = " ";
  for (let i = 0; i<arrayIntento.length; i++) {
    
    palabra.innerHTML += " " + arrayIntento[i];
  };
}

//función para cambiarles la clase fallada o acertada para cambiarles el color
function intento(letra) {
  let contador =0;
    for (let i = 0; i < palabraSelect.length; i++){
      if (palabraSelect[i] == letra.innerHTML){
        letrasAcertadas.push(palabraSelect[i]);
        palabra[i] = letra;
        contador++;
      }
    }
    console.log(letrasAcertadas);
    if (contador > 0){
    letra.classList.add('acertada');
    actualizarPalabra(letra)
  } else {
    contadorErrores.innerHTML = parseInt(contadorErrores.innerHTML) + 1;
    contadorIntentos.innerHTML = contadorIntentos.innerHTML - 1;
    letra.classList.add('fallada');
  }
  mostrarResultado();

}

//funcion para colocar las letras acertadas en su sitio
function actualizarPalabra(letra){
  for(let i = 0; i < arrayIntento.length; i++){
    if(letra.classList. contains('acertada')){
      if(letra.innerHTML == palabraSelect[i]){
        arrayIntento[i] = letra.innerHTML;
      }
    }
  }
  palabra.innerHTML = null;
  for ( let i = 0; i < arrayIntento.length; i++){
    palabra.innerHTML += " " + arrayIntento[i];
  }
}

//funcion para volver las letras al inicio quitando color
function borraColor() {
  letra.forEach ( (lletra, indice) => {
    if( lletra.classList.contains('acertada') || lletra.classList.contains('fallada')){
      lletra.classList.value = 'letra';
    }
  })
}

//funciones para la cuenta atrás de los 
function cuentaAtras() {
  if (m == 0 && h ==0 && s == 0) {
    segundos.innerText = '00';
    minutos.innerText = '00';
    horas.innerText = '00';
  } else {
    s = s % 60;
    if (s == 0){
      m--;
      s = 60;
    }
    s--;
  }

  if (s < 10) { 
    s = '0' + s;
  }

  if (m < 10) {
    m = '0' + m;
  }
  
  fecha.setSeconds(s);
  segundos.innerText = s;
  minutos.innerText = m;
  if (m.length > 2) {
    minutos.innerText = '00';
  }
  if (s.length > 2){
    segundos.innerText = '00';
  }
}

function empezarCuentaAtras() {
  fecha.setHours(0, 1, 0, 0);
  h = fecha.getHours();
  m = fecha.getMinutes();
  s = fecha.getSeconds();
  segundos.innerText = '00';
  minutos.innerText = '01';
  horas.innerText = '00';
  cuentaAtra = setInterval(cuentaAtras, 1000);

}

//funcion para mostrar los pop up de victoria o derrota y parar la cuenta atrás
function mostrarResultado() {
  if(letrasAcertadas.length == palabraSelect.length || contadorIntentos.innerHTML == '0' || (m == "00" && s == "00")){

    clearInterval(cuentaAtra);

    if (letrasAcertadas.length == palabraSelect.length) {
    
      //mostrar pop up victoria
      envoltorio_victoria.style.display = 'block';
      // Click sobre el boton para cerrar el pop-up
      cerrar.addEventListener('click', () => {
      envoltorio_victoria.style.display = 'none';
      location.reload();
      });
      //Click sobre el envoltorio -> cerrar el pop-up
      envoltorio_victoria.addEventListener('click', () => {
      envoltorio_victoria.style.display = 'none';
      location.reload();
      });
    }

    if (contadorIntentos.innerHTML == '0' ) {
    
      //mostrar pop up derrota
      envoltorio_derrota.style.display = 'block';
      // Click sobre el boton para cerrar el pop-up
      cerrar.addEventListener('click', () => {
      envoltorio_derrota.style.display = 'none';
      location.reload();
      });
      //Click sobre el envoltorio -> cerrar el pop-up
      envoltorio_derrota.addEventListener('click', () => {
      envoltorio_derrota.style.display = 'none';
      location.reload();
      });
    } 
  
    if (m == "00" && s == "00") {
      //mostrar pop up derrota
      envoltorio_derrota.style.display = 'block';
      // Click sobre el boton para cerrar el pop-up
      cerrar.addEventListener('click', () => {
      envoltorio_derrota.style.display = 'none';
      location.reload();
      });
      //Click sobre el envoltorio -> cerrar el pop-up
      envoltorio_derrota.addEventListener('click', () => {
      envoltorio_derrota.style.display = 'none';
      location.reload();
      });
    }
  }
}

/* EVENTOS */

contenidor.addEventListener('click', (e) => {
  console.log(e.target.classList.value);
  if(e.target.classList.contains('letra')
      && e.target.classList.contains('fallada')) {
    
    actualizaLetraFallada();
  }else if(e.target.classList.contains('letra')){
    console.log(e.target.innerHTML);
    intento(e.target);
  }
});

categoria.addEventListener('click', (e) => {
  if(e.target.value == 'musica') {
    eligePalabra(categoriaMusica);
  }

  if(e.target.value == 'cine') {
    eligePalabra(categoriaCine);
  }

  if(e.target.value == 'television') {
    eligePalabra(categoriaTelevision);
  } 

  if(e.target.value == 'videoJuegos') {
    eligePalabra(categoriaVJuegos);
  }
});

empezar.addEventListener('click', iniciaJuego);

function iniciaJuego() {
  clearInterval(cuentaAtra);
  palabra.innerHTML =" ";
  ponGuion(palabraSelect);
  empezarCuentaAtras();
  contadorIntentos.innerHTML = 7;
  contadorErrores.innerHTML = 0;
  borraColor();
  categoria.options[0].selected = 'selected';
  eligePalabra();
  //mostrarResultado();
  //clearInterval();
};

