export default function (length?: number, scope?: string) {
    length = length || 12;
    scope = scope || 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const scopeLength = scope.length;

    let str = '';
    for (let i = 0; i < length; i++) {
        str += scope.charAt(Math.floor(Math.random() * scopeLength));
    }

    return str;
}