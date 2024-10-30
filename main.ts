import { resourceUsage } from "process";

function RGN(min: number, max: number) {
    const rng = Math.random();

    //rng * (max - min) + min)
    //rng = 0 --> min
    //rng = 1 --> max


    return Math.trunc(rng * (max - min) + min);
}

function RNGSequence(len: number, min: number, max: number) {
    if (len >= max - min) {
        throw new Error(`cannot find ${len} numbers between ${min} and ${max}`);
    }
    const res: number[] = [];
    while (res.length < len) {
        const rn = RGN(min, max);
        if (res.includes(rn)) {
            continue;
        }
        res.push(rn);
    }
    return res;
}

const route =
    [
        'Bari',
        'Cagliari',
        'Firenze',
        'Genova',
        'Milano',
        'Napoli',
        'Palermo',
        'Roma',
        'Torino',
        'Venzia',
        'Nazionale'
    ];

const estrazioni: { [routa: string]: number[] } = {};

for (const routa of route) {
    const estrazione = RNGSequence(5, 1, 100);
    estrazioni[routa] = estrazione;
}

console.log(JSON.stringify(estrazioni, null, 2));
