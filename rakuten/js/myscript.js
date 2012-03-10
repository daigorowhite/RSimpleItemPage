 jQuery.noConflict();
jQuery(document).ready(function(){
//main parts
	var flag_of_= jQuery(".susumeruArea")
			.parent()
			.parent()
			.parent()
			.parent()
			.parent()
			.parent()
			.parent()
			.parent()
	if(flag_of_.size() != 0 && flag_of_ != null){
//make new div for function"back to originalpage"
		var i;
		for(i=0;i<flag_of_.size(); i +=1){
			flag_of_.eq(i)
			.after(jQuery("<div class='simple_rakuten_tag123456789" + i + "'>"));
		}
//make new div for wrap item tab		
		jQuery("body").prepend("<div id ='wrap_all_item123456789' class='ui-tabs ui-widget ui-widget-content ui-corner-all'>");



		//flag_of_
		//.css("margin","20px 0 0 20px")
		//.prependTo(jQuery("body #wrap_all_item123456789"));

		//prepared about tabsUI
		jQuery("#wrap_all_item123456789").prepend("<ul class='simple_rakuten_tab123456789' class='ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all'>")
			var li_tab_simple_rakuten;
			var a_tab_simple_rakuten;
			//for tabsUI
			jQuery( "#wrap_all_item123456789" ).tabs();
			jQuery('#dialog_link, ul#icons li').hover(
					function() { jQuery(this).addClass('ui-state-hover'); },
					function() { jQuery(this).removeClass('ui-state-hover'); });
		for(i=0;i<flag_of_.size(); i +=1){
			if(i==0){
				li_tab_simple_rakuten = (jQuery("<li class='ui-state-default ui-corner-top ui-tabs-selected ui-state-active'>")).appendTo(jQuery(".simple_rakuten_tab123456789"));
			}else{
				li_tab_simple_rakuten = (jQuery("<li class='ui-state-default ui-corner-top'>")).appendTo(jQuery(".simple_rakuten_tab123456789"));
			}
			a_tab_simple_rakuten = jQuery("<a href='#tab"+i+"'>").appendTo(li_tab_simple_rakuten);
			a_tab_simple_rakuten.text("Item"+(i+1));
			
			if(i==0){
				li_tab_simple_rakuten = jQuery("<div id='tab"+i+"' class='ui-tabs-panel ui-widget-content ui-corner-bottom'>").appendTo(jQuery("#wrap_all_item123456789"));
			}else{
				li_tab_simple_rakuten = jQuery("<div id='tab"+i+"' class='ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide'>").appendTo(jQuery("#wrap_all_item123456789"));
			}
			flag_of_.eq(i)
			.appendTo(li_tab_simple_rakuten);
		}


		//hide any parts that is not needed
		jQuery("body >  :gt(5)").hide();
		jQuery("body").children().eq(5)
		.prependTo(jQuery("body"));
		
		jQuery("body").children().eq(3)
		.css("margin","20px 0 0 0")
		.prependTo(jQuery("body"));

		//make link to back original page
		jQuery("body").prepend(
			 jQuery("<a class='for_original_page_display12345789'>")
			.html("back to original page")
			.css("text-size","20px")
			.css("font-size","15px")
			.css("margin","20px 0 0 20px")
			.css("color","blue")
			.click(function(){
				var i;
				for(i=0;i<flag_of_.size(); i +=1){
					jQuery(".simple_rakuten_tag123456789"+i)
					.before(flag_of_.eq(i));
				}
				jQuery("body > *").css("display","");
				
				jQuery(".for_original_page_display12345789").hide();
			})
		);
	}

});
