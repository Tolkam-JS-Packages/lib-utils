export default function urlencode(source: any, noEmpty?: boolean) {

    const s: string[] = [];
    const rbracket = /\[\]$/;

    const add = function(k: string, v: any) {
        if (typeof v === 'function') {
            v = v();
        }
        if (v == null) {
            v = '';
        }

        if(!v && noEmpty) {
            return;
        }

        s[s.length] = encodeURIComponent(k) + '=' + encodeURIComponent(v);
    };

    let buildParams = function(prefix: string, obj: any) {

        let i: number, len: number, key: string;

        if (prefix) {
            if (Array.isArray(obj)) {
                for (i = 0, len = obj.length; i < len; i++) {
                    if (rbracket.test(prefix)) {
                        add(prefix, obj[i]);
                    } else {
                        buildParams(prefix + '[' + (typeof obj[i] === 'object' ? i : '') + ']', obj[i]);
                    }
                }
            } else if (obj && String(obj) === '[object Object]') {
                for (key in obj) {
                    buildParams(prefix + '[' + key + ']', obj[key]);
                }
            } else {
                add(prefix, obj);
            }
        } else if (Array.isArray(obj)) {
            for (i = 0, len = obj.length; i < len; i++) {
                add(obj[i].name, obj[i].value);
            }
        } else {
            for (key in obj) {
                buildParams(key, obj[key]);
            }
        }
        return s;
    };

    return buildParams('', source).join('&').replace(/%20/g, '+');
}