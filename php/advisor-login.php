<?php
header('Content-Type: application/json');
include 'db_connect.php';

$data = json_decode(file_get_contents("php://input"), true);

$email = $data['email'];
$password = $data['password'];

if (empty($email) || empty($password)) {
    echo json_encode(["success" => false, "error" => "Email and password required"]);
    exit();
}

$sql = "SELECT * FROM advisor2 WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();

$result = $stmt->get_result();

if ($row = $result->fetch_assoc()) {
    if (password_verify($password, $row['password'])) {
        echo json_encode(["success" => true, "advisor_id" => $row['advisor_id']]);
    } else {
        echo json_encode(["success" => false, "error" => "Invalid password"]);
    }
} else {
    echo json_encode(["success" => false, "error" => "No account found with that email"]);
}

$stmt->close();
$conn->close();
