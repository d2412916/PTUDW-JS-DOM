// Get the list and all the edit buttons
const itemList = document.getElementById('item-list');
const editButtons = document.querySelectorAll('.edit-item');

// Get the modal and its components
const modal = document.getElementById('edit-modal');
const modalInput = document.getElementById('edit-input');
const modalDetail = document.getElementById('edit-detail');
const saveButton = document.getElementById('save-button');
const cancelButton = document.getElementById('cancel-button');

let currentItem = null; // Keep track of the item being edited

// Loop through all the edit buttons and add a click event listener to each one
editButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the parent list item of the button that was clicked
    const listItem = button.parentNode;
    // Get the text content of the list item
    const itemText = listItem.getElementsByClassName('h2-text')[0].textContent;
    const itemDetail = listItem.getElementsByClassName('details')[0].textContent;
    // Populate the modal input field with the current item text
    modalInput.value = itemText;
    modalDetail.value = itemDetail
    // Set the current item being edited
    currentItem = listItem;
    
    // Show the modal
    modal.style.display = 'block';
  });
});

// Add a click event listener to the save button in the modal
saveButton.addEventListener('click', () => {
  // Update the text content of the current list item with the new value from the modal input field
  currentItem.getElementsByClassName('h2-text')[0].textContent = modalInput.value;
  currentItem.getElementsByClassName('details')[0].textContent = modalDetail.value;
  // Hide the modal
  modal.style.display = 'none';
});

// Add a click event listener to the cancel button in the modal
cancelButton.addEventListener('click', () => {
  // Hide the modal
  modal.style.display = 'none';
});
