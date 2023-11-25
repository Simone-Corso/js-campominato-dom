//creo delle variabile, prendendo il nome dall'html

    const mainContenutoEl = document.querySelector('main section.main-content');
    console.log(mainContenutoEl);
//variabile per il button :
    const nuovaPartitaEl = document.querySelector('button#button-inizia');
    console.log(nuovaPartitaEl);

//variabile per le difficoltà del gioco
    const difficoltàGioco = document.querySelector('select#difficoltà-gioco');
    console.log(difficoltàGioco);

//ora devo creare un evento per il click del button-inizia
    nuovaPartitaEl.addEventListener('click', function(){
            generateNewGame(mainContenutoEl , difficoltàGioco);
    });


    function generateNewGame(wrapperEl, selezionaLivello){
        wrapperEl.innerHTML = '';

        //creo una variabile per i punti
        let giocatorePunti = 0;
        let haiPerso = false;

        const livello = parseInt(selezionaLivello.value);
    }
    