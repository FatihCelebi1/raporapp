<?php 
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: POST, UPDATE, GET, DELETE, PUT, PATCH, OPTIONS');
        header('Access-Control-Allow-Headers: token, Content-Type');
         
        $id  = $_POST['id'];
    
        include 'dataFunctions.php';
 
        $model = new dataFunctions();
 
        if ($model->deletReports($id)) {
            $data = array('res' => 'success');
        }else{
            $data = array('res' => 'error');
        }
        echo json_encode($data);
    ?>