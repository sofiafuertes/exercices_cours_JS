//* Regex e-mail
const email = document.querySelector("#email"); 
console.log(email);
const regexMail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
email.addEventListener('keyup', ()=>{
    if(regexMail.test(email.value) === true){   // penser a .value!!! 
        email.style.backgroundColor = "green";
    }else{
        email.style.backgroundColor = "red";
    }
    //const result = regexMail.test(email) ? email.style.backgroundColor = "green" : email.style.backgroundColor = "red";
    console.log(!regexMail.test(email));
    //console.log(result);
})


//* Regex Password
const password = document.querySelector('#password'); 
const divMessage = document.querySelector('#userMessage');
console.log(divMessage);
console.log(password);
const regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z][$&@!]).{8,}$/gm;
let errorMessage = ''; 

password.addEventListener('blur',() => {    
    if(password.value.match(regexPass) != null){
        password.style.backgroundColor = 'green';
        divMessage.innerHTML = "<li>Your password is strong 💪</li>";
        divMessage.style.border = "solid green";
        divMessage.style.marginTop = "10px"
    } else{
        password.style.backgroundColor = 'red';
        errorMessage = "<li>Your password is not strong enough 😔</li>";

        password.value.length < 8 ? 
                errorMessage += '<li>Your password is not long enough (at least 8 caracters)</li>' : errorMessage += '';   
        password.value.match(/\d/) == null ? 
                errorMessage += '<li>Your password must contain at least one number (0-9)</li>' : errorMessage += '';
        password.value.match(/[A-Z]/) == null ?
                errorMessage += '<li>Your password must contain at least one uppercase letter (A-Z)</li>' : errorMessage += ''; 
        password.value.match(/[$&@!]/) == null ? 
                errorMessage += '<li>Your password must contain at least one special caracter ($&@!)</li>' : errorMessage += '';
        divMessage.innerHTML = errorMessage; 
        divMessage.style.border = "solid red";
        divMessage.style.marginTop = "10px"
    }}) 
    

//* Extraction des numéros de téléphone
    const regex1 = /(\d{2}[- ]?\d{2}[- ]?\d{2}[- ]?\d{2}[- ]?\d{2})/g;
    const text = "Voici deux numéros de téléphone : 01-23-45-67-89 et 98 76 54 32 10.";
    
let matches1 = text.match(regex1);
    console.log(matches1); // ["01-23-45-67-89", "98 76 54 32 10"]

//* Extraction des hashtags sur Twitter
const regex2 = /#\w+/g;
const tweet = "Ceci est un exemple de tweet avec des #hashtags comme #dev et #regex.";

let matches2 = tweet.match(regex2);
console.log(matches2); // ["#hashtags", "#dev", "#regex"]

//* Validation de format de date JJ/MM/AAA
const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/([0-9]{4})$/;
const date = "25/07/2024";

console.log(regex.test(date)); // true