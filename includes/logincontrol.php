<?php 
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
        header('Access-Control-Allow-Headers: token, Content-Type');
          
        $name = $_POST["name"];
        $pass = $_POST["password"];
 
        include 'dataFunctions.php';
 
        $model = new dataFunctions();
 
        if ($model->loginSuccess($name, $pass)) {
            $data = array(
                'res' => 'success',
                'accessUser' => $name,
                'token' => bin2hex(random_bytes(16))
            );
            
        }else{
            $data = array('res' => 'error');
        }
        echo json_encode($data);
    ?>