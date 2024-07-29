//* Exercice 1 Classes 
class UserIMC {
    constructor(completeNameUser, weightUser, heightUser){
        this.completeNameUser = completeNameUser;
        this.weightUser = weightUser;
        this.heightUser = heightUser;
    //  this.IMC = this.calcul(); 
    }
    calcul(){
        return this.weightUser / this.heightUser ** 2;
    }
    getUserIMC(){
        return `${this.completeNameUser} (${this.weightUser} kg, ${this.heightUser} M) a un IMC de: ${this.calcul().toFixed(2)}`
    }
}

//* progr principal -> on fait l'injection des données
let list = [
    new UserIMC("Sébastien Chabal", 135, 1.7),
    new UserIMC("Escaladeuse", 45, 1.68),
    new UserIMC("JOJO ", 300, 2),
    new UserIMC("Gontrand ", 90, 1.75),
    new UserIMC("Colonel Clock ", 200, 1.75),
    new UserIMC("JOsiane de la Vega", 99, 1.55),
];
// //*Boucle forEach qui parcourt le tableau avec une variable temporaire uneCase
list.forEach((uneCase) => console.log(uneCase.getUserIMC()));


//* Exercice 2 PME
class Employee {
    constructor(nom, prenom, age, salaireMensuel){
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.salaireMensuel = salaireMensuel;
        this.coutAnnuel = this.getCout()
    }
    getCout(){
        let salaireAnnuel = this.salaireMensuel * 12;
        let charges = salaireAnnuel * (90 /100);
        let salaireAnnuelTotal = salaireAnnuel + charges ; 
        return salaireAnnuelTotal;
    }
}
let salaries =  
    [new Employee ("Duval", "Paul", 30, 2000),
    new Employee ("Durand", "Alain", 40, 3000),
    new Employee ("Dois", "Sylvia", 50, 4000),]

salaries.forEach((unCout) => console.log(unCout.getCout()));
console.log(salaries)

class Pme{
    constructor(nom, equipe, ventes, coutFixes, achats){
        this.nom = nom;
        this.equipe = equipe; 
        this.ventes= ventes; 
        this.coutFixes = coutFixes;
        this.achats = achats; 
        this.coutInicial = this.coutFixes + this.achats; 
        this.coutEquipe = this.bilanCalcule();
        this.bilan= this.ventes - (this.coutInicial + this.coutEquipe); 
        //console.log(equipe);
        //console.log(this.bilanCalcule());
        //console.log(this.equipe[0].getCout(), this.equipe[1].getCout(), this.equipe[2].getCout());
    }
    bilanCalcule(){
    //* avec boucle FOR
    //     let salaireTotal = 0;
    //     for(let i = 0 ; i < this.equipe.length ; i++){
    //         salaireTotal += this.equipe[i].getCout();
    //     }
    //     return salaireTotal;
    // }
    
    //* avec forEach
    let salaireTotal = 0;
    this.equipe.forEach((leEquipe) => 
                        salaireTotal += leEquipe.getCout())
        return salaireTotal;
    }

    getBilan(){
        return `
        ${this.nom} : Cout Initial : ${this.coutInicial}
        ${this.nom} : Cout Total Equipe : ${this.coutEquipe}
        ${this.nom} : VENTES : ${this.ventes}
        ${this.nom} : BILAN : ${this.bilan}
        `
    }
}


// Scénario
let pme= new Pme ("Ma Petite Entreprise - ", 
[new Employee ("Duval", "Paul", 30, 2000),
new Employee ("Durand", "Alain", 40, 3000),
new Employee ("Dois", "Sylvia", 50, 4000),],
        300000,
        20000,
        50000);

console.log(pme.getBilan());