import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css';
console.log('main');
// /*import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
// */

// let varString = "Hello world";
// let varNombre = 65;
// let varNombreVirgule = 2.36;
// let varTableau = [23, "Hello", 96, "World"];
// let varObjet = {
//   firstName: "Fuertes",
//   name:"Sofia",
//   age: 30,
// }; 

// console.log(varString);
// console.log(varNombre);
// console.log(varNombreVirgule);
// console.log(varTableau);
// console.log(varObjet);
// console.log(varObjet.firstName);

// //Exercice Calculs - Nombres
// let nombre1= 56;
// let nombre2= 32.8;
// let nombre3= 902;
// let nombre4= 4.2;


// console.log((nombre1*nombre2)+3);
// console.log(nombre3/nombre1);
// console.log(nombre4+=nombre2);
// console.log(nombre4+=20);

// nombre3++;
// console.log(nombre3)
// console.log((50/10)*nombre4-(nombre2-=8));
// nombre1--;
// console.log(nombre1);

// console.log("0.1 + 0.2 =", (0.1+0.2).toFixed(1));
// console.log("0.1 + 0.2 =", (0.1+0.2));

// //Concatenation
// let bonjour = 'Bonjour';

// let unMessage = "Bienvenue";

// let welcome = `Bienvenue`;

// console.log(bonjour + unMessage + welcome);

// //Exercice Phrase

// let nom = "Lara";
// let pizza = "Margharita"
// let date = "15 Julliet"
// let heure = "20h55 "
// let tempsAttend = 40;
// let blague = `Qu'est-ce qu'une pizza a dit à une autre pizza qui lui demandait des conseils?\n"Suis ta pâte et tout ira bien !"\n `;
// let merci = `Merci d'avoir commandé chez "La pizzeria Raffinata"`;

// let sumUpOrderPhrase = "Bonsoir " + nom + ", vous avez commandé une pizza " + pizza + ' le ' + date + " à " + heure + ". La commande sera livrée en " + tempsAttend + " minutes. \n" + blague + merci;
// console.log(sumUpOrderPhrase);

// let sumUpOrder = `Bonsoir ${nom},
// Vous avez commandé une pizza ${pizza} le ${date} à ${heure}.
// La commande sera livrée en ${tempsAttend} minutes.

// ${blague} 
// ${merci}`; 
// console.log(sumUpOrder);

// //Exercice Tableaux
// let nom1= "Emma";
// let age= 30;
// let passions= ["Football", "Céramique"]; 

// let tabUser = [nom1, age, passions]; 

// console.log(tabUser);
// console.log(tabUser[2]); 
// console.log(tabUser[2][1]);

// //Exercice tableaux 2
// console.log("Exercice Tableaux 2");
// let trucs= [50, "Hello", 63, "Argentina"]; 
// trucs.push("Messi");
// console.log(trucs);

// //Exercice tableaux 3
// console.log("Exercice Tableaux 3");
// let leNom = "Messi";
// let lePrenom = "Lionel"
// let laPhrase = []; 
// laPhrase.push(leNom, lePrenom, lePrenom[0], leNom[0]);
// console.log(laPhrase);

// //Exercice 5.2 
// let moyenne = moyenneDeuxNotes (12,16) ;
// function moyenneDeuxNotes(note1, note2){
//       return (note1+note2)/2;
// }
// console.log(`La moyenne des 2 notes: ${moyenne}`)

// //Exercice 5.3
// let nomEleve = "Sebastian"; 
// let tab1 = [15,12,18,6]; 
// let moyenne2 = moyenneTableau(tab1); 

// function moyenneTableau(tab){
//   let result=0;
//   for(let i=0; i<tab1.length; i++){
//       result += tab[i];  
//   }
//   return result/tab.length;
// }
// console.log(`La moyennes de notes de ${nomEleve} est: ${moyenne2}`);


// //exemple scope
// // ? La notion de scope (la portée d'une variable)
// // ? Dans l'exemple ci-dessous on a 2 fois la même variable testScope1 qui est déclarée ?????
// // ? En fait même si elles ont le même nom ce ne sont pas les même espaces mémoires qui sont alloués
// // ? let testScope1 = 99; est dans le scope global de notre programme 
// // ? let testScope1 = 12; est dans le scope de la fonction
// let testScope1 = 99;
// function maFonctionTestScope(){
//     let testScope1 = 12;
//     console.log('scope de la fonction :',testScope1);
// };
// maFonctionTestScope();
// console.log('scope hors de la fonction :',testScope1);


