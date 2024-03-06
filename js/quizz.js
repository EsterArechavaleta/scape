const preguntas = [
    {
        pregunta: "Primer nombre artístico de Will Smith",
        respuestaCorrecta: "Fresh Prince",
        respuestaIncorrecta: "Smelly Prince",
        pista: "Como las perlas",
    },
    {
        pregunta: "¿Quién fue la cantante del tema central de la película Titanic?",
        respuestaCorrecta: "Celine Dion",
        respuestaIncorrecta: "Whitney Houston",
        pista: "Es canadiense",
    },
    {
        pregunta: "¿Quién fue la protagonista e intérprete del tema central de la película El Guardaespaldas?",
        respuestaCorrecta: "Whitney Houston",
        respuestaIncorrecta: "Celine Dion",
        pista:"Es estadounidense",
    },
    {
        pregunta: "¿Cuál es el nombre del programa musical presentado por el cantante Jesús Vazquez?",
        respuestaCorrecta: "La Quinta Marcha",
        respuestaIncorrecta: "Con Mucha Marcha",
        pista:"Sin claxon",
    },
    {
        pregunta: "¿Quién fue el actor que en 1996 protagonizó una película junto a la actriz Claire Daines, en la cual esta hacía de Julieta?",
        respuestaCorrecta: "Leonardo diCaprio",
        respuestaIncorrecta: "Brad Pitt",
        pista: "¿A quién ama Gilbert Grape?",
    },
    {
        pregunta: "Cantante que aparecía en los anuncios de Trinaranjus y Cacaolat",
        respuestaCorrecta: "Sergio Dalma",
        respuestaIncorrecta: "Rosendo",
        pista: "Se casó con una modelo",
    },
    {
        pregunta: "Práctico accesorio muy de moda e icónico en un actor de EEUU que él mismo ha parodiado en el cine",
        respuestaCorrecta: "Riñonera",
        respuestaIncorrecta: "Walkman",
        pista:"Piedra",
    },
    {
        pregunta: "Nombre del jugador de fútbol por el que recibe su nombre la 'Quinta del buitre'.",
        respuestaCorrecta: "Emilio Butragueño",
        respuestaIncorrecta: "Emilio Buitrago",
        pista: "Real Madrid",
    },
    {
        pregunta: "¿Cuál es el nombre de la mascota de los juegos olímpicos que tuvieron lugar en Barcelona en 1992?",
        respuestaCorrecta: "Cobi",
        respuestaIncorrecta: "Tobi",
        pista: "Parece de perro",
    },
    {
        pregunta: "¿Cuál es el nombre de la mascota de la Exposición Universal que tuvo lugar en Sevilla en 1992?",
        respuestaCorrecta: "Curro",
        respuestaIncorrecta: "Pancho",
        pista: "Típico andaluz",
    },
    {
        pregunta: "Nombre del actor protagonista de la saga más épica de los 90, que no es una falla en...",
        respuestaCorrecta: "Keanu Reeves",
        respuestaIncorrecta: "Johny Depp",
        pista: "No ha estado nunca casado",
    },
    {
        pregunta: "Serie de dibujos animados basada en una novela de Alejandro Dumas",
        respuestaCorrecta: "Dartacan",
        respuestaIncorrecta: "Milady",
        pista: "Eran uno, dos y tres...",
    },
    {
        pregunta: "La serie de dibujos 'Los trotamúsicos' está basado en que cuento de los hermanos Grimm",
        respuestaCorrecta: "Los músicos de Bremen",
        respuestaIncorrecta: "Los músicos de Viena",
        pista: "No están hechos de pan",
    },
    {
        pregunta: "¿Dave Grohl del grupo Foo Fighters fué en los 90 batería de qué famoso grupo de grunge?",
        respuestaCorrecta: "Nirvana",
        respuestaIncorrecta: "Blur",
        pista: "Estado de meditación",
    },
    {
        pregunta: "El grupo Gorillaz está creado por el cantante del grupo británico Blur, ¿cuál es su nombre?",
        respuestaCorrecta: "Damon Albarn",
        respuestaIncorrecta: "Richard Ashcroft",
        pista: "No está hecho de ceniza",
    },
];

//variables necesarias
//variable  para saber en qué parte del array estamos:
let indexPreguntaActual = 0;
//contadores de respuestas y pistas
let respuestasCorrectas = 0;
let respuestasIncorrectas = 0;

const envoltorio_victoria = document.getElementById('envoltorio-victoria');
const envoltorio_derrota = document.getElementById('envoltorio-derrota');
const cerrar = document.getElementById('cerrar-popup');


const preguntaPropuesta = document.getElementById("preguntaPropuesta");
const btnIzquierdo = document.getElementById("btnIzquierdo");
const btnDerecho = document.getElementById("btnDerecho");
const mensaje = document.getElementById("mensaje");
const btnReiniciar = document.getElementById("btnReiniciar");
const crono = document.getElementById("crono");

let s;
let m;
let h;
let fecha = new Date();
let cuentaAtra;

