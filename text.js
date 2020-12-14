                             
                             
                             //Cours de JavaScript

             // 1) Les variables   ( Une variable peut stocker une valeur primitive ou un objet)

    // A°) Les Numbers

    // B°) Les chaines de caractères (Strings)

    // C°) Les Boléens (true or false)

    // D°) Les tableaux

    // E°) Les objets
                        
                           /* SYNTAXE POUR UN TYPE D'OBJET

                           Ex : var Fabrice =
                           {
                               Nom : "BROOHM",
                               Prenoms : "Nikue",
                               Age : 19,

                               identite : function()
                               {
                                   return "Nom : " + this.Nom + "\n" +
                                          "Prenoms : " + this.Prenoms + "\n" +
                                          "Age : " + this.Age +;
                               }
                           }
                           alert ( Fabrice.identite());

                           
                           
                           AUTRE SYNTAXE POUR LE TYPE OBJET

                           Ex : function Identite( n, p, a)
                           {
                               this.nom=n;
                               this.prenom=p;
                               this.age=a;
                           }
                           var Fabrice= new Identite("BROOHM", "Nikue", 19);
                           var Denise= new Identite("BROOHM", "Adévi", 22);

                           alerte ( "Nom de Fabrice : " + Fabrice.Identite );
                           alerte ( "Age de Denise :" + Denise.age);


                           // OBJET SCREEN

                           // OBJET NAVIGATOR

                           // OBJET LOCATION

                           // OBJET HISTORY




    // F°) Les constructions

    // G°) Les dates
             
            // --new Date()
            // --Date.now()

            // --.getDay()
            // --.getDate()
            // --.getMonths()
            // --.Fullyears()

            // --.getHours()
            // --.getMinutes()
            // --.getSecondes()
            // --.getMillisecondes


              // 2) Les conditions
          
    // A°) Les opérateurs de calcul

    // B°) Les opérateurs logiques
       
                  // --if
                  // --switch

              // 3°) Les Boucles
                 
                  // --for
                  // --while
                  // --do...while

              // 4°) Les functions

              // 5°) Quelques fonctions standards
                  
                   // --toUpperCase()
                   // --toLowerCase()
                   // --charAt()
                   // --toLocaleLowerCase()...
                   // --indexOf()
                   // --replace()
                   // --Slice()
                   // --trim()
                   // --LastIndexOf()
                   // --split()
                   // --Substring(nunbe 1, number 2) pour les coupures de mots
                   // --StartWitch("Je")  verifie si Je fait partie du string
                   // --Math.pow()
                   // --Math.sqrt()
                   // --Math.round()
                   // --Math.sin()
                   // --Math.cos()
                   // --Math.tan()
                   // --Math.min()
                   // --Math.random()
                   // --Math.E
                   // --Math.max()...
                   // --.Join("") pour les tableaux
                   // --.map
                   // --forEach()
                   // --push() pour ajouter des éléments à la fin d'un tableu et retourne la nouvelle longueur de tableau modifié
                   //-- shiff(),unshiff() sans paramètre pour suprimer le premier ou le dernier élément d'un tableau et le retourner

                // 6°) DOM

                    // --document.getElementById()
                    // --document.getElementsByTagName()
                    // --document.getElementByClassName()
                    // --document.querySelector()
                    // --document.querySelector()
                               
                                // --innerHTML
                                // --innerText
                                // --style
                                // --(= ou +=) (Pour ajouter ou modifier des éléments au HTML)

                // 7°) EVENEMENTS

                                 // --Syntaxe la plus utilisée (addEvendListner)  
                                            // click, mousedown =! mouseup , mouseover =! mouseout
                                 // --Quitter un évènement
                                 // --Sens de propagation
                                 // --Pour stopper la propagation (La méthode e.stopPropagation())
                                 // --Pour sauter un'évènement et excécuter le suivant (La méthode e.preventDefault())
                                 // --L'objet screen
                                 // --L'objet Navigator

                // 8°) VALIDATION DES FORMULAIRES

          
/*

var input=document.getElementById("input");
var button=document.getElementById("button");
var liste=document.getElementById("liste")

button.addEventListener("click",valider)
function valider()
{
    //var condition=/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9_.-]+\.[a-z]{2,3}$/.test(input.value);
    var condition=/^[0-9]{2}( ?[0-9]{2}){3}$/.test(input.value);
    if(condition==false)
    //alert("Email incorect");
    alert("Numero incorect")
    else
    {
        input.value=" ";
    }
}



LA METHODES (i et g )
               
           1 ) Première syntaxe ( Celle de match)     Ex : r1 = /engager/i   ;   r2 = /engager/g
           2 ) Deuxième syntaxe ( Celle de search)    Ex : r2 = /engagez/i   ;   r2 = /engager/
           3 ) Troixième syntaxe ( Celle de replace)  Ex : ré = /engager/g   ;   r2 = /engager/   

*/

alert("Vérification");