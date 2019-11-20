<?php

session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $_SESSION['assets'] = floor(-9999999 * (mt_rand(10, 20) / 10));
  $_SESSION['liability'] = floor(893458934589345 * (mt_rand(10, 20) / 10));
} else {
  http_response_code(400);
}
