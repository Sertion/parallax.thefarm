/**
 * Parallax of unknown origin.
 * @version 0.1.12
 * @author Albin Jacobsson from The Farm
 */
(function($) {
	/**
	*	Plugin for changing the background-position of elements related to the users
	*	scrolling. If if finds a way to animate the background-position it will use 
	*	.animate() over .css()
	*
	*	Avalible options are:
	*		start		{function}	A functions that returns a boolean which represents
	*								if the parallax should be going or not. First
	*								parameter is the element and the second is a jQuery
	*								$.fn.offset object. Both start and stop needs to
	*								return true for the paralax to animate.
	*		stop		{function}	A functions that returns a boolean which represents
	*								if the parallax should be going or not. First
	*								parameter is the element and the second is a jQuery
	*								$.fn.offset object. Both start and stop needs to
	*								return true for the paralax to animate.
	*		xCoeff		{number}	The multiplyer for the horizontal parallax
	*		yCoeff		{number}	The multiplyer for the vertical parallax effect
	*		xOffset		{number}	The horizontal offset (in pixels without unit)
	*		yOffset		{number}	The vertical offset (in pixels without unit)
	*		xUnit		{string}	The unit that should be used when setting the
	*								horizontal background position
	*		yUnit		{string}	The unit that should be used when setting the
	*								vertical background position
	*
	*	@param  {object} options	An object containing options
	*	@return {jQuery}			Used for chaining
	*/
	$.fn.parallax = function(options) {
		if (this.length === 0) {
			return this;
		}
		var defaults = {
			"start": function(el, elOffset) {
				return $(window).scrollTop() >= elOffset.top - $(window).height();
			},
			"stop": function(el, elOffset) {
				return $(window).scrollTop() <= elOffset.top + $(el).height();
			},
			"xCoeff": 0,
			"yCoeff": 2,
			"xOffset": 50,
			"yOffset": 0,
			"xUnit": '%',
			"yUnit": 'px',
			"xMinValue": false,
			"yMinValue": false
		};
		var opts = $.extend(defaults, options);
		return this.each(function(i, el) {
			$(window).on('scroll.parallax resize.parallax', function(ev) {
				var $el = $(el);
				var elOffset = $el.offset();
				if (opts.start(el, elOffset) && opts.stop(el, elOffset)) {
					var windowTop = $(window).scrollTop();
					var newYCoord = ((elOffset.top - windowTop) * opts.yCoeff) + opts.yOffset;
					var newXCoord = ((elOffset.top - windowTop) * opts.xCoeff) + opts.xOffset;
					var newXVal = (opts.xMinValue !== false && opts.xMinValue > newXCoord) ? opts.xMinValue : newXCoord;
					var newYVal = (opts.yMinValue !== false && opts.yMinValue > newYCoord) ? opts.yMinValue : newYCoord;

					if (canAnimateBackgroundPosition) {
						$el.stop().animate({
							"background-position": newXVal + opts.xUnit + " " + newYVal + opts.yUnit
						}, 250, 'easeOutCirc');
					} else {
						$el.css({
							"background-position": newXVal + opts.xUnit + " " + newYVal + opts.yUnit
						});
					}
				}
			});
		});
	};

	var canAnimateBackgroundPosition = $.isFunction($.fx.step.backgroundPosition);

}(jQuery));
