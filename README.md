
# Custom JavaScript Templating Engine

A simple templating engine built in JavaScript to render dynamic HTML content by injecting variables, loops, and conditionals. This project is useful for learning about custom template rendering logic.

## Features

- **Variable Injection**: Use `{{ variableName }}` to inject data into templates.
- **Conditionals**: Add simple if-else logic with `{% if condition %}...{% endif %}`.
- **Loops**: Iterate over arrays or objects with `{% for item in array %}...{% endfor %}`.
- **Template Caching**: Parsed templates are cached for faster rendering.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Martin322s/custom-templating-engine.git
    ```

2. Navigate into the project directory:
    ```bash
    cd custom-templating-engine
    ```

3. Install dependencies (if any):
    ```bash
    npm install
    ```

## Usage

### Basic Setup

1. **Register a Template**: First, register your template with the engine:
    ```js
    const TemplateEngine = require('./src/TemplateEngine');

    const engine = new TemplateEngine();
    engine.registerTemplate('example', `
      <h1>{{ title }}</h1>
      <ul>
        {% for item in items %}
          <li>{{ item }}</li>
        {% endfor %}
      </ul>
    `);
    ```

2. **Render the Template**: Pass the registered template along with data to render the HTML:
    ```js
    const output = engine.render('example', {
      title: 'Shopping List',
      items: ['Apples', 'Bananas', 'Oranges']
    });

    console.log(output);
    ```

### Example Output

For the template above, the output will be:
```html
<h1>Shopping List</h1>
<ul>
  <li>Apples</li>
  <li>Bananas</li>
  <li>Oranges</li>
</ul>
```

### Template Syntax

- **Variables**: Insert dynamic data with `{{ variableName }}`. The value is pulled from the data object provided at render time.
    ```html
    <h1>{{ title }}</h1>
    ```

- **Conditionals**: Use `{% if condition %}` for conditional rendering.
    ```html
    {% if isAdmin %}
      <p>Welcome, Admin!</p>
    {% endif %}
    ```

- **Loops**: Iterate over arrays with `{% for item in array %}`.
    ```html
    <ul>
      {% for item in items %}
        <li>{{ item }}</li>
      {% endfor %}
    </ul>
    ```

### Caching

The engine automatically caches parsed templates for improved performance. You can customize or clear the cache by modifying the `cache.js` module.

## Folder Structure

```text
your-templating-library/
│
├── src/
│   ├── TemplateEngine.js        # Core engine logic
│   ├── utils.js                 # Utility functions
│   ├── parser.js                # Template parsing logic
│   ├── renderer.js              # Template rendering logic
│   ├── cache.js                 # Caching compiled templates
│   └── index.js                 # Main entry point
│
├── templates/                   # Folder to store templates
│   └── base.html                # A sample template
│
├── test/                        # Test folder
│   └── TemplateEngine.test.js   # Test cases for templating engine
│
├── README.md                    # Project documentation
└── package.json                 # Project dependencies
```

## Running Tests

To run unit tests for the templating engine:

1. Install `jest` as a dev dependency:
    ```bash
    npm install jest --save-dev
    ```

2. Add the following script to `package.json`:
    ```json
    "scripts": {
      "test": "jest"
    }
    ```

3. Run the tests:
    ```bash
    npm test
    ```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.