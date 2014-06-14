(function ($,d) {
	$.fn.extend({
		resetGP: function(){
			var oldOpts = $(this).data('Opts');
			$this = $(this);
			$this.next().remove();
			$this.gplaceholder(oldOpts);
		}
	});
	
	$.fn.gplaceholder = function( options ) {
	var settings = $.extend({
		color: "#000"
	}, options );
	$(this).data('Opts',options);
	this.each(function(){
		p = $(this).attr('placeholder');
		if($.trim(p)!=''){
			$(this).css({color:settings.color,background:settings.background})
			$(this).val(p)
			$(this).bind('focus',function(){
				v = $(this).val();
				p = $(this).attr('placeholder');
				if(v==p){$(this).val('');}
			});
			$(this).bind('blur',function(){
				v = $(this).val();
				p = $(this).attr('placeholder');
				if(v==''){$(this).val(p);}
			});
		}
	});
	return this;
	};
}( jQuery,document ));