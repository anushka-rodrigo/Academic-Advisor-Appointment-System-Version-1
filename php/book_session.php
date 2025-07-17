<?php
// book_session.php
header('Content-Type: application/json');

$data = json_decode(file_get_contents("php://input"), true);
$student_id = $data['student_id'] ?? null;
$advisor_id = $data['advisor_id'] ?? null;
if (empty($student_id) || empty($advisor_id)) {
    echo json_encode(["success" => false, "error" => "Student ID is required"]);
    exit();
}
$date = $data['date'];
$time = $data['time'];

include 'db_connect.php';

if ($conn->connect_error) {
    echo json_encode(["success" => false, "error" => "Connection failed"]);
    exit();
}

// Check if the advisor is available at the requested time
$stmt = $conn->prepare("SELECT COUNT(*) FROM appointment WHERE advisor_id = ? AND session_date = ? AND session_time = ?");
$stmt->bind_param("iss", $advisor_id, $date, $time);
$stmt->execute();
$stmt->bind_result($count);
$stmt->fetch();
$stmt->close();

if ($count > 0) {
    echo json_encode(["success" => false, "error" => "Advisor is not available at the requested time"]);
    exit();
}

$stmt = $conn->prepare("INSERT INTO appointment (student_id, advisor_id, session_date, session_time) VALUES (?, ?, ?, ?)");
$stmt->bind_param("iiss", $student_id, $advisor_id, $date, $time);


if ($stmt->execute()) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "error" => $stmt->error]);
}

$stmt->close();
$conn->close();
?>
