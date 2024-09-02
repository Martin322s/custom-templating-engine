const cache = new Map();

export function has(templateName) {
    return cache.has(templateName);
}

export function get(templateName) {
    return cache.get(templateName);
}

export function set(templateName, parsedTemplate) {
    cache.set(templateName, parsedTemplate);
}