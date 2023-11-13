/* Tutorial Exercise 10
 *
 * In Step 03 we're going to be adding new
 * Pokemons to the list on the page.
 *
 * Follow the instructions below
 *
 * For this exercise, you are going to use event delegation
 * to find out what index or id a button click
 * event is coming from.
 *
 * You will have to write an event handler and
 * register to listen to the event on click.
 *
 * The event handler should be registered to the parent UL.
 * There are some instructions to help you, though
 * there are many different ways you could acheive
 * the desired outcome.
 *
 */

//
// APP VARIABLES AND DOM ELEMENTS
//

// 1. Array of pokemons that are provided by the user
const pokemons = [];
// 2. The ul for the list of pokemon
const pokeList = document.querySelector(".poke-items");
// 3. The form where we intake pokemon
const pokeForm = document.querySelector(".add-pokemon");
// 4. The form text element that has the name the user provided
const pokeName = document.querySelector("#pokemon-name");

//
// FUNCTIONS
//

// 5. Handle the event when a user submits the form
function addPokemonItem(event) {
  // Stop browser default form submission
  event.preventDefault();
  // Get the text from the input field
  const pokemonName = pokeName.value;
  // Add the user defined pokemon to our array
  pokemons.push(pokemonName);
  // Draw the list of pokemons
  renderList(pokemons, pokeList);
  // Reset the form so that the text field name is cleared
  pokeForm.reset();
}

// 6. Draw the list of items
// Step 1: remove all of the children in the UL list
// Step 2: for each entry in the array add the array item to the list
function renderList(items, itemsList) {
  // Clear all of the entries in the list
  while (itemsList.firstChild) {
    itemsList.removeChild(itemsList.firstChild);
  }

  // For each item in the list add a list item
  for (let i = 0; i < items.length; i++) {
    // Create the list item and add the text
    const listItem = document.createElement("li");
    listItem.textContent = items[i];
    // On the last item in the list, add the annimation class
    if (i === items.length - 1) {
      listItem.classList.add("new-item-annimate");
    }
    // Add the list item to the list
    itemsList.appendChild(listItem);
  }
}

//
// EVENT LISTENERS AND INITIALISION
//

// 7. Add the submit form handler
pokeForm.addEventListener("submit", addPokemonItem);

// 8. Draw the list by calling your renderList function
renderList(pokemons, pokeList);
