ajaxRequest('GET', 'php/request.php/liste', afficheListe);


function afficheListe(data) {
  var tableau = document.createElement('table');
  var enTete = document.createElement('tr');

  // Créer l'en-tête de colonne
  var enteteDate = document.createElement('th');
  enteteDate.textContent = 'date';
  enTete.appendChild(enteteDate);

  var enteteGrav = document.createElement('th');
  enteteGrav.textContent = 'descr_grav';
  enTete.appendChild(enteteGrav);

  var enteteAge = document.createElement('th');
  enteteAge.textContent = 'age';
  enTete.appendChild(enteteAge);

  tableau.appendChild(enTete);

  // Ajouter les données dans le tableau
  data.forEach(elem => {
    var ligne = document.createElement('tr');

    var celluleDate = document.createElement('td');
    celluleDate.textContent = elem.date;
    ligne.appendChild(celluleDate);

    var celluleGrav = document.createElement('td');
    celluleGrav.textContent = elem.descr_grav;
    ligne.appendChild(celluleGrav);

    var celluleAge = document.createElement('td');
    celluleAge.textContent = elem.age;
    ligne.appendChild(celluleAge);

    tableau.appendChild(ligne);
  });

  // Afficher le tableau
  var affiche = document.getElementById('affiche');
  affiche.innerHTML = ''; // Vider le contenu précédent
  affiche.appendChild(tableau);
}
