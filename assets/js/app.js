
const formulario = document.getElementById('evento');
const btnenviar = document.getElementById('btnEnviar');


btnenviar.addEventListener('click', () =>{
  event.preventDefault();
  
console.log('first')

  alert(`hola ${formulario.value}`);
  form.reset();
})

