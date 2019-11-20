<?php
session_start();
require_once('./config/config.php');
require_once('./utils/database.php');
require_once('./utils/session.php');
require_once('./mapper/response.php');
require_once('./mapper/request.php');
require_once('./data/data.php');
require_once('./mapper/blurbs.php');

$database = new Database();
$session = new Session();

$request = new Request();
$response = new Response($session);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $answers = $request->getData();
  $responseData = [];

  foreach ($answers as $answer) {
    $answerData = [];
    // Get array for first pass (set any variables needed)
    $operation = getDataMap()["Stage{$answer['section']}"]["Question{$answer['question']}"]["Answer{$answer['answer']}"];

    if ($answer['section'] && $answer['question'] && $answer['answer']) {
      $session->recordAnswer($answer['section'], $answer['question'], $answer['answer']);
      $database->insertChoice($answer['section'], $answer['question'], $answer['answer']);
    }

    if(is_array($operation['set'])) {
      foreach ($operation['set'] as $key => $value) {
        $_SESSION['variables'][$key] = $value;
      }
    }

    // Regen array in case a variable was used
    $operation = getDataMap()["Stage{$answer['section']}"]["Question{$answer['question']}"]["Answer{$answer['answer']}"];

    if ($operation['assets']) {
      foreach ($operation['assets'] as $asset) {
        $years = $asset['years'] ?? 1;
    
        switch($asset['mode']) {
          case "add":
            $session->addAsset($years * $asset['value']);
            $answerData[] = [
              'operation' => 'add', 
              'field' => 'assets', 
              'value' => $years * $asset['value']
            ];
            break;

          case "remove":
            $session->removeAsset($years * $asset['value']);
            $answerData[] = [
              'operation' => 'remove', 
              'field' => 'assets', 
              'value' => $years * $asset['value']
            ];

            break;
        }
      }
    }
  
    if ($operation['liability']) {
      foreach ($operation['liability'] as $liability) {
        $years = $liability['years'] ?? 1;
    
        switch($liability['mode']) {
          case "add":
            $session->addLiability($years * $liability['value']);
            $answerData[] = [
              'operation' => 'add', 
              'field' => 'liability', 
              'value' => $years * $liability['value']
            ];

            break;
          case "remove":
            $session->removeLiability($years * $liability['value']);
            $answerData[] = [
              'operation' => 'remove', 
              'field' => 'liability', 
              'value' => $years * $liability['value']
            ];

            break;
        }
      }
    }

    $responseData[$answer['section']][$answer['question']] = $answerData;
  }

  $response->addResponseData($responseData);
} else {
  $response->addResponseData($database->formatChoices($database->getChoices(), $session->getAnswers()),'choices');
}

echo $response->getJSON();




