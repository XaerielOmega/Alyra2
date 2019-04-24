let solution = Math.floor(Math.random()*100 + 1);
console.log(solution);
let compteur = 7;
let reponse;

while(compteur != 0 && reponse != solution){
  console.log("Entrée un chiffre entre 1 et 100 >>>");
  reponse = parseInt(prompt());  
  if(reponse != solution){
    console.log("raté!!!");
    if(reponse > solution && reponse <= (solution + 5)){
      console.log("mais c'est pas loin au dessus");
    }else if(reponse < solution && reponse >= (solution - 5)){
      console.log("mais c'est pas loin en dessous");
    }else if(reponse < (solution - 5)){
      console.log("Houla!!! remonte un peu coco!");
    }else if(reponse > (solution + 5)){
      console.log("Houla!!! descend un peu coco!");
    }
    compteur--;
  }
  else if(reponse == solution){
    console.log("bravo!!!");
    compteur = 0;
  }
}
console.log("game over!!!");