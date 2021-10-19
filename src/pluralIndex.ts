/**
 * Based on node-polyglot package
 * @see https://github.com/airbnb/polyglot.js
 */

/**
 * Pluralization types
 */
const CHINESE = 1;
const GERMAN = 2;
const FRENCH = 3;
const RUSSIAN = 4;
const CZECH = 5;
const POLISH = 6;
const ICELANDIC = 7;

/**
 * Map of languages pluralization types
 */
const LANG_TYPE_MAP = {
    cs: CZECH,
    da: GERMAN,
    de: GERMAN,
    el: GERMAN,
    en: GERMAN,
    es: GERMAN,
    fa: CHINESE,
    fi: GERMAN,
    fr: FRENCH,
    he: GERMAN,
    hr: RUSSIAN,
    hu: GERMAN,
    id: CHINESE,
    is: ICELANDIC,
    it: GERMAN,
    ja: CHINESE,
    ko: CHINESE,
    lo: CHINESE,
    ms: CHINESE,
    nl: GERMAN,
    no: GERMAN,
    pl: POLISH,
    pt: GERMAN,
    'pt-br': FRENCH,
    ru: RUSSIAN,
    sv: GERMAN,
    th: CHINESE,
    tl: FRENCH,
    tr: CHINESE,
    zh: CHINESE,
}

/**
 * Type pluralizers
 */
const PLURALIZERS: {[k: string]: (n: number) => number} = {
    [CHINESE]: (n) => 0,
    [GERMAN]: (n) => n !== 1 ? 1 : 0,
    [FRENCH]: (n) => n > 1 ? 1 : 0,
    [RUSSIAN]: (n) => n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2,
    [CZECH]: (n) => (n === 1) ? 0 : (n >= 2 && n <= 4) ? 1 : 2,
    [POLISH]: (n) => (n === 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2),
    [ICELANDIC]: (n) => (n % 10 !== 1 || n % 100 === 11) ? 1 : 0,
};

/**
 * Selects plural index depending on language and count
 *
 * @param locale
 * @param count
 */
export default function pluralIndex(locale: string, count: number) {
    if(LANG_TYPE_MAP[locale]) {
        return PLURALIZERS[LANG_TYPE_MAP[locale]](count);
    }

    return 0;
}
