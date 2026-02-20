// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Offer Button
const offerBtn = document.getElementById("offerBtn");

offerBtn.addEventListener("click", () => {
  alert("🎉 Special Offer: Get 20% OFF on your first order!");
});

// Add to Cart Buttons
const cartButtons = document.querySelectorAll(".cartBtn");

cartButtons.forEach(button => {
  button.addEventListener("click", () => {
    alert("✅ Item added to cart successfully!");
  });
});
