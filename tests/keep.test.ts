import { keep } from '../index';

describe('keep()', () => {
    const obj = {
        a: true,
        b: {},
        c: 0
    };

    test.each([
        [obj, [], {}],
        [obj, ['x'], {}],
        [obj, ['a'], {a: true}],
        [obj, ['a', 'b'], {a: true, b: {}}]
    ] as any)(
        "keep in %O values %O expecting %O",
        (obj, keys, result) => {
            expect(keep(obj, keys)).toEqual(result);
        },
    );
})
