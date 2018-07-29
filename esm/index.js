var RandomSeed = require('random-seed');

var ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var DEFAULT_LENGTH = 8; //218 Trillion unique ID space
var DEFAULT_SEED = "notVeryRandom";

export class DeterministicUniqId{
    constructor (seed = DEFAULT_SEED, keyLength = DEFAULT_LENGTH){
        this.determinism = RandomSeed.create(seed);
        this.keyLength = keyLength;
    }

    setKeyLength(l) {
        this.keyLength = l;
    }

    setSeed (seed){
        this.determinism.seed(seed);
    }

    generateId () {
        var _id = '';

        for (var i = 0; i < this.keyLength; i++) {
            _id += ALPHABET.charAt(Math.floor(this.determinism.random() * ALPHABET.length));
        }
        return _id;
    };
}