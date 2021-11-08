
// import data from './data/lol/lol.js';
import data from "./data/pokemon/pokemon.js";
// import data from './data/rickandmorty/rickandmorty.js';
import { filtroPokemon } from "./data.js";
//console.log(example, data);

const pokemon = data.pokemon; //variable que hacer referencia a la data completa de pokemon//
let newPokemon = pokemon;  //
//console.log("pokemon", pokemon);

const containerA = document.getElementById("contenedor"); //se llama "algo que esta en html"
const myStr = "special-attack"
const drawCard = (pokemon1) => {
  return `     
<div class ='contenedor-cartas'>

<div class ='card'>
<div class = 'front'>
<h3 class ='nombre'> ${pokemon1.name}</h3>
<p  class ='numero'> ${pokemon1.num} </p>
<img src = ${pokemon1.img} class ='foto'/> 
<p class =  'tipo'>${pokemon1.type} </p>
</div>

<div class = 'back'>
<div class = 'resistencia'>
<h1>Resistencia</h1> 
<p class = resistencia>${pokemon1.resistant}</p>
</div>

<div class ='debilidad'>
<h1>Debilidad</h1>

<p class= 'debilidad'>${pokemon1.weaknesses}</p>

</div>

</div>
</div> 

`;
};

const forFuction = (dataPokemon) => {
  containerA.innerHTML = "";
  for (let i = 0; i < dataPokemon.length; i++) {
    containerA.innerHTML += drawCard(dataPokemon[i]); //entrega el argumento//
  }
};
forFuction(newPokemon);

// flipcard
const flip = () =>{
const cards = document.getElementsByClassName ("contenedor-cartas");
for (let i = 0; i<cards.length; i++){
cards[i].addEventListener ("click",function () {
cards[i].firstElementChild.classList.toggle("visible");
});
}

}
flip();

// función filtro

let opcionpokemon = document.getElementById("tipo");
opcionpokemon.addEventListener("change", (event) => {
  const selectTypePokemon = filtroPokemon(pokemon, event.target.value);
  newPokemon = selectTypePokemon;
  forFuction(selectTypePokemon);
  flip();
});