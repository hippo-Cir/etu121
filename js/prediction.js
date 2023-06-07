ajaxRequest('GET', 'php/request.php/prediction', afficheListe);

function afficheListe(data) {
  var tableau = document.querySelector('#affiche table');

  data.forEach(elem => {
    var ligne = document.createElement('tr');
    ligne.innerHTML = `
      <td>${elem.id_accident}</td>
      <td>${elem.date_heure}</td>
      <td>${elem.descr_athmo}</td>
      <td>${elem.descr_agglo}</td>
      <td>${elem.descr_lum}</td>
      <td>${elem.descr_dispo_secu}</td>
      <td>${elem.descr_etat_surf}</td>
      <td>${elem.descr_type_col}</td>
      <td>${elem.descr_cat_veh}</td>
      <td>
        <input type="radio" name="accident_radio" value="${elem.id_accident},${elem.ia_cat},${elem.ia_agglo},${elem.ia_lum},${elem.ia_athmo},${elem.ia_route},${elem.ia_col},${elem.ia_secu},${elem.longitude},${elem.latitude}">
      </td>`;
    tableau.appendChild(ligne);
  });

  var bouton = document.createElement('button');
  bouton.innerText = "Prédire la gravité";
  bouton.addEventListener('click', function() {
    var selectedRadio = document.querySelector('input[name="accident_radio"]:checked');
    if (selectedRadio) {
      var accidentData = selectedRadio.value.split(',');
      prédire_la_gravité(accidentData);
    } else {
      alert("Veuillez sélectionner un accident.");
    }
  });
  tableau.parentElement.appendChild(bouton);
}

function prédire_la_gravité(accidentData) {
  var longitude = accidentData[8];
  var latitude = accidentData[9];
  var descr_cat_veh = accidentData[1];
  var descr_agglo = accidentData[2];
  var descr_lum = accidentData[3];
  var descr_athmo = accidentData[4];
  var descr_etat_surf = accidentData[5];
  var descr_type_col = accidentData[6];
  var descr_dispo_secu = accidentData[7];

  fetch('/cgi/prediction.py?descr_cat_veh=' + descr_cat_veh + '&descr_agglo=' + descr_agglo+'&descr_lum='+descr_lum+'&descr_athmo='+descr_athmo+'&descr_etat_surf='+descr_etat_surf+'&descr_type_col='+descr_type_col+'&latitude='+latitude+'&longitude='+longitude+'&descr_dispo_secu='+descr_dispo_secu)
    .then(response => response.text())
    .then(result => {
      console.log(result);
      var id_accident = accidentData[0];
      var url = "result.html?id_accident=" + encodeURIComponent(id_accident) + "&resultat=" + encodeURIComponent(result);
      window.open(url, "_blank");
    });
}
