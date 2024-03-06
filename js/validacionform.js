// CapturaMOS ELEMENTOS DOM:
const form = document.getElementById('form');
const nomUsuari = document.getElementById('nomusuari');
const email = document.getElementById('email');
const password1 = document.getElementById('password');
const password2 = document.getElementById('password2');


// FUNCIONS
// Per fer obligatori que possin contingut
function esObligatori(input){

    // Trim recorta los espacios en blanco por delante y por detrás
    if(input.value.trim() === ''){

        mostraError(input, 'és obligatori');
    }
}

function esObligatori(inputArray){

    inputArray.forEach((input)=>{
        if(input.value.trim() === ''){
            mostraError(input, `${prenNomInput(input)} és obligatori`);

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
       let missatge = `${prenNomInput(input)} no té el format correcte.`;

       mostraError(input, missatge);
    }
}

function comprovaContrassenyesSonIguals(input1, input2){

    if(input1.value !== input2.value){
        let missatge = `${prenNomInput(input2)} ha de ser igual a ${prenNomInput(input1)}`;

        mostraError(input2, missatge);    
    }
}

// Evento:
form.addEventListener('submit', (e)=>{

    // Evitar que haga el evento por defecto que es refrescar
    e.preventDefault();

    // esObligatori(nomUsuari);
    // esObligatori(email);
    // esObligatori(password1);
    // esObligatori(password2);
    esObligatori([nomUsuari, email, password1, password2]);

    comprovaLongitud(nomUsuari, 3, 15);
    comprovaLongitud(password1, 6, 25);
    comprovaLongitud(password2, 6, 25);
    esEmailValid(email);

    comprovaContrassenyesSonIguals(password1, password2);
});

function mostraError(input, missatge){

    // Capturara el pare del eelement, el pare de nom usuari es el form-control
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const label = formControl.querySelector('label');
    // Capturamos el tag small, al no ser clase no lleva punto
    const small = formControl.querySelector('small');

    small.innerText = missatge;

}

function mostraCorrecte(input){
        const formControl = input.parentElement;
        formControl.className = 'form-control correcte';
}

function prenNomInput(input){
    return input.id.charAt(0).toUpperCase() + 
    input.id.slice(1);
}