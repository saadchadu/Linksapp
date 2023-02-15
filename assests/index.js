let phoneNumberInput = document.getElementById("phoneNumber");

let textBox = document.querySelector("textarea");

let generateBtn = document.getElementById("generate-btn");
let prevBtn = document.getElementById("preview-btn")
let copyBtn = document.getElementById("copy-btn");

let link = document.getElementById("link");


function generateLink() {
    let number = phoneNumberInput.value;
    let message = textBox.value;
    let url = "https://api.whatsapp.com/send?phone=";
    let end_url = `${url}${number}&text=${message}`;
    let removeSpace = end_url.replace(/ /g, "%20");
    end_url = removeSpace;
    link.innerHTML = end_url;

}

function previewLink(){
    let number = phoneNumberInput.value;
    let message = textBox.value;
    let url = "https://api.whatsapp.com/send?phone=";
    let end_url = `${url}${number}&text=${message}`;
    let removeSpace = end_url.replace(/ /g, "%20");
    end_url = removeSpace;
    window.open(end_url);
    
}

// const button = document.querySelector('button');
// const url = 'https://example.com'; // replace with your desired URL


function copyLink(){
    let number = phoneNumberInput.value;
    let message = textBox.value;
    let url = "https://api.whatsapp.com/send?phone=";
    let end_url = `${url}${number}&text=${message}`;
    let removeSpace = end_url.replace(/ /g, "%20");
    end_url = removeSpace;
    navigator.clipboard.writeText(end_url).then(() => {
        alert("Copied to clipboard");
    });
}



