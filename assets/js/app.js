const formulario = document.getElementById("evento");
const fecha = document.getElementById("date");
const btnenviar = document.getElementById("btnEnviar");
const vacio = document.getElementById("nada");
const nuevo = document.createElement("p");
const button = document.createElement('button');

btnenviar.addEventListener("click", anadir);

function anadir() {
  event.preventDefault();
      nuevo.innerHTML = formulario.value;
      const aqui = document.getElementById("aquiso");

      aqui.appendChild(nuevo); /*Esto lo hicimo para mete a button dentro de p*/
      nuevo.appendChild(button);
      vacio.style.display = "none";
      form.reset();
};

function boton (){


}


  button.addEventListener('click',()=>{
    console.log('hola')
    const quitar = document.getElementById('aquiso');
    quitar.removeChild(nuevo);
  });