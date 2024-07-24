import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
//import './style.css';
console.log('main');
let varString = "Hello world";
let varNombre = 65;
let varNombreVirgule = 2.36;
let varTableau = [23, "Hello", 96, "World"];
let varObjet = {
  firstName: "Fuertes",
  name:"Sofia",
  age: 30,
}; 

console.log(varString);
console.log(varNombre);
console.log(varNombreVirgule);
console.log(varTableau);
console.log(varObjet);
console.log(varObjet.firstName);

//Exercice Calculs - Nombres
let nombre1= 56;
let nombre2= 32.8;
let nombre3= 902;
let nombre4= 4.2;


console.log((nombre1*nombre2)+3);
console.log(nombre3/nombre1);
console.log(nombre4+=nombre2);
console.log(nombre4+=20);

nombre3++;
console.log(nombre3)
console.log((50/10)*nombre4-(nombre2-=8));
nombre1--;
console.log(nombre1);

console.log("0.1 + 0.2 =", (0.1+0.2).toFixed(1));
console.log("0.1 + 0.2 =", (0.1+0.2));

//Concatenation
let bonjour = 'Bonjour';

let unMessage = "Bienvenue";

let welcome = `Bienvenue`;

console.log(bonjour + unMessage + welcome);

//Exercice Phrase

let nom = "Lara";
let pizza = "Margharita"
let date = "15 Julliet"
let heure = "20h55 "
let tempsAttend = 40;
let blague = `Qu'est-ce qu'une pizza a dit à une autre pizza qui lui demandait des conseils?\n"Suis ta pâte et tout ira bien !"\n `;
let merci = `Merci d'avoir commandé chez "La pizzeria Raffinata"`;

let sumUpOrderPhrase = "Bonsoir " + nom + ", vous avez commandé une pizza " + pizza + ' le ' + date + " à " + heure + ". La commande sera livrée en " + tempsAttend + " minutes. \n" + blague + merci;
console.log(sumUpOrderPhrase);

let sumUpOrder = `Bonsoir ${nom},
Vous avez commandé une pizza ${pizza} le ${date} à ${heure}.
La commande sera livrée en ${tempsAttend} minutes.

${blague} 
${merci}`; 
console.log(sumUpOrder);

//Exercice Tableaux
let nom1= "Emma";
let age= 30;
let passions= ["Football", "Céramique"]; 

let tabUser = [nom1, age, passions]; 

console.log(tabUser);
console.log(tabUser[2]); 
console.log(tabUser[2][1]);

//Exercice tableaux 2
console.log("Exercice Tableaux 2");
let trucs= [50, "Hello", 63, "Argentina"]; 
trucs.push("Messi");
console.log(trucs);

//Exercice tableaux 3
console.log("Exercice Tableaux 3");
let leNom = "Messi";
let lePrenom = "Lionel"
let laPhrase = []; 
laPhrase.push(leNom, lePrenom, lePrenom[0], leNom[0]);
console.log(laPhrase);

//Exercice 5.2 
let moyenne = moyenneDeuxNotes (12,16) ;
function moyenneDeuxNotes(note1, note2){
      return (note1+note2)/2;
}
console.log(`La moyenne des 2 notes: ${moyenne}`)

//Exercice 5.3
let nomEleve = "Sebastian"; 
let tab1 = [15,12,18,6]; 
let moyenne2 = moyenneTableau(tab1); 

function moyenneTableau(tab){
  let result=0;
  for(let i=0; i<tab1.length; i++){
      result += tab[i];  
  }
  return result/tab.length;
}
console.log(`La moyennes de notes de ${nomEleve} est: ${moyenne2}`);


//exemple scope
// ? La notion de scope (la portée d'une variable)
// ? Dans l'exemple ci-dessous on a 2 fois la même variable testScope1 qui est déclarée ?????
// ? En fait même si elles ont le même nom ce ne sont pas les même espaces mémoires qui sont alloués
// ? let testScope1 = 99; est dans le scope global de notre programme 
// ? let testScope1 = 12; est dans le scope de la fonction
let testScope1 = 99;
function maFonctionTestScope(){
    let testScope1 = 12;
    console.log('scope de la fonction :',testScope1);
};
maFonctionTestScope();
console.log('scope hors de la fonction :',testScope1);


//TODO : Pourquoi ca beug ?
function buggyFunction() {
  let wtf = 9;
  console.log(wtf);
}; 
buggyFunction();
let wtf2=9; //pour pouvoir l'appeler en dehors de la function
console.log(wtf2); 

//TODO : Pourquoi ca beug / Pourquoi ca marche pas ?
let something1 = 44;
function functionBugParent() {
    let something2 = 9;
    let lesNews = `il est 99h67`;
    console.log(something2);
    console.log(lesNews);
};
functionBugParent();
console.log(something1);