// //TODO : Pourquoi ca beug ?
// function buggyFunction() {
//   let wtf = 9;
//   console.log(wtf);
// }; 
// buggyFunction();
// let wtf2=9; //pour pouvoir l'appeler en dehors de la function
// console.log(wtf2); 

// //TODO : Pourquoi ca beug / Pourquoi ca marche pas ?
// let something1 = 44;
// function functionBugParent() {
//     let something2 = 9;
//     let lesNews = `il est 99h67`;
//     console.log(something2);
//     console.log(lesNews);
// };
// functionBugParent();
// console.log(something1);

// /**
//  * **************************************
//  * 7- Les opérateurs
//  * **************************************
//  */
// console.log("7- Les opérateurs");
// //! Les booléens : 2 états possibles TRUE ou FALSE (vrai ou faux)
// let a = 11;
// let b = 99;
// console.log("variable a:",a);
// console.log("variable b:",b);
// //! avec == on demande si a est égal à b
// console.log("c'est égal ? :",a == b);
// //!pour vérifier si a est différent de b on utilise !=
// console.log("C'est inégal ? :",a != b)
// //! Ensuite on retrouve les même opérateurs qu'en Mathématique
// //! ici on demande si a est strictement suppérieur à b
// console.log("Strictement suppérieur ? :",a > b);
// //! ici on demande si a est strictement inférieur à b
// console.log("Strictement inférieur ? :",a < b);
// //! ici on demande si a est inférieur ou égal à b
// console.log("Inférieur ou égal ? :",a <= b);
// //! ici on demande si a est suppérieur ou égal à b
// console.log("suppérieur ou égal ?:",a >= b);
// //? Attention : de base JS ne prend pas en compte le typage des variables : 
// //? ci dessous le nombre 2 est égal au caractère "2" 🤔
// console.log("le chiffre 2 = \"2\"?:",2 == "2");
// //! Pour prendre en compte le type des donnée que l'on compare, on utilise l'opérateur ===
// //! c'est l'égalité stricte
// console.log("égalité stricte ?:",2 === "2");
// //! il y a aussi l'inégalité stricte avec l'opérateur !==
// console.log("inégalité stricte ?:",2 !== "2");

// //!-------CONDITIONS TERNAIRES-------
// // ? on combine un opérateur de comparaison et l'opérateur ? pour établir une condition qui return une chose ou une autre chose
// // ? cela permet de faire une condition if (simple) avec une syntaxe racourcie
// let whatIsYourAge = 6;
// console.log(whatIsYourAge >18 ? '🍹':'👮‍♂️');
// // Astuce pour check si une variable est définie (si ya QQchose dans son espace mémoire)
// let userPremium;
// // On check si une variable est définie la condition c'est juste uneVariable ?
// console.log(userPremium?'OK 🤙':'Not OK 👺');
// // ↑ c'est l'équivalent de ↓
// console.log(userPremium ==true?'OK 🤙':'Not OK 👺');
// // on doit lui assigner QQCHOSE
// userPremium = 'YES';
// console.log(userPremium?'OK 🤙':'Not OK 👺');

// // ? On peut utiliser des operateur aussi pour combiner des conditions && (pour ET) || (pour OU)
// console.log(3==3&&3<4);
// let typeUtilisateur = 'Extra';
// console.log(typeUtilisateur == 'Extra' || typeUtilisateur == 'Premium');


// //!-------CONDITION avec IF ELSE-------
// // ? Avec if on va pouvoir créer un bloc de code qui s'exécute si une condition est remplie
// function calculTableResto(nombreDeReservation) {
//   if (nombreDeReservation>=30){
//       return 'il nous reste pas beaucoup de tables, ça serait pour combien de personnes ?';
//   }
//   else if(nombreDeReservation<10){
//       return 'Il nous reste une table'
//   }else{
//       return 'On est fermé !'
//   }
// };
// console.log(calculTableResto(50));

