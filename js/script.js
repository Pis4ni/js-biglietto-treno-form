/* immagazzino il costo/km */
const costKm = 0.21

/* immagazzino il valore della maggiore età */
const adult = 18

/* immagazzino il valore dell' età pensionabile */
const retairee = 65

/* immagazzino il valore dello sconto per minore età */
const discountMinor = 20

/* immagazzino il valore dello sconto per maggiore età */
const discountMajor = 40



/* ----------------------------------------------------------------------------------------------------------- */

let sendBtn = document.getElementById("send_btn")


sendBtn.addEventListener("click", function () {
    let userName = document.getElementById("nameBox").value
    /* chiedo all' utente quanti chilometri ha intenzione di percorrere */
    
	let userDistance = document.getElementById("user_distance").value // EX PROMPT MODIFIED

	if (userDistance === null || userDistance.trim() === "") {
		/* Se l'utente ha cliccato "Annulla" o ha lasciato vuoto il campo, esci dal ciclo*/
		/* INSERIRE MESS DI FEEDBACK SOSTITUTIVO AL MESS DI BUONA RIUSCITA */
		return
	}

	distanceNumber = parseFloat(userDistance)

	/* chiedo all' utente la sua età */

	let userAge = document.getElementById("user_age").value

	if (userAge === null || userAge.trim() === "") {
		/* Se l'utente ha cliccato "Annulla" o ha lasciato vuoto il campo, esci dal ciclo*/
		return
	}

	const ageNumber = parseInt(userAge)

	userAge = ageNumber

	/* calcolo il prezzo esclusivamente sulla base della distanza/prezzo */
	let initPrice = costKm * userDistance

	/* immagazzino il valore del prezzo parziale */
	let lastPrice = initPrice

	/* immagazzino il valore dello sconto da sottrarre al prezzo parziale */
	let discountValue = 0

	/* immagazzino il valore di quale sconto verrà applicato*/
	let whichDiscount = 0

	if (userAge < adult) {
		/* applico uno sconto del 20% sul prezzo totale del bilietto */
		discountValue = (initPrice * discountMinor) / 100
		lastPrice = initPrice - discountValue
		whichDiscount = discountMinor
		/* ALTRIMENTI SE l' età è compresa tra la maggiore e l' età pensionabile non applico nessuno sconto */
		/* ALTRIMENTI applico uno sconto pari al 40% */
	} else if (userAge > retairee) {
		discountValue = (initPrice * discountMajor) / 100
		lastPrice = initPrice - discountValue
		whichDiscount = discountMajor
	}

	/* fine. */

	/* mostro a schermo le varie operazioni */
/* 	document.getElementById("display").innerHTML =
		"il prezzo iniziale del tuo biglietto è " +
		initPrice +
		"€" +
		" al quale viene applicata la percentuale di sconto del " +
		whichDiscount +
		"%" +
		" il prezzo finale del tuo biglietto è " +
		lastPrice +
		"€" +
		" al quale è stato applicato uno sconto di: " +
		discountValue +
		"€" +
		" Goditi il tuo viaggio!"
 */
    let random = Math.floor(Math.random() * 100000);
    let randomsm = Math.floor(Math.random() * 10);
    
    document.getElementById("nameDisplay").innerHTML = userName
    document.getElementById("offerDisplay").innerHTML = whichDiscount
    
    document.getElementById("carriageDisplay").innerHTML = randomsm
    
    document.getElementById("CPDisplay").innerHTML = random

    document.getElementById("costDisplay").innerHTML = lastPrice

    
})
