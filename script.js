document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    }

    // Form submission handling
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        // Here you can add code to send the form data to your backend or perform other actions
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
        // Reset the form after submission
        this.reset();
    });
});
