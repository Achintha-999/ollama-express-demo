# 🤖🦙 Ollama Express Demo 

> 🚀 A simple Node.js + Express app that uses **Ollama** to run a local LLM chat request and serves a tiny web UI from `/public`.

---

## 🏷️📊 Badges

- ✅📦 ![Node.js](https://img.shields.io/badge/node-%3E%3D18-brightgreen)
- ✅🚂 ![Express](https://img.shields.io/badge/express-5.x-black)
- ✅🦙 ![Ollama](https://img.shields.io/badge/ollama-local%20LLM-blue)
- ✅📄 ![License](https://img.shields.io/badge/license-ISC-lightgrey)
- ✅⭐ ![GitHub Repo Stars](https://img.shields.io/github/stars/Achintha-999/ollama-practical-2?style=flat)
- ✅🍴 ![GitHub Forks](https://img.shields.io/github/forks/Achintha-999/ollama-practical-2?style=flat)
- ✅🕒 ![Last Commit](https://img.shields.io/github/last-commit/Achintha-999/ollama-practical-2)

---

## ✨📌 Features

- ✅🌐 **Express server** running on `http://localhost:3000`
- ✅🧠 **Ollama chat API** call using the `ollama` npm package
- ✅🧪 **GET /test endpoint** that returns a model answer as plain text
- ✅🖥️ **Static frontend** served from `public/` (button + alert)

---

## 🧰📦 Tech Stack

- ✅🟩 **Node.js** (ES Modules)
- ✅🚂 **Express**
- ✅🦙 **Ollama** (`ollama` npm package)
- ✅🌐 **HTML + JavaScript** (static client)

---

## ✅📋 Requirements

- ✅🟢 **Node.js** (recommended: Node 18+)
- ✅📦 **npm** (comes with Node)
- ✅🦙 **Ollama installed & running**
- ✅📥 **A pulled model available locally**

---

## 📂🗂️ Project Structure

- ✅📄 `index.js` — Express server + Ollama chat request
- ✅📦 `package.json` — dependencies and config
- ✅🌐 `public/` — static web UI
  - ✅📄 `index.html`
  - ✅📄 `script.js`

---

## 🦙⚙️ Ollama Setup (Important)

- ✅📌 Install Ollama from the official site
- ✅▶️ Make sure Ollama is running in the background
- ✅📥 Pull the model used by this project:

- ✅🧠 Model used in code: `llama3.1:8b`

```bash
ollama pull llama3.1:8b
```

- ✅📝 If you change the model name in `index.js`, you must pull that model too

---

## 🛠️📥 Installation

- ✅📌 Clone the repository:

```bash
git clone https://github.com/Achintha-999/ollama-practical-2.git
cd ollama-practical-2
```

- ✅📦 Install dependencies:

```bash
npm install
```

---

## ▶️🚀 How to Run

- ✅▶️ Start the server:

```bash
node index.js
```

- ✅🌐 Server will run on:

- ✅🔗 `http://localhost:3000`

---

## 🧪🧩 How to Use

### ✅🧪 Option 1: Test via Browser (UI)

- ✅🌍 Open the app in your browser:

- ✅🔗 `http://localhost:3000`

- ✅🖱️ Click the **Test** button
- ✅📣 You will see an alert with the model’s response

---

### ✅🧪 Option 2: Test via API (Direct)

- ✅📌 Call the test endpoint:

```bash
curl http://localhost:3000/test
```

- ✅📄 You’ll receive a plain-text response (example: “Paris”)

---

## 🔁🧠 What `/test` Does (Current Behavior)

- ✅📨 Sends this prompt to the model:

- ✅💬 “What is the capital of France?”

- ✅📤 Returns only the assistant message content as the HTTP response

---

<!--
## 🖼️📸 Screenshots

- ✅🖥️ **Home UI** (`/public/index.html`) with a single **Test** button

> ✅📌 Add your screenshots to a folder (recommended: `assets/`) and update the paths below.

- ✅🧩 Example placeholders (replace with real images):

```text
assets/ui-home.png
assets/ui-alert.png
```

- ✅🖼️ Markdown example (after you add the images):

```markdown
![Home UI](assets/ui-home.png)
![Response Alert](assets/ui-alert.png)
```

---
-->

## 🛠️🧩 Configuration Tips

- ✅🧠 Change model name in `index.js`:

- ✅📌 Current line:

- ✅🧠 `model: 'llama3.1:8b'`

- ✅📝 You can replace it with any installed Ollama model (make sure it’s pulled first)

---

## 🧯🧰 Troubleshooting

- ✅❌ **Error: connection refused / Ollama not reachable**
  - ✅🦙 Ensure Ollama is installed and running
  - ✅▶️ Try running: `ollama serve` (if needed)

- ✅❌ **Model not found**
  - ✅📥 Pull it first:
    - ✅📌 `ollama pull llama3.1:8b`

- ✅❌ **Port already in use**
  - ✅🔧 Stop the app using the port or change the port in `index.js`:
    - ✅📌 `app.listen(3000);`

---

## 🔒🛡️ Notes

- ✅⚠️ This demo endpoint is public and unauthenticated (local dev use recommended)
- ✅📌 In production, add rate-limiting, validation, auth, and error handling

---

## 📜📝 License

- ✅📄 Licensed under **ISC** (as configured in `package.json`)

---

## 👤📬 Author

- ✅🙋 GitHub: https://github.com/Achintha-999
