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

function checkLoggedIn() {
  if (sessionStorage.getItem("token") != null) {
    $("#login-navbar").hide();
    $("#register-navbar").hide();
    $("#logout-navbar").show();
    $("#curriculum-item").show();
  } else {
    $("#login-navbar").show();
    $("#register-navbar").show();
    $("#logout-navbar").hide();
    $("#curriculum-item").hide();
  }
}

function showContactForm() {
  $(".modal").fadeIn();
}

function hideContactForm() {
  $(".modal").fadeOut();
}

$(".nav-contact").on("click", function () {
  showContactForm();
});

$(".cancel-button").on("click", function () {
  hideContactForm();
});

$("#contact-form").on("submit", function (event) {
  event.preventDefault();
  window.location.href = "https://www.fulek.com/mvc/supit/project-contact-form";
});

$(window).scroll(function () {
  if ($(this).scrollTop() > $(".navbar").height()) {
    $("#sidebar").fadeIn();
  } else {
    $("#sidebar").fadeOut();
  }
});

$("#sidebar ul li a").click(function (e) {
  e.preventDefault();
  var target = $(this).attr("href");
  $("html, body").animate(
    {
      scrollTop: $(target).offset().top - 100,
    },
    1000
  );
});
