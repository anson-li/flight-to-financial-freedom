<!DOCTYPE html>
<html>
<head>
  <title>barba</title>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
  <link href="https://fonts.googleapis.com/css?family=Frank+Ruhl+Libre|Karla|Rozha+One&display=swap" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="css/style.css">
  <link rel="stylesheet" type="text/css" href="css/loading.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css?family=Chivo" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/TweenMax.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/barba.js/1.0.0/barba.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
  <script src="/js/three.min.js"></script>
</head>
<body>
<div id="barba-wrapper">
  <div id="loading-menu">
    <div class="centered-text">
    <div class="spinner"></div>
      Gateway
    </div>
  </div>
  <div class="barba-container">
      <div id="main-menu">
        <div id="menu-explanation" style="opacity: 0">
          Jump through ages
        </div>
        <div class="menu-items">
          <div id="25" class="menu-item">
            <svg id="stroke-25" width="0px" class="menu-stroke" data-value="40">
              <path class="bg stroke-1" stroke="#FFF" d="M0 13, 160 3"></path>
              <path class="bg stroke-2" stroke="#FFF" d="M0 23, 160 13"></path>
              <path class="bg stroke-3" stroke="#FFF" d="M0 33, 160 23"></path>
            </svg>
            <a id="link-25" href="barba.php">25</a>
          </div>
          <div id="35" class="menu-item">
            <svg id="stroke-35" width="0px" class="menu-stroke" data-value="40">
              <path class="bg stroke-1" stroke="#FFF" d="M0 13, 160 3"></path>
              <path class="bg stroke-2" stroke="#FFF" d="M0 23, 160 13"></path>
              <path class="bg stroke-3" stroke="#FFF" d="M0 33, 160 23"></path>
            </svg>
            <a id="link-35" href="barba.php">35</a>
          </div>
          <div id="45" class="menu-item">
            <svg id="stroke-45" width="0px" class="menu-stroke" data-value="40">
              <path class="bg stroke-1" stroke="#FFF" d="M0 13, 160 3"></path>
              <path class="bg stroke-2" stroke="#FFF" d="M0 23, 160 13"></path>
              <path class="bg stroke-3" stroke="#FFF" d="M0 33, 160 23"></path>
            </svg>
            <a id="link-45" href="barba.php">45</a>
          </div>
          <div id="55" class="menu-item">
            <svg id="stroke-55" width="0px" class="menu-stroke" data-value="40">
              <path class="bg stroke-1" stroke="#FFF" d="M0 13, 160 3"></path>
              <path class="bg stroke-2" stroke="#FFF" d="M0 23, 160 13"></path>
              <path class="bg stroke-3" stroke="#FFF" d="M0 33, 160 23"></path>
            </svg>
            <a id="link-55" href="barba.php">55</a>
          </div>
        </div>
      </div>
      <div id="menu">
        <div id="btn-menu">
          G
        </div>
      </div>
      <div id="header">
        <div id="logo">
          <div id="smallLogo">
          the
          </div>
          <div id="largeLogo">
          Gateway
          </div>
        </div>
      </div>
      <div id="text-container">
      <div id="topText">
        AGE: 18-25
        <br>
        <svg width="200" height="20" data-value="40">
            <path class="bg" stroke="#F9EFEF" d="M0 10, 200 10"></path>
            <path class="meter" stroke="#BA5A31" d="M0 10, 200 10" style="stroke-dasharray: 200; stroke-dashoffset: 200;"></path>
          </svg>
      </div>
      <div id="middleText">
        <div class="text ml3">
            Money, measured in decisions. From your education to your retirement, your decisions have shaped your financial health in a multitude of ways. Let's explore.
        </div>
        <button id="click" class="bbtn mlb">DIVE</button>
      </div>
      <div id="leftText">
        <div class="text ml4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed tortor finibus, aliquet leo id, scelerisque lorem. Sed ut tincidunt tellus. Cras vitae erat ac odio tempor.
          </div>
      </div>
      <div id="rightText">
        <div class="text ">
          <div class="rightTextMain">
              Choose one
          </div>
          <div class="highlight ml4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          </div>
          <div class="highlight ml4">
            Aliquam sed tortor finibus, aliquet leo id, scelerisque lorem. 
          </div>
          <div class="highlight ml4">
              Sed ut tincidunt tellus. Cras vitae erat ac odio tempor.
          </div>
        </div>
        <button id="barba" class="bbtn mlb2">
          <a href="barba.php">DECIDE</a>
        </button>
      </div>
    </div>
    <div id="world-barba"></div>
    <script src="https://cdn.jsdelivr.net/npm/animejs@3.0.1/lib/anime.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/barba.js/1.0.0/barba.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
    <script src="/js/three.min.js"></script>
    <!--<script src="/js/barba.js" type="text/javascript"></script>-->
    <script src="/js/three/OBJLoader.js" type="text/javascript"></script>
    <script src="/js/loader.js" type="text/javascript"></script>
    <script src="/js/progressbar.js" type="text/javascript"></script>
    <script src="/js/anime.js" type="text/javascript"></script>
    <script src="/js/three-kite.js" type="text/javascript"></script>
    <script src="/js/mainmenu.js" type="text/javascript"></script>
  </div>
</div>
</body>
</html>
