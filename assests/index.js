let phoneNumberInput = document.getElementById("phoneNumber");

let textBox = document.querySelector("textarea");


let generateBtn = document.getElementById("generate-btn");
let copyBtn = document.getElementById("copy-btn");

function generateWhatsAppLink(phoneNumber, text) {
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
}

var phoneNumber = phoneNumberInput.innerHTML;
var text = "Hey there! How can I help you?";

var whatsAppLink = generateWhatsAppLink(phoneNumber, text);
console.log(whatsAppLink);
console.log(phoneNumberInput.value);