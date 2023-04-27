const typingText = document.getElementById("typing-text");

const messages = [
  "This is my project.",
  "It's a website for my portfolio.",
  "It's made using Bootstrap and jQuery.",
  "I hope you like it!",
];

let currentMessage = 0;

function typeMessage() {
  typingText.textContent = messages[currentMessage];
  currentMessage++;
  if (currentMessage === messages.length) {
    currentMessage = 0;
  }
}

setInterval(typeMessage, 3000);
