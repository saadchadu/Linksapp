let phoneNumberInput = document.getElementById("phoneNumber");

let textBox = document.querySelector("textarea");

let generateBtn = document.getElementById("generate-btn");
let prevBtn = document.getElementById("preview-btn");
let copyBtn = document.getElementById("copy-btn");

let link = document.getElementById("link");
let number = phoneNumberInput.value;
let message = textBox.value;


function generateLink() {
    let number = phoneNumberInput.value;
    let message = textBox.value;
    let url = "https://api.whatsapp.com/send?phone=";
    let end_url = `${url}${number}&text=${message}`;
    let removeSpace = end_url.replace(/ /g, "%20");
    end_url = removeSpace;
    link.innerHTML = end_url;

    //
    if(number==0){
        function shakeTimout(){
            phoneNumberInput.classList.add("shake");
            link.innerText = " ";
        }
        shakeTimout();
        setTimeout(() => {
            phoneNumberInput.classList.remove('shake');
            }, 1200); 
    }
}

function previewLink() {
    let number = phoneNumberInput.value;
    let message = textBox.value;
    let url = "https://api.whatsapp.com/send?phone=";
    let end_url = `${url}${number}&text=${message}`;
    let removeSpace = end_url.replace(/ /g, "%20");
    end_url = removeSpace;
    window.open(end_url);

    //
    if(number==0){
        function shakeTimout(){
            phoneNumberInput.classList.add("shake");
            link.innerText = " ";
        }
        shakeTimout();
        setTimeout(() => {
            phoneNumberInput.classList.remove('shake');
            }, 1200); 
    }
}



function copyLink() {
    let number = phoneNumberInput.value;
    let message = textBox.value;
    let url = "https://api.whatsapp.com/send?phone=";
    let end_url = `${url}${number}&text=${message}`;
    let removeSpace = end_url.replace(/ /g, "%20");
    end_url = removeSpace;
    navigator.clipboard.writeText(end_url).then(() => {
        var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () {
        x.className = x.className.replace("show", "");
    }, 3000);
    });

    
    
}

