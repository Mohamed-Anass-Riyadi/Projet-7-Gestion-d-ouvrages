
    <script>
        <script src="ouvrages.js"></script>
        <script src="gestionOuvrages.js"></script>
    </script>

    var gestionOuvrage = new GestionOuvrage();
    console.log("Avent:" + gestionOuvrage.ouvrageList)

    // afficher un ouvrage
    var ouvrage = new Ouvrage();
    ouvrage.titre = "Mon titre";
    gestionOuvrage.addOuvrage(ouvrage)
   console.log(gestionOuvrage.ouvrageList)

