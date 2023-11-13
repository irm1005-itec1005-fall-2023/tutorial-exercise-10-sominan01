/* Tutorial Exercise 10
 *
 * In Step 04 we're going to be ...
 *
 * Follow the instructions below
 *
 * For this exercise, you are going to finish
 * two functions. The addPokemonItem function and
 * the renderList function.
 *
 * The submit event handler is already wired up, and
 * everytime the user hits submit the addPokemonItem
 * function is called.
 *
 * The addPokemonItem function should simply add what
 * the user has typed in into our array of pokemons
 * and once our array is updated the function would
 * call renderList to redraw our list.
 *
 * The renderList function is responsible for first
 * clearing the children in the list and then redrawing
 * all of the children. It might seem silly to redraw
 * the whole list everytime, as opposed to just using appendChild()
 * on the list item to add the new item. The reason we do
 * this is that it simplifies our program logic, and
 * because JavaScript runs so quickly we don't really
 * notice the extra compute cycles being used.
 *
 */

//
// APP VARIABLES AND DOM ELEMENTS
//

// 1. The ul for the list of pokemon
const pokeList = document.querySelector(".poke-items");
// 2. The span message to display the index
const pokeMessage = document.querySelector(".message");

//
// FUNCTIONS
//

// 3. Handle the event when a user clicks on the list
function listClickHander(event) {
  // 4. Check if the click event is from a button or something else
  if (event.target.nodeName !== "BUTTON") {
    return;
  }

  // 5. Get the index from the data attribute (dataset.pokemon)
  const indexFromDataAttribute = event.target.dataset.pokemon;

  // 6. Use the textContent of the span to display the index that was clicked
  pokeMessage.textContent = indexFromDataAttribute;
}

//
// EVENT LISTENERS AND INITIALISION
//

// 7. Add the submit form handler
pokeList.addEventListener("click", listClickHander);
