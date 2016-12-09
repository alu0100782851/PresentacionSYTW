/*jQuery(function($){
	'use strict';

	// -------------------------------------------------------------
	//   Basic Navigation
	// -------------------------------------------------------------
	(function () {
		var $frame  = $('#basic');
		
		
		// Call Sly on frame
		$frame.sly({
			horizontal: 1,
			itemNav: 'basic',								/*Elemento html sobre el cual se va a realizar el desplazamiento*/
/*			smart: 1,
			activateOn: 'click',							/*Determina cuando elemento se considera activo*/
/*			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 0, 									/*Determina el elemento(li) que aparece activo inicialmente*/
			//scrollBar: $wrap.find('.scrollbar'),
//			scrollBy: 1,									/*Valor:1 --> Avanzar de uno en uno; Valor:2 --> Avanzar hasta el final*/
			/*pagesBar: $wrap.find('.pages'),
			activatePageOn: 'click',*/
/*			speed: 1500,									/*Controlar la velocidad de transicion */
/*			elasticBounds: 1,
			easing: 'easeOutExpo',
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,

		});
		
		$frame.reload();
	}());
});*/

	
/*	jQuery(function($){
		'use strict';
	*/


	$('#basic').sly({
	    horizontal: 1,
	    itemNav: 'basic',
	    smart: 1,
	    activateOn: 'click',
	    scrollBy: 1,
	    mouseDragging: 1,
	    swingSpeed: 0.2,
	    scrollBar: $('.scrollbar'),
	    dragHandle: 1,
	    speed: 600,
	    startAt: 0
	});

/*	});*/


