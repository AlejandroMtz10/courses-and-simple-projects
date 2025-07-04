import { useEffect, useState } from "react";
import { BsMoonStarsFill } from "react-icons/bs"; // Moon icon for dark mode
import { RxSun } from "react-icons/rx";         // Sun icon for light mode

function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    // Detect the initial theme based on localStorage or system preference
    if (localStorage.theme) return localStorage.theme;
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
    return "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    localStorage.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    // Update the theme state 
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-3 rounded-4xl transition"
      style={{
        backgroundColor: 'var(--current-bg)',
        color: 'var(--current-text)'
      }}
    >
      {theme === "dark" ? <RxSun size={20} /> : <BsMoonStarsFill size={20} />}
    </button>
  );
}

export default ThemeToggle;