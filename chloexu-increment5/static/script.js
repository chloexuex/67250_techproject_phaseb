var slideIndex = 0;
var now = new Date();
var hour = now.getHours();

// time-based greeting
function greeting(h) {
    var greetingElement = document.getElementById("greeting");
    if (greetingElement) {
        if (h < 5 || h >= 20) {
            greetingElement.innerHTML = "Good Night! Welcome to MonoMuse.";
        } else if (h < 12) {
            greetingElement.innerHTML = "Good Morning! Welcome to MonoMuse.";
        } else if (h < 18) {
            greetingElement.innerHTML = "Good Afternoon! Welcome to MonoMuse.";
        } else {
            greetingElement.innerHTML = "Good Evening! Welcome to MonoMuse.";
        }
    }
}

// dynamic footer year
function addYear() {
    document.getElementById("copyYear").innerHTML = "© " + new Date().getFullYear() + " MonoMuse";
}

// active nav bar
function ActiveNav() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (window.location.href === link.href) {
            link.classList.add("active");
        }
    });
}

// read more / read less toggle (jQuery)
$(document).ready(function() {
    $("#readMore").click(function() {
        $("#longIntro").show();
        $("#readLess").show();
        $("#readMore").hide();
        $("#shortIntro").hide();
    });
    $("#readLess").click(function() {
        $("#longIntro").hide();
        $("#readLess").hide();
        $("#readMore").show();
        $("#shortIntro").show();
    });
});

// show purchase form
function showForm(date) {
    document.getElementById("purchaseForm").style.display = "block";
    document.getElementById("selectedDate").innerHTML = "Selected Date: " + date;
}

// price calculator
function calculatePrice() {
    var quantity = document.getElementById("quantity").value;
    var type = document.getElementById("ticketType").value;
    var price = 0;
    if (type === "general") price = 18;
    else if (type === "student") price = 10;
    else if (type === "member") price = 15;
    var total = quantity * price;
    document.getElementById("priceDisplay").innerHTML = "Total: $" + total;
}

// form validation and submit
function submitOrder() {
    var valid = true;
    document.getElementById("dateError").innerHTML = "";
    document.getElementById("typeError").innerHTML = "";
    document.getElementById("quantityError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("zipError").innerHTML = "";

    var date = document.getElementById("visitDate").value;
    var type = document.getElementById("ticketType").value;
    var quantity = document.getElementById("quantity").value;
    var email = document.getElementById("email").value;
    var zip = document.getElementById("zip").value;

    if (!date) { document.getElementById("dateError").innerHTML = "Please select a date."; valid = false; }
    if (!type) { document.getElementById("typeError").innerHTML = "Please select a ticket type."; valid = false; }
    if (!quantity || quantity < 1 || quantity > 10) { document.getElementById("quantityError").innerHTML = "Please enter a quantity between 1 and 10."; valid = false; }
    if (!email) { document.getElementById("emailError").innerHTML = "Please enter a valid email."; valid = false; }
    if (zip && zip.length !== 5) { document.getElementById("zipError").innerHTML = "Zip code must be 5 digits."; valid = false; }

    if (valid) {
        var price = 0;
        if (type === "general") price = 18;
        else if (type === "student") price = 10;
        else if (type === "member") price = 15;
        var total = quantity * price;
        sessionStorage.setItem("confirmDate", date);
        sessionStorage.setItem("confirmType", type);
        sessionStorage.setItem("confirmQuantity", quantity);
        sessionStorage.setItem("confirmTotal", "$" + total);
        window.location.href = "confirmation.html";
    }
}

// load confirmation page
function loadConfirmation() {
    if (document.getElementById("confirmDate")) {
        document.getElementById("confirmDate").innerHTML = sessionStorage.getItem("confirmDate");
        document.getElementById("confirmType").innerHTML = sessionStorage.getItem("confirmType");
        document.getElementById("confirmQuantity").innerHTML = sessionStorage.getItem("confirmQuantity");
        document.getElementById("confirmTotal").innerHTML = sessionStorage.getItem("confirmTotal");
    }
}

// hamburger menu toggle
function toggleNav() {
    var nav = document.querySelector(".nav_bar");
    nav.classList.toggle("responsive");
}

// leaflet map
function initMap() {
    if (document.getElementById("map")) {
        var map = L.map('map').setView([40.4433, -79.9436], 15);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);
        L.marker([40.4433, -79.9436]).addTo(map)
            .bindPopup('MonoMuse — Pittsburgh, PA')
            .openPopup();
    }
}

// image slideshow
function initSlideshow() {
    slideIndex = 0;
    var slides = document.querySelectorAll(".slides .slide");
    console.log("slides found:", slides.length);
    if (slides.length > 0) {
        slides[0].classList.add("active");
    }
}

function changeSlide(n) {
    var slides = document.querySelectorAll(".slides .slide");
    if (slides.length === 0) return;
    slides[slideIndex].classList.remove("active");
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    slides[slideIndex].classList.add("active");
}

// run on DOM ready
document.addEventListener("DOMContentLoaded", function() {
    greeting(hour);
    ActiveNav();
});