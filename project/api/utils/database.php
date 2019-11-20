<?php

class Database {
  private $database;

  public function insertChoice($section, $question, $answer) {
    $sql = "INSERT INTO decisions (id, section, question, answer, date) VALUES ('0',?,?,?,NOW())";
    $stmt = $this->database->prepare($sql);
    $result = $stmt->execute([$section, $question, $answer]);
  }

  public function getChoices() {
    $result = $this->database->query("select section, question, answer, COUNT(*) as amount from decisions GROUP BY section, question, answer");
    if ($result) {
      return $result->fetchAll();
    }
    return [];
  }

  public function formatChoices($choices, $answers) {
    $formattedData = [];

    foreach ($choices as $data) {

      $section = $data['section'];
      $question = $data['question'];
      $answer = $data['answer'];
      $amount = $data['amount'];     
      
      if (isset($answers[$section][$question])) {
        if (!isset($formattedData[$section][$question]['total'])) {
          $formattedData[$section][$question]['total'] = 0;
        }

        $formattedData[$section][$question]['total'] += $amount;

        if ($answers[$section][$question] === $answer) {
          $formattedData[$section][$question]['answerPicked'] = $answers[$section][$question];
          $formattedData[$section][$question]['answerTotal'] = intval($amount);
          $formattedData[$section][$question]['blurb'] = getBlurb($section, $question, $answer);
        }
      }
    }

    return $formattedData;
  }

  function __construct() {
    global $config;
    $dsn = "mysql:dbname={$config['DB_DB']};host={$config['DB_SERVER']};port=3306;charset=utf8";

    $this->database = new PDO($dsn, $config['DB_USERNAME'], $config['DB_PASSWORD']);
  }
}