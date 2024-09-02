export function renderTemplate(template, data) {
    let output = template.replace(/\{\{#for (.*?) (.*?)\}\}(.*?)\{\{#endfor\}\}/gs, (match, arrayName, itemName, loopContent) => {
        const array = data[arrayName.trim()];
        
        if (!Array.isArray(array)) {
            return '';
        }

        return array.map((item) => {
            return loopContent.replace(/\{\{(.*?)\}\}/g, (_, variable) => {
                if (variable.trim() === itemName.trim()) {
                    return item;
                } else {
                    const keys = variable.trim().split('.');
                    const value = keys.reduce((acc, key) => acc ? acc[key] : undefined, data);
                    return value || '';
                }
            });
        }).join('');
    });

    output = output.replace(/\{\{(.*?)\}\}/g, (_, variable) => {
        const keys = variable.trim().split('.');
        const value = keys.reduce((acc, key) => acc ? acc[key] : undefined, data);
        return value || '';
    });

    return output;
}