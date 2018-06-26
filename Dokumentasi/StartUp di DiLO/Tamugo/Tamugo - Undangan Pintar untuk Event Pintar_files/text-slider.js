(function ( $ ) {

	$.fn.textSlider = function ( options ) {

		/* Default settings */
		var settings = $.extend(
			{
				timeout: 8000,
				slideTime: 1000
			},
			options
		);

		var nextItem;

		var currentItem = 0;
		var count = 0;

		this.children('.img-slider-item').each(
			function ()
			{

				$(this).addClass( 'slide-img-' + ( count ) )
					.css(
						{
							opacity:	   0,
							paddingTop:	'0px',
							paddingBottom: '0px'
						}
					);

				$(this).hide();

				count++;

			}
		);

		function firstSlide ()
		{

			$('.slide-img-' + currentItem ).show().animate({ paddingTop: '5px', paddingBottom: '50px', opacity: 1 }, settings.slideTime);

			setTimeout ( transition, settings.timeout );

		}

		function transition ()
		{

			nextItem = parseInt ( currentItem + 1 );

			if ( nextItem >= count )
				nextItem = 0;

			$('.slide-img-' + currentItem ).animate({ paddingTop: '0px', paddingBottom: '0px', opacity: 0 }, settings.slideTime, function () {
				$(this).hide();
				$('.slide-img-' + nextItem ).show().animate({ paddingTop: '0px', paddingBottom: '0px', opacity: 1 }, settings.slideTime);
			});

			currentItem = nextItem;

			setTimeout ( transition, settings.timeout );

		}

		return firstSlide ();

	};

}( jQuery ));
