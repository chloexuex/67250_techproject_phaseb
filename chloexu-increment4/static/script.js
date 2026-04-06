// // variables and addition
// var x = 5;
// var y = 7;
// var z = x + y;
// console.log(z);

// // string concatenation
// var A = "Hello ";
// var B = "world!";
// var C = A + B;
// console.log(C);

// // function
// function sumnPrint(x1, x2) {
//     var result = x1 + x2;
//     console.log(result);
// }

// sumnPrint(x, y);
// sumnPrint(A, B);

// // conditional statement
// if (C.length > z) {
//     if (C.length > z) {
//         console.log(C);
//     }
// } else {
//     if (C.length < z) {
//         console.log(z);
//     } else {
//         console.log("good job!");
//     }
// }

// // arrays and loops
// var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
// var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

// // arrays and loops using forEach
// function findTheBanana(arr) {
//     arr.forEach(function(item) {
//         if (item === "Banana") {
//             alert("Found the Banana!");
//         }
//     });
// }

// findTheBanana(L1);
// findTheBanana(L2);

// time-based greeting
var now = new Date();
var hour = now.getHours();

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

greeting(hour);

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

ActiveNav();

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

    // clear errors
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