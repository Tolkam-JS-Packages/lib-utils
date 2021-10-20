import { atobUnicode, btoaUnicode } from '../index';

describe('base64encode/decode()', () => {

    // mock window.btoa/atob
    beforeEach(() => {
        if (typeof btoa === 'undefined') {
            global.btoa = function (str) {
                return Buffer.from(str, 'binary').toString('base64');
            };
        }

        if (typeof atob === 'undefined') {
            global.atob = function (b64Encoded) {
                return Buffer.from(b64Encoded, 'base64').toString('binary');
            };
        }
    });

    test.each([
        '',
        'test',
        'Ä',
        '∑',
        '🔥',
    ])('testing "%s"', (v) => {
        const encoded = btoaUnicode(v);
        expect(v).toEqual(atobUnicode(encoded));
    });

});
