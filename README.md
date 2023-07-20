# js-biglietto-treno-form
biglietto treno ex. by: Pisani Fabio.
## Traccia

Scrivere un programma che chieda all'utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch'essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l'utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Nota:
Se non vi sentite particolarmente creativi, questa potrebbe essere un'implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.

## Procedimento
- immagazzino il costo/km
- immagazzino il valore della maggiore età
- immagazzino il valore dell' età pensionabile
- immagazzino il valore dello sconto per minore età
- immagazzino il valore dello sconto per età pensionabile
- chiedo all' utente quanti chilometri ha intenzione di percorrere
- chiedo all' utente la sua età
- calcolo il prezzo esclusivamente sulla base della distanza/prezzo
- immagazzino il valore del prezzo parziale
- immagazzino il valore dello sconto da sottrarre al prezzo parziale
- immagazzino il valore di quale sconto verrà applicato


    - **SE** l' età del richiedente è inferiore alla maggiore età
        - applico uno sconto del 20% sul prezzo totale del bilietto
    - **ALTRIMENTI** **SE** l' età è compresa tra la maggiore e l' età pensionabile 
        - non applico nessuno sconto
    - **ALTRIMENTI** 
        - applico uno sconto pari al 40%

- mostro a schermo il risultato delle varie operazioni

- fine.
