<?php
header("Content-Type: application/json");
include 'db_connect.php';

$data = json_decode(file_get_contents("php://input"), true);

$first_name = $data['firstname'];
$last_name = $data['lastname'];
$subject = $data["subject"];
$email = $data['email'];
$password = $data['password'];

if (empty($first_name) || empty($last_name) || empty($subject) || empty($email) || empty($password)) {
    echo json_encode(["success" => false, "error" => "All fields are required"]);
    exit();
}

// Check if email already exists
$check = $conn->prepare("SELECT advisor_id FROM advisor2 WHERE email = ?");
$check->bind_param("s", $email);
$check->execute();
$check->store_result();

if ($check->num_rows > 0) {
    echo json_encode(["success" => false, "error" => "Email already registered"]);
    exit();
}
$check->close();

$sql = "INSERT INTO advisor2 (firstName, lastName, Subject, email, password) VALUES (?, ?, ?, ?, ?)";
$password = password_hash($password, PASSWORD_BCRYPT);
$stmt = $conn->prepare($sql);
$stmt->bind_param("sssss", $first_name, $last_name, $subject, $email, $password);

if ($stmt->execute()) {
    echo json_encode(["success" => true, "message" => "Account created successfully"]);
} else {
    echo json_encode(["success" => false, "error" => "Error creating account!"]);
}
$stmt->close();
$conn->close();

?>