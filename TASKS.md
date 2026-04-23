# Aufgaben: Von HTML bis API

Arbeite die Liste von oben nach unten ab. Speichere die Datei nach jeder Änderung und schau im Browser nach (siehe [README.md](README.md)).

---

## Aufgabe 1 – HTML: Titel und Überschrift

**Ziel:** Die Seite soll **dich** zeigen – mit eigenem Titel und eigener Hauptüberschrift.

**Dateien:** `index.html`

**Was du tun kannst**

1. Im `<head>` den Inhalt von `<title>…</title>` anpassen (das steht im Browser-Tab).
2. Die Überschrift `<h1 id="hero-heading">…</h1>` mit eigenem Text füllen.

**Tipp:** Achte darauf, dass sich öffnende und schließende Tags (`<h1>` und `</h1>`) **zusammenpassen**.

**Stretch:** Füge ein `<span>` in die Überschrift ein und style es später in CSS.

---

## Aufgabe 2 – HTML: Absatz, Liste oder Link

**Ziel:** Mehr Inhalt im Bereich „Über mich“ – und vielleicht ein Link nach draußen.

**Dateien:** `index.html` (Sektion mit `id="about-heading"`)

**Was du tun kannst**

1. Den Absatz `#about-text` umschreiben oder weitere `<p>`-Absätze ergänzen.
2. Optional: eine **ungeordnete Liste** mit `<ul>` und `<li>`.
3. Optional: einen **Link** mit `<a href="https://…">…</a>` z. B. zu [Girls Day](https://www.girls-day.de/) oder einer Seite, die dir gefällt. `href` muss eine echte URL sein.

**Stretch:** Zweite kleine Sektion mit `<section>` und eigener `<h2>` bauen.

---

## Aufgabe 3 – CSS: Farben und Ecken

**Ziel:** Das Design schnell verändern, ohne alles einzeln anzupassen.

**Dateien:** `css/styles.css` ganz oben bei `:root { … }`

**Was du tun kannst**

1. `--color-primary` auf eine andere Farbe setzen (z. B. ein Kräftiges Grün oder Blau als Hex `#16a34a`).
2. `--radius` vergrößern oder verkleinern und beobachten, wie „rund“ die Karten werden.

**Stretch:** Eine neue Variable `--color-highlight` anlegen und irgendwo mit `var(--color-highlight)` verwenden.

---

## Aufgabe 4 – CSS: Eigene Klasse

**Ziel:** Ein Element besonders hervorheben.

**Dateien:** `index.html`, `css/styles.css`

**Was du tun kannst**

1. In `styles.css` eine neue Klasse definieren, z. B. `.highlight-box { … }` mit Hintergrundfarbe, Innenabstand (`border` oder `padding`).
2. In `index.html` diese Klasse mit `class="highlight-box"` (zusätzlich zu `card`, falls nötig) an ein Element hängen.

**Tipp:** Eine Klasse beginnt in CSS immer mit einem Punkt: `.mein-name`.

**Stretch:** `:hover` für deine Klasse – leichte Vergrößerung oder Schatten bei Maus drüber.

---

## Aufgabe 5 – JavaScript: Klick verändert Text

**Ziel:** Beim Klick auf **Aktion** soll ein **eigener Text** in `#js-message` erscheinen.

**Dateien:** `js/main.js` (im `addEventListener` von `#action-btn`)

**Was du tun kannst**

1. Statt des fest eingebauten Satzes `jsMessage.textContent = "…"` deinen Text setzen.
2. Optional: Zweite Zeile mit `jsMessage.textContent += …` oder einen komplett neuen String bauen.

**Tipp:** `textContent` ist sicherer als `innerHTML`, wenn du nur reinen Text brauchst.

**Stretch:** Nach ein paar Klicks wechselt der Text (z. B. mit `if` / `else` und einer Variable „wie oft geklickt“).

---

## Aufgabe 6 – JavaScript: Zähler sichtbar machen und nutzen

**Ziel:** Den **Zähler-Button** nutzen – Zahl soll bei jedem Klick steigen.

**Dateien:** `index.html`, `js/main.js`

**Was du tun kannst**

1. In `index.html` bei `#counter-btn` und `#counter-display` das Attribut `hidden` entfernen, damit Button und Anzeige sichtbar sind.
2. In `main.js` ist schon `let count = 0` und ein Listener – du kannst z. B. den Startwert ändern oder bei Klick um `2` erhöhen statt um `1`.
3. Optional: **Reset** – zweiter Button, der `count` auf `0` setzt.

**Tipp:** `hidden` ist ein HTML-Attribut ohne Wert: einfach das Wort `hidden` aus dem Tag löschen.

---

## Aufgabe 7 – API: Pokémon anzeigen (schwer, aber cool)

**Ziel:** Beim Klick auf **Pokémon laden** echte Daten von **PokéAPI** holen und **Name + Bild** anzeigen.

**Dateien:** `js/main.js` (Listener von `#pokemon-btn`)

**API:** [PokéAPI](https://pokeapi.co/) – kein API-Key nötig.

**Beispiel-URL:** `https://pokeapi.co/api/v2/pokemon/pikachu`  
(Du kannst `pikachu` durch einen anderen Namen oder eine Zahl ersetzen, z. B. `25`.)

**Schritte (in eigenen Worten ausprobieren)**

1. `fetch(url)` aufrufen und die Antwort mit `await` abwarten (die Funktion ist schon `async`).
2. Prüfen, ob `res.ok` – wenn nicht, Fehlermeldung in `#api-output` schreiben.
3. `const data = await res.json()` – dann `data.name` und für das Bild z. B. `data.sprites.front_default` nutzen.
4. In `#api-output` HTML einfügen: z. B. `<p>…</p>` und `<img src="…" alt="…">`.

**Tipp:** `alt` beim `<img>` soll den Pokémon-Namen enthalten – gut für Barrierefreiheit.

**Wichtig:** Die Seite am besten über einen **lokalen Server** öffnen (siehe README), nicht als `file://`, damit `fetch` zuverlässig funktioniert.

**Alternativ-APIs (wenn du mehr testen willst)**

- Zufällige Hunde-Bilder: [Dog CEO](https://dog.ceo/dog-api/)
- Studio Ghibli: [Ghibli API](https://ghibliapi.vercel.app/)
- Wetter: [Open-Meteo](https://open-meteo.com/) (andere URL-Struktur, etwas mehr Lesen nötig)

**Stretch:** Ein `<input>` für den Pokémon-Namen; URL zusammensetzen und neu fetchen.

---

Viel Erfolg – bei Fragen helfen eure Mentorinnen und Mentoren.