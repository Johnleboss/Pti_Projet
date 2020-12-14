var nom = document.getElementById("nom");
var email = document.getElementById("email");
var numero = document.getElementById("numero");
var message = document.getElementById("message");

var pnom = document.getElementById("pnom");
var pemail = document.getElementById("pemail");
var pnumero = document.getElementById("pnumero");

nom.addEventListener("keypress", message1)
function message1()
{
    var condition=/^([A-Za-z ])+$/.test(nom.value);
    if(condition==false)
    {
        pnom.innerHTML="veuillez renseigner des donnés justes";
        pnom.style.color="red";
        pnom.style.fontSize="0.8em";
    }
    else
    {
        pnom.innerHTML="";
    }
}

email.addEventListener("keypress", message2)
function message2()
{
    var condition=test(email.value);
    if(condition==false)
    {
        pemail.innerHTML="veuillez renseigner des donnés justes";
        pemail.style.color="red";
        pemail.style.fontSize="0.8em";
    }
    else
    {
        pemail.innerHTML="";
    }
}