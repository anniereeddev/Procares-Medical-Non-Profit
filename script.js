// nav script for Boards Navigation
(() => {
	// script.js
    document.querySelectorAll(".sidebar a").forEach(link => {
        link.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent default link behavior
    
        // Get the target page ID
        const targetId = this.getAttribute("data-target");
    
        // Hide all pages
        document.querySelectorAll(".page").forEach(page => {
            page.classList.remove("active");
        });
    
        // Show the selected page
        document.getElementById(targetId).classList.add("active");
        });
    });
})();
    
	// popup
	(() => {
	 // Get modal, image, and close button
		const modal = document.getElementById('myModal');
		const triggerImage = document.getElementById('triggerImage');
		const closeModal = document.getElementById('closeModal');
 
	 // Show modal on image click
		triggerImage.addEventListener('click', () => {
		modal.style.display = 'flex';
		});
 
	 // Close modal on close button click
		closeModal.addEventListener('click', () => {
		modal.style.display = 'none';
		});
 
	 // Close modal on clicking outside of modal content
		window.addEventListener('click', (event) => {
		if (event.target === modal) {
			modal.style.display = 'none';
		}
		});
	})();


		