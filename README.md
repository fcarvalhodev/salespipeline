# Sales Pipeline Settings

## Overview

This project is a Vue.js application that allows users to configure their sales pipeline settings. It includes various components like headers, checkboxes, and columns to provide a complete user interface for managing sales pipeline types.

## Best Engineering Practices

- **Componentization**: The UI is broken down into reusable Vue components.
- **Prop Driven**: Components are designed to be flexible and configurable via props.
- **Scoped CSS**: Scoped styling to prevent CSS leakage.
- **BEM Naming Convention**: Utilizes BEM for structured and scalable CSS.
- **Responsive Design**: The application is responsive and works well on various screen sizes.
- **Code Splitting**: Lazy loading and asynchronous components for better performance.
- **Automated Testing**: End-to-end tests using Cypress for each component.
- **Version Control**: Git is used for version control, with a clean commit history and meaningful commit messages.


## Features

- **Header Component**: Allows navigation and provides search functionality.
- **Checkbox Component**: Enables the selection of different types of sales pipelines.
- **Column Component**: Displays the stages of the sales pipeline.
- **Main Card Component**: The main container that holds all other components and manages the state.

## Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later)
- Vue.js (v2.x)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/sales-pipeline-settings.git
   ```
2. Navigate to the project directory:
   ```bash
   cd sales-pipeline-settings
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Running the Application

To run the application, execute the following command:

```bash
npm run serve
```

This will start the development server, and the application will be accessible at http://localhost:8080.

## Running Tests

This project uses Cypress for end-to-end testing. To run the tests, execute the following command:

```bash
npm run test
```

Make sure your application is running when you execute the tests.