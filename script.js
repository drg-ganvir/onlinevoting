// Track whether the user has already voted
let hasVoted = false;

// Function to handle PRN submission
function submitPRN() {
    const prnInput = document.getElementById("prn-input").value.trim();

    if (prnInput === "") {
        alert("Please enter your PRN number.");
        return;
    }

    document.getElementById("prn-modal").style.display = "none";
    document.getElementById("main-content").classList.remove("hidden");

    alert(`Welcome! Your PRN number (${prnInput}) has been recorded.`);
}

// Function to handle voting
function submitVote(candidate) {

     // Show feedback
    const feedback = document.getElementById("feedback");
    const feedbackMessage = document.getElementById("feedback-message");
    feedbackMessage.textContent = `You have voted for ${candidate}! Thank you for participating.`;
    feedback.classList.remove("hidden");
    // Check if the user has already voted
    if (localStorage.getItem("hasVoted") === "true" || hasVoted) {
        alert("You have already voted! Each person is allowed to vote only once.");
        return;
    }

    // Mark the user as having voted
    hasVoted = true;
    localStorage.setItem("hasVoted", "true");

    
    // Hide feedback after 3 seconds
    setTimeout(() => {
        feedback.classList.add("hidden");
    }, 3000);
}

  