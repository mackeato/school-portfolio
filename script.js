const videoModal = document.getElementById("video-modal");
const closeModal = document.getElementById("close-modal");
const popupVideo = document.getElementById("popup-video");
const videoTrigger = document.getElementById("video-trigger");
const imageTrigger = document.getElementById("image-trigger");

// Function to position the modal dynamically based on scroll
function positionModal() {
  const scrollY = window.scrollY || document.documentElement.scrollTop; // Get current scroll position
  const viewportHeight = window.innerHeight; // Viewport height
  const modalContent = videoModal.querySelector(".modal-content");

  modalContent.style.top = `${scrollY + viewportHeight / 20}px`; // Center modal vertically
}

// Show modal and position it
videoTrigger.addEventListener("click", () => {
  videoModal.style.display = "flex"; // Show the modal
  positionModal(); // Position the modal
  popupVideo.play(); // Play the video
});

// Close modal and reset video
closeModal.addEventListener("click", () => {
  videoModal.style.display = "none"; // Hide the modal
  popupVideo.pause(); // Pause the video
  popupVideo.currentTime = 0; // Reset video to the beginning
});

// Close modal when clicking outside the content
videoModal.addEventListener("click", (e) => {
  if (e.target === videoModal) {
    videoModal.style.display = "none"; // Hide the modal
    popupVideo.pause(); // Pause the video
    popupVideo.currentTime = 0; // Reset video
  }
});

// Update modal position on scroll (if open)
window.addEventListener("scroll", () => {
  if (videoModal.style.display === "flex") {
    positionModal(); // Reposition the modal dynamically on scroll
  }
});

const imageModal = document.getElementById("image-modal");
const closeImageModal = document.getElementById("close-image-modal");
const popupImage = document.getElementById("popup-image");

// Show image modal and display the image
imageTrigger.addEventListener("click", () => {
  imageModal.style.display = "flex"; // Show the image modal
  positionImageModal(); // Position the modal
});

// Function to position the image modal dynamically based on scroll
function positionImageModal() {
  const scrollY = window.scrollY || document.documentElement.scrollTop; // Get current scroll position
  const viewportHeight = window.innerHeight; // Viewport height
  const modalContent = imageModal.querySelector(".modal-content-2");

  modalContent.style.top = `${scrollY + viewportHeight / 20}px`; // Center modal vertically
}

// Close image modal
closeImageModal.addEventListener("click", () => {
  imageModal.style.display = "none"; // Hide the image modal
  popupImage.src = ""; // Clear the image source
});

// Close image modal when clicking outside the content
imageModal.addEventListener("click", (e) => {
  if (e.target === imageModal) {
    imageModal.style.display = "none"; // Hide the image modal
    popupImage.src = ""; // Clear the image source
  }
});

// Update image modal position on scroll (if open)
window.addEventListener("scroll", () => {
  if (imageModal.style.display === "flex") {
    positionImageModal(); // Reposition the modal dynamically on scroll
  }
});

// Select elements for the third modal
const thumb4Modal = document.getElementById("thumb4-modal");
const closeThumb4Modal = document.getElementById("close-thumb4-modal");
const thumb4Image = document.getElementById("thumb4-image");
const thumb4Trigger = document.querySelector(".thumb-4");

// Show the modal and display the image
thumb4Trigger.addEventListener("click", () => {
  thumb4Image.src = "images/insta-mockup.png"; // Replace with your image path
  thumb4Modal.style.display = "flex"; // Show the modal
});

// Close the modal when the close button is clicked
closeThumb4Modal.addEventListener("click", () => {
  thumb4Modal.style.display = "none"; // Hide the modal
  thumb4Image.src = ""; // Clear the image source
});

// Close the modal when clicking outside the content
thumb4Modal.addEventListener("click", (e) => {
  if (e.target === thumb4Modal) {
    thumb4Modal.style.display = "none"; // Hide the modal
    thumb4Image.src = ""; // Clear the image source
  }
});
