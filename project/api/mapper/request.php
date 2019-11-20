<?php

class Request {
  var $input;

  var $section;
  var $question;
  var $answer;

  function __construct() {
    $inputJSON = file_get_contents('php://input');
    $this->input = json_decode($inputJSON, TRUE);
  }

  public function getData() {
    $returnData = [];
    
    if (is_array($this->input['answers'])) {
      foreach ($this->input['answers'] as $section) {
        $returnData[] = [
          'section' => $section['section'] ?? null,
          'question' => $section['question'] ?? null,
          'answer' => $section['answer'] ?? null,
        ];
      }
    }

    return $returnData;
  }
}