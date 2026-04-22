/**
 * Girls Day Workshop – Startpunkt für Aufgaben 5, 6 und 7.
 * Öffne TASKS.md für die einzelnen Schritte.
 */

(function () {
  "use strict";

  const THEME_KEY = "girlsday-theme";

  function getTheme() {
    var t = document.documentElement.getAttribute("data-theme");
    return t === "dark" || t === "light" ? t : "light";
  }

  function setThemeButtonUi(theme) {
    var btn = document.getElementById("theme-toggle");
    if (!btn) {
      return;
    }
    var isDark = theme === "dark";
    btn.setAttribute("aria-pressed", isDark ? "true" : "false");
    btn.setAttribute(
      "title",
      isDark ? "Zu hellem Farbschema wechseln" : "Zu dunklem Farbschema wechseln"
    );
    btn.setAttribute(
      "aria-label",
      isDark ? "Farbschema: Dunkel. Zu Hell wechseln." : "Farbschema: Hell. Zu Dunkel wechseln."
    );
    var label = btn.querySelector("[data-theme-label]");
    if (label) {
      label.textContent = isDark ? "Hell" : "Dunkel";
    }
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (e) {
      /* private mode etc. */
    }
    setThemeButtonUi(theme);
  }

  function initThemeToggle() {
    setThemeButtonUi(getTheme());
    var btn = document.getElementById("theme-toggle");
    if (btn) {
      btn.addEventListener("click", function () {
        var next = getTheme() === "dark" ? "light" : "dark";
        applyTheme(next);
      });
    }
  }

  initThemeToggle();

  const actionBtn = document.getElementById("action-btn");
  const jsMessage = document.getElementById("js-message");
  const counterBtn = document.getElementById("counter-btn");
  const counterDisplay = document.getElementById("counter-display");
  const counterValue = document.getElementById("counter-value");
  const pokemonBtn = document.getElementById("pokemon-btn");
  const apiOutput = document.getElementById("api-output");

  // TASK 5 & 6: Hier eigenen Code ergänzen (siehe TASKS.md)

  if (actionBtn && jsMessage) {
    actionBtn.addEventListener("click", function () {
      // TASK 5: Beim Klick Text ändern, z. B.:
      // jsMessage.textContent = "Dein neuer Text!";
      jsMessage.textContent =
        "Super – der Button funktioniert. Passe diese Nachricht in main.js an!";
    });
  }

  // TASK 6: Zähler – entferne die Kommentare unten und baue den Zähler aus.
  // Tipp: Zeige counterBtn und counterDisplay (classList.remove('hidden') reicht nicht;
  // im HTML steht hidden – nutze .removeAttribute('hidden') oder entferne hidden im HTML).

  let count = 0;

  if (counterBtn && counterValue && counterDisplay) {
    counterBtn.addEventListener("click", function () {
      count += 1;
      counterValue.textContent = String(count);
    });
  }

  // TASK 7: Pokémon von der API laden (async/await)
  // Endpunkt-Beispiel: https://pokeapi.co/api/v2/pokemon/pikachu
  // JSON enthält u. a. .name und .sprites.front_default

  if (pokemonBtn && apiOutput) {
    pokemonBtn.addEventListener("click", async function () {
      apiOutput.classList.add("has-content");

      try {
        // TASK 7: fetch – siehe TASKS.md
        // z. B. const res = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
        // if (!res.ok) throw new Error("HTTP " + res.status);
        // const data = await res.json();
        // apiOutput.innerHTML = `<p><strong>...</strong></p><img ... />`;

        apiOutput.innerHTML =
          "<p>Implementiere Aufgabe 7 in <code>main.js</code> – dann erscheinen hier Name und Bild eines Pokémon.</p>";
      } catch (err) {
        apiOutput.innerHTML =
          '<p class="error">Etwas ist schiefgelaufen. Nutze eine lokale Server-URL (siehe README) und prüfe die Konsole.</p>';
        console.error(err);
      }
    });
  }
})();
