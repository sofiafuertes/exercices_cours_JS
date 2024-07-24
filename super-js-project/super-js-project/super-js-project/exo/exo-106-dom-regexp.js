const email = document.querySelector("email"); 
const regexMail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
email.addEventListener('keyup', ()=>{
    const result = regexMail.test(email) ? email.style.backgroundColor = "green" : email.style.backgroundColor = "red";
    console.log(result);
})