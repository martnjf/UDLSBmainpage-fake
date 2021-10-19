$(document).ready(function(){
	$('.pestanas').tabs();
	if($('.flexslider').length > 0){
		$('.flexslider.banner').flexslider({
			animation: "fade",
			controlNav: false,
			slideshowSpeed: 5000
		});
		$('.flexslider.news').flexslider({
			animation: "slide"
		});
	}
	if($('.fancybox').length > 0){
		$('.fancybox').fancybox();
	}
	$('#campi').click(function(){
		if($('#campi_links').css('height') == '0px'){
			close_popup();
			$('#campi_links').css('height','340px');
		}else{ close_popup(); }
	});
	$('#menu').click(function(){
		if($('#menu_tabs').css('height') == '0px'){ open_popup('#menu_tabs','270px');
		}else{ close_popup(); }
	});
	$('#profiles_link').click(function(){
		if($('#popup_profiles').parent().css('height') == '0px'){
			close_popup();
			$('#popup_profiles').parent().css('height','180px');
		}else{ close_popup(); }
	});
	$('#login_link').click(function(){
		if($('#popup_login').parent().css('height') == '0px'){
			close_popup();
			$('#popup_login').parent().css('height','220px');
		}else{ close_popup(); }
	});
	$('#user_link').click(function(){
		if($('#popup_user').parent().css('height') == '0px'){
			close_popup();
			$('#popup_user').parent().css('height','180px');
		}else{ close_popup(); }
	});
	$('#mail_link').click(function(){
		if($('#popup_mail').parent().css('height') == '0px'){
			close_popup();
			$('#popup_mail').parent().css('height','180px');
		}else{ close_popup(); }
	});
	function open_popup(popup,height){
		close_popup();
		$(popup).css('height',height);
	}
	function close_popup(){
		$('#campi_links').css('height','0px');
		$('.popups').css('height','0px');
		$('#menu_tabs').css('height','0px');
	}
	$('section').click(function(){
		close_popup();
	});
});