import { FOR_REGEX, IF_REGEX } from '../config/constants';

export function parsedTemplate(template) {
    let parsed = '';

    parsed = template.replace(FOR_REGEX, (match, item, array, content) => {
        return `{{#for(${array}, function(${item}){}}${content}{{#endfor}}`;
    });

    parsed = parsed.replace(IF_REGEX, (match, condition, content) => {
        return `{{#if(${condition}){}}${content}{{#endif}}`;
    });

    return parsed;
}