ajaxRequest('GET', 'php/request.php/liste', afficheListe);


function afficheListe(data) {
  var tableau = document.createElement('table');
  var enTete = document.createElement('tr');

  // Créer l'en-tête de colonne
  var enteteNumAcc = document.createElement('th');
  enteteNumAcc.textContent = 'Num_Acc';
  enTete.appendChild(enteteNumAcc);

  var enteteNumVeh = document.createElement('th');
  enteteNumVeh.textContent = 'num_veh';
  enTete.appendChild(enteteNumVeh);

  var enteteIdUsa = document.createElement('th');
  enteteIdUsa.textContent = 'id_usa';
  enTete.appendChild(enteteIdUsa);

  var enteteDate = document.createElement('th');
  enteteDate.textContent = 'date';
  enTete.appendChild(enteteDate);

  var enteteVille = document.createElement('th');
  enteteVille.textContent = 'ville';
  enTete.appendChild(enteteVille);

  var enteteIdCodeInsee = document.createElement('th');
  enteteIdCodeInsee.textContent = 'id_code_insee';
  enTete.appendChild(enteteIdCodeInsee);

  var enteteLatitude = document.createElement('th');
  enteteLatitude.textContent = 'latitude';
  enTete.appendChild(enteteLatitude);

  var enteteLongitude = document.createElement('th');
  enteteLongitude.textContent = 'longitude';
  enTete.appendChild(enteteLongitude);

  var enteteDescrCatVeh = document.createElement('th');
  enteteDescrCatVeh.textContent = 'descr_cat_veh';
  enTete.appendChild(enteteDescrCatVeh);

  var enteteDescrAgglo = document.createElement('th');
  enteteDescrAgglo.textContent = 'descr_agglo';
  enTete.appendChild(enteteDescrAgglo);

  var enteteDescrAthmo = document.createElement('th');
  enteteDescrAthmo.textContent = 'descr_athmo';
  enTete.appendChild(enteteDescrAthmo);

  var enteteDescrLum = document.createElement('th');
  enteteDescrLum.textContent = 'descr_lum';
  enTete.appendChild(enteteDescrLum);

  var enteteDescrEtatSurf = document.createElement('th');
  enteteDescrEtatSurf.textContent = 'descr_etat_surf';
  enTete.appendChild(enteteDescrEtatSurf);

  var enteteDescrIntersection = document.createElement('th');
  enteteDescrIntersection.textContent = 'description_intersection';
  enTete.appendChild(enteteDescrIntersection);

  var enteteAnNais = document.createElement('th');
  enteteAnNais.textContent = 'an_nais';
  enTete.appendChild(enteteAnNais);

  var enteteAge = document.createElement('th');
  enteteAge.textContent = 'age';
  enTete.appendChild(enteteAge);

  var entetePlace = document.createElement('th');
  entetePlace.textContent = 'place';
  enTete.appendChild(entetePlace);

  var enteteDescrDispoSecu = document.createElement('th');
  enteteDescrDispoSecu.textContent = 'descr_dispo_secu';
  enTete.appendChild(enteteDescrDispoSecu);

  var enteteDescrGrav = document.createElement('th');
  enteteDescrGrav.textContent = 'descr_grav';
  enTete.appendChild(enteteDescrGrav);

  var enteteDescrMotifTraj = document.createElement('th');
  enteteDescrMotifTraj.textContent = 'descr_motif_traj';
  enTete.appendChild(enteteDescrMotifTraj);

  var enteteDescrTypeCol = document.createElement('th');
  enteteDescrTypeCol.textContent = 'descr_type_col';
  enTete.appendChild(enteteDescrTypeCol);

  tableau.appendChild(enTete);

  // Ajouter les données dans le tableau
  data.forEach(elem => {
    var ligne = document.createElement('tr');

    var celluleNumAcc = document.createElement('td');
    celluleNumAcc.textContent = elem.Num_Acc;
    ligne.appendChild(celluleNumAcc);

    var celluleNumVeh = document.createElement('td');
    celluleNumVeh.textContent = elem.num_veh;
    ligne.appendChild(celluleNumVeh);

    var celluleIdUsa = document.createElement('td');
    celluleIdUsa.textContent = elem.id_usa;
    ligne.appendChild(celluleIdUsa);

    var celluleDate = document.createElement('td');
    celluleDate.textContent = elem.date;
    ligne.appendChild(celluleDate);

    var celluleVille = document.createElement('td');
    celluleVille.textContent = elem.ville;
    ligne.appendChild(celluleVille);

    var celluleIdCodeInsee = document.createElement('td');
    celluleIdCodeInsee.textContent = elem.id_code_insee;
    ligne.appendChild(celluleIdCodeInsee);

    var celluleLatitude = document.createElement('td');
    celluleLatitude.textContent = elem.latitude;
    ligne.appendChild(celluleLatitude);

    var celluleLongitude = document.createElement('td');
    celluleLongitude.textContent = elem.longitude;
    ligne.appendChild(celluleLongitude);

    var celluleDescrCatVeh = document.createElement('td');
    celluleDescrCatVeh.textContent = elem.descr_cat_veh;
    ligne.appendChild(celluleDescrCatVeh);

    var celluleDescrAgglo = document.createElement('td');
    celluleDescrAgglo.textContent = elem.descr_agglo;
    ligne.appendChild(celluleDescrAgglo);

    var celluleDescrAthmo = document.createElement('td');
    celluleDescrAthmo.textContent = elem.descr_athmo;
    ligne.appendChild(celluleDescrAthmo);

    var celluleDescrLum = document.createElement('td');
    celluleDescrLum.textContent = elem.descr_lum;
    ligne.appendChild(celluleDescrLum);

    var celluleDescrEtatSurf = document.createElement('td');
    celluleDescrEtatSurf.textContent = elem.descr_etat_surf;
    ligne.appendChild(celluleDescrEtatSurf);

    var celluleDescrIntersection = document.createElement('td');
    celluleDescrIntersection.textContent = elem.description_intersection;
    ligne.appendChild(celluleDescrIntersection);

    var celluleAnNais = document.createElement('td');
    celluleAnNais.textContent = elem.an_nais;
    ligne.appendChild(celluleAnNais);

    var celluleAge = document.createElement('td');
    celluleAge.textContent = elem.age;
    ligne.appendChild(celluleAge);

    var cellulePlace = document.createElement('td');
    cellulePlace.textContent = elem.place;
    ligne.appendChild(cellulePlace);

    var celluleDescrDispoSecu = document.createElement('td');
    celluleDescrDispoSecu.textContent = elem.descr_dispo_secu;
    ligne.appendChild(celluleDescrDispoSecu);

    var celluleDescrGrav = document.createElement('td');
    celluleDescrGrav.textContent = elem.descr_grav;
    ligne.appendChild(celluleDescrGrav);

    var celluleDescrMotifTraj = document.createElement('td');
    celluleDescrMotifTraj.textContent = elem.descr_motif_traj;
    ligne.appendChild(celluleDescrMotifTraj);

    var celluleDescrTypeCol = document.createElement('td');
    celluleDescrTypeCol.textContent = elem.descr_type_col;
    ligne.appendChild(celluleDescrTypeCol);

    tableau.appendChild(ligne);
  });

  // Afficher le tableau
  var affiche = document.getElementById('affiche');
  affiche.innerHTML = ''; // Vider le contenu précédent
  affiche.appendChild(tableau);
}

