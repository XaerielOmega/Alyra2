class Transaction {
    constructor(taille, gain){
        this.taille = taille;
        this.gain = gain;
        this.coeff = gain / taille;
    }
    getCoeff(){
        return this.coeff;
    }
    getTaille(){
        return this.taille;
    }
    getGain(){
        return this.gain;
    }
}

//sur un échantillon donné (10, 20, 100 ou 1000)
