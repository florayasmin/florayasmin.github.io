(function () {
    const storageKey = "flora-theme";

    function currentTheme() {
        return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
    }

    function applyTheme(theme) {
        if (theme === "dark") {
            document.documentElement.setAttribute("data-theme", "dark");
        } else {
            document.documentElement.removeAttribute("data-theme");
        }
        localStorage.setItem(storageKey, theme);

        document.querySelectorAll(".theme-toggle").forEach((btn) => {
            btn.textContent = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
        });
    }

    const saved = localStorage.getItem(storageKey);
    applyTheme(saved === "dark" ? "dark" : "light");

    document.addEventListener("DOMContentLoaded", () => {
        applyTheme(currentTheme());
        document.querySelectorAll(".theme-toggle").forEach((btn) => {
            btn.addEventListener("click", () => {
                applyTheme(currentTheme() === "dark" ? "light" : "dark");
            });
        });
    });
})();
