// console.clear();

// const maxValue = 100000; // this is the max value for our assets/liabilities/wealth bars

const setWealthValues = () => {
  if (currentStats === null) {
    console.log("Get a response from the server and save to currentStats before trying to set these values on the UI");
    return;
  }
  
  if ($('#balanceStatement').is(":visible")) {
    var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
    $('#val-assets').animateNumber(
      {
        number: currentStats.assets,
        numberStep: comma_separator_number_step
      }
    );
    $('#val-liabilities').animateNumber(
      {
        number: currentStats.liability,
        numberStep: comma_separator_number_step
      }
    );
    $('#val-wealth').animateNumber(
      {
        number: (Number(currentStats.assets) - Number(currentStats.liability)),
        numberStep: comma_separator_number_step
      }
    );
  }
  else {
  const assetsText = (currentStats.assets).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    $('p', '#assets-summary').text("$" + assetsText);
    $('p', '#liabilities-summary').text("$" + (currentStats.liability).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'));
    $('p', '#wealth-summary').text("$" + (Number(currentStats.assets) - Number(currentStats.liability)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'));
  }
}

const setProgressBarValue = (barId, value, highestValue) => {
  console.log(value);
  $('svg', '#'+barId).attr('data-value', value / highestValue * 100);
};

const refreshProgressBars = () => {
  const meters = document.querySelectorAll('svg[data-value] .meter');
  meters.forEach( (path) => {
    // Get the length of the path
    let length = path.getTotalLength();
    // console.log('hi');    
    // console.log(path.getTotalLength());
      
    // console.log(length) and hardcode the value for both stroke-dasharray & stroke-dashoffest styles
    // If unable to hardcode, set dynamically...
    // path.style.strokeDashoffset = length;
    // path.style.strokeDasharray = length;

    // Get the value of the meter
    let value = parseInt(path.parentNode.getAttribute('data-value'));
    // Calculate the percentage of the total length
    let to = length * ((100 - value) / 100);

    // Trigger Layout in Safari hack https://jakearchibald.com/2013/animated-line-drawing-svg/
    path.getBoundingClientRect();
    // Set the Offset
    path.style.strokeDashoffset = Math.max(0, to);  
  });
}
refreshProgressBars();