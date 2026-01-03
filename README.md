# 😂 Dad Jokes Generator (Async / Await)

A clean and beginner-friendly **Dad Jokes Generator** built using **HTML, CSS, and JavaScript (async/await)**.  
It fetches random dad jokes from the public **icanhazdadjoke API** and displays them in a modern, dark-themed UI.

---

## 🚀 Features

- Fetches random dad jokes using **async/await**
- One-click button to load a new joke
- Automatically loads a joke on page refresh
- Dark, responsive UI
- No frameworks or external libraries

---

## 🛠️ Built With

- **HTML5** – Structure
- **CSS3** – Styling
- **JavaScript (ES6+)** – Logic & API handling
- **Fetch API** – HTTP requests

---

## 📁 Project Structure

```

.
├── index.html
├── styles.css
└── script.js

```

---

## ⚙️ How It Works

1. When the page loads, a dad joke is fetched automatically.
2. Clicking **“Get Another Joke”** triggers a new API request.
3. The app sends a request to:
```

[https://icanhazdadjoke.com/](https://icanhazdadjoke.com/)

````
4. The response is parsed as JSON and displayed on the page.
5. Errors are handled using `try...catch`.

---

## 🧠 Core Logic (Async / Await)

```js
async function showJoke() {
try {
 const res = await fetch(apiUrl, {
   headers: { Accept: "application/json" }
 });
 const data = await res.json();
 api_body.innerHTML = data.joke;
} catch (error) {
 api_body.innerHTML = error;
}
}
````

---

## ▶️ Getting Started

### Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/Dad-Jokes-Generator-using-Async-and-Await.git
   ```
2. Open `index.html` in your browser.

> 💡 Tip: Use VS Code’s **Live Server** extension for best results.

---

## 📚 API Used

* **icanhazdadjoke**

  * [https://icanhazdadjoke.com/](https://icanhazdadjoke.com/)
  * Free and requires no authentication

---

## ✨ Possible Improvements

* Add loading animation
* Display user-friendly error messages
* Copy joke to clipboard
* Save favorite jokes
* Deploy with GitHub Pages

---

## 👤 Author

Built by **Javin Arora**

---
Just say the word 😄
```
