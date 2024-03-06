//validación del formulario:
// CapturaMOS ELEMENTOS DOM:
const usuario = document.getElementById('usuario');
const password1 = document.getElementById('password');
const password2 = document.getElementById('password2');
const login =  document.getElementById("login");

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

function comprovaContrassenyesSonIguals(input1, input2){

    if(input1.value !== input2.value){
        let mensaje = `${prenNomInput(input2)} ha de ser igual a ${prenNomInput(input1)}`;

        mostraError(input2, mensaje);    
    }
}

// Evento:
form.addEventListener('submit', (e)=>{

    e.preventDefault(); // evitamos que recargue el formulario refrescando

    esObligatori([usuario, password1, password2]);
    comprovaLongitud(usuario, 6, 10)
    comprovaLongitud(password1, 6, 25);
    comprovaLongitud(password2, 6, 25);
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

const usuarios = JSON.parse(localStorage.getItem('usuarios'));

//evento comprovar si el usuario existe y cambiar el estado a true (conectado)
login.addEventListener('click', (e) => {
    e.preventDefault(); 
       
    usuarios.forEach(element => {
        if(element['usuario'] == usuario){
            element['estado'] = true;
        
        };
    });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    
    window.location.href="./inicio.html";
});




   