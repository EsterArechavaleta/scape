//validación del formulario:
// CapturaMOS ELEMENTOS DOM:
const form = document.getElementById('form');
const nombreUsuario = document.getElementById('nombreusuario');
const usuario = document.getElementById('usuario');
const email = document.getElementById('email');
const password1 = document.getElementById('password');
const password2 = document.getElementById('password2');



// FUNCIONS
// función para hacer obligatório el contenido
function esObligatori(input){

    if(input.value.trim() === ''){

        mostraError(input, 'es obligatorio');
    }
}

function esObligatori(inputArray){

    inputArray.forEach((input)=>{
        if(input.value.trim() === ''){

            mostraError(input, `${prenNomInput(input)} es obligatorio`);

        }else{

            mostraCorrecte(input);
        }
    });
}

function comprovaLongitud(input, min, max){

    if(input.value.length < min){
        mostraError(input, `${prenNomInput(input)} ha de tenir un mínim de ${min} caracters.`);
    
    }else if(input.value.length > max){

        mostraError(input, `${prenNomInput(input)}  ha de tenir menys de ${max}caracters.`);

    }else{
        mostraCorrecte(input);
    }
}

function esEmailValid(input){

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // Validamos email 
    if(re.test(input.value.trim())){

        mostraCorrecte(input);

    }else{
       let mensaje = `${prenNomInput(input)} no tiene el formato correcto.`;

       mostraError(input, mensaje);
    }
}

function comprovaContrassenyesSonIguals(input1, input2){

    if(input1.value !== input2.value){
        let mensaje = `${prenNomInput(input2)} ha de ser igual a ${prenNomInput(input1)}`;

        mostraError(input2, mensaje);    
    }
}

// Evento:
form.addEventListener('submit', (e)=>{

    e.preventDefault(); // evitamos que recargue el formulario refrescando

    esObligatori([nombreUsuario, usuario, email, password1, password2]);

    comprovaLongitud(nombreUsuario, 3, 15);
    comprovaLongitud(usuario, 6, 10)
    comprovaLongitud(password1, 6, 25);
    comprovaLongitud(password2, 6, 25);
    esEmailValid(email);

    comprovaContrassenyesSonIguals(password1, password2);
});

function mostraError(input, mensaje){

    // Capturara el padre del elemento, form-control
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const label = formControl.querySelector('label');
    // Capturamos el tag small, al no ser clase no lleva punto
    const small = formControl.querySelector('small');

    small.innerText = mensaje;

}

function mostraCorrecte(input){
        const formControl = input.parentElement;
        formControl.className = 'form-control correcte';
}

function prenNomInput(input){
    return input.id.charAt(0).toUpperCase() + 
    input.id.slice(1);
}


//Creamos variable para recoger la info del formulario de registro
const registro =document.querySelector('registro'); 
//Creamos la funcion para al dar al boton registrar, guardar los datos en el localStorage
form.addEventListener('submit', (e) => {
    e.preventDefault();                           
    
    const nombreUsuario = document.querySelector('#nombreusuario').value;
    const usuario = document.querySelector('#usuario').value;
    const email = document.querySelector('#email').value;
    const password1 = document.querySelector('#password').value;
    const estado= true;
    const quizz = null;
    const colgado = null;
    
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || []; 

    //creamos constante para comprobar si un usuario ya está registrado
    const usuariosRegistrados = usuarios.find(user => user.usuario === user);

    if(usuariosRegistrados){
        return alert ("El usuario ya está registrado")
    };

    usuarios.push ({nombreUsuario: nombreUsuario, email: email, usuario: usuario, password: password1, estado: true, quizz: null, colgado: null});
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert ('Usuario registrado con éxito');

    window.location.href = "index.html";

});