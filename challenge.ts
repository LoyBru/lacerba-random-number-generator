function RGN_1(min: number, max: number) {
    const rng = Math.random();

    //rng * (max - min) + min)
    //rng = 0 --> min
    //rng = 1 --> max


    return Math.trunc(rng * (max - min) + min);
}

function RNGDec(min:number, max:number, precision: number) {
     //possiamo usare diversi modi per fare il controllo qua
     // il primo precision %1 == 0 ==> allora è un intero
     // Math.floor(precision) == 0 ==> allora è un intero
     // parseInt(precision) == precision ==> allora è un intero
     // Number.isInteger(precision) per il controllo se è un integer 
        if(precision < 0 ){
            throw new Error('precision must be a positive number');
        }  

        if(!Number.isInteger(precision)) {
            throw new Error('precision must be an integer number');
        }
        
        const multiFactor = Math.pow(10, precision);
        return RGN_1 ( min * multiFactor, max * multiFactor) /  multiFactor;
     
}

 
console.log(RNGDec(1, 2, 2.4));