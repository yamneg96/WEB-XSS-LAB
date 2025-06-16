# 🧪 XSS Lab - Educational Web Application

A full-stack web application that serves as an educational lab for demonstrating Cross-Site Scripting (XSS) vulnerabilities and their secure mitigations. This project is designed to help developers understand different types of XSS attacks and learn how to prevent them.

## ✨ Features

- Several levels of XSS vulnerabilities and their secure implementations:
  1.  **Reflected XSS** 🕵️
  2.  **Stored XSS** 💾
  3.  **JavaScript Attribute Injection** ⚙️
  4.  **DOM-Based XSS** 🌍
  5.  **XSS via `eval()`** ☢️
  6.  **DOM-Based XSS via JavaScript Context (Follow the Rabbit)** 🐇
- Side-by-side comparison of vulnerable and secure code ⚖️
- Interactive examples with payload suggestions 💡
- Educational explanations and best practices 📚
- Modern, responsive UI using Bootstrap 📱

## 📋 Prerequisites

- Node.js (v14 or higher) 🟢
- npm (v6 or higher) 📦

## 🚀 Setup and Installation

To set up this project from scratch or to run it after cloning:

1.  **Clone the repository (if not already done):** ⬇️
    ```bash
    git clone https://github.com/yamneg96/WEB-XSS-LAB.git
    cd vulnerableVSsecure
    ```*

2.  **Initialize the Node.js project (if starting from scratch):** 🏗️
    ```bash
    npm init -y
    ```
    *This command creates a `package.json` file.*

3.  **Install dependencies:** 💾
    ```bash
    npm install express ejs body-parser express-session sanitize-html nodemon
    ```
    *Alternatively, if `package.json` already exists, simply run `npm install`.*

4.  **Start the application:** ▶️
    ```bash
    npm start
    ```

5.  **Open your browser and navigate to:** 🌐
    ```
    http://localhost:3000
    ```

## 📁 Project Structure

```
/vulnerableVSsecure
  /public
    /css
      style.css
    /js
      main.js
  /views
    /partials
      header.ejs
      footer.ejs
    index.ejs
    level1-vulnerable.ejs
    level1-secure.ejs
    level2-vulnerable.ejs
    level2-secure.ejs
    level3-vulnerable.ejs
    level3-secure.ejs
    level4-vulnerable.ejs
    level4-secure.ejs
    level5-vulnerable.ejs
    level5-secure.ejs
    level6-vulnerable.ejs
    level6-secure.ejs
  app.js
  package.json
  README.md
```

## ⚠️ Security Warning 🚨

**IMPORTANT**: This application is intentionally vulnerable to XSS attacks for educational purposes. The vulnerable versions are designed to demonstrate security risks. Never implement these vulnerable patterns in production code.

## 🎯 Learning Objectives

1.  **Reflected XSS**
    - Understanding how user input can be reflected in the page 🤔
    - Learning to use `textContent` instead of `innerHTML` ✅
    - Implementing proper input sanitization 🧹

2.  **Stored XSS**
    - Understanding persistent XSS attacks 👻
    - Learning to escape HTML content ✍️
    - Implementing proper data sanitization 🧼

3.  **JavaScript Attribute Injection**
    - Understanding JavaScript injection vulnerabilities 💉
    - Learning input validation and type checking 🔍
    - Implementing secure event handling 🛡️

4.  **DOM-Based XSS**
    - See how client-side JavaScript can create XSS vulnerabilities without server interaction. 🖥️

5.  **XSS via `eval()`**
    - Understand the dangers of using `eval()` with untrusted user input. 💥

6.  **DOM-Based XSS via JavaScript Context (Follow the Rabbit)**
    - Exploit DOM-based XSS where the payload is injected directly into JavaScript code from URL parameters. 🐰

## ✅ Best Practices Demonstrated

- Using `textContent` instead of `innerHTML`
- Implementing proper HTML escaping
- Input validation and sanitization
- Using proper input types
- Secure event handling
- Content Security Policy (CSP) considerations
- Safe handling of URL parameters in JavaScript

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. ✨