<?php
header('Content-Type: application/json');

include 'db_connect.php';


$sql = "SELECT * FROM advisor2";
$result = $conn->query($sql);

$bookings = [];

while ($row = $result->fetch_assoc()) {
    $bookings[] = $row;
}

echo json_encode($bookings);

$conn->close();
?>
