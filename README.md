# Dark & Light Mode

A simple web project that demonstrates theme switching with JavaScript and Tailwind CSS.

## ✨ Features

- Toggle between Dark Mode and Light Mode
- Save the selected theme using `localStorage`
- Restore the saved theme when the page is loaded
- Apply dark styles using Tailwind CSS
- Keep the user's theme preference after refreshing the page

## 🛠️ Built With

- HTML5
- Tailwind CSS
- JavaScript
- Browser LocalStorage API

## ⚙️ How It Works

The project retrieves the previously saved theme from `localStorage` when the page loads.

When the user clicks either theme icon, JavaScript toggles the `dark` class on the root HTML element. The selected theme is then saved in `localStorage`, allowing the website to restore the same theme on the next visit.

## 🚀 Run Locally

1. Clone or download this repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` using Live Server, or use the local setup configured for the project.
4. Make sure the generated Tailwind CSS file is available. If the project requires a CSS build step, follow the command configured in `package.json`.

## 📚 What I Learned

- Working with the `localStorage` API
- Handling click events in JavaScript
- Using `classList.toggle()` and `classList.contains()`
- Saving and restoring user preferences
- Applying Dark Mode styles with Tailwind CSS

## 👤 Author

**[Taha Hemati]**