// nav script for Boards Navigation
// (() => {
	// script.js
    // document.querySelectorAll(".sidebar a").forEach(link => {
    //     link.addEventListener("click", function (e) {
    //     e.preventDefault(); // Prevent default link behavior
    
        // Get the target page ID
        // const targetId = this.getAttribute("data-target");
    
        // Hide all pages
        // document.querySelectorAll(".page").forEach(page => {
        //     page.classList.remove("active");
        // });
    
        // Show the selected page
//         document.getElementById(targetId).classList.add("active");
//         });
//     });
// })();
    
	// Generalized script for multiple modals
(() => {
	// Get all trigger elements and modals
	const triggers = document.querySelectorAll('.triggerImage');
	const modals = document.querySelectorAll('.modal');
	const closeButtons = document.querySelectorAll('.closeModal');
  
	// Show the modal when the associated trigger is clicked
	triggers.forEach((trigger) => {
	  trigger.addEventListener('click', () => {
		const modalId = trigger.dataset.target; // Each trigger should have a data-target attribute
		const modal = document.getElementById(modalId);
		if (modal) {
		  modal.style.display = 'flex';
		}
	  });
	});
  
	// Close the modal when the close button is clicked
	closeButtons.forEach((button) => {
	  button.addEventListener('click', () => {
		const modal = button.closest('.modal'); // Find the closest parent modal
		if (modal) {
		  modal.style.display = 'none';
		}
	  });
	});
  
	// Close the modal when clicking outside the modal content
	window.addEventListener('click', (event) => {
	  modals.forEach((modal) => {
		if (event.target === modal) {
		  modal.style.display = 'none';
		}
	  });
	});
  })();
  


		