function next(){
  document.getElementById("displayExplanation").style.display="none";
  document.getElementById("displayPokemonList").style.display = "block";
 }

document.getElementById("continueButton").addEventListener("click", next);

function fillElements (pokemonList, divElement){
  for(let i=0; i<pokemonList.length; i++) {
    let divPokemon = document.createElement("div");
    divPokemon.className = "pokemon";
    divPokemon.innerHTML = "<img src=\"" +pokemonList[i].img + "\">";
    divElement.insertAdjacentElement("beforeend", divPokemon);
  }
}

function showPokemons(){
  let pokemonList = POKEMON.pokemon;
  let divPokemonList = document.getElementById("listOfPokemons");
  fillElements(pokemonList, divPokemonList);
}

document.getElementById("continueButton").addEventListener("click", showPokemons);

function filterPokemons(type){
  let pokemonList = POKEMON.pokemon;
  let divPokemonList = document.getElementById("listOfPokemons");
  //clear pokemons
  divPokemonList.innerHTML = "";
  let filteredPokemons = window.dataLovers.filterByType(pokemonList, type);

  fillElements(filteredPokemons, divPokemonList);
}
