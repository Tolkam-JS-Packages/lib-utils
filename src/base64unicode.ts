/**
 * Encodes unicode string to base64
 *
 * @param {string} str
 * @returns {string}
 */
export function btoaUnicode(str: string) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
        return String.fromCharCode(parseInt(p1, 16))
    }))
}

/**
 * Decodes unicode string from base64
 *
 * @param {string} str
 * @returns {string}
 */
export function atobUnicode(str: string) {
    return decodeURIComponent(Array.prototype.map.call(atob(str), function(c: string) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    }).join(''))
}