// //Exercice If Else
// let eleve = "Sebastian"; 
// let tab2 = [15,11,10]; 
// //let noteMoyenne = moyenneNote(tab2); 

// function moyenneNote(tab){
//   let result=0;
//   for(let i=0; i<tab.length; i++){
//       result += tab[i];  
//   }
//    let moyenne = result/tab.length;
//   if(moyenne>=15){
//     console.log("Trés bien");
//   }
//   else if(moyenne>=10){
//     console.log("Assez bien");
//   }else{
//     console.log("Refus");
//   }
// };
// moyenneNote(tab2);


// //OBJETS
// // ? syntaxe  { uneProprieté:uneValeur } 
// // ? dans un objet on assigne avec : plutot qu'avec = 
// let userExample = {
//   id:3657826,
//   'name':'Seagal',
//   firstname:'Steven',
//   badges:['🎥','👮‍♂️','🎸','🥋','🎤'],
//   // Dans un objet no need du mot clé function
//   lol(){
//       console.log('cool');
//   },
// };
// console.log(userExample); 

// // ? une ƒ° native de JS poour connaitre les propriétés d'un objet, hasOwnProperty()
// let menuDuJour={
//   entree:"Bassine d'Aioli",
//   plat:"Rat Adulte",
//   dessert:'île Fidji'
// };
// console.log(menuDuJour);
// console.log(menuDuJour.hasOwnProperty('entree'));

// let user1 = {
//   name : "Sofia", 
//   age : 30, 
//   passions : {
//     passion1: "Football", 
//     passion2: "Littérature", 
//   }
// }
// console.log(user1);
// console.log(user1.name);
// console.log(user1.passions);
// console.log(user1.passions.passion2);



// //? Une fonction type getElement pour récupérer tous les élément selon une certaine balise dans une HTMLCollection
// let tousLesP = document.getElementsByTagName('p');
// let premierP = document.getElementsByTagName('p')[0];
// console.log('La HTMLCollection',tousLesP);
// console.log('Le primer P',premierP);
// console.log('Le 2e P',tousLesP[1]);

// premierP.innerText = "LALALAL";
// tousLesP[2].innerText = "dfdfhrtzerdsf";

// let lePsuper = document.getElementsByClassName('super');
// console.log('P super',lePsuper);
// let lePcool = document.getElementById('cool');
// console.log('P cool',lePcool);

// //? Une fonction type querySelector pour récupérer UN élément (le 1er trouvé)
// let firstP = document.querySelector('p');
// let allP=document.querySelectorAll('.super');
// console.log('firstP via querySelector : ', firstP);
// console.log('allP', allP);

// let firstId = document.querySelector('#cool')
// console.log('firstId via querySelector : ', firstId);//! Placer des elements dans une page web


// //! Placer des elements dans une page web
// //? Une fonction type querySelector pour récupérer UN (le 1er trouvé) élément par la NodeList
// let allParagraphes = document.querySelectorAll('p');
// let laDiv = document.querySelector('.vide');
// // let premierH1 = document.querySelector('h1');
// // //! insertBefore, on selectionne 2 éléments pour placer l'un avant l'autre
// // document.body.insertBefore(allParagraphes[9],premierH1);

// laDiv.append(`Là c'est JS qui ajoute du texte dans la div`);
// // Append plutot pensé pour ajouter du contenu à la volé au format string
// // si on a crée ou séléctionné un élément que l'on veut placer : ceci peut marcher
// laDiv.append(allParagraphes[4]);
// // Mais on a aussi la fonction appendChild;
// //laDiv.appendChild(allParagraphes[0]);
// let premierH1 = document.querySelector('h1');
// // //! On peut aussi supprimer un élément du DOM
// //document.body.removeChild(allParagraphes[9]);

// let appDiv = document.querySelector('#app');
// appDiv.removeChild(premierH1);

