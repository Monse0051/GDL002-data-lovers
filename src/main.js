function next(){
  document.getElementById("displayExplanation").style.display="none";
  document.getElementById("displayPokemonList").style.display = "block";
 }

document.getElementById("continueButton").addEventListener("click", next);

function fillElements (pokemonList, divElement){
  for(let i=0; i<pokemonList.length; i++) {
    let divPokemon = document.createElement("div");
    divPokemon.className = "pokemon";
    divPokemon.innerHTML = "<img src=\"" +pokemonList[i].img + "\">" + "<p> </p>"+ pokemonList[i].name;
    // TODO: show pokemons information:
    // Create a callback function that prints/shows pokemon information
    //divPokemon.addEventListener("click", ()=>console.log("Pokemon callback"));
    divElement.insertAdjacentElement("beforeend", divPokemon);
  }
}

function showPokemons(){
  let pokemonList = POKEMON.pokemon;
  let divPokemonList = document.getElementById("listOfPokemons");
  fillElements(pokemonList, divPokemonList);
}

document.getElementById("continueButton").addEventListener("click", showPokemons);

function filterPokemons(){
  let pokemonList = POKEMON.pokemon;
  let divPokemonList = document.getElementById("listOfPokemons");
  //clear pokemons
  divPokemonList.innerHTML = "";
  let type = document.getElementById("typeOfPokemon").value;

  let spanishEngTypesMap = {
                            Planta:     "Grass",
                            Agua:       "Water",
                            Tierra:     "Ground",
                            Psíquico:   "Psychic",
                            Fantasma:   "Ghost",
                            Veneno:     "Poison",
                            Lucha:      "Fighting",
                            Fuego:      "Fire",
                            Bicho:      "Bug",
                            Dragón:     "Dragon",
                            Volador:    "Flying",
                            Normal:     "Normal",
                            Eléctrico:  "Electric",
                            Roca:       "Rock",
                            Hielo:      "Ice"
                          };


  let filteredPokemons = window.dataLovers.filterByType(pokemonList, spanishEngTypesMap[type]);
  fillElements(filteredPokemons, divPokemonList);
}
document.getElementById("typeOfPokemon").addEventListener("click", filterPokemons);

function averaged(){
  document.getElementById("displayPokemonList").style.display="none";
  document.getElementById("displayAverage").style.display = "block";
  let averageMsg = window.dataLovers.average();
  document.getElementById("amountAveraged").innerHTML = averageMsg;

 }

document.getElementById("average").addEventListener("click", averaged);

function goStart(){
  document.getElementById("displayPokemonList").style.display = "block";
  document.getElementById("displayAverage").style.display = "none";

}
document.getElementById("goStart").addEventListener("click", goStart);
