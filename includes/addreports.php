<?php 
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
        header('Access-Control-Allow-Headers: token, Content-Type');
          
        $name = $_POST['name'];
        $odeme = $_POST['cash'];
        $hesap = $_POST['account'];
        $tarih = $_POST['date'];
 
        include 'dataFunctions.php';
 
        $model = new dataFunctions();
 
        if ($model->addReports($name, $odeme, $hesap, $tarih)) {
            $data = array('res' => 'success');
        }else{
            $data = array('res' => 'error');
        }
        echo json_encode($data);
    ?>