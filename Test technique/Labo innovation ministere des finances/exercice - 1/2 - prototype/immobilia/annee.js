window.onload = async function () {

    const request = await fetch(
        "./data/cessions-immobilieres-de-letat-copie.geojson"
    )
        .then((response) => response.json())
        .then((response) => response.features)
        .catch((error) => alert("Error : " + error));
    const response = await request;

    x = 0;
    moin = 0;
    zero = 0;
    un = 0;
    deux = 0;
    trois = 0;
    quatre = 0;
    autre = 0;

    while (x < response.length) {
        // console.log(response[x].properties.annee_de_1ere_inscription);
        // console.log(response[x].properties.annee_cession);
        tempsdevente = response[x].properties.annee_cession - response[x].properties.annee_de_1ere_inscription;
        console.log(tempsdevente);
        if (tempsdevente < 0) {
            moin++;
        }
        else if (tempsdevente == 0) {
            zero++;
        } else if (tempsdevente == 1) {
            un++;
        } else if (tempsdevente == 2) {
            deux++;
        } else if (tempsdevente == 3) {
            trois++;
        } else if (tempsdevente == 4) {
            quatre++;
        } else if (tempsdevente > 4) {
            autre++;
        }
        x++;
    }
    console.log("le nombre de -0 = "+moin+" le nombre de 0 = " + zero + " le nombre de un = "+ un + "   le 2 : "+ deux + " le 3 : " + trois +" le 4 :" + quatre + " les autre "+ autre );
    console.log(zero/x*100+"% sont vendu la meme année");
    console.log(un/x*100+"% sont vendu aprés un ans");
    console.log(deux/x*100+"% sont vendu la deuxieme année");
    console.log(trois/x*100+"% sont vendu la troisiele année");
    console.log(quatre/x*100+"% sont vendu la quatrieme année");
    console.log(autre/x*100+"% sont vendu au dela de la 4 eme année");



}
