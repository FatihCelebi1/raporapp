<?php
class dbConnect
{
    private $server = 'localhost';
    private $username = 'root';
    private $password = '';
    private $db = 'raporapp';
    private $conn;
 
    public function __construct()
    {   
        try {
            $this->conn = new PDO("mysql:host=$this->server;dbname=$this->db", $this->username, $this->password);
        } catch (PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
            
        }
    }

    public function dbConnect()
    {
       $dbData =   $this->conn;
       return  $dbData;    

    
    }
}

?>
