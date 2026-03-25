# Girls Day – Web-Workshop

Ein kleines, modernes **Web-Projekt ohne Build-Tools**: Du bearbeitest `index.html`, `css/styles.css` und `js/main.js` und siehst die Änderungen direkt im Browser. Die Übungen sind in **[TASKS.md](TASKS.md)** beschrieben – von einfachem HTML bis zu einem API-Aufruf (PokéAPI).

## Was du brauchst

- **Git** (zum Klonen und für eigene Branches)
- Ein **Editor** (z. B. [Visual Studio Code](https://code.visualstudio.com/))
- Einen **aktuellen Browser** (Firefox, Chrome, Edge, Safari)

## Repository klonen

Ersetze zuerst die Platzhalter-URL durch die **echte HTTPS-URL** eures Workshop-Repos (die Mentorin/der Mentor gibt sie euch).

```bash
git clone https://DEIN-SERVER/DEIN-ORG/DEIN-REPO.git
cd DEIN-REPO
```

*(Beispiel GitHub: `https://github.com/dein-org/girls-day-web.git`)*

## Webseite lokal anzeigen

### Variante A: Visual Studio Code + Live Server (empfohlen)

1. Ordner im VS Code öffnen.
2. Extension **„Live Server“** installieren (Ritwick Dey).
3. Rechtsklick auf `index.html` → **„Open with Live Server“**  
   Oder unten auf **„Go Live“** klicken.
4. Der Browser öffnet sich mit einer Adresse wie `http://127.0.0.1:5500`.

### Variante B: Python (meist schon installiert)

Im Projektordner im Terminal:

```bash
python3 -m http.server 8000
```

Dann im Browser öffnen: `http://localhost:8000`

Zum Beenden: im Terminal `Ctrl+C`.

### Änderungen sehen

- Datei **speichern** (`Ctrl+S` / `Cmd+S`).
- Browser **neu laden** (`F5` oder `Cmd+R`).  
  Mit Live Server passiert das oft **automatisch**.

Die Übungen mit **JavaScript `fetch`** (Aufgabe 7) funktionieren am zuverlässigsten über **http://localhost** oder Live Server – nicht über eine direkt geöffnete Datei (`file://…`).

## Mit Git arbeiten: eigener Branch

So arbeitet ihr **alle am gleichen Repo**, aber jede Person auf **einem eigenen Branch** – weniger Konflikte, klar eure Änderungen.

1. **Neuen Branch anlegen und wechseln** (Namen anpassen, z. B. Vorname):

   ```bash
   git switch -c vorname-nachname
   ```

   *(Ältere Git-Version: `git checkout -b vorname-nachname`)*

2. **Änderungen machen** in `index.html`, `css/styles.css`, `js/main.js` usw.

3. **Status prüfen:**

   ```bash
   git status
   ```

4. **Dateien zum Commit vormerken:**

   ```bash
   git add index.html css/styles.css js/main.js
   ```

   Oder alles auf einmal (vorsichtig in Teams mit vielen Dateien):

   ```bash
   git add -A
   ```

5. **Commit mit kurzer Nachricht:**

   ```bash
   git commit -m "Meine ersten Änderungen am Girls-Day-Web"
   ```

6. **Branch zum Server schicken (erstes Mal mit `-u`):**

   ```bash
   git push -u origin vorname-nachname
   ```

Danach reicht für weitere Commits oft:

```bash
git push
```

### Wenn `git push` abgelehnt wird

- Fragt eure **Mentorin/mentor**, ob ihr **Schreibrechte** auf dem Repository habt.
- Oder ob ihr stattdessen einen **Fork** anlegen und dorthin pushen sollt – dann klärt ihr die genaue URL und die Schritte mit dem Team.

## Nützliche Links

- Übungen: [TASKS.md](TASKS.md)
- PokéAPI-Doku: [https://pokeapi.co/](https://pokeapi.co/)

Viel Spaß beim Ausprobieren.
