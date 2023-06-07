<?php
require_once('database.php');

// Database connexion.
$db = dbConnect();
if (!$db) {
  header('HTTP/1.1 503 Service Unavailable');
  exit;
}

// Check the request.
$requestMethod = $_SERVER['REQUEST_METHOD'];
//les get ?url
$request = substr($_SERVER['PATH_INFO'], 1);
$request = explode('/', $request);
$requestRessource = array_shift($request);

if ($requestMethod == 'GET' && $requestRessource == 'liste') {
  
  $request = "SELECT * FROM accidents $whereClause LIMIT 20";
  $statement = $db->prepare($request);
  $statement->execute();
  $result = $statement->fetchAll(PDO::FETCH_ASSOC);
  $data = $result;
}

if ($requestMethod == 'POST' && $requestRessource == 'filtre') {
  $mois = $_POST['mois'];
  $descr_grav = $_POST['descr_grav'];
  $age = $_POST['age'];

  // Effectuer la requête en fonction des critères de filtrage
  $request = 'SELECT * FROM accidents WHERE 1=1';

  if (!empty($mois)) {
    $request .= " AND MONTH(`date`) = '$mois'";
  }

  if (!empty($descr_grav)) {
    $request .= " AND descr_grav = '$descr_grav'";
  }

  if (!empty($age)) {
    if ($age === '0-20') {
      $request .= " AND age >= 0 AND age <= 20";
    } elseif ($age === '20-40') {
      $request .= " AND age > 20 AND age <= 40";
    } elseif ($age === '40-60') {
      $request .= " AND age > 40 AND age <= 60";
    } elseif ($age === '60-80') {
      $request .= " AND age > 60 AND age <= 80";
    } elseif ($age === '80-90') {
      $request .= " AND age > 80 AND age <= 90";
    }
  }

  $request .= " LIMIT 20";
  $statement = $db->prepare($request);
  $statement->execute();
  $result = $statement->fetchAll(PDO::FETCH_ASSOC);
  $data = $result;
}
if ($requestMethod == 'GET' && $requestRessource == 'prediction') {
  
  $request = "SELECT *, c.ia_cat,  c.ia_cat,  agg.ia_agglo,  l.ia_lum,  m.ia_athmo,  r.ia_route,  col.ia_col, secu.ia_secu,ville.longitude as longitude,ville.latitude as latitude
  FROM accidents a
  LEFT JOIN cat_vehicule c ON a.descr_cat_veh = c.descr_cat_veh
  LEFT JOIN agglomeration agg ON a.descr_agglo = agg.descr_agglo
  LEFT JOIN luminosite l ON a.descr_lum = l.descr_lum
  LEFT JOIN meteo m ON a.descr_athmo = m.descr_athmo
  LEFT JOIN etat_route r ON a.descr_etat_surf = r.descr_etat_surf
  LEFT JOIN type_collision col ON a.descr_type_col = col.descr_type_col
  LEFT JOIN ceinture secu ON a.descr_dispo_secu = secu.descr_dispo_secu
  LEFT JOIN ville ON a.id_code_insee = ville.id_code_insee";
  $statement = $db->prepare($request);  $statement = $db->prepare($request);
$statement->execute();
$result = $statement->fetchAll(PDO::FETCH_ASSOC);
$data = $result;
}

// Send data to the client.
header('Content-Type: application/json; charset=utf-8');
header('Cache-control: no-store, no-cache, must-revalidate');
header('Pragma: no-cache');
header('HTTP/1.1 200 OK');
echo json_encode($data);
exit;
?>