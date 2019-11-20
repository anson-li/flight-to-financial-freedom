$('document').ready(function(){
    var transEffect = Barba.BaseTransition.extend({
		start: function(){
		  this.newContainerLoading.then(val => this.fadeInNewcontent($(this.newContainer)));
		},
		fadeInNewcontent: function(nc) {
		  nc.hide();
		  var _this = this;
		  $(this.oldContainer).fadeOut(1000).promise().done(() => {
			nc.css('visibility','visible');
			nc.fadeIn(1000, function(){
			  _this.done();
			})
		  });
		}
	});
	Barba.Pjax.getTransition = function() {
	  return transEffect;
	}
	Barba.Pjax.start();
	Barba.Dispatcher.on('newPageReady', function (currentStatus, oldStatus, container) {
		if (Object.entries(oldStatus).length !== 0) {
			$(container).find('script').each(function (i, script) {
				var $script = $(script);
				console.log(script);
				$.ajax({
					url: $script.attr('src'),
					cache: true,
					dataType: 'script',
					success: function () {
						$script.trigger('load');
					}
				});
			});
		}
	});
  });
