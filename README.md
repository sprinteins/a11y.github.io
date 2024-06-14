nicht kleiner als 14

- schemantisch wichtiger als das Design
- Größe wichtig
- zoom funktion sollte richtig funktionieren
- manche sind h1 statt h3 oder so, für den screen reader
-

# a11y fächer

- web app um die Themen zu pflegen
- 3 mal im jahr flyer produzieren
- qr code wäre cooler
- figma prototyp einfach online stellen?
- Thema noch nicht in Stein gemeißelt
- da ändert sich was oder hier und das kann man dann schnell anpassen

# Anforderungen

- mobile first
- ist für meetups gedacht
- typo3 seite zum vorschlaten zum kontaktdaten sammeln
- vor. nachname + email, mit bestätigung für einen link zu dem Fächer - "lead magneten"
- hier das figma https://www.figma.com/design/Yv31YqSHnnJzenjiy2xqUB/A11Y?node-id=450-1915&t=uUwdQrtU5Ud4LCzs-0
- wenn es erst in einem halben Jahr kommt brauch ich es nicht mehr

# Möglichkeiten:

1. figma umwandeln lassen und hosten, wie sieht das aus, klappt das?
2. eigene webapp
3. seiten in typo?

# Styleguide

## Formatierungen an hand vom Flyer

H1
Helvetica Neue LT Pro 
Light
49pt / ZAB 49pt

H2
Helvetica Neue LT Pro 
Light
30pt / ZAB 34pt

Subline
Soin Sans Pro 
Headline
20pt / ZAB 22pt

Copy
Helvetica Neue LT Pro 
Light
20pt / ZAB 24pt

## Notes

- pagination?
  - swiping?
  - burger menu
  - pfeil links/rechts
  - Seite von X / 22 Auswahl
-

# Navigation

## Möglichkeiten

- back/forward
  - Am einfachsten da man die bisherige Struktur beibehalten kann und classnames nicht im Nachhinein prefixen muss
- alles auf einer Seite
  - iframes untereinander?
    - kompliziert wegen der höhe der iframes
  - alles htmls zu einem html machen
    - kompliziert die alle zusammenzufassen da css klassen namen sich wiederholen
    - Das ist gescheitert an den Aufwänden die css classnames so zu prefixen das alles passt
      - Diverse stylings sind nicht darauf ausgelegt dass sie in einer großen Page angezeigt werden
  -

## Wahl

- back/forward buttons

Das hier wird die gewählte Lösung sein da es die bisherige Struktur beibehält und einfacher zu lösen ist

## Project Structure

TODO:
category/
├── meta.json
├── section/
│ ├── meta.json
│ ├── article/
│ │ ├── content.md
│ │ ├── meta.jso
