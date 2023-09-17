window.onscroll = function() {
    if (window.pageYOffset > 50) {
        document.querySelector(".navbar").classList.remove("bg-light");
        document.querySelector(".navbar").classList.add("navbar-trans");
    } else {
        document.querySelector(".navbar").classList.add("bg-light");
        document.querySelector(".navbar").classList.remove("navbar-trans");
    }
};

// JavaScript to handle form submission and display an alert
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form data
    const firstname = document.querySelector('input[name="firstname"]').value;
    const lastname = document.querySelector('input[name="lastname"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    // Display an alert with the form data
    const alertMessage = `First Name: ${firstname}\nLast Name: ${lastname}\nEmail: ${email}\nMessage:\n${message}`;
    alert("Form Data:\n" + alertMessage);

    // Optionally, you can reset the form
    this.reset();
});

// Initialize Tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Initialize Clipboard.js
var clipboard = new ClipboardJS('#btn-phone-contact');

clipboard.on('success', function (e) {
    e.clearSelection();
    // Show a SweetAlert success notification
    Swal.fire({
    icon: 'success',
    title: 'you successfully copied my number >_<',
    toast: true,
    position: 'bottom',
    showConfirmButton: false,
    timer: 2000
});
});