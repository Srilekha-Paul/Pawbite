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

// ================== EMAILJS INIT ==================
(function () {
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your public key
})();

// ================== DARK MODE ==================
document.getElementById("darkModeToggle")
.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});

// ================== TOAST FUNCTION ==================
function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

// ================== FORM SUBMIT ==================
document.getElementById("contactForm")
.addEventListener("submit", function (e) {
    e.preventDefault();

    const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", params)
        .then(function () {
            showToast("Message sent successfully! 🐾");
            document.getElementById("contactForm").reset();
        }, function (error) {
            showToast("Failed to send message ❌");
        });
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let phoneError = document.getElementById("phoneError");
    let messageError = document.getElementById("messageError");
    let successMessage = document.getElementById("successMessage");

    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;

    if (name === "") {
        nameError.textContent = "Full Name is required";
        isValid = false;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
        emailError.textContent = "Email is required";
        isValid = false;
    } else if (!email.match(emailPattern)) {
        emailError.textContent = "Enter valid email";
        isValid = false;
    }

    let phonePattern = /^[0-9]{10}$/;
    if (phone === "") {
        phoneError.textContent = "Phone number is required";
        isValid = false;
    } else if (!phone.match(phonePattern)) {
        phoneError.textContent = "Enter valid 10-digit phone number";
        isValid = false;
    }

    if (message === "") {
        messageError.textContent = "Message cannot be empty";
        isValid = false;
    }

    if (isValid) {
        successMessage.textContent = "Message sent successfully! 🐾";
        document.getElementById("contactForm").reset();
    }
});


