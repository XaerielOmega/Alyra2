var chaine;
var mot;

chaine = prompt("Entrer le supposé palindrome >>>");

console.log(palindrome(palindromeClear(chaine)));

function palindrome(chaineCleared){
    //alert("palindrome" + chaineCleared);
    if(Array.from(chaineCleared).toString() === Array.from(chaineCleared).reverse().toString()){
        alert("Effectivement " + "'" + chaineCleared + "'" + " en est un!!");
    }else{
        alert("non," + "'" + chaine + "'" + " n'en est pas un!!!");
    }
}

function palindromeClear(chaine){
    chaine = chaine.toLocaleLowerCase();
    chaine = chaine.split(" ").join("");
    //alert("cleared " + chaine);
    return chaine;
}
