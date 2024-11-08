function toggleSections(selectedUnit) {
  const sizeColorSections = document.querySelectorAll(
    ".size-color-section-container"
  );
  const sectionWrappers = document.querySelectorAll(
    ".section-1-wrapper, .section-2-wrapper, .section-3-wrapper"
  );

  // Hide all size-color-section-containers
  sizeColorSections.forEach((section) => {
    section.style.display = "none";
  });

  // Remove active styling from all section wrappers
  sectionWrappers.forEach((wrapper) => {
    wrapper.classList.remove("active-section");
  });

  // Display the selected section's size-color options and add active styling
  const selectedSection = document.querySelector(
    `.${selectedUnit} .size-color-section-container`
  );
  const selectedWrapper = document.querySelector(`.${selectedUnit}`);

  if (selectedSection && selectedWrapper) {
    selectedSection.style.display = "block";
    selectedWrapper.classList.add("active-section");
  }
}

// Initialize by hiding all size-color-section-containers on page load
document.addEventListener("DOMContentLoaded", () => {
  const sizeColorSections = document.querySelectorAll(
    ".size-color-section-container"
  );
  sizeColorSections.forEach((section) => {
    section.style.display = "none";
  });

  // Set the default active section
  toggleSections("section-2-wrapper");
});
