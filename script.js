document.addEventListener("DOMContentLoaded", () => {
	const modal = document.getElementById("image-modal");
	const modalImg = document.getElementById("full-image");
	const closeBtn = document.querySelector(".modal .close");
	const images = document.querySelectorAll(".images-gallery img");

	// Hide modal by default
	modal.style.display = "none";

	// Add click event to all images
	images.forEach((image) => {
		image.addEventListener("click", () => {
			modal.style.display = "flex"; // Show the modal
			modalImg.src = image.src; // Set the image source
		});
	});

	// Close modal on close button click
	closeBtn.addEventListener("click", () => {
		modal.style.display = "none"; // Hide the modal
	});

	// Close modal on clicking outside the modal content
	modal.addEventListener("click", (event) => {
		if (event.target === modal) {
			modal.style.display = "none"; // Hide the modal
		}
	});
});
