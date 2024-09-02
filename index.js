import express from 'express';
import path from 'path';
import { TemplateEngine } from './templating-engine/src/TemplatingEngine.js' // Import your custom templating engine

const app = express();
const port = 3001;

// Initialize custom template engine
const engine = new TemplateEngine();

// Register your templates (you can load from file or directly in memory)
engine.registerTemplate('home', `
  <h1>{{title}}</h1>
  <ul>
    {% for item in items %}
      <li>{{item}}</li>
    {% endfor %}
  </ul>
`);

// Custom view engine function for Express
app.engine('cte', (filePath, options, callback) => {
    const templateName = path.basename(filePath, '.cte'); // Use the file name as template name
    const rendered = engine.render(templateName, options); // Render with custom engine
    return callback(null, rendered);
});

// Set '.cte' as the extension for your custom templates
app.set('views', './views'); // Directory where your templates are located
app.set('view engine', 'cte');

// Define a route
app.get('/', (req, res) => {
    const data = {
        title: 'Shopping List',
        items: ['Apples', 'Bananas', 'Oranges']
    };

    console.log('Data being passed to template:', data); // Debug

    res.render('home', data);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
