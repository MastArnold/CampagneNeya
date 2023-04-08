function send_sms(number, message){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://www.lesmsbus.com:7170/ines.smsbus/smsbusMt?to=226"+number+"&text="+message+"&username=JoFastco&password=332GabHASMS&from=Neya.com", true);
    xhr.responseType = "text";
    xhr.send();

    xhr.onload = function(){
        if(xhr.status != 200){
            alert("Erreur" + xhr.status + " : " + xhr.statusText);
        }else{
            var response = xhr.responseText;
            //alert(response);
        }
    };
    
    xhr.onerror = function(error){
        alert("Echec de l'envoi ! Impossible d'envoyer votre requête. Vérifiez votre connexion et réessayez..." + error);
    }
}
//send_sms('52077500', "Vous avez reçu un message de : \nKIENOU ARNOLD ; \nTel : 74166439. \n\n<< Je vais grandir un jour, Inshallah ! >>");