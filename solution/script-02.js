/* Tutorial Exercise 10
 *
 * In Step 02 we're going to be adding the
 * names of our Pokemons to the list on the page.
 *
 * Follow the instructions below
 *
 * For this exercise, you are going to walk through an
 * array in JavaScript and add elements to a list on the page!
 *
 */

// Array of pokemon objects
// that we'll use for the exercise
const pokemons = [
  {
    id: 1, name: 'Pikachu', type: 'Electric', level: 35,
    abilities: ['Static', 'Lightning Rod']
  },
  {
    id: 2, name: 'Charizard', type: 'Fire', level: 50,
    abilities: ['Blaze', 'Solar Power']
  },
  {
    id: 3, name: 'Bulbasaur', type: 'Grass', level: 20,
    abilities: ['Overgrow', 'Chlorophyll', 'Run Away']
  },
  {
    id: 4, name: 'Squirtle', type: 'Water', level: 25,
    abilities: ['Torrent', 'Rain Dish']
  },
  {
    id: 5, name: 'Jigglypuff', type: 'Normal', level: 30,
    abilities: ['Cute Charm', 'Competitive']
  }
];

// 1. Get a reference to the list already on the page
// Recommend using querySelector to get the list
const pokeList = document.querySelector(".poke-items");

// 2. Loop through the array of pokemons items
// For each item:
//  Create an a new list item element
//  Add text content to the list item that is from the array
//  Add the new item to the list on the page
for (let i = 0; i < pokemons.length; i++) {
  const pokemonListItem = document.createElement("li");
  pokemonListItem.textContent = pokemons[i].name;
  pokeList.appendChild(pokemonListItem);
}
