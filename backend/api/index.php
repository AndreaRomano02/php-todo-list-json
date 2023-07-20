<?php
$database_url = __DIR__ . '../../database/data.json';
$json = file_get_contents($database_url);
$tasks = json_decode($json, true);

header('Content-Type: application/json');
echo json_encode($tasks);
