const toggleIcon = document.getElementById("burger-icon");
const menu = document.querySelector("#menu");
const navItem = document.querySelectorAll(".nav-item");
const navbar = document.querySelector(".navbar");
const burger = document.querySelector(".burger-icon");

function toggleMenu() {
  if (menu.style.display === "block") {
    menu.style.display = "none";
    navbar.style.height = "75px";

    for (let i = 0; i < navItem.length; i++) {
      navItem[i].style.display = "none";
    }
  } else {
    menu.style.display = "block";
    navbar.style.height = "auto";

    for (let i = 0; i < navItem.length; i++) {
      navItem[i].style.display = "block";
    }
  }

  console.log(navItem);
}

const mq = window.matchMedia("(max-width: 600px)");

function toggleItem() {
  if (mq.matches) {
    menu.style.display = "none";
    navbar.style.height = "75px";

    for (let i = 0; i < navItem.length; i++) {
      navItem[i].style.display = "none";
    }
  } else {
    menu.style.display = "flex";
    navbar.style.height = "auto";

    for (let i = 0; i < navItem.length; i++) {
      navItem[i].style.display = "flex";
    }
  }
}
const contactLink = document.getElementById("contact-link");
const contactForm = document.getElementById("contact-form-container");

function showContactForm() {
  var contactForm = document.getElementById("contact-form-container");
  contactForm.style.display = "block";
}

mq.addEventListener("change", toggleItem);

toggleItem();

//toggleIcon.addEventListener("click", toggleNavbar);

function changeLight() {
  burger.style.backgroundColor = "#46494e";
}
function changeDark() {
  burger.style.backgroundColor = "#222831";
}

const contactButton = document.getElementById("contact-button");

function ShowContactMenu() {
  document.getElementById("contact-form-container").style.display =
    document.getElementById("contact-form-container").style.display === "block"
      ? "none"
      : "block";
}