function mezclaRespuestas(correcta, incorrecta) { // para poner las preguntas y respuestas en los lados aleatoriamente
    const respuestas = [correcta, incorrecta];
    respuestas.sort(() => Math.random() - 0.5);
    return respuestas;
}

function muestraPregunta() { //comprueba que estamos dentro del array de preguntas
    if(indexPreguntaActual < preguntas.length) {
        const preguntaActual = preguntas[indexPreguntaActual];
        preguntaPropuesta.textContent = preguntaActual.pregunta;//coloca la pregunta en el primer div

        const [mezcladoCorrecto, mezcladoIncorrecto] = mezclaRespuestas( // vuelca cada elemento en los botones 
            preguntaActual.respuestaCorrecta,
            preguntaActual.respuestaIncorrecta
        );

        btnIzquierdo.textContent = mezcladoCorrecto;
        btnDerecho.textContent = mezcladoIncorrecto;
    } else {
        if(respuestasCorrectas >= 10) {
            clearInterval(cuentaAtra);
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
        };

        if(respuestasIncorrectas>= 5){
            clearInterval(cuentaAtra);
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

        if(m == "00" && s == "00"){
            clearInterval(cuentaAtra);
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
        
        btnIzquierdo.style.display = "none"; //ocultamos estos botones y mostramos el de reiniciar
        btnDerecho.style.display = "none";
        btnReiniciar.style.display = "block";
        crono.style.display = "none";
    }
}

//funcion que verifica las respuestas
function compruebaRespuesta (respuestaSeleccionada) {

    const preguntaActual = preguntas[indexPreguntaActual];

    if(respuestaSeleccionada === preguntaActual.respuestaCorrecta) {
        respuestasCorrectas++;
    } else {
        respuestasIncorrectas++;
    }

    indexPreguntaActual++; // pasamos a la pregunta siguiente

    // if(respuestasCorrectas === preguntas.length || respuestasCorrectas == 10 || (m == "00" && s == "00")){
    //     clearInterval(cuentaAtra);
    //     //el juego ha terminado
    //     if(respuestasCorrectas === preguntas.length ) {
    //         //mostrar pop up victoria
    //         envoltorio_victoria.style.display = 'block';
    //         // Click sobre el boton para cerrar el pop-up
    //         cerrar.addEventListener('click', () => {
    //         envoltorio_victoria.style.display = 'none';
    //         location.reload();
    //         });
    //         //Click sobre el envoltorio -> cerrar el pop-up
    //         envoltorio_victoria.addEventListener('click', () => {
    //         envoltorio_victoria.style.display = 'none';
    //         location.reload();
    //         });
    //     };
    //     if(respuestasCorrectas >= 10){
    //         //mostrar pop up victoria
    //         envoltorio_victoria.style.display = 'block';
    //         // Click sobre el boton para cerrar el pop-up
    //         cerrar.addEventListener('click', () => {
    //         envoltorio_victoria.style.display = 'none';
    //         location.reload();
    //         });
    //         //Click sobre el envoltorio -> cerrar el pop-up
    //         envoltorio_victoria.addEventListener('click', () => {
    //         envoltorio_victoria.style.display = 'none';
    //         location.reload();
    //         });
    //     };
        
    //     if(respuestasIncorrectas>= 5){
    //         //mostrar pop up derrota
    //         envoltorio_derrota.style.display = 'block';
    //         // Click sobre el boton para cerrar el pop-up
    //         cerrar.addEventListener('click', () => {
    //         envoltorio_derrota.style.display = 'none';
    //         location.reload();
    //         });
    //         //Click sobre el envoltorio -> cerrar el pop-up
    //         envoltorio_derrota.addEventListener('click', () => {
    //         envoltorio_derrota.style.display = 'none';
    //         location.reload();
    //         });

    //     };
        
    //     if(m == "00" && s == "00"){
    //         //mostrar pop up derrota
    //         envoltorio_derrota.style.display = 'block';
    //         // Click sobre el boton para cerrar el pop-up
    //         cerrar.addEventListener('click', () => {
    //         envoltorio_derrota.style.display = 'none';
    //         location.reload();
    //         });
    //         //Click sobre el envoltorio -> cerrar el pop-up
    //         envoltorio_derrota.addEventListener('click', () => {
    //         envoltorio_derrota.style.display = 'none';
    //         location.reload();
    //         }); 
    //     };
    //    // clearInterval(cuentaAtra);

    muestraPregunta();
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

//eventos
btnIzquierdo.addEventListener("click", () => compruebaRespuesta(btnIzquierdo.textContent));
btnDerecho.addEventListener("click", () => compruebaRespuesta(btnDerecho.textContent));

btnReiniciar.addEventListener("click", () =>{
    clearInterval(cuentaAtra);
    indexPreguntaActual = 0;
    respuestasCorrectas = 0;
    respuestasIncorrectas = 0;
    //mensaje.textContent = "";
    btnIzquierdo.style.display = "inline-block";
    btnDerecho.style.display = "inline-block";
    btnReiniciar.style.display = "none";
   empezarCuentaAtras();
    muestraPregunta();
    
});




//Comenzar el juego
//muestraPregunta();
