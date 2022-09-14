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

    public function findReports()
    {
        $dbClass = new dbConnect();
        $dbConnect = $dbClass->dbConnect();
        $data = [];

        $stmt = $dbConnect->prepare("SELECT * FROM `reports` ORDER BY `id` DESC");
        if ($stmt->execute()) {
            $data = $stmt->fetchAll();
        }
        return $data;
    
    }

    public function addReports($name, $odeme, $hesap, $tarih)
    {
        $dbClass = new dbConnect();
        $dbConnect = $dbClass->dbConnect();
        $stmt = $dbConnect->prepare("INSERT INTO `reports` (`name`, `cash`, `account`, `date`) VALUES ('$name', '$odeme', '$hesap', '$tarih')");
        if ($stmt->execute()) {
            return true;
        } else {
            return;
        }
    }
}

?>