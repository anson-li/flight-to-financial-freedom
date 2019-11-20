<!DOCTYPE html>
<html>
<head>
  <title>Flight</title>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
  <link href="https://fonts.googleapis.com/css?family=Frank+Ruhl+Libre|Karla|Rozha+One&display=swap" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="css/style.css">
  <link rel="stylesheet" type="text/css" href="css/loading.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css?family=Chivo" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/TweenMax.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenLite.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/barba.js/1.0.0/barba.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
  <script src="/js/three.min.js"></script>
</head>
<body>
<div id="barba-wrapper">
  <div id="loading-menu">
    <div class="centered-text">
    <div class="spinner"></div>
      Flight
    </div>
  </div>
  <div class="barba-container">
      <div id="main-menu">
        <div style="display: inline-block; float: left; color: white; padding: 75px; width: 500px;">
          <div style="padding-left: 10px">
          Financial issues are consistently ranked as one of the main causes of stress by Albertans.<br /><br />

          This is an interactive demo where you lead an individual through financial decisions in their life. You'll pick milestones and see how they affect their financial health.
          </div>
        </div>
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
            <a id="link-25" href="barba.php">18</a>
          </div>
          <div id="35" class="menu-item">
            <svg id="stroke-35" width="0px" class="menu-stroke" data-value="40">
              <path class="bg stroke-1" stroke="#FFF" d="M0 13, 160 3"></path>
              <path class="bg stroke-2" stroke="#FFF" d="M0 23, 160 13"></path>
              <path class="bg stroke-3" stroke="#FFF" d="M0 33, 160 23"></path>
            </svg>
            <a id="link-35" href="barba.php">25</a>
          </div>
          <div id="45" class="menu-item">
            <svg id="stroke-45" width="0px" class="menu-stroke" data-value="40">
              <path class="bg stroke-1" stroke="#FFF" d="M0 13, 160 3"></path>
              <path class="bg stroke-2" stroke="#FFF" d="M0 23, 160 13"></path>
              <path class="bg stroke-3" stroke="#FFF" d="M0 33, 160 23"></path>
            </svg>
            <a id="link-45" href="barba.php">35</a>
          </div>
          <div id="55" class="menu-item">
            <svg id="stroke-55" width="0px" class="menu-stroke" data-value="40">
              <path class="bg stroke-1" stroke="#FFF" d="M0 13, 160 3"></path>
              <path class="bg stroke-2" stroke="#FFF" d="M0 23, 160 13"></path>
              <path class="bg stroke-3" stroke="#FFF" d="M0 33, 160 23"></path>
            </svg>
            <a id="link-55" href="barba.php">50</a>
          </div>
        </div>
      </div>
      <div id="menu">
        <div id="btn-menu">
          F
        </div>
      </div>
      <div id="header">
        <div id="logo">
          <div id="largeLogo">
          Fli<span id="orange">g</span>ht
          </div>
          <div id="smallLogo">
          to financial freedom
          </div>
        </div>
      </div>
      <div id="text-container">
      <div id="topText">
        <span id="age" style="opacity: 0">
          AGE: 18-25
        </span>
        <br>
        <svg id="progress-svg" style="opacity: 0" width="200" height="20" data-value="1">
          <path class="bg" stroke="#F9EFEF" d="M0 10, 200 10"></path>
          <path class="meter progress" stroke="#BA5A31" d="M0 10, 200 10" style="stroke-dasharray: 200; stroke-dashoffset: 200;"></path>
        </svg>
      </div>
      <div id="middleText">
        <div class="text-main ml3">
        Your money is measured in decisions. From your education to your retirement, your decisions have shaped your financial health in a multitude of ways. Let's explore how!
        </div>
        <button id="click" class="bbtn mlb">TAKE FLIGHT</button>
      </div>
      <div id="leftText">
        <!-- <div class="text ml4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed tortor finibus, aliquet leo id, scelerisque lorem. Sed ut tincidunt tellus. Cras vitae erat ac odio tempor.
        </div> -->
      </div>
      <div id="rightText"></div>
      <div id="balanceStatement" style="opacity: 0">
        <div id="assets" class="score">
          Assets
          <br>
          <p class='value'>$<span id="val-assets">0</span></p>
          <!-- <svg width="200" height="20" data-value="20">
            <path class="bg" stroke="#F9EFEF" d="M0 10, 200 10"></path>
            <path class="meter" stroke="#00FF00" d="M0 10, 200 10" style="stroke-dasharray: 200; stroke-dashoffset: 200;"></path>
          </svg> -->
        </div>
        <div id="liabilities" class="score">
          Liabilities
          <br>
          <p class='value'>$<span id="val-liabilities">0</span></p>
          <!-- <svg width="200" height="20" data-value="10">
            <path class="bg" stroke="#F9EFEF" d="M0 10, 200 10"></path>
            <path class="meter" stroke="#FF0000 " d="M0 10, 200 10" style="stroke-dasharray: 200; stroke-dashoffset: 200;"></path>
          </svg> -->
        </div>
        <div id="wealth" class="score">
          Your Wealth
          <br>
          <p class='value'>$<span id="val-wealth">0</span></p>
          <!-- <svg width="200" height="20" data-value="10">
            <path class="bg" stroke="#F9EFEF" d="M0 10, 200 10"></path>
            <path class="meter" stroke="#FFFF00 " d="M0 10, 200 10" style="stroke-dasharray: 200; stroke-dashoffset: 200;"></path>
          </svg> -->
        </div>
      </div>
    <div id="world-barba"></div>
    <script src="https://cdn.jsdelivr.net/npm/animejs@3.0.1/lib/anime.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/barba.js/1.0.0/barba.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
    <script src="https://requirejs.org/docs/release/2.3.5/minified/require.js">
    <script src="/js/three.min.js"></script>
    <script src="/js/jquery.animateNumber.min.js"></script>
    <script src="/js/api.js" type="text/javascript"></script>
    <script src="/js/loader.js" type="text/javascript"></script>
    <script src="/js/progressbar.js" type="text/javascript"></script>
    <script src="/js/anime.js" type="text/javascript"></script>
    <script src="/data/questions.js" type="text/javascript"></script>
    <script src="/js/questionComponent.js" type="text/javascript"></script>
    <script src="/js/three-b.js" type="text/javascript"></script>
    <script src="/js/mainmenu.js" type="text/javascript"></script>
    <script src="/js/konami.js" type="text/javascript"></script>
  </div>
</div>
</body>
</html>
