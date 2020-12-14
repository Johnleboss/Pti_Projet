var nom = document.getElementById("nom");
var email = document.getElementById("email");
var numero = document.getElementById("numero");
var message = document.getElementById("message");

var pnom = document.getElementById("pnom");
var pemail = document.getElementById("pemail");
var pnumero = document.getElementById("pnumero");
var pbutton = document.getElementById("pbutton");

var button = document.getElementById("B1");

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
    var condition=/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9_.-]+\.[a-z]{2,3}$/.test(email.value);
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

numero.addEventListener("keyup", message3)
function message3()
{
    var condition=/^[0-9]{2}( ?[0-9]{2}){3}$/.test(numero.value);
    if(condition==false)
    {
        pnumero.innerHTML="veuillez renseigner des donnés justes";
        pnumero.style.color="red";
        pnumero.style.fontSize="0.8em";
    }
    else
    {
        pnumero.innerHTML="";
    }
}

button.addEventListener("click",message4)
function message4()
{
    pbutton.innerHTML="Message envoyé";
}

