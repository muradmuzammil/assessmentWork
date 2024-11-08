function toggleSections(selectedUnit) {
  const sizeColorSections = document.querySelectorAll(
    ".size-color-section-container"
  );

  sizeColorSections.forEach((section) => {
    section.style.display = "none";
  });

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

  sizeColorSections.forEach((section) => {
    section.style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  toggleSections("section-2-wrapper");
});
