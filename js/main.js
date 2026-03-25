/**
 * Girls Day Workshop – Startpunkt für Aufgaben 5, 6 und 7.
 * Öffne TASKS.md für die einzelnen Schritte.
 */

(function () {
  "use strict";

  function initParallaxBlobs() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const blobs = document.querySelectorAll(".parallax__blob");
    if (!blobs.length) {
      return;
    }
    const speeds = [0.11, 0.06, 0.14];
    let ticking = false;
    function applyScroll() {
      const y = window.scrollY || window.pageYOffset;
      blobs.forEach(function (blob, i) {
        var s = speeds[i] !== undefined ? speeds[i] : 0.09;
        blob.style.transform = "translate3d(0, " + y * s + "px, 0)";
      });
      ticking = false;
    }
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(applyScroll);
        ticking = true;
      }
    }
    applyScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function initRevealCards() {
    var cards = document.querySelectorAll(".reveal-card");
    if (!cards.length) {
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      cards.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }
    if (!("IntersectionObserver" in window)) {
      cards.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.06 }
    );
    cards.forEach(function (c) {
      io.observe(c);
    });
  }

  initParallaxBlobs();
  initRevealCards();

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
