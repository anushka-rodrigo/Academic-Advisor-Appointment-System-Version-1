<?php
header('Content-Type: application/json');

include 'db_connect.php';

$data = json_decode(file_get_contents("php://input"), true);
$student_id = $data['student_id'] ?? null;

if (empty($student_id)) {
    echo json_encode(["success" => false, "error" => "Student ID is required"]);
    exit();
}

$sql = "SELECT 
    appointment.session_date,
    appointment.session_time,
    advisor2.Subject,
    advisor2.firstName AS advisor_first_name,
    advisor2.lastName AS advisor_last_name,
    student.Reg_No,
    student.email AS student_email,
    student.firstName AS student_first_name,
    student.lastName AS student_last_name
FROM 
    appointment
    INNER JOIN advisor2 ON appointment.advisor_id = advisor2.advisor_id
    INNER JOIN student ON student.Reg_No = appointment.student_id WHERE student_id = {$student_id};
";
$result = $conn->query($sql);


$bookings = [];


while ($row = $result->fetch_assoc()) {
    $bookings[] = $row;
}

echo json_encode($bookings);

$conn->close();
