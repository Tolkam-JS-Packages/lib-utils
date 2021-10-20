import { omit } from '../index';

describe('omit()', () => {
    const obj = {
        a: true,
        b: {},
        c: 0,
    };

    test.each([
        [obj, [], {a: true, b: {}, c: 0}],
        [obj, ['x'], {a: true, b: {}, c: 0}],
        [obj, ['a'], {b: {}, c: 0}],
        [obj, ['a', 'b'], {c: 0}],
    ] as any)(
        "omit from %O values %O expecting %O",
        (obj, keys, result) => {
            expect(omit(obj, keys)).toEqual(result);
        },
    );
})
