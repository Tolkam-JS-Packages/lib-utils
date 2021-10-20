import { isJson } from '../index';

describe('isJson()', () => {
    test.each([
        `{}`,
        `{"k":"v"}`,
        `[]`,
        `null`,
        `"some"`,
        `5`,
        `0.5`,
        `true`,
        `false`,
    ] as any)(
        "accept valid json '%s'",
        (v) => {
            expect(isJson(v)).toBe(true);
        },
    );

    test.each([
        ``,
        ` `,
        `  `,
        `[`,
        `}`,
        `{'k': 'v'}`,
    ] as any)(
        "not accept invalid json '%s'",
        (v) => {
            expect(isJson(v)).toBe(false);
        },
    );
})
