import { parseTemplate } from './parser';
import { renderTemplate } from './renderer';
import { cache } from './cache';

export class TemplateEngine {
    constructor() {
        this.templates = {};
    }

    load(templateName) {
        if (cache.has(templateName)) {
            return cache.get(templateName);
        }

        const template = this.templates[templateName];
        if (!template) {
            throw new Error(`Template "${templateName}" not found.`);
        }

        const parsedTemplate = parseTemplate(template);
        cache.set(templateName, parsedTemplate);
        return parsedTemplate;
    }

    registerTemplate(templateName, templateContent) {
        this.templates[templateName] = templateContent;
    }

    render(templateName, data) {
        const parsedTemplate = this.load(templateName);
        return renderTemplate(parsedTemplate, data);
    }
}
