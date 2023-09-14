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
        } else if ($requestMethod == "POST") {
            $input = (array) json_decode(file_get_contents('php://input'), TRUE);

            $data = [
                'username' => $input['username'],
                'text' => $input['text_area']
                'img' => $input['img_base64']
            ];

             $sql = 'INSERT INTO pipper VALUES(default, :username, :text_area, now(), null, null)';
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