<?php
 header('Access-Control-Allow-Origin: *'); 
include 'dataFunctions.php';

$model = new dataFunctions();
$rows = $model->findAll();
$data = array('rows' => $rows);
echo json_encode($data);

?>