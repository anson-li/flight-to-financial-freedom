<?php

class Session {

  function __construct() {
    if (!isset($_SESSION['assets'])) {
      $_SESSION['assets'] = 0;
      $_SESSION['liability'] = 0;
      $_SESSION['questions'] = [];
    }
  }

  public function recordAnswer($section, $question, $answer) {
    $_SESSION['questions'][$section][$question] = $answer;
  }

  public function getAnswers() {
    return $_SESSION['questions'];
  }

  public function getAssets() {
    return $_SESSION['assets'];
  }

  public function getLiability() {
    return $_SESSION['liability'];
  }

  public function addAsset($amount) {
    $_SESSION['assets'] += $amount;
  }

  public function removeAsset($amount) {
    $_SESSION['assets'] -= $amount;
  }

  public function addLiability($amount) {
    $_SESSION['liability'] += $amount;
  }

  public function removeLiability($amount) {
    $_SESSION['liability'] -= $amount;
  }
}