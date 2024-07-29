let menuIcon = document.querySelector('#menuicon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            });
        }
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // You can add your form submission logic here
        // For example, you can validate the form fields and then submit the form using AJAX

        // Example: Validate the form fields
        const fullName = document.getElementById("fullName").value;
        const emailAddress = document.getElementById("emailAddress").value;
        const mobileNo = document.getElementById("mobileNo").value;
        const emailSubject = document.getElementById("emailSubject").value;
        const message = document.getElementById("message").value;

        if (!fullName || !emailAddress || !mobileNo || !emailSubject || !message) {
            alert("Please fill in all fields");
            return;
        }

        // If all fields are filled, you can proceed with form submission
        // Here you can make an AJAX request to submit the form data to a server-side script

        // Example: Submit form using AJAX
        // Replace the URL with the endpoint where you want to submit the form data
        const url = "your-submit-form-endpoint";
        const formData = new FormData(form);

        fetch(url, {
            method: "POST",
            body: formData
        })
        .then(response => {
            // Handle the response from the server
            console.log("Form submitted successfully");
        })
        .catch(error => {
            console.error("Error submitting form:", error);
        });
    });
});
