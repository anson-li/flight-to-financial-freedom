<?php

session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  session_destroy();
} else {
  http_response_code(400);
}
