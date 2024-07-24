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

