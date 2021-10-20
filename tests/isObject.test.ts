import { isObject, isPlainObject } from '../index';

const Obj = class {};

describe('isObject()', () => {
    test.each([
        // valid
        [{}, true],
        [() => {}, true],
        [Obj, true],
        [new Obj, true],

        // invalid
        [null, false],
        [true, false],
        [false, false],
        [0, false],
        [`str`, false],
    ])(
        'check %o',
        (obj, result) => {
            expect(isObject(obj)).toEqual(result);
        },
    );
});

describe('isPlainObject()', () => {
    test.each([
        // valid
        [{}, true],
        [{v: 10}, true],

        // invalid
        [() => {}, false],
        [Obj, false],
        [new Obj, false],
        [null, false],
        [true, false],
        [false, false],
        [0, false],
        [`str`, false],
    ])(
        "check object %o",
        (obj, result) => {
            expect(isPlainObject(obj)).toEqual(result);
        },
    );
});
