# Collaborative Text Editor

![Editor Screenshot](./screen.png)

[![GitHub last commit](https://img.shields.io/github/last-commit/EXELVI/editor?style=for-the-badge)](https://github.com/EXELVI/editor/commits/main/)
[![GitHub repo size](https://img.shields.io/github/repo-size/EXELVI/editor?style=for-the-badge)](https://github.com/EXELVI/editor)
[![GitHub issues](https://img.shields.io/github/issues/EXELVI/editor?style=for-the-badge)](https://github.com/EXELVI/editor/issues)
[![GitHub forks](https://img.shields.io/github/forks/EXELVI/editor?style=for-the-badge)](https://github.com/EXELVI/editor/network/members)
[![GitHub stars](https://img.shields.io/github/stars/EXELVI/editor?style=for-the-badge)](https://github.com/EXELVI/editor/stargazers)

[![Node.js](https://img.shields.io/badge/Node.js-v14.x-brightgreen?style=for-the-badge)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-v4.x-blue?style=for-the-badge)](https://expressjs.com/)
[![Socket.io](https://img.shields.io/badge/Socket.io-v4.x-yellow?style=for-the-badge)](https://socket.io/)
[![CodeMirror](https://img.shields.io/badge/CodeMirror-v5.x-orange?style=for-the-badge)](https://codemirror.net/)
[![Prettier](https://img.shields.io/badge/Prettier-v2.x-blueviolet?style=for-the-badge)](https://prettier.io/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-v5.x-lightblue?style=for-the-badge)](https://getbootstrap.com/)


A real-time collaborative text editor built with Node.js, Express, and Socket.io. This project allows multiple users to edit text documents simultaneously, with support for syntax highlighting and real-time cursor tracking.

> ⚠️ This project is currently in development and may contain several bugs (a lot of them)!

## 🚀 Features

- Real-time collaborative editing
- Syntax highlighting for multiple programming languages
- Cursor tracking and collaborative editing experience
- Dark and light mode support
- File upload and download functionality
- Code formatting using Prettier

## 🔧 Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (>= 14.x)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/EXELVI/editor.git
    ```

2. Navigate to the project directory:

    ```bash
    cd editor
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Start the server:

    ```bash
    node index.js
    ```

5. Open your browser and go to `http://localhost:3000` to use the editor.

## 💡 Usage

1. Open the application in multiple tabs or different browsers.
2. Create or join a room by entering a Room ID.
3. Start editing the document. Changes will be reflected in real-time for all users in the same room.
4. Use the toolbar to select the programming language, upload files, download the document, and toggle dark mode.

## 🛠️ Technologies Used

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Socket.io](https://socket.io/)
- [CodeMirror](https://codemirror.net/)
- [Bootstrap](https://getbootstrap.com/)
- [Prettier](https://prettier.io/)

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request if you find a bug or want to add a new feature.