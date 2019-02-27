function next(){
  document.getElementById("displayExplanation").style.display="none";
  document.getElementById("displayInfoPokemons").style.display = "none";
  document.getElementById("displayPokemonList").style.display = "block";
  showPokemons();
 }

document.getElementById("continueButton").addEventListener("click", next);

function listToString(list){
  let string = "";
  for(let i=0; i<list.length - 1; i++){
    string += " " + list[i] + ",";
  }
  string += " " + list[list.length-1];
  return string;
}

function evolutionsToString(listOfEvolutions){

  let string = "";
  if(typeof listOfEvolutions === "undefined" ) {
      return "N/A";
  }

  for(let i=0; i<listOfEvolutions.length; i++){
    string +=  " " + listOfEvolutions[i].name;
  }
  return string;
}

/*
* Show Poke information
* input: pokemon, a pokemon object inside of pokemon list
* pokemon list is get from pokemon.js
*/
function showPokemonInfo(pokemon){
  document.getElementById("displayPokemonList").style.display = "none";
  document.getElementById("displayInfoPokemons").style.display = "block";

  let divPokemonInfo = document.getElementById("infoPokemons");
  let pokemonStats = divPokemonInfo.getElementsByTagName("p");

   pokemonStats[0].innerHTML = "Nombre: #" + pokemon.num + " " + pokemon.name;
   pokemonStats[1].innerHTML = "<img src='" +  pokemon.img + "'>";
   pokemonStats[2].innerHTML = "Tipo:" + listToString(pokemon.type);
   pokemonStats[3].innerHTML = "Altura: " + pokemon.height;
   pokemonStats[4].innerHTML = "Peso: " + pokemon.weight;
   pokemonStats[5].innerHTML = "Dulce: " + pokemon.candy;
   pokemonStats[6].innerHTML = "Cantidad de dulces para evolucionar: " +
              (pokemon.hasOwnProperty("candy_count")?  pokemon.candy_count : "N/A");

   pokemonStats[7].innerHTML = "Próximo huevo a: " +
              ( ("Not in Eggs" == pokemon.egg) ? "No en huevos": pokemon.egg);

   pokemonStats[8].innerHTML = "Probabilidad de evolucionar: " + pokemon.avg_spawns + "%";
   pokemonStats[9].innerHTML = "Tiempo de nacimiento: " + pokemon.spawn_time;
   pokemonStats[10].innerHTML = "Multiplicadores: " +
              ("null" == pokemon.multipliers ? "N/A": pokemon.multipliers);

   pokemonStats[11].innerHTML = "Debilidades:" + listToString(pokemon.weaknesses);
   pokemonStats[12].innerHTML = "Pre-evolución: " + evolutionsToString(pokemon.prev_evolution);
   pokemonStats[13].innerHTML = "Evolución: " + evolutionsToString(pokemon.next_evolution);
}

document.getElementById("back").addEventListener("click", next);


function fillElements (pokemonList, divElement){
  for(let i=0; i<pokemonList.length; i++) {
    let divPokemon = document.createElement("div");
    divPokemon.className = "pokemon";
    divPokemon.innerHTML = "<button><img src='" + pokemonList[i].img + "'></button>" + "<p> </p>"+ pokemonList[i].name;

    // callback function that prints/shows pokemon information
    divPokemon.addEventListener("click", ()=>showPokemonInfo(pokemonList[i]));
    divElement.insertAdjacentElement("beforeend", divPokemon);
  }
}

function showPokemons(){
  let pokemonList = window.dataLovers.sortById();
  let divPokemonList = document.getElementById("listOfPokemons");
  divPokemonList.innerHTML = "";
  fillElements(pokemonList, divPokemonList);
}

document.getElementById('limpiar').addEventListener('click', showPokemons);

function showPokemonsUpward(){
  //let pokemonList = POKEMON.pokemon;
  let divPokemonListA = document.getElementById("listOfPokemons");
  divPokemonListA.innerHTML = "";
  let pokemonListA = window.dataLovers.sort(true);
  fillElements(pokemonListA, divPokemonListA);

}

document.getElementById("sortUpward").addEventListener("click", showPokemonsUpward);

function showPokemonsFalling(){
  //let pokemonList = POKEMON.pokemon;
  let divPokemonListA = document.getElementById("listOfPokemons");
  divPokemonListA.innerHTML = "";
  let pokemonListA = window.dataLovers.sort(false);
  fillElements(pokemonListA, divPokemonListA);
}

document.getElementById("sortFalling").addEventListener("click", showPokemonsFalling);

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
