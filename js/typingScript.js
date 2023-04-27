const typingText = document.getElementById("typing-text");

const messages = [
  "Hello, world!",
  "I'm typing...",
  "This is a typing effect",
  "It's done using HTML, CSS, and JavaScript",
  "Hope you like it!",
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
