// nav

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
    
	// popup
	// Open the appropriate popup
	// document.querySelectorAll("[data-popup]").forEach(button => {
	// 	button.addEventListener("click", function () {
	// 	  const popupId = this.getAttribute("data-popup");
	// 	  document.getElementById(popupId).classList.remove("hidden");
	// 	});
	//   });
	
	// Close the popup
	//   document.querySelectorAll(".popup").forEach(popup => {
	// 	popup.addEventListener("click", function (e) {
	// 	  if (e.target === this || e.target.classList.contains("close")) {
	// 		this.classList.add("hidden");
	// 	  }
	// 	});
	//   });


		