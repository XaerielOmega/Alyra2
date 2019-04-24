var jC = 1;
var mC = 0;
var timounth = 0;

mounth(jC, mC);

function mounth(jC, mC){
    
    while (timounth != 100){
        //jC2 = 0;
        //mC2 = 0;
        jC2 = mC;    
        mC2 = mC + jC;
        mC = mC2;
        jC = jC2;
        timounth++;
        console.log("mois:", timounth, "nombre de jeune couple:", jC, "nombre de vieux couple:", mC);
        mounth( jC, mC);
    }
    
}
