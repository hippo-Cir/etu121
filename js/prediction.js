ajaxRequest('GET', 'php/request.php/liste', afficheListe);

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
        <td><button type="button" onClick="trouver_cluster('${elem.longitude}', '${elem.latitude}', ${parseInt(elem.descr_cat_veh)}, ${parseInt(elem.descr_agglo)}, ${parseInt(elem.descr_lum)}, ${parseInt(elem.descr_athmo)}, ${parseInt(elem.descr_etat_surf)}, ${parseInt(elem.descr_type_col)}, ${parseInt(elem.descr_dispo_secu)}, 'MLP')">Trouver</button></td>        `;
  
      tableau.appendChild(ligne);
    });
}
//exemple d'url :http://etu115.projets.isen-ouest.fr/cgi/test.py?longitude=41&latitude=15
function trouver_cluster(longitude, latitude, descr_cat_veh, descr_agglo, descr_lum, descr_athmo, descr_etat_surf, descr_type_col, descr_dispo_secu, method) {
  console.log('longitude:', longitude);
  console.log('latitude:', latitude);
  console.log('descr_cat_veh:', descr_cat_veh);
  console.log('descr_agglo:', descr_agglo);
  console.log('descr_lum:', descr_lum);
  console.log('descr_athmo:', descr_athmo);
  console.log('descr_etat_surf:', descr_etat_surf);
  console.log('descr_type_col:', descr_type_col);
  console.log('descr_dispo_secu:', descr_dispo_secu);
  console.log('method:', method);
  

    fetch('/cgi/test.py?descr_cat_veh=' + descr_cat_veh + '&descr_agglo=' + descr_agglo+'&descr_lum='+descr_lum+'&descr_athmo='+descr_athmo+'&descr_etat_surf='+descr_etat_surf+'&descr_type_col='+descr_type_col+'&latitude='+latitude+'&longitude='+longitude+'&descr_dispo_secu='+descr_dispo_secu+'&method='+method)
      .then(response => response.text())
      .then(result => {
        document.getElementById('prediction').innerText = result;
      });
  
  }
