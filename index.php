<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require ".env";


$password = getenv ("PASSWORD");

$servername = "localhost";
$username = "root";
$password = getenv("PASSWORD");

try{
    $conn = new PDO("mysql:host=$servername;dbname=mul", $username, $password);

    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e){
    echo " Connection failed: " . $e->getMessage();
}

$statement = $conn->query("select * from pipper");
$result = $statement->fetchAll(\PDO::FETCH_ASSOC);

echo json_encode($result);
?>