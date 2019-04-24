function hachage(chaine){
  //console.log(chaine)
  //console.log("la chaine entrée est: ", chaine, chaine.length)
  condensat=0
  for(i=0; i<chaine.length;i++){
    condensat=condensat+chaine.charCodeAt(i) * 3 **i
  }
  console.log(condensat)
  return condensat % 65536 
}

function minage(chaine, target){
  
  nonce=0
  do{    
    nonce++
    chaineCandidate = chaine + nonce
    condensat = hachage(chaineCandidate)
    console.log("nonce= ", nonce, "appel sur [ ", chaineCandidate, " ] condensat= ", condensat)    
  }while(condensat>=target)
    
  console.log(">>> trouvé inférieur à ", target, " : nonce", nonce)
}

minage("Block 0 15 avril 2019 ABCDE ", 10000)