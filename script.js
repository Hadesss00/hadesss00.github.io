document.addEventListener("DOMContentLoaded", () => {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const gameCards = document.querySelectorAll(".game-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      filterBtns.forEach((button) => button.classList.remove("active"));
      // Add active class to clicked button
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      gameCards.forEach((card) => {
        const category = card.getAttribute("data-category");

        if (filterValue === "all" || filterValue === category) {
          card.style.display = "block";
          // Optional: Add a fade-in animation here
          card.style.opacity = "1";
        } else {
          card.style.display = "none";
          card.style.opacity = "0";
        }
      });
    });
  });
});
