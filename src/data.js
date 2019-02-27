
window.dataLovers = {

/*
* filters pokemon Type
* param pokemon: is a list of pokemon objects
* param type: string type ("Grass, Poison, ...")
*/

filterByType (pokemon, type) {
  const filterType = [];
  for(let i= 0; i < pokemon.length; i++){
    for(let t=0; t < pokemon[i].type.length; t++){
      if (pokemon[i].type[t] === type){
        filterType.push(pokemon[i]);
      }
    }
  }

  return filterType;
},

// averaged
average () {
  let pokemons = POKEMON.pokemon;
  let contador = 0;
  for (let i=0; i<pokemons.length; i++){
    if (pokemons[i].hasOwnProperty('candy_count')) {
      contador += pokemons[i].candy_count;
    }
  }
  return contador / 70;
},

// Sort
comparePokemonsById(a, b){
    return a.id - b.id;
 },

comparePokemons(a, b) {
  let retVal;
  if (a.name.toLowerCase() < b.name.toLowerCase()) {
    retVal = -1;
  }
  else if(a.name.toLowerCase() > b.name.toLowerCase()) {
    retVal = 1;
  }
  else {
    retVal = 0; // pokemon a = pokemon b
  }

  return retVal;
},

sort(isAscendent){
  let pokemons = POKEMON.pokemon;
  let pokemonsSorted;
  if(isAscendent){
    pokemonsSorted = pokemons.sort(window.dataLovers.comparePokemons);
  }
  else{
    pokemonsSorted = pokemons.sort(window.dataLovers.comparePokemons).reverse();
  }
  return pokemonsSorted;
},

sortById(){
  return POKEMON.pokemon.sort(window.dataLovers.comparePokemonsById);
}


};
