export function renderTemplate(template, data) {

    let output = template.replace(/\{\{(.*?)\}\}/g, (_, variable) => {
        const keys = variable.trim().split('.');
        return keys.reduce((acc, key) => acc[key], data) || '';
    });

    output = output.replace(/\{\{#(.*?)\}\}(.*?)\{\{#end(.*?)\}\}/gs, (match, type, code, endType) => {
        const execType = type.trim().split('(')[0];
        if (execType === 'for') {
            const [arrayName, loopContent] = parseLoop(type, code);
            const array = eval(arrayName);
            return array.map((item) => loopContent.replace('{{item}}', item)).join('');
        } else if (execType === 'if') {
            const condition = eval(type.split('(')[1].split(')')[0]);
            return condition ? code : '';
        }
    });

    return output;
}

export function parseLoop(type, content) {
    const loopParams = type.match(/\((.*?)\)/);
    return loopParams ? [loopParams[1], content] : ['', content];
}