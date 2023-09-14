<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require "./../.env";

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri = explode('/', $uri);

// Forbinder til database
$servername = "localhost";
$username = "root";
$password = getenv("PASSWORD");

try{
    $conn = new PDO("mysql:host=$servername;dbname=mul", $username, $password);

    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $requestMethod = $_SERVER["REQUEST_METHOD"];

    if ($uri[1] == 'pip'){
        if ($requestMethod == "GET") {
            $statement = $conn->query("select * from pipper");
            $result = $statement->fetchAll(\PDO::FETCH_ASSOC);
            echo json_encode($result);
        } else {
            $input = (array) json_decode(file_get_contents('php://input'), TRUE);
        }
    }
} catch(PDOException $e){
    echo " Connection failed: " . $e->getMessage();
}

?>