// /*//? Une fonction type querySelector pour récupérer UN (le 1er trouvé) élément par la NodeList
// let allParagraphes = document.querySelectorAll('p');
// //let laDiv = document.querySelector('.vide');
// let premierH1 = document.querySelector('h1');
// //! insertBefore, on selectionne 2 éléments pour placer l'un avant l'autre
// document.body.insertBefore(allParagraphes[2],premierH1);
// */
// console.log('Phase 1, 2 et 3');
// // Phase1 
// let lestxt = document.getElementsByClassName('change'); 
// console.log(lestxt);
// // Phase2
// let textesTab = Array.from(lestxt); 
// console.log(textesTab);
// //Phase3 
// textesTab.map(modifP => {
//   modifP.innerHTML= `<strong>LOL JE SUIS HACKERMAN</strong>`; modifP.style.color = "red";modifP.addEventListener("click", function(){console.log("Hello there!!")}); console.log(modifP);
// });
//  //TODO: via JS afficher le profil  utilisateur dans la page web
//   const userData = {
//   name: 'John delavega',
//   email: 'john.doe@example.com',
//   age: 25,
//   dob: '08/02/1989',
//   active: true,
//   img:'https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg'
// };

// let user = document.querySelector('.userProfile');
// user.style.backgroundColor = "lightPink";

// const userImg = document.createElement('img');
// userImg.src = 'https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg';
// user.append(userImg);

// const userName = document.createElement('h2');
// userName.innerText = userData.name;
// user.append(userName);

// const userEmail = document.createElement('p');
// userEmail.innerText = userData.email;
// user.append(userEmail);

// const userAge = document.createElement('p');
// userAge.innerText = userData.age;
// user.append(userAge);

// const userDob = document.createElement('p');
// userDob.innerText = userData.dob;
// user.append(userDob);

// const userActive = document.createElement('p');
// userActive.innerText = userData.active;
// user.append(userActive);

// user.style.color = 'white';
// user.style.background = 'linear-Gradient(45deg, purple, pink, beige)'
// userImg.style.marginTop="50px";
// user.style.width = "60%";
// userImg.style.width="90%";
// user.style.margin = "auto";
// user.style.fontFamily= "Serif";
// user.style.textAlign = "left";
// user.style.paddingLeft = "50px"
// user.style.boxShadow= "20px 10px 50px black";
// user.style.fontSize = "1em";

// //solution optimisée
// /*
// function applyStyles(element) {
//     element.style.backgroundColor = `background-color: #4158D0`;
//     element.style.backgroundImage = `linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)`;
//     element.style.color = `white`;
//     element.style.width = '500px';
//     element.style.margin = 'auto';
//     element.style.padding = '2rem';
// }

// function createAndAppendElement(tag, text, parentElement) {
//     const element = document.createElement(tag);
//     element.innerText = text;
//     parentElement.append(element);
// }

// let divUser = document.querySelector('.userProfile');
// applyStyles(divUser);

// const imgTemplate = document.createElement('img');
// imgTemplate.src = userData.img;
// imgTemplate.className = 'img-fluid';
// divUser.append(imgTemplate);

// createAndAppendElement('h1', userData.name, divUser);
// createAndAppendElement('h2', userData.email, divUser);
// createAndAppendElement('h3', userData.age, divUser);
// createAndAppendElement('h4', userData.dob, divUser);
// createAndAppendElement('h5', userData.active, divUser);
// */ 
// //Boucle WHILE
// let unIndex = 0;
// while (unIndex < 10) {
//     console.log("Le Nombre : " + unIndex);
//     unIndex++;
// };
// //Boucle FOR
// let listeFilm = ['Ultime Décision','Mission Alcatraz','Attack Force'];
// //? Boucle for, on définit un index (ici c'est i), 
// //? puis on définit une condition qui va définir le nombre de fois que le code dans la boucle sera exécutée
// //? puis on définit comment on passe à la prochaine itération de la boucle (ici i++, on augmente de 1 le numéro de la case que l'on console.log)
// for(let i=0;i<listeFilm.length;i++){
//     console.log('boucle FOR : ',listeFilm[i]);
// };
// //Boucle FOREACH
// //? La méthode forEach() permet d'exécuter une fonction donnée sur chaque élément du tableau.
// // ? On va choisir une variable temporaire pour parcourir les elements du tableau
// listeFilm.forEach(unFilm => console.log('boucle forEach Tableau : ',unFilm));

// //boucle FOR .. OF
// for(let unElementTablo of listeFilm){
//   console.log('boucle FOR...OF : ',unElementTablo);
// };

