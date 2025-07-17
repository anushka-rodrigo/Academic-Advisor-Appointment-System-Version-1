<?php
$host = "localhost";
$user = "root";
$password = "123";
$dbname = "academic_advisory_appointment";

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    echo json_encode([]);
    exit();
}

?>
