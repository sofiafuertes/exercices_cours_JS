// TP 1: Classes Comptes Bancaires
class CompteBancaire {
    constructor (client){
        this.client = client;
        this.solde = 0;  
        //console.log(this.client);      
    }
crediter(n){
    this.solde += n;
    console.log(`Ajout de: ${n} pour : ${this.client}`)
}
faireRetrait(n){
    try{ if (this.solde < n){
            throw new Error(`---->${this.client}, retrait de: ${n} refusé avec solde: ${this.solde}`);
        } else{
            this.solde -= n;
            console.log(`Retrat de: ${n} pour : ${this.client}`)
        }
    }catch(err){
        console.warn(err.message);
        
    }} 
virement(client2,n){
    if(this.solde < n){
        throw console.warn(`Solde insufisant pour faire un virement de ${n} euros`);
    } else{
        client2.crediter(n);
        this.solde -= n; 
        console.log(`Virement de: ${n} de ${this.client} vers :`, client2.client);
    }
    }

getStatusCompte(){
    return `Titulaire: ${this.client}, solde ${this.solde} euros`
}
}

//* Main, gère 3 comptes bancaires dans un tableau associatif
const lesComptes = {
    Alex: new CompteBancaire("Alex"),
    Clovis: new CompteBancaire("Clovis"),
    Marco: new CompteBancaire("Marco"),
    };
// lecture tableau associatif ou Objet["truc"]
// Crédite  chaque compte
for (let key in lesComptes) {
    lesComptes[key].crediter(1000);
}
// un retrait de 100 par Alex
lesComptes["Alex"].faireRetrait(100);

  // un petit virement: Marco Vire 300 à Clovis

lesComptes["Marco"].virement(lesComptes["Clovis"],300);
// un petit retrait incorrect (doit déclencher erreur custom) : 
// Alex fait un retrait de 1200
lesComptes["Alex"].faireRetrait(1200);
    // bilan : faire une déscription de tous les comptes en console (ou DOM ?)
    const div = document.querySelector('#app');
    const newList = document.createElement('ul');
    div.append(newList);
    newList.innerHTML += `<li> <strong> Comptes bancaires:</strong></li>`;
    newList.innerHTML += `<li>${lesComptes["Alex"].getStatusCompte()}</li>`;
    newList.innerHTML += `<li>${lesComptes["Clovis"].getStatusCompte()}</li>`;
    newList.innerHTML += `<li>${lesComptes["Marco"].getStatusCompte()}</li>`;
    console.log(lesComptes["Alex"].getStatusCompte());
    console.log(lesComptes["Clovis"].getStatusCompte());
    console.log(lesComptes["Marco"].getStatusCompte());

