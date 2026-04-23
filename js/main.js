/**
 * Girls Day Workshop – Startpunkt für Aufgaben 5, 6 und 7.
 * Öffne TASKS.md für die einzelnen Schritte.
 */

(function () {
  "use strict";

  const actionBtn = document.getElementById("action-btn");
  const jsMessage = document.getElementById("js-message");
  const counterBtn = document.getElementById("counter-btn");
  const resetBtn = document.getElementById("counter-btn-reset");
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
        "Ach du grüne Neune! Der Button hat dich wieder dumm gemacht!";
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
  if (resetBtn && counterValue && counterDisplay) {
    resetBtn.addEventListener("click", function () {
      count = 0;
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
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
        if (!res.ok) throw new Error("HTTP " + res.status);
        const data = await res.json();
        apiOutput.innerHTML = `<p><strong>Pikachoo-choo</strong></p><img src="${data.sprites.front_default}" alt="Pikachoo-choo ist nicht da. Er arbeitet bei der DB..." />`;

        //apiOutput.innerHTML =
          //"<p>Implementiere Aufgabe 7 in <code>main.js</code> – dann erscheinen hier Name und Bild eines Pokémon.</p>";
      } catch (err) {
        apiOutput.innerHTML =
          '<p class="error">Etwas ist schiefgelaufen. Nutze eine lokale Server-URL (siehe README) und prüfe die Konsole.</p>';
        console.error(err);
      }
    });
  }
})();
