<?php
include 'db-connect.php';

class dataFunctions{
    
    public function findAll()
    {
        $dbClass = new dbConnect();
        $dbConnect = $dbClass->dbConnect();
        $data = [];

        $stmt = $dbConnect->prepare("SELECT * FROM `users` ORDER BY `id` ASC");
        if ($stmt->execute()) {
            $data = $stmt->fetchAll();
        }
        return $data;
    
    }
}

?>