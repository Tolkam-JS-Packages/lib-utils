import { objectMerge } from '../index';

describe('objectMerge()', () => {

    test('invalid target', () => {
        expect(objectMerge(null as any, {})).toEqual(null);
    });

    test('invalid source', () => {
        expect(objectMerge({}, null as any)).toEqual({});
    });

    test.each([
        // literals and non-objects
        [{}, {}, {}],
        [{a: 1}, {a: 2}, {a: 2}],
        [{a: '1'}, {a: '2'}, {a: '2'}],
        [{a: true}, {a: false}, {a: false}],
        [{a: null}, {a: undefined}, {a: undefined}],
        [{a: 1}, {b: 1}, {a: 1, b: 1}],
        [{a: [1]}, {a: [2]}, {a: [2]}],

        // objects
        [{a: {b: {c1: 1}}}, {a: {b: {c2: 1}}}, {a: {b: {c1: 1, c2: 1}}}],
    ])(
        'merge %O with %O, expecting %O',
        (target, source, expected) => {
        expect(objectMerge(target, source)).toEqual(expected);
    });
})
