import { range } from '../index';

describe('range()', () => {

    test("reject negative step", () => {
        expect(range(-1, 1, -1)).toEqual([-1, 0, 1]);
    });

    test("do not exceed defined maximum", () => {
        expect(range(0, 5, 3)).toEqual([0, 3]);
    });

    test.each([
        [0, 3, 1, [0, 1, 2, 3]],
        [-1, 1, 1, [-1, 0, 1]],
        [0, 6, 2, [0, 2, 4, 6]]
    ])(
        "from %d to %d with step %d",
        (from, to, step, result) => {
            expect(range(from, to, step)).toEqual(result);
        },
    );
})
