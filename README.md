
# KendoReact-Grid-Dialogue

This project demonstrates how to use the KendoReact Grid within a Dialog component. It features an editable grid where each row has a text input, a dropdown list, and a toggle switch.

## Features

- **Editable Grid**: Inline editing capabilities with custom cell renderers.
  - **Name**: Editable text input.
  - **Value**: Editable dropdown list with sample values.
  - **Active Status**: Toggle switch.
- **Dialog Component**: The grid is displayed within a KendoReact Dialog for a better user experience.

## Prerequisites

To run this project, you need to have Node.js and npm installed on your machine.

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/joelprince2601/KendoReact-Grid-Dialogue.git
   cd KendoReact-Grid-Dialogue
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

```
your-project/
│
├── public/
│   ├── index.html
│   └── favicon.ico
│
├── src/
│   ├── components/
│   │   └── CrossReferenceDialog.js
│   │
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
│
├── .gitignore
├── package.json
└── README.md
```

### File Descriptions

- **public/index.html**: The HTML template file.
- **src/index.js**: The main entry point for the React application.
- **src/index.css**: Global CSS for the application.
- **src/App.js**: Main component that renders the button to open the dialog.
- **src/App.css**: CSS specific to the `App` component.
- **src/components/CrossReferenceDialog.js**: Contains the dialog with the KendoReact Grid and custom cell renderers.

## Custom Cell Renderers

- **cellWithInput**: Custom cell renderer for a text input.
- **cellWithDropDown**: Custom cell renderer for a dropdown list with sample values.
- **cellWithSwitch**: Custom cell renderer for a toggle switch.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or new features to suggest.

## License

This project is licensed under the MIT License.

