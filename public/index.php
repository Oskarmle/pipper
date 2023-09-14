<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Vi henter .env fil som indeholder password til vores DB
require "./../.env";

// Vi deler vores URL op så vi kan finde /pip
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
            // Vi bruger et select statement og henter alle vores rækker fra DB ind
            $statement = $conn->query("select * from pipper");
            $result = $statement->fetchAll(\PDO::FETCH_ASSOC);
            echo json_encode($result);
        } else if ($requestMethod == "POST") {
            $input = (array) json_decode(file_get_contents('php://input'), TRUE);

            // Vi får vores input ind i et array
            $data = [
                'username' => $input['username'],
                'text_area' => $input['text_area'],
                'img_base64' => $input['img_base64'],
            ];
            // Vi kører et SQL statement og indsætter vores array i vores DB
             $sql = 'INSERT INTO pipper VALUES(default, :username, :text_area, now(), null, :img_base64)';
             $statement = $conn->prepare($sql);
             $statement->execute($data);

             $id = $conn->lastInsertId();
             $pip = (object) $input;
             $pip->pipperId = $id;

             echo json_encode($pip);
        }
    }
} catch(PDOException $e){
    echo " Connection failed: " . $e->getMessage();
}

?>