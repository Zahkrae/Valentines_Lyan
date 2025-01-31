console.log("Script loaded successfully!");

function playAlert(option) {
	console.log("Button clicked:", option); // Debugging log
	
    let messages = {
        "option1_1": { text: "Great choice!", sound: "sounds/correct.mp3", next: "question2.html" },
        "option1_2": { text: "Nice pick!", sound: "sounds/correct.mp3", next: "question2.html" },
        "option1_3": { text: "Interesting!", sound: "sounds/correct.mp3", next: "question2.html" },
        "option1_4": { text: "Oops! Try again.", sound: "sounds/wrong.mp3", next: "gameover.html" }
		"option2_1": { text: "Great choice!", sound: "sounds/correct.mp3", next: "question3.html" },
        "option2_2": { text: "Nice pick!", sound: "sounds/wrong.mp3", next: "gameover.html" },
        "option2_3": { text: "Interesting!", sound: "sounds/correct.mp3", next: "question3.html" },
        "option2_4": { text: "Oops! Try again.", sound: "sounds/wrong.mp3", next: "gameover.html" }
		"option3_1": { text: "Great choice!", sound: "sounds/wrong.mp3", next: "gameover.html" },
        "option3_2": { text: "Nice pick!", sound: "sounds/wrong.mp3", next: "gameover.html" },
        "option3_3": { text: "Interesting!", sound: "sounds/wrong.mp3", next: "gameover.html" },
        "option3_4": { text: "Oops! Try again.", sound: "sounds/correct.mp3", next: "question4.html" }
		"option4_1": { text: "Great choice!", sound: "sounds/correct.mp3", next: "success.html" },
        "option4_2": { text: "Nice pick!", sound: "sounds/wrong.mp3", next: "gameover.html" },

    };

    if (messages[option]) {
		  console.log("Message found:", messages[option]); // Debugging log
         let audio = new Audio(messages[option].sound);
        audio.play().catch(error => console.log("Audio error:", error)); // Debugging log

        alert(messages[option].text);

        setTimeout(() => {
            window.location.href = messages[option].next;
        }, 3000);
    } else {
        console.log("Invalid option clicked.");
    }
}

console.log("playAlert function:", typeof playAlert);