# Markdown Previewer

Markdown Previewer is a simple web application that allows you to write and preview GitHub-flavored markdown in real-time. The app is built using React and styled with Bootstrap and React-Bootstrap.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [License](#license)

## Features

- **Real-time Preview**: As you type markdown in the editor, the preview pane updates in real-time to show the rendered HTML.
- **GitHub Flavored Markdown**: Supports GitHub-flavored markdown, including headings, links, inline code, code blocks, lists, blockquotes, images, bold text, and line breaks.
- **Bootstrap Styling**: Clean and responsive UI styled with Bootstrap and React-Bootstrap.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/ductmOfficial/markdown-previewer.git
cd markdown-previewer
```

2. Install dependencies using Yarn:

```bash
yarn install
```

3. Start the development server:

```bash
yarn start
```

The app should now be running on `http://localhost:3000`.

## Usage

1. **Editor**: On the left side of the screen, you'll find a textarea where you can input your markdown text.
2. **Preview**: On the right side of the screen, you'll see the HTML preview of your markdown text. The preview updates in real-time as you type.

### Default Markdown

When the app first loads, it contains default markdown text that includes examples of various markdown elements such as headings, links, code blocks, lists, blockquotes, images, bold text, and line breaks.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Bootstrap**: A CSS framework for building responsive and mobile-first websites.
- **React-Bootstrap**: Bootstrap components built with React.
- **Marked**: A markdown parser and compiler.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
