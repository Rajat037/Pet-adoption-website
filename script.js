// Function to filter pets
function filterPets() {
    const type = document.getElementById("petType").value.toLowerCase();
    const age = document.getElementById("petAge").value.toLowerCase();
    const location = document.getElementById("petLocation").value.toLowerCase();

    document.querySelectorAll(".card").forEach(card => {
        const petType = card.getAttribute("data-type");
        const petAge = card.getAttribute("data-age");
        const petLocation = card.getAttribute("data-location");

        if ((type === "" || petType === type) &&
            (age === "" || petAge === age) &&
            (location === "" || petLocation === location)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// Adoption Form Submission
document.getElementById("adoptionForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const petName = document.getElementById("petName").value;
    
    alert(`Thank you, ${name}! Your adoption request for ${petName} has been submitted.`);
    
    this.reset();
});

