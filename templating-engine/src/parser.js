import { FOR_REGEX, IF_REGEX } from '../config/constants.js';

export function parseTemplate(template) {
    let parsed = template;

    parsed = parsed.replace(FOR_REGEX, (match, item, array, content) => {
        return `{{#for ${array.trim()} ${item.trim()}}}${content}{{#endfor}}`;
    });

    parsed = parsed.replace(IF_REGEX, (match, condition, content) => {
        return `{{#if(${condition.trim()})}}${content}{{#endif}}`;
    });

    return parsed;
}