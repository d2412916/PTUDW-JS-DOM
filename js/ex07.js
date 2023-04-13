//=================================EX07=================================================

// Get the list and all the remove buttons
const itemList = document.getElementById('ex7-item-list');
const removeButtons = document.querySelectorAll('.ex7-remove-item');

// Loop through all the remove buttons and add a click event listener to each one
removeButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the parent list item of the button that was clicked
    const listItem = button.parentNode;
    
    // Remove the list item from the DOM
    itemList.removeChild(listItem);
  });
});


