// Handle form submission
function handleFormSubmit(event) {
    event.preventDefault();

    // Collect form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
    const contactMethod = document.querySelector('input[name="contactMethod"]:checked')?.value;
    const interests = Array.from(document.querySelectorAll('input[name="interest"]:checked'))
                          .map(interest => interest.value);
    const contactDate = document.getElementById("contactDate").value;

    // Store data in local storage
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("message", message);
    localStorage.setItem("contactMethod", contactMethod);
    localStorage.setItem("interests", JSON.stringify(interests));
    localStorage.setItem("contactDate", contactDate);

    alert("Your information has been saved!");
}

// Clear local storage on form reset
function handleFormReset() {
    localStorage.clear();
    alert("Form data has been cleared!");
}

// Attach form event listeners after page load
window.addEventListener("load", function() {
    const form = document.getElementById("userForm");
    if (form) {
        form.addEventListener("submit", handleFormSubmit);
        form.addEventListener("reset", handleFormReset);
    }
});
