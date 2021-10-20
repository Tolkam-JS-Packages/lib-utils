import { objectPath } from '../index';

describe('objectPath()', () => {
    const obj = {
        a1: {
            b: {
                c: 1,
            }
        },
        a2: false,
        a3: undefined,
    };

    test.each([
        ['a1.b.c', 1],
        ['a2', false],
        ['a3', undefined],
        ['a3.b.c', undefined],
    ])(
        'value by path %s is %s',
        (path, result) => {
            expect(objectPath(obj, path)).toEqual(result);
        },
    );

    test(
        'custom path separator',
        () => expect(objectPath(obj, 'a1:b:c', undefined, ':')).toEqual(1)
    );

    test(
        'default value',
        () => expect(objectPath(obj, 'a1.b.c.d', 'def', '.')).toEqual('def')
    );
})
