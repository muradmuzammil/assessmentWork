// Function to toggle the visibility of size-color-section-container based on selected radio button
function toggleSections(selectedUnit) {
  // Get all size-color-section-container elements
  const sizeColorSections = document.querySelectorAll(
    ".size-color-section-container"
  );

  // Hide all size-color-section-containers initially
  sizeColorSections.forEach((section) => {
    section.style.display = "none";
  });

  // Display the size-color-section-container for the selected card
  const selectedSection = document.querySelector(
    `.${selectedUnit} .size-color-section-container`
  );
  if (selectedSection) {
    selectedSection.style.display = "block";
  }
}

// Initialize by hiding all size-color-section-containers on page load
document.addEventListener("DOMContentLoaded", () => {
  const sizeColorSections = document.querySelectorAll(
    ".size-color-section-container"
  );
  console.log("????????");
  sizeColorSections.forEach((section) => {
    section.style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  toggleSections("section-2-wrapper");
});
