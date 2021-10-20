import { convertTimestamp } from '../index';

describe('convertTimestamp()', () => {

    test.each([
        [0, 0],
        [123456789, 123456789 * 1e3],
    ] as any)(
        "from unix '%s'",
        (v, expected) => {
            expect(convertTimestamp(v, true)).toBe(expected);
        },
    );

    test.each([
        [0, 0],
        [123456789 * 1e3, 123456789],
    ] as any)(
        "to unix '%s'",
        (v, expected) => {
            expect(convertTimestamp(v, false)).toBe(expected);
        },
    );
});
