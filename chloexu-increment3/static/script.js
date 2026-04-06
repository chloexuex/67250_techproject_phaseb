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