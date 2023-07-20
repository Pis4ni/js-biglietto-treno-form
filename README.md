# js-biglietto-treno-form
biglietto treno ex. by: Pisani Fabio.
## Traccia

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare 
il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km).
- va applicato uno sconto del 20% per i minorenni.
- va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo),

Questo richiederà un minimo di ricerca.

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
