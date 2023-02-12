let phoneNumberInput = document.getElementById("phoneNumber");

let textBox = document.querySelector("textarea");

let generateBtn = document.getElementById("generate-btn");
let copyBtn = document.getElementById("copy-btn");

function generateLink() {
    let number = phoneNumberInput.value;
    let message = textBox.value;
    let url = "https://api.whatsapp.com/send?phone=";
    let end_url = `${url}${number}&text=${message}`;
    
    navigator.clipboard.writeText(end_url).then(() => {
        alert("Copied to clipboard");
    });
}