// //boucle FOR .. IN
// // on définit une variable temporaire pour parcourir le objet :)
// for(let cleObjet in userData){
//   console.log(`boucle FOR...IN (objet) : clé:${cleObjet} - valeur :  ${userData[cleObjet]} `);
// };

// //map() sur les tableau
// const array1 = [1, 4, 9, 16];

// // Pass a function to map
// const map1 = array1.map((uneCase) => uneCase * 2);

// console.log(map1);
// // Expected output: Array [2, 8, 18, 32]


// //transformation d'une HTMLCollection en Tableau (array) avec la ƒ° Array.from( )
// const allParag = document.body.getElementsByTagName("p");
// console.log(allParag);
// const paragTablo = Array.from(allParag);
// console.log(paragTablo);


// //Excercice afficher noms
// let newDiv = document.createElement('div');
// newDiv.classList.add('newUser');
// appDiv.append(newDiv);

// function ajouterTexte(pseudo, duTexte){
//   const user2 = document.createElement('p');
//   //user2.innerText = pseudo + ' - ' + duTexte;
//   user2.innerHTML = `<strong>${pseudo}</strong> - ${duTexte}`;
//   newDiv.append(user2);
// }
// ajouterTexte('Daniel','Garcia');
// ajouterTexte('Jarry','Borne');
// ajouterTexte('JCVD','OK');
// ajouterTexte('Dongue','Rodrigue');


// //!Quizz : ca bug
// var voiture = "Renault";
// console.log(voiture);
// var voiture = "BMW";
// console.log(voiture); 

// //Bonjour, le probleme c'est que tu as declare deux fois la meme variable mais tu l'as donne 2 valeur different.  
// //Aussi c'est reccomendable de plus utilise 'var' pour decalrer les variables parce que il a un portéé global( dans le cas que tu l'utilises dedands un function, 
// //la variable va a continue etre accesible en dehors de ce function). C'est mieux utiliser 'let' ou 'const' que ils ont une portée bloc ou local (Il ne peut pas être 
// //accessible en dehors du bloc de code particulier). Quand meme, prendre l'habitude de toujours nommé different tes variables. 

// //!Quizz : ca bug
// var car = "Nissan";

// if(car=="Nissan"){
//   var vitesse = 800;
// }
// console.log(vitesse);

// //Bonjour; c'est normal que ça marche parce que var il a une portée global, 
// //donc si tu declares un variable avec var dedans une boucle tu peux lappeler dehors le boucle. 
// //Mais c'est pas un bonne habitude. Si tu essaie de utiliser let en ce cas, 
// //tu vas voir que ça marche pas et tu vas devoir mettre le console log dedans ta boucle.

// //!Quizz : ca bug
// let superCar = 'BMW';
// const superModel = 'Sport';

// if(superCar =='BMW'){
//     const superVitesse = 900;
//     let superCar = "Citroen";
//     console.log(superCar);
// }
// console.log(superCar);

// //C'est normal que avec ton 2ème console.log il affiche BMW parce que c'est la valeur dehors de la boucle et 
// //le console.log dedans la boucle il va prendre le nouvau valeur définie dedans la boucle.
// //Tu as nommé les 2 'let' de la même façon et ça peut être un problème au futur.
// //Et aussi tu as déclaré deux variables que tu n'utilises pas du tout, donc si elles ne sont pas nécessaires pour ta boucle 
// //ou ton code, c'est mieux de ne pas les déclarer.


// //* Exemple de modification d'une propriété d'un objet qui est une const (exception)
// //! Exception constante modif ? 
// const MyTracklist = {
//   track1:'lofteurs up and down',
//   track2:'David Hallyday',
//   track3:'Crazy Frog'
// }

// //! on peut modifier une propriete d'un objet meme si l'objet est declare avec const
// console.log(MyTracklist);

// MyTracklist.track1 = 'félicien'; 
// MyTracklist.track5 = 'JOJO'; 

// console.log(MyTracklist);

// //! meme choses avec tableau dedans tableau
// const tableau=[[1,2,3], 2];
// tableau[0][1] = 6;
// console.log(tableau);

// /*
// let firstLink = document.querySelector('a');
// console.log(firstLink);
// //let allLinks = document.getElementsByTagName('a');
// //console.log(allLinks);

