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

// 3. The form where we intake pokemon

// 4. The form text element that has the name the user provided


//
// FUNCTIONS
//

// 5. Handle the event when a user submits the form
function addPokemonItem(event) {
  // Stop browser default form submission

  // Get the text from the input field

  // Add the user defined pokemon to our array

  // Draw the list of pokemons

  // Reset the form so that the text field name is cleared
  pokeForm.reset();
}

// 6. Draw the list of items
// Step 1: remove all of the children in the UL list
// Step 2: for each entry in the array add the array item to the list
function renderList(items, itemsList) {
  // Clear all of the entries in the list


  // For each item in the list add a list item


}

//
// EVENT LISTENERS AND INITIALISION
//

// 7. Add the submit form handler
pokeForm.addEventListener("submit", addPokemonItem);

// 8. Draw the list by calling your renderList function
renderList(pokemons, pokeList);
