## What is a Component in React?

In React, a component is a reusable and self-contained piece of code that represents a part of a user interface (UI). Components serve as the fundamental building blocks of a React application, encapsulating both the logic and UI elements specific to a particular part of the application.

React component names must always start with a capital letter, while HTML tags must be lowercase.

# Styling React Components with CSS

When styling React components, there are various methods to choose from, each with its own advantages. In this guide, we'll explore three common approaches: External Stylesheets, CSS Modules, and Inline Styles.

## 1. External Stylesheets

**Description:** This method involves creating a separate CSS file and linking it to your React components.

**Pros:**
- Encourages separation of concerns.
- Reusability across components.
- Familiar for developers accustomed to traditional web development.

**Cons:**
- Global scope might lead to potential naming conflicts.

**Example:**
1. Create an external CSS file, e.g., `styles.css`:

    ```css
    /* styles.css */

    .button {
      background-color: #3498db;
      color: #ffffff;
      padding: 10px 15px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    ```

2. Import the CSS file in your React component:

    ```jsx
    // Button.js

    import React from 'react';
    import './styles.css';

    const Button = () => {
      return <button className="button">Click me</button>;
    };

    export default Button;
    ```

## 2. CSS Modules

**Description:** CSS Modules allow local scoping of styles by transforming class names at compile time.

**Pros:**
- Local scoping prevents naming clashes.
- Still promotes a modular and reusable approach.

**Cons:**
- Requires additional configuration (e.g., webpack) for setup.

**Example:**
1. Create a CSS module file, e.g., `Button.module.css`:

    ```css
    /* Button.module.css */

    .button {
      background-color: #3498db;
      color: #ffffff;
      padding: 10px 15px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    ```

2. Import and use the module in your React component:

    ```jsx
    // Button.js

    import React from 'react';
    import styles from './Button.module.css';

    const Button = () => {
      return <button className={styles.button}>Click me</button>;
    };

    export default Button;
    ```

## 3. Inline Styles

**Description:** Inline styles involve applying styles directly within the React component using JavaScript objects.

**Pros:**
- Scoped to the component, reducing global scope pollution.
- Dynamic styles based on component state or props.

**Cons:**
- Mixing CSS with JavaScript can be less intuitive for some developers.

**Example:**
```jsx
// Button.js

import React from 'react';

const buttonStyle = {
  backgroundColor: '#3498db',
  color: '#ffffff',
  padding: '10px 15px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const Button = () => {
  return <button style={buttonStyle}>Click me</button>;
};

export default Button;
