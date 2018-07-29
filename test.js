import {DeterministicUniqId} from './esm'

import test from 'ava';
var test_size = 10;
var gen = new DeterministicUniqId();
test("Given the same seed, should generate the same IDs", t => {
    gen.setSeed("dinosaurs");
    var expected = [];
    for(var i = 0; i < test_size; i++)
        expected.push(gen.generateId());

    gen.setSeed("dinosaurs");
    var actual = [];
    for(var i = 0; i < test_size; i++)
        actual.push(gen.generateId());

    t.deepEqual(expected, actual);

    gen.setSeed("bees");
    var actual = [];
    for(var i = 0; i < test_size; i++)
        actual.push(gen.generateId());

    t.notDeepEqual(expected, actual);

    gen.setSeed("bees");
    var expected = [];
    for(var i = 0; i < test_size; i++)
        expected.push(gen.generateId());

    t.deepEqual(expected, actual);
});

test("Should generate IDs of the specified length", t => {
    t.is(gen.generateId().length, gen.keyLength);
    gen.setKeyLength(10);
    t.is(gen.generateId().length, gen.keyLength);
});