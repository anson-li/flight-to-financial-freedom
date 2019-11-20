$('document').ready(function(){

	let menuToggled = false;
	$('#btn-menu').click(function() {
		if (!menuToggled) {
			$('#main-menu').css('z-index', '100');
			anime.timeline({loop: false})
			.add({
				targets: '#main-menu',
				opacity: [0,1],
				width: ['0vw', '95vw'],
				easing: "easeInOutQuad",
				complete: function() {
					$('#main-menu').css('z-index', '100');
				}
            })
            .add({
				targets: '#btn-menu',
				color: '#FFF',
				easing: "easeInOutQuad",
            }, 0)
            .add({
				targets: '#menu-explanation',
				opacity: [0,1],
				easing: "easeInOutQuad",
				duration: 200,
			}, 400)
			.add({
				targets: '.menu-item',
				opacity: [0,1],
				easing: "easeInOutQuad",
				duration: 200,
			}, 400);
			menuToggled = true;
		} else {
			anime.timeline({loop: false})
			.add({
				targets: '#menu-explanation',
				opacity: [1,0],
				easing: "easeInOutQuad",
				duration: 300,
			}, 0)
			.add({
				targets: '.menu-item',
				opacity: [1,0],
				easing: "easeInOutQuad",
				duration: 300,
			}, 0)
			.add({
				targets: '#main-menu',
				opacity: [1, 0],
				width: ['95vw', '0vw'],
				easing: "easeInOutQuad",
				complete: function() {
					$('#main-menu').css('z-index', '0');
				}
            }, 100)
            .add({
				targets: '#btn-menu',
				color: '#333',
				easing: "easeInOutQuad",
            }, 0);
			menuToggled = false;
		}
	});

	$('#25').mouseenter(function() {
		anime.timeline({loop: false})
			.add({
				targets: '#stroke-25',
				width: '180px',
				easing: "easeInOutQuad",
				duration: 150,
			});
	});

	$('#25').mouseleave(function() {
		anime.timeline({loop: false})
			.add({
				targets: '#stroke-25',
				width: '0px',
				easing: "easeInOutQuad",
				duration: 250,
			});
	});

	$('#35').mouseenter(function() {
		anime.timeline({loop: false})
			.add({
				targets: '#stroke-35',
				width: '180px',
				easing: "easeInOutQuad",
				duration: 250,
			});
	});

	$('#35').mouseleave(function() {
		anime.timeline({loop: false})
			.add({
				targets: '#stroke-35',
				width: '0px',
				easing: "easeInOutQuad",
				duration: 250,
			});
	});

	$('#45').mouseenter(function() {
		anime.timeline({loop: false})
			.add({
				targets: '#stroke-45',
				width: '180px',
				easing: "easeInOutQuad",
				duration: 250,
			});
	});

	$('#45').mouseleave(function() {
		anime.timeline({loop: false})
			.add({
				targets: '#stroke-45',
				width: '0px',
				easing: "easeInOutQuad",
				duration: 250,
			});
	});

	$('#55').mouseenter(function() {
		anime.timeline({loop: false})
			.add({
				targets: '#stroke-55',
				width: '180px',
				easing: "easeInOutQuad",
				duration: 250,
			});
	});

	$('#55').mouseleave(function() {
		anime.timeline({loop: false})
			.add({
				targets: '#stroke-55',
				width: '0px',
				easing: "easeInOutQuad",
				duration: 250,
			});
	});
});