jQuery.noConflict();
jQuery(document).ready(function(){
	jQuery("#rakuten_easy_show_123456789").click(function(){
		if(jQuery("#rakuten_easy_show_123456789").text() == "ON"){
			jQuery("#rakuten_easy_show_123456789").text("OFF");
		}else{
			jQuery("#rakuten_easy_show_123456789").text("ON");
		}
	});
}

