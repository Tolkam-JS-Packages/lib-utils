/**
 * JS equivalent of PHP's `strtr()`
 *
 * @see https://kedo-kyn.livejournal.com/1306.html
 * @see https://www.php.net/manual/en/function.strtr.php
 *
 * @param str
 * @param from
 * @param to
 */
export default function strtr(str: string, from: string | object, to?: string) {

    if (typeof from === 'object') {
    	let cmpStr = '';
    	for (let j = 0; j < str.length; j++){
    		cmpStr += '0';
    	}
    	let offset = 0;
    	let find = -1;
    	let addStr = '';

        for (const fr in from) {
        	offset = 0;
        	while ((find = str.indexOf(fr, offset)) !== -1){
				if (parseInt(cmpStr.substr(find, fr.length)) !== 0){
					offset = find + 1;
					continue;
				}
				for (let k = 0 ; k < from[fr].length; k++){
					addStr += '1';
				}
				cmpStr = cmpStr.substr(0, find)
                    + addStr
                    + cmpStr.substr(find + fr.length, cmpStr.length - (find + fr.length));

				str = str.substr(0, find)
                    + from[fr]
                    + str.substr(find + fr.length, str.length - (find + fr.length));

				offset = find + from[fr].length + 1;
				addStr = '';
        	}
        }

        return str;
    }

	for(let i = 0; i < from.length; i++) {
		str = str.replace(new RegExp(from.charAt(i),'g'), to!.charAt(i));
	}

    return str;
}
