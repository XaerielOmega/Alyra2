
let solution = Math.floor(Math.random()*100 + 1);
console.log(solution);
var debut;
var fin;
var ask = 0;
var plusMoins = true;
var NbDonneBase = 100;
var compteur = 0;

debut = NbDonneBase - NbDonneBase;
fin = NbDonneBase;

filtre();

function test(ask){
  compteur++;
  if(ask == solution){
    console.log("bien joué c'est bien :", ask, "en", compteur);
  }else{
    if(ask < solution){
      plusMoins = true;
      filtre()
    }else{
      plusMoins = false;
      filtre();
    }
  }
}
function filtre(){
  if(plusMoins == true){
    debut = ask;
    plage = fin - debut;
    ask = debut + Math.floor(plage/2);
    console.log("plus", ask);   
    test(ask);
  }else{
    fin = ask;
    plage = fin - debut;
    ask = debut + Math.floor(plage/2);
    console.log("moins", ask);
    test(ask);
  }

}