import { objectHasProperty } from '../index';

describe('objectHasProperty()', () => {
    const obj = {
        a: null,
        100: null,
    };

    test.each([
        [obj, 'a'],
        [obj, '100'],
        [obj, 100],
    ])(
        '%o has %s',
        (obj, prop) => {
            expect(objectHasProperty(obj, prop)).toEqual(true);
        },
    );

    test.each([
        [obj, 0],
        [obj, 'b'],
        [obj, 'hasOwnProperty'],
    ])(
        '%o has no %s',
        (obj, prop) => {
            expect(objectHasProperty(obj, prop)).toEqual(false);
        },
    );
})