/**
 * **************************************
 * 7- Les opérateurs
 * **************************************
 */
console.log("7- Les opérateurs");
//! Les booléens : 2 états possibles TRUE ou FALSE (vrai ou faux)
let a = 11;
let b = 99;
console.log("variable a:",a);
console.log("variable b:",b);
//! avec == on demande si a est égal à b
console.log("c'est égal ? :",a == b);
//!pour vérifier si a est différent de b on utilise !=
console.log("C'est inégal ? :",a != b)
//! Ensuite on retrouve les même opérateurs qu'en Mathématique
//! ici on demande si a est strictement suppérieur à b
console.log("Strictement suppérieur ? :",a > b);
//! ici on demande si a est strictement inférieur à b
console.log("Strictement inférieur ? :",a < b);
//! ici on demande si a est inférieur ou égal à b
console.log("Inférieur ou égal ? :",a <= b);
//! ici on demande si a est suppérieur ou égal à b
console.log("suppérieur ou égal ?:",a >= b);
//? Attention : de base JS ne prend pas en compte le typage des variables : 
//? ci dessous le nombre 2 est égal au caractère "2" 🤔
console.log("le chiffre 2 = \"2\"?:",2 == "2");
//! Pour prendre en compte le type des donnée que l'on compare, on utilise l'opérateur ===
//! c'est l'égalité stricte
console.log("égalité stricte ?:",2 === "2");
//! il y a aussi l'inégalité stricte avec l'opérateur !==
console.log("inégalité stricte ?:",2 !== "2");

//!-------CONDITIONS TERNAIRES-------
// ? on combine un opérateur de comparaison et l'opérateur ? pour établir une condition qui return une chose ou une autre chose
// ? cela permet de faire une condition if (simple) avec une syntaxe racourcie
let whatIsYourAge = 6;
console.log(whatIsYourAge >18 ? '🍹':'👮‍♂️');
// Astuce pour check si une variable est définie (si ya QQchose dans son espace mémoire)
let userPremium;
// On check si une variable est définie la condition c'est juste uneVariable ?
console.log(userPremium?'OK 🤙':'Not OK 👺');
// ↑ c'est l'équivalent de ↓
console.log(userPremium ==true?'OK 🤙':'Not OK 👺');
// on doit lui assigner QQCHOSE
userPremium = 'YES';
console.log(userPremium?'OK 🤙':'Not OK 👺');

// ? On peut utiliser des operateur aussi pour combiner des conditions && (pour ET) || (pour OU)
console.log(3==3&&3<4);
let typeUtilisateur = 'Extra';
console.log(typeUtilisateur == 'Extra' || typeUtilisateur == 'Premium');


//!-------CONDITION avec IF ELSE-------
// ? Avec if on va pouvoir créer un bloc de code qui s'exécute si une condition est remplie
function calculTableResto(nombreDeReservation) {
  if (nombreDeReservation>=30){
      return 'il nous reste pas beaucoup de tables, ça serait pour combien de personnes ?';
  }
  else if(nombreDeReservation<10){
      return 'Il nous reste une table'
  }else{
      return 'On est fermé !'
  }
};
console.log(calculTableResto(50));

//Exercice If Else
let eleve = "Sebastian"; 
let tab2 = [15,11,10]; 
//let noteMoyenne = moyenneNote(tab2); 

function moyenneNote(tab){
  let result=0;
  for(let i=0; i<tab.length; i++){
      result += tab[i];  
  }
   let moyenne = result/tab.length;
  if(moyenne>=15){
    console.log("Trés bien");
  }
  else if(moyenne>=10){
    console.log("Assez bien");
  }else{
    console.log("Refus");
  }
};
moyenneNote(tab2);


//OBJETS
// ? syntaxe  { uneProprieté:uneValeur } 
// ? dans un objet on assigne avec : plutot qu'avec = 
let userExample = {
  id:3657826,
  'name':'Seagal',
  firstname:'Steven',
  badges:['🎥','👮‍♂️','🎸','🥋','🎤'],
  // Dans un objet no need du mot clé function
  lol(){
      console.log('cool');
  },
};
console.log(userExample); 

// ? une ƒ° native de JS poour connaitre les propriétés d'un objet, hasOwnProperty()
let menuDuJour={
  entree:"Bassine d'Aioli",
  plat:"Rat Adulte",
  dessert:'île Fidji'
};
console.log(menuDuJour);
console.log(menuDuJour.hasOwnProperty('entree'));

let user1 = {
  name : "Sofia", 
  age : 30, 
  passions : {
    passion1: "Football", 
    passion2: "Littérature", 
  }
}
console.log(user1);
console.log(user1.name);
console.log(user1.passions);
console.log(user1.passions.passion2);