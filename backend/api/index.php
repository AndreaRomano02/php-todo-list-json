<?php
$database_url = __DIR__ . '../../database/data.json';

$json = file_get_contents($database_url); // Prendo i data dal "database"

$tasks = json_decode($json, true); // Gli converto per andarci a lavorare sul mio PHP

// Controllo se c'è qualcosa in post che si chiami task se c'è lo salvo in una variabile 
// sennò lo lascio come NULL
$new_task = $_POST['task'] ?? NULL;
$current_task_id = $_POST['id'] ?? NULL;


if ($current_task_id) {
  foreach ($tasks as $index => $task) {
    if ($current_task_id == $task['id']) {
      $tasks[$index]['done'] = !$task['done'];
    }
  }
  $json_task = json_encode($tasks);
  file_put_contents($database_url, $json_task);
}

// Se c'è
if ($new_task) {
  $tasks[] = [
    'id' => uniqid(),
    'task' => $new_task,
    "done" => false
  ];
  $json_task = json_encode($tasks);   // Lo riconverto in JSON

  file_put_contents($database_url, $json_task); // Vado a sovrascrivere tutto il JSON nel database con il nuovo 

  header('Content-Type: application/json'); // Comunico che uso un linguaggio JSON 
  echo $json_task;
} else {
  header('Content-Type: application/json'); // Comunico che uso un linguaggio JSON 
  echo json_encode($tasks);
}
