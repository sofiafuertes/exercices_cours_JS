//* Classes => ils commence toujours par un mayuscule!! 
class UserProfile {
    constructor(nameUser, mailUser, phoneUser) {  //* sans constructor pas de Classe
        this._nameUser = nameUser; //* this => il cree le objet, les variables a l'interieur de la classe
        this._mailUser = mailUser;
        this._phoneUser = phoneUser;
    }
    getProfileInfo() {
        return `infos de l'utilisateur : 
            son nom : ${this._nameUser}
            son mail : ${this._mailUser}
            son Tél : ${this._phoneUser}`;
    }
}

const exampleUser1 = new UserProfile("José", "jose@gmail.com", "09876543");
console.log(exampleUser1);
const exampleUser2 = new UserProfile("Sarah", "sarah@gmail.com", "063736252");
console.log(exampleUser2.getProfileInfo());

//*attribut INMODE = son indispensables ; attributes OUTMODE = pas indisipensables, pas besoin de le reseigner/