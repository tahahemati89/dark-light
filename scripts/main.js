// Elements
const iconLight = document.querySelector(".icon-light");
const iconDark = document.querySelector(".icon-dark");

// Restore save theme
const saveTheme = localStorage.getItem("theme");
if (saveTheme === "dark") {
  document.documentElement.classList.add("dark");
}

// Change and save theme
const toggleTheme = () => {
  document.documentElement.classList.toggle("dark");

  const isDark = document.documentElement.classList.contains("dark");

  localStorage.setItem("theme", isDark ? "dark" : "light");
};
iconLight.addEventListener("click", toggleTheme);
iconDark.addEventListener("click", toggleTheme);
