// Tabs with active state indication
let tabs = document.querySelectorAll('.tablinks');
tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        tabs.forEach(t => t.classList.remove('active'));    
        this.classList.add('active');
        let contentId = this.getAttribute('data-content');
        document.querySelectorAll('.tab-content').forEach(content => {
            content.style.display = 'none';
        });
        document.getElementById(contentId).style.display = 'block';
    });
});

// Form Validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    let errorMessages = [];
    if(name.length < 3) {
        errorMessages.push("Name must be at least 3 characters long.");
    }
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!email.match(emailPattern)) {
        errorMessages.push("Please enter a valid email address.");
    }
    if(message.length < 10) {
        errorMessages.push("Message must be at least 10 characters long.");
    }
    if(errorMessages.length > 0) {
        alert(errorMessages.join("\n"));
    } else {
        alert("Form submitted successfully!");
        document.getElementById('contactForm').reset();
    }
    });

// Light and Dark Mode Toggle
document.getElementById('toggleThemeBtn').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
// Accordion Functionality
let acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });
}       
// Countdown Timer

let countdownDate = new Date("Dec 31, 2025 23:59:59").getTime();

let countdownFunction = setInterval(function() {
    let now = new Date().getTime();
    let distance = countdownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);