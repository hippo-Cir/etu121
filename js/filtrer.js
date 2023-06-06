var filterForm = document.getElementById('filtreForm');
filterForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher la soumission du formulaire par défaut

    // Récupérer les valeurs des filtres
    var mois = document.querySelector('#mois').value;
    var descr_grav = document.querySelector('#descr_grav').value;
    var age = document.getElementById('age').value;

    // Construire les données à envoyer au serveur
    var data = "mois=" + mois + "&descr_grav=" + descr_grav + "&age=" + age;

    // Envoyer la requête AJAX
    ajaxRequest('POST', 'php/request.php/filtre', function(response) {
        // Mettre à jour la carte avec les nouveaux marqueurs
	    updateData(response);

        console.log(response);
    }, data);
});

function updateData(data) {
    afficheListe(data);
}
