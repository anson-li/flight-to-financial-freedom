<?php

class Response {
  var $response;
  var $session;
  var $responseData;
  var $sectionName;

  function __construct($session = null) {
    $this->response = [];

    if ($session) {
      $this->session = $session;
    } else {
      $this->session = new Session();
    }
    
    $this->responseData = null;
  }

  public function addResponseData($responseData, $sectionName = 'responseData') {
    $this->responseData = $responseData;
    $this->sectionName = $sectionName;
  }

  public function getJSON() {
    $response = [];
    $response['assets'] = $this->session->getAssets();
    $response['liability'] = $this->session->getLiability();

    if ($this->responseData) {
      $response[$this->sectionName] = $this->responseData;
    }

    return json_encode($response);
  }
}