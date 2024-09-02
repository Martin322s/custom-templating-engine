import { FOR_REGEX, IF_REGEX } from '../config/constants.js';

export function parseTemplate(template) {
    let parsed = template;

    // Parse for-loops: Replace {% for item in items %} with a placeholder for the renderer
    parsed = parsed.replace(FOR_REGEX, (match, item, array, content) => {
        return `{{#for ${array.trim()} ${item.trim()}}}${content}{{#endfor}}`;
    });

    // Parse if conditions: Replace {% if condition %} with a placeholder
    parsed = parsed.replace(IF_REGEX, (match, condition, content) => {
        return `{{#if(${condition.trim()})}}${content}{{#endif}}`;
    });

    return parsed;
}