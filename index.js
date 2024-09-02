import express from 'express';
import path from 'path';
import { TemplateEngine } from './templating-engine/src/TemplatingEngine.js' // Import your custom templating engine

const app = express();
const port = 3001;

const engine = new TemplateEngine();

engine.registerTemplate('home', `
  <h1>{{title}}</h1>
  <ul>
    {% for item in items %}
      <li>{{item}}</li>
    {% endfor %}
  </ul>
`);

app.engine('cte', (filePath, options, callback) => {
    const templateName = path.basename(filePath, '.cte');
    const rendered = engine.render(templateName, options);
    return callback(null, rendered);
});

app.set('views', './views');
app.set('view engine', 'cte');

app.get('/', (req, res) => {
    const data = {
        title: 'Shopping List',
        items: ['Apples', 'Bananas', 'Oranges']
    };

    console.log('Data being passed to template:', data); // Debug

    res.render('home', data);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
