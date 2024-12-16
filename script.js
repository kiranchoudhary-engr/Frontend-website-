document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload on submit

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    console.log("Form Submitted!", { name, email, subject, message });

    alert("Thank you for your message, " + name + "! We will get back to you shortly.");

    // Clear form fields after submission
    document.getElementById('contactForm').reset();
});
//add skill modal
/*document.getElementById('openModalBtn').addEventListener('click', function() {
    document.getElementById('addSkillModal').style.display = 'block';
});

document.getElementById('closeModalBtn').addEventListener('click', function() {
    document.getElementById('addSkillModal').style.display = 'none';
});

document.getElementById('cancelModalBtn').addEventListener('click', function() {
    document.getElementById('addSkillModal').style.display = 'none';
});

// Close the modal if user clicks anywhere outside the modal content
window.onclick = function(event) {
    if (event.target == document.getElementById('addSkillModal')) {
        document.getElementById('addSkillModal').style.display = 'none';
    }
};*/
