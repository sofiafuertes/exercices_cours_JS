
const apiDiv = document.querySelector('.apiContact');
console.log(apiDiv);
const contactApi = async () => {
    const data = await fetch('https://pokeapi.co/api/v2/pokemon');
    console.log(data);
    const dataTransformed = await data.json();
    console.log(dataTransformed);
    dataTransformed.results.map((pokemonName, index)  => {
        const newP = document.createElement('p');
        newP.innerText = `Nom de le pokemon n°${index+1} : ${pokemonName.name}`;
        apiDiv.append(newP);
    })
}
apiDiv.style.backgroundColor= 'yellow'; 
apiDiv.style.paddingLeft = '50px';
apiDiv.style.color = 'red';
contactApi();