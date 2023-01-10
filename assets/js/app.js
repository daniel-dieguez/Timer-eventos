const input = document.getElementById("evento");
const btn = document.getElementById("btnEnviar");
const ul = document.querySelector("ul");
const vacio = document.getElementById("nada");
const datee = document.getElementById('date');


btn.addEventListener("click", (e) => {
  event.preventDefault();
  const texto = input.value;
  const dia = datee.value;


  if (texto !== ""){
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerHTML = `${texto} ${dia} `;

    li.appendChild(p);
    li.appendChild(btdelete());
    ul.appendChild(li);

    form.reset();
    vacio.style.display = "none";
    console.log('elemento creado');
  }
});


function btdelete() {
  const btndelete = document.createElement("button");
  btndelete.innerHTML = "x";

  btndelete.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);

    const items = document.querySelectorAll( 'li');

    if (items.length === 0){
      vacio.style.display = 'block';
    }
  console.log('elemento eliminado');
  });
  return btndelete;
}
