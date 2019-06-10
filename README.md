# deterministic-uniqid

This package serves a single purpose; to _quickly_ generate alphanumeric unique IDs in a deterministic way. Meaning, this library can be passed a seed value, and given the same seed, it should generate the same ID strings in the same order. 

## Usage
```javascript
var gen = new DeterministicUniqId();
gen.setSeed('some_unique_seed');
gen.generateId();
// => "12Ab88zY"
gen.generateId();
// => "81v2Y79j"
gen.setSeed('some_unique_seed');
gen.generateId();
// => "12Ab88zY"
```

## API
### constructor(seed: string, keyLength: number)
Takes two parameters:
- _seed_: instantiate the ID generator with this seed value
- _keyLength_: the length of the ID string output by generateId()
```javascript
    new DeterministicUniqId('DINOSAURS', 16);
```

### .setKeyLength(length: number)
Sets the desired ID length. This will be the length of the string returned by .generateId()

### .setSeed(seed: string)
Sets the seed for deterministic random number generation. This ensures that generateId will always generate the same pseudo-random ID strings, in the same order.

### .generateId(void)
Generates a pseudo-random ID. Given the same _seed_ value, either passed to the constructor or set via .setSeed(seed), this will return a series of the same unique IDs, in the same order.