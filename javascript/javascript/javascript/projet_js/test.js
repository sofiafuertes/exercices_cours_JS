import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
console.log('main');

//Variables pre etablis en js 
console.log(`
    Hauteur page : ${document.body.scrollHeight}
    Hauteur affichage : ${innerHeight}
    Scroll Position : ${scrollY}`
);

const divBar = document.querySelector(".bar")

//on le fait en le total de le doucment
document.addEventListener("scroll", () => {
    let scrollMax = document.body.scrollHeight - innerHeight; 
//console.log(scrollMax);
    let onEstOu = (scrollY / scrollMax) * 100; 
//console.log(+ onEstOu + "%" );
    divBar.style.width = onEstOu + '%'; 
})


const monTxte = document.querySelector('textarea'); 
let rendu1 = document.querySelector('#renderTextEdit');
monTxte.addEventListener("keyup", () =>{
    //rendu1.innerText = monTxte.value;
    //* Version traduite en marked 
    rendu1.innerHTML = marked(monTxte.value);
    // rendu.innerText = monTxt.value;
    //Dans le innerHtml on lui assigne la Value de ce que 
    //L'utilisateur tape dans le input / textarea
    // rendu.innerHTML = monTxt.value;
})

// //* buttton disable avec boucle IF
//     const monTextArea =document.querySelector("#message2") ;
//     const monBoutton =document.querySelector('.monBoutton');
//     console.log(monTextArea);
// //     monTextArea.addEventListener("keyup", () => {
// //     let counter = monTextArea.value.length; // savoir le value de le content (savoir quoi c'est tape dans le champs du text)
// //     if(counter >=5){
// //             monBoutton.disabled = true; // c'est un boolean, il besoin savoir si il est true ou false
// //         }else{
// //             monBoutton.disabled = false;
// //         }
// //    })

// //* buttton disable condition TERNAIRE 
// monTextArea.addEventListener("keyup", () => {
//    monBoutton.disabled = monTextArea.value.length>=5 ? true : false ;  
// })
const monTxt = document.querySelector('textarea'); 
let rendu = document.querySelector('#renderTextEdit');
monTxt.value = localStorage.getItem('monSuperTexte');
monTxt.addEventListener("keyup", () =>{
    rendu.innerText = monTxt.value;
    localStorage.setItem("monSuperTexte", monTxt.value); 
})

//* pas reussi 
const infoPrenom = document.querySelector('#prenom'); 
const infoNom = document.querySelector('#nom'); 
const infoEmail = document.querySelector('#email'); 

const info = {
    prenom : infoPrenom.value,
    nom : infoNom.value, 
    email: infoEmail.value, 
};
console.log(info);
const infoObjet = JSON.stringify(info);
console.log(infoObjet);
localStorage.setItem('info', infoObjet);

let text = localStorage.getItem('info');
let user = JSON.parse(text);
console.log(user);

// info.addEventListener("keyup", ()=>{
// infoPrenom.innerText = user.prenom.value;
// localStorage.setItem('info', user.prenom.value)
// })
// infoNom.innerText = user.nom.value;
// infoEmail.innerText = user.email;

//* 