// let firstTitle = document.querySelector('h1');
// console.log(firstTitle);

// let firstImg = document.querySelector('img');
// console.log(firstImg);

// firstTitle.style.backgroundColor = 'blue';
// firstTitle.style.color = 'beige';
// // On accède directement aux porpiétés de l'objet qui correspondent aux attributs HTML
// firstTitle.className = 'laClasse';
// //firstLink.href = 'https://www.google.com';
// firstImg.src = 'https://picsum.photos/200/300';

// // On a une fonction native pour modifier n'importe quel attribut
// firstTitle.setAttribute('class','laClasse');
// firstTitle.setAttribute('bidule','toto');
// firstLink.setAttribute('href','https://www.googlllllle.com');
// firstImg.setAttribute('src','https://picsum.photos/200/300');
// firstImg.setAttribute('alt','une super img');
// */

// //* Exercice changer le title quand on click
// //Creation h1
// const newTitle = document.createElement('h1'); 
// newTitle.className = "newTitle"
// newTitle.innerText = 'D.O.M Events';
// appDiv.append(newTitle);
// //Selectioner H1 par son nom de Class
// const titleChange = document.getElementsByClassName('newTitle');
// console.log( titleChange);
// //Changement de HtmlCollection a Array
// const changeArray = Array.from (titleChange);
// //Function map et addEventListener pour change le title
// //changeArray.map(change => change.addEventListener("click", function(){change.innerHTML= '--🥶--'}));

// //version reclick 
// let selectTitle= false; 
// newTitle.addEventListener('click', function(){
//   console.log('ok ca click'); 
//   newTitle.innerText = selectTitle ? '-- 🥳 --':'D.O.M Events'; //? condition ternaire si selectTitle est vrai alors smiley sinon dom Events
//   selectTitle = !selectTitle; // ? à chaque click le booléen passe à son inverse (pour faire le re click)
// });

// /* avec querySelector
// //* ADD CLASSE
// const  classe1 = document.querySelector('.link1'); 
// console.log(classe1);
// classe1.addEventListener("click", function(){ 
//     const addClasse = document.getElementById('titleH2').classList; addClasse.add("style");
// })
// //* REMOVE CLASSE
// const classe2 = document.querySelector('.link2');
// console.log(classe2);
// classe2.addEventListener("click", function(){
//     const addClasse = document.getElementById('titleH2').classList; addClasse.remove("style");
// })
// //*TOGGLE CLASSE
// const classe3 = document.querySelector('.link3');
// console.log(classe3);
// classe3.addEventListener("click", function(){
//     const addClasse = document.getElementById('titleH2').classList; addClasse.toggle("style");
// })
//   */

// //* Avec querySelectorAll 
// const liens = document.querySelectorAll('a'); 
// console.log(liens);

// liens[0].addEventListener("click", function(){ 
//     const addClasse = document.getElementById('titleH2').classList; addClasse.add("style");
// })
// liens[1].addEventListener("click", function(){ 
//   const addClasse = document.getElementById('titleH2').classList; addClasse.remove("style");
// })
// liens[2].addEventListener("click", function(){ 
//   const addClasse = document.getElementById('titleH2').classList; addClasse.toggle("style");
// })

// /*document.addEventListener('keyup', function(eventClavier){
//   console.log('Yes Moi ECRIRE');
//   console.log(eventClavier);
//   console.log(eventClavier.key)

// });
// document.addEventListener('click', function(unEvent){
//   console.log('Yes Moi click');
//   console.log(unEvent);
//   console.log('coordX du ',unEvent.x)
//   console.log('coordY du click',unEvent.y)
// });
// */ 
let pageWeb = document.querySelector("#app");

document.addEventListener('click',function(unEvent){
  console.log(unEvent);
  const coordX = unEvent.x;
  const coordY = unEvent.y;
  console.log(`Coordonnées X: ${coordX} Coordonnées Y:${coordY}`);
  const newImage = document.createElement('img');
  newImage.src = "https://picsum.photos/536/354";
  newImage.style.position = "absolute";
  newImage.style.left = coordX + "px";
  newImage.style.top = coordY + "px";
  newImage.append(pageWeb);
})



