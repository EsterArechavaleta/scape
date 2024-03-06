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
let contadorDiferencias = document.getElementById('contadorDiferencias');
let cuentaAtra;
let contDiferencias = 5;
const envoltorio_victoria = document.getElementById('envoltorio-victoria');
const envoltorio_derrota = document.getElementById('envoltorio-derrota');
const cerrar = document.getElementById('cerrar-popup');
const lazo = document.getElementById('lazo');
const faldonMarron = document.getElementById('faldonMarron');
const faldonNaranja = document.getElementById('faldonNaranja');
const collar = document.getElementById('collar');
const adornoPelo = document.getElementById('adornoPelo');
let empezado = false;

//funciones para la cuenta atrás

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

//trabajamos con la imagen
let imagen = document.querySelector('#diferencias5')

imagen.addEventListener('click', (e)=> {
  
    let objCoordenadas = obtenCoordenadas(e);
  
   
});
  
function lazos () {
  if(empezado) {
    //mostrar palabra en pantalla
    lazo.style.display = 'block';
    contDiferencias--;
    contadorDiferencias.innerHTML = contDiferencias;
    mostraResult();
  }
  
}

function marron() {
  if(empezado) {
    //mostrar palabra en pantalla
    faldonMarron.style.display = 'block';
    contDiferencias--;
    contadorDiferencias.innerHTML = contDiferencias;
    mostraResult();
  }
  
};

function naranja() {
  if(empezado) {
    //mostrar palabra en pantalla
    faldonNaranja.style.display = 'block';
    contDiferencias--;
    contadorDiferencias.innerHTML = contDiferencias;
    mostraResult();
  }
  
};

function collares() {
  if(empezado) {
    //mostrar palabra en pantalla
    collar.style.display = 'block';
    contDiferencias--;
    contadorDiferencias.innerHTML = contDiferencias;
    mostraResult();
  }
 
};

function adorno() {
  if(empezado) {
    //mostrar palabra en pantalla
    adornoPelo.style.display = 'block';
    contDiferencias--;
    contadorDiferencias.innerHTML = contDiferencias;
    mostraResult();
  }
 
};

function mostraResult(){
  if((m == "00" && s == "00") || contadorDiferencias.innerHTML == '0'){
    clearInterval(cuentaAtra);

    if(contDiferencias === 0){
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

  }

}
empezar.addEventListener('click', iniciaDiferencias);
  
  
function iniciaDiferencias () {
    clearInterval(cuentaAtra);
    empezado= true;
    empezarCuentaAtras();
    contadorDiferencias.innerHTML = 5;
};
  