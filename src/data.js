

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

// promediar
average () {
  let pokemons = POKEMON.pokemon;
  let contador = 0;
  for (let i=0; i<pokemons.length; i++){
    if (pokemons[i].hasOwnProperty('candy_count')) {
      contador += pokemons[i].candy_count;
    }
  }
  return contador / 70;
  }

};
