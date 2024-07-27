// //* Exo POKEMON fetch api avec async await 
// const apiDiv = document.querySelector('.apiContact');
// console.log(apiDiv);
// const contactApiPokemon = async () => {
//     const data = await fetch('https://pokeapi.co/api/v2/pokemon');
//     console.log(data);
//     const dataTransformed = await data.json();
//     console.log(dataTransformed);
//     dataTransformed.results.map((pokemonName, index)  => {
//         const newP = document.createElement('p');
//         newP.innerText = `Nom de le pokemon n°${index+1} : ${pokemonName.name}`;
//         apiDiv.append(newP);
//     })
// }
// apiDiv.style.backgroundColor= 'yellow'; 
// apiDiv.style.paddingLeft = '50px';
// apiDiv.style.color = 'red';
// contactApiPokemon();


//*1er exemple METEO fetch api avec async await 
// //de base une ƒ° => est anonyme, astuce pour désanonymiser, on la stocke dans une variable
// const apiDiv = document.querySelector('.apiContact');
// const contactApi2=  async () => {
//     //Data va récup Toutes les données de l'api
//     const data = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m');
//     console.log(data);
//     //Plutôt que de Travailler sur la réponse, on va la transformé pour 
//     //qu'elle devient un OBJET JS (+ pratique)
//     const dataTransformed = await  data.json();
//     console.log(dataTransformed);
//     apiDiv.innerText = dataTransformed.latitude;
// };


//* METHODE avec Fetch + .then() + catch() 
// const divApi = document.querySelector('.apiContact');
// console.log(divApi);
// const apiContact = () => {
//     fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m')
//     .then(response => response.json()) //*pareil a await; il va pas commencer a faire la instruction suivant sans avoir finir l'anterieur
//     .then(data =>(divApi.innerText = data.latitude))
//     .then(data =>(console.log(data)))
//     .catch(error => console.log("Erreur custom : " + error)); //* optionnelle mais recommandé, si il'y a des erreurs on les console.log
// };
// apiContact();


//** METHODE avec Fetch + then + catch + async Await */
// const contactApi3 = () => {
// //! tester si jamais on se trompe dans l'url (mettre l'un des 2 fetch en commentaire) 
// fetch("https://api.npms.io/on-s-est-trompe-dans-l-url")
// //! Ci dessous avec une url valide
// // fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m")
//     .then(async (response) => {
//     const dataTransformed = await response.json();
//     // Ici on gère aussi les erreurs au niveau de la
//     // réponse de l'api
//     //  Si dans la response la propriété ok n’est pas définie  
//     if (!response.ok) {
//         // on récupère les messages d'erreur ou la propriété statusText par default de la response 
//         const error = (dataTransformed && dataTransformed.message) || response.statusText;
//         //ƒ° native de JS utilisé sur les objets de type Promise
//         return Promise.reject(error);
//     }
    
//     apiDiv.innerText = dataTransformed.latitude;
//     })
//     .catch((error) => {        
//     console.log(error);
//     // Ici on crée une error custom et l'objet error
//     console.error("Attention une fusée à décollée depuis Grenoble", error);
//     });
// };
// contactApi3();

//* Exo Random User profile (img, nom, prenom, adresse postale, email, phone)

// const divApi = document.querySelector('.apiContact'); 
// const img = document.createElement('img');
// const nameComplete = document.createElement('p');
// const email = document.createElement('p');
// const phone = document.createElement('p');
// const adresse = document.createElement('p');

// console.log(divApi);
// const contactApi = () => {
//     fetch ('https://randomuser.me/api/')
//     .then (reponse => reponse.json())
//     .then (data => {
//                     console.log(data.results[0]);
//                     img.src = data.results[0].picture.large;
//                     nameComplete.innerText = `${data.results[0].name.first} ${data.results[0].name.last}`;
//                     email.innerText = data.results[0].email;
//                     phone.innerText = data.results[0].cell;
//                     adresse.innerText = `${data.results[0].location.city} - ${data.results[0].location.country} - ${data.results[0].location.postcode}`; 
    
//     divApi.append(img,nameComplete,email,phone,adresse)
//     })
//     .catch(error => console.warn("Erreur: " + error + error.stack))
// }
// contactApi();

//*version avec async et await 
// const userDiv = document.getElementById('apiContact');
// console.log(userDiv);
// const randomUserApi =async ()=>{
//     const userData = await fetch('https://randomuser.me/api/');
//     console.log(userData);
//     const userDataTransformed = await userData.json();
//     console.log(userDataTransformed);
//     console.log(userDataTransformed.results[0]);
//     let myUserData = userDataTransformed.results[0];
//     console.log(myUserData.name);

//     let userImg = document.createElement('img');
//     userImg.src = myUserData.picture.large;

//     let userName = document.createElement('h1');
//     userName.innerText = myUserData.name.first + ' ' + myUserData.name.last;

//     let userAdress = document.createElement('h2');
//     userAdress.innerText = `${myUserData.location.street.number} - ${myUserData.location.street.name} (${myUserData.location.city} - ${myUserData.location.country})`;

//     let userMail = document.createElement('h3');
//     userMail.innerText = myUserData.email;

//     let userPhone = document.createElement('h3');
//     userPhone.innerText = myUserData.phone;
    
//     userDiv.append(userImg,userName,userMail,userPhone,userAdress);
// }
// randomUserApi()

const divApi = document.querySelector('.apiContact'); 
const newParagraph = document.createElement('p');
divApi.append(newParagraph);
let temperatureMoyen = 0; 

console.log(divApi);

const contactMeteoMDP = () => {
    fetch (`https://api.open-meteo.com/v1/forecast?latitude=-37.98&longitude=-57.59&hourly=temperature_2m`)
    .then (reponse => reponse.json())
    .then (data => {
            console.log(data);
            console.log(data.hourly.temperature_2m);
            data.hourly.temperature_2m.forEach(temperature => { 
                temperatureMoyen += temperature
            });
            newParagraph.innerText = (temperatureMoyen / data.hourly.temperature_2m.length).toFixed(2);
        })
    .catch(error => {
        console.log(error, error.stack)
    })
}

contactMeteoMDP();