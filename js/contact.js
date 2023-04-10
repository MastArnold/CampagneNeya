const contactForm = document.querySelector("#contact-form");
const buttonContactForm = document.querySelector("#button-contact-form");
const inputNom = document.querySelector("#contact-nom-prenom");
const inputTelephone = document.querySelector("#contact-telephone");
const inputMessage = document.querySelector("#contact-message");

contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const nom = inputNom.value;
    const telephone = inputTelephone.value;
    const message = inputMessage.value;
    if(nom != "" && telephone != "" & message != ""){
        const text = "Vous avez reçu un message de "+nom+" \nTéléphone : "+telephone+" \nMessage : "+message;
        send_sms("74166439", text);
    }else{
        alert("Veuillez renseigner l'intégralité des champs !");
    }
});