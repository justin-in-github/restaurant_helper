# LunchFinder

## Aufgabe
Um die tägliche Entscheidung, wo es zum Mittagessen hingeht, zu erleichtern, soll
ein Zufallsgenerator entwickelt werden, der aus einer Liste von möglichen Zielen
anhand von angegebenen Kriterien wie Preis und Entfernung die passenden Ziele
anzeigt. 

Es dürfen mehrere Kategorien gleichzeitig ausgewählt werden
Alles beinhaltet sämtliche anderen Kategorien
Randomize-Button
Guckt aufgrund der vorhandenen / angeklickten Filter in der Liste nach geeigneten
Essensplätzen und gibt diese in zufälliger Sortierung aus.
Reset-Button
Stellt die Filterwerte auf den Initialzustand zurück und leert die Liste.
Filter Entfernung, Preis, Veggietauglich
Berücksichtigt die Sterne der Restaurants in der entsprechenden Kategorie. Bsp.
Preis: „egal“ – max. 3 Sterne, „nicht zu viel“ – max. 2 Sterne, „Ende des Monats“ –
max. 1 Stern.

## Vorgehensweise
Nach gründlichem Lesen der Aufgabenstellung habe ich mir einen groben Ablaufplan erstellt:

1. Datenstruktur: Da es sich um ein sehr überschaubares Projekt handelt, werden lediglich eine HTML, CSS und JS-Datei benötigt.

2. Erstellung des HTML-Skelettes der Anwendung: Hierbei bereits sinnvolle Klassen für das spätere Styling deklarieren.

3. Erstellung des Skripts: Dden Code möglichst gut lesbar schreiben, indem Variablen und Funktionen entsprechend ihrer Aufgabe deklariert werden. Außerdem das Ziel, mehrere kleine statt wenige große Funktionen zu schreiben.

4. Styling der Anwendung: Erstellung einiger Variablen im Vorfeld. Dann Styling der Hauptelemente. Im Anschluss Feinschliff, z.B. Responsiveness/mobile, evtl. Verwendung von Symbolen/Icons für die Kritieren Preis, Entfernung, Vegantauglichkeit. Ziel: Die gefilterten Elemente sollen mit Bildern groß und deutlich dargestellt werden.

## Erkenntnisse / Gedankengänge
Insgesamt kam ich mit der Aufgabe gut zurecht und hatte Spaß dabei.
Für das Ergebnis habe ich die maximale Zeit von 6 Stunden genutzt. An einigen Stellen hätte ich Zeit sparen können, indem ich nicht die für mich beste Lösung wähle, sondern die offensichtlichste.

Grundsätzlich habe ich bereits einige ähnliche Anwendungen geschrieben, jedoch nie mit mehreren Filterkriterien. Daher habe ich anfangs viel Zeit damit verbracht, wie ich die Funktion schreiben muss. Außerdem habe ich überlegt, ob ich die Restaurants in index.html hard code und per Klasse ausblende/einblende oder die Restaurants dynamisch erstelle. Ich habe mich für letzteres entschieden, da neue Restaurants so ohne zusätzlichen Aufwand eingefügt werden können.

Für die Restaurants habe ich einfachheitshalber ein Array mit Objekten erstellt. In der Regel verwende ich für solche Übungen eine Datenbank wie z.B. firebase. Da dieses Array ziemlich lang ist, und das Skript etwas unübersichtlicher macht, hatte ich ursprünglich geplant es aus einer seeds-datei zu importieren.

Generell habe ich mich bemüht ES6-Features zu benutzen und den Code gut leserlich/verständlich zu schreiben.

## Wie ich weitermachen würde
Da ich die vorgegebene Zeit ausgereizt habe, ist dies mein Ergebnis. Hätte ich mehr Zeit, würde ich zunächst schauen, ob ich das Skript durch refactoring verkürzen kann und die Leserlichkeit des Skripts noch verbessern.

Auf jeden Fall würde ich noch einiges am Styling der Anwendung ändern, insbesondere würde ich sie responsive und mobile friendly machen.

Außerdem ist mir zum Schluss aufgefallen, dass die aktiven Button aktiv bleiben, auch wenn ein anderer seiner Sparte (z.B. Entfernung) geklickt wird. Zusätzlich sollten alle Kategorie-Button aktiv werden, wenn "ALLES" geklickt wird. Hierfür würde ich eine Funktion erstellen, die die "btnActive" Klasse mitHilfe von classList.toggle ändert.

Des Weiteren würde ich auf jeden Fall eine Datenbank einsetzen, anstatt des von mir verwendeten Arrays in der Skriptdatei.

## Changes

### Überarbeitung der Filter-Logik:
	-Array wird beim Wechsel der Auswahl (z.B. von Preis "Günstig" zu "Mittel") geleert, damit auch nur nach entsprechendem Wert gefiltert wird
	-Mittlere Kategorien (z.B. Entfernung "Mittel") beeinhaltet ebenfalls "kleinere" Kategorien (hier z.B. die kürzeste Entfernung)
### Überarbeitung des Stylings:
	-Anwendung ist jetzt mobile friendly (Basics), Responsiveness verbessert
	-Nach Wechsel der Auswahl wird der zuvor aktive Button abgewählt (der Button "Alles" aktiviert alle Kategorie-Button)
### Refactoring
	-Einige Funktionen wurden umbenannt und deren Funktion deutlicher zu machen
	




