// CapturaMOS ELEMENTOS DOM:

const logout =  document.getElementById("logout");


const usuarios = JSON.parse(localStorage.getItem('usuarios'));

//evento
logout.addEventListener('click', (e) => {
    e.preventDefault();                           
    console.log('hola');
    usuarios.forEach(element => {
        if(element['estado'] == true){
            element['estado'] = false;
        };
        window.location.href="./index.html";
    });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    
});
