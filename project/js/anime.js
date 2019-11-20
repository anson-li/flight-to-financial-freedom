
$('document').ready(function(){

	$('#click').click(function() {
		$('#middleText').addClass('animated fadeOut');
		$('#click').addClass('animated fadeOut');
		$('#leftText').addClass('animated fadeIn');
		$('#rightText').addClass('animated fadeIn');

		// Wrap every letter in a span
		$('.ml4').each(function(){
			$(this).html($(this).text().replace(/(.)/g, "<span class='letter'>$&</span>"));
		});

		anime.timeline({loop: false})
		.add({
			targets: '.ml4 .letter',
            opacity: [0,1],
			easing: "easeInOutQuad",
		delay: function(el, i) {
			return 2 * (i+1)
		}
		});

		anime.timeline({loop: false})
		.add({
			targets: '.mlb2',
			opacity: [0,1],
			easing: "easeInOutQuad",
		delay: function(el, i) {
			return 20 * (i+1)
		}
		});

		anime.timeline({loop: false})
		.add({
			targets: ['#balanceStatement', '#progress-svg', '#age'],
			opacity: [0,1],
			easing: "easeInOutQuad",
		});
	});

	// Wrap every letter in a span
	$('.ml3').each(function(){
		$(this).html($(this).text().replace(/(.)/g, "<span class='letter'>$&</span>"));
	});
	
	anime.timeline({loop: false})
		.add({
			targets: '.ml3 .letter',
			opacity: [0,1],
			easing: "easeInOutQuad",
		delay: function(el, i) {
			return 2 * (i+1)
		}
        });

	anime.timeline({loop: false})
		.add({
			targets: '.mlb',
			opacity: [0,1],
			easing: "easeInOutQuad",
			duration: 1050,
		delay: function(el, i) {
			return 20 * (i+1)
		}
		});
  });