<?php
$tasks = ["Comprare le bistecche", "Prendere da Bere", "Pulire casa", "Preparare la brace", "Cucinare"];

header('Content-Type: application/json');
echo json_encode($tasks);
