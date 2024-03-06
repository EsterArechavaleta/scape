let s;
let m;
let h;
let fecha = new Date();
const segundos = document.getElementById('segundos'); // el hueco del reloj para los segundos
const minutos = document.getElementById('minutos'); // hueco para los minutos
const horas = document.getElementById('horas'); 
segundos.innerText = '00'; // valor inicial de segundos
minutos.innerText = '01'; // valor inicial de minutos
horas.innerText = '00'; // valor inicial de horas
const inicio = document.getElementById('inicio'); // boton para reiniciar el juego
let contadorIntentos = document.getElementById('contadorIntentos');
let contIntentos = 3;
let cuentaAtra;
const marty = document.getElementById('marty');

const envoltorio_victoria = document.getElementById('envoltorio-victoria');
const envoltorio_derrota = document.getElementById('envoltorio-derrota');
const cerrar = document.getElementById('cerrar-popup');
let empezado = false;


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
};
  
function empezarCuentaAtras() {
    fecha.setHours(0, 1, 0, 0);
    h = fecha.getHours();
    m = fecha.getMinutes();
    s = fecha.getSeconds();
    segundos.innerText = '00';
    minutos.innerText = '01';
    horas.innerText = '00';
    cuentaAtra = setInterval(cuentaAtras, 1000);
  
};

function obtenCoordenadas(evento) {
  return {
      x: evento.clientX,
      y: evento.clientY
  }
};

let imagen = document.getElementById('colage2')

function mostrarResultado() {

  if( contadorIntentos.innerHTML == '0' || (m == "00" && s == "00")){
  
    clearInterval(cuentaAtra);

    if(contIntentos == 0 ) {
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
    };

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
      
    };
  };
};

imagen.addEventListener('click', ()=> {
  if(empezado){
    if(contIntentos > 0){
      contIntentos --;
    }
    contadorIntentos.innerHTML = contIntentos;
  }
  mostrarResultado();
});

marty.addEventListener('click', (e)=> {
  if(empezado) {
    clearInterval(cuentaAtra);
    //mostrar pop up victoria
    envoltorio_victoria.style.display = 'block';
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
 });

empezar.addEventListener('click', iniciaEncuentra);


function iniciaEncuentra () {
  clearInterval(cuentaAtra);
  empezado = true;
  empezarCuentaAtras();
  contadorIntentos.innerHTML = 3;
};

