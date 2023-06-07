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
        `;
  
      tableau.appendChild(ligne);
    });
}