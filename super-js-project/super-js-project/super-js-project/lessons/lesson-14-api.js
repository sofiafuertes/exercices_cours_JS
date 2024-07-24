//! version qui nous va a envoyer un erreur et un "Promise"
// const apiDiv = document.querySelector('.apiContact'); //*on cherche notre div
// //de base une ƒ° => est anonyme, astuce pour désanonymiser, on la stocke dans une variable
// const contactApi = () => {  //*la variable il se transform en fonction
//     //Data va récup Toutes les données de l'api
//     const data =  fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m'); //* en fetch on choisi l'API que on veut
//     console.log(data); //*pour verifier si cest bien quoi on recupere
//     //Plutôt que de Travailler sur la réponse, on va la transformé pour 
//     //qu'elle devient un OBJET JS (+ pratique)
//     const dataTransformed =   data.json(); //* transforme le objet 
//     console.log(dataTransformed);
//     apiDiv.innerText = dataTransformed.latitude;
// };
// contactApi();


//! version async et await
const apiDiv = document.querySelector('.apiContact'); //*on cherche notre div
//de base une ƒ° => est anonyme, astuce pour désanonymiser, on la stocke dans une variable
const contactApi =  async () => {  //TODO la variable il se transform en fonction, on mettre "async" devant pour que il se execute differentement 
    //Data va récup Toutes les données de l'api
    const data =  await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m'); //TODO en fetch on choisi l'API que on veut, "await" il dit attent que tout finit de charger tout ca avant de continuer a la suite
    console.log(data); //*pour verifier si cest bien quoi on recupere
    //Plutôt que de Travailler sur la réponse, on va la transformé pour 
    //qu'elle devient un OBJET JS (+ pratique)
    const dataTransformed =  await data.json(); //TODO on le transforme en objet JS, chaque fois que on trafique de data de l'api il faut mettre "await"!! 
    console.log(dataTransformed);
    apiDiv.innerText = dataTransformed.latitude; //* + dataTransformed.timezone;
    //apiDiv.innerText =dataTransformed.timezone;
};
contactApi();