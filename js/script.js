
//! --------------------------------------------  ON LOAD  -------------------------------------------- //


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

/*  prendo il riferimento dal DOM del bottone */
let sendBtn = document.getElementById("send_btn")

//! --------------------------------------------  ON CLICK  -------------------------------------------- //

// * FORM //

sendBtn.addEventListener("click", function () {
    let userName = document.getElementById("nameBox").value
    /* chiedo all' utente quanti chilometri ha intenzione di percorrere */
    
	let userDistance = document.getElementById("user_distance").value // EX PROMPT MODIFIED
    
    //* CHECK //
	if (userDistance === null || userDistance.trim() === "") {
        /* Se l'utente ha cliccato "Annulla" o ha lasciato vuoto il campo, esci dal ciclo*/
        //! DANGER MESSAGE //
        document.getElementById("error_msg").className ="dispaly" 
		return
	}

	distanceNumber = parseFloat(userDistance)
    
	/* chiedo all' utente la sua età */
	let userAge = document.getElementById("user_age").value
    
    //* CHECK //
	if (userAge === null || userAge.trim() === "") {
        /* Se l'utente ha cliccato "Annulla" o ha lasciato vuoto il campo, esci dal ciclo*/
        //! DANGER MESSAGE //
        document.getElementById("error_msg").className ="dispaly"
		return
	}
    
	const ageNumber = parseInt(userAge)
    
	userAge = ageNumber
    
    //* PRICE CALCS //
	/* calcolo il prezzo esclusivamente sulla base della distanza/prezzo */
	let initPrice = costKm * userDistance

	/* immagazzino il valore del prezzo parziale */
	let lastPrice = initPrice

	/* immagazzino il valore dello sconto da sottrarre al prezzo parziale */
	let discountValue = 0

	/* immagazzino il valore di quale sconto verrà applicato*/
	let whichDiscount = 0
    
    //* PRICE DISCOUNT MINOR //
	if (userAge < adult) {
        /* applico uno sconto del 20% sul prezzo totale del bilietto */
		discountValue = (initPrice * discountMinor) / 100
		lastPrice = initPrice - discountValue
		whichDiscount = discountMinor
        //* PRICE DISCOUNT MINOR //
	} else if (userAge > retairee) {
		/* ALTRIMENTI applico uno sconto pari al 40% */
		discountValue = (initPrice * discountMajor) / 100
		lastPrice = initPrice - discountValue
		whichDiscount = discountMajor
	}

    let random = Math.floor(Math.random() * 100000);
    let randomsm = Math.floor(Math.random() * 10);
    
	/* fine. */
    //* MOSTRO A SCHERMO I RISULTATI //
    
    document.getElementById("nameDisplay").innerHTML = userName
    
    document.getElementById("offerDisplay").innerHTML = whichDiscount
    
    document.getElementById("carriageDisplay").innerHTML = randomsm
    
    document.getElementById("CPDisplay").innerHTML = random

    document.getElementById("costDisplay").innerHTML = lastPrice
    
    document.getElementById("train_tiket").className ="dispaly"
    
})
