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


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const fullName = document.getElementById('fullName').value.trim();
    const emailAddress = document.getElementById('emailAddress').value.trim();
    const mobileNo = document.getElementById('mobileNo').value.trim();
    const emailSubject = document.getElementById('emailSubject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Simple validation
    if (!fullName || !emailAddress || !mobileNo || !emailSubject || !message) {
        alert('Please fill out all fields.');
        return;
    }

    if (!validateEmail(emailAddress)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (!validatePhone(mobileNo)) {
        alert('Please enter a valid mobile number.');
        return;
    }

    // Send form data to the server for email processing
    sendFormData(fullName, emailAddress, mobileNo, emailSubject, message);
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[0-9]{10}$/;
    return re.test(phone);
}

function sendFormData(fullName, emailAddress, mobileNo, emailSubject, message) {
    fetch('/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            fullName,
            emailAddress,
            mobileNo,
            emailSubject,
            message
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Your message has been sent successfully!');
            document.getElementById('contactForm').reset();
        } else {
            alert('There was an error sending your message. Please try again later.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error sending your message. Please try again later.');
    });
}
