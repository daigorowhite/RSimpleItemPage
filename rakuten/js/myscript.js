 jQuery.noConflict();
jQuery(document).ready(function(){

//define var
var simple_tag='simple_rakuten_tag123456789'
var original_page_bottom='for_original_page_display12345789'
var warap_all_item='wrap_all_item123456789'

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

//check item number
	if(flag_of_.size() != 0 && flag_of_ != null){
//make new div for function"back to originalpage"
		var i;
		for(i=0;i<flag_of_.size(); i +=1){
			flag_of_.eq(i)
			.after(jQuery("<div class='"+ simple_tag + i + "'>"));
		}
//make new div for wrap item tab		
		jQuery("body").prepend("<div id ='" + warap_all_item + "' class='ui-tabs ui-widget ui-widget-content ui-corner-all'>");



		//flag_of_
		//.css("margin","20px 0 0 20px")
		//.prependTo(jQuery("body #wrap_all_item123456789"));

		//prepared about tabsUI
		jQuery("#" + warap_all_item ).prepend("<ul class='"+simple_tag+"' class='ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all'>")
			var li_tab_simple_rakuten;
			var body_tab_simple_rakuten;
			var a_tab_simple_rakuten;
			//for tabsUI describe tab parent
			jQuery("#" + warap_all_item ).tabs();
			// jQuery('#dialog_link, ul#icons li').hover(
			// 		function() { jQuery(this).addClass('ui-state-hover'); },
			// 		function() { jQuery(this).removeClass('ui-state-hover'); });
		for(i=0;i<flag_of_.size(); i +=1){
			if(i==0){
				li_tab_simple_rakuten = (jQuery("<li class='ui-state-default ui-corner-top ui-tabs-selected ui-state-active'>")).appendTo(jQuery("."+ simple_tag));
			}else{
				li_tab_simple_rakuten = (jQuery("<li class='ui-state-default ui-corner-top'>")).appendTo(jQuery("." + simple_tag));
			}
			a_tab_simple_rakuten = jQuery("<a href='#tab-"+i+"'>").appendTo(li_tab_simple_rakuten);
			a_tab_simple_rakuten.text("Item"+(i+1));
			
			if(i==0){
				body_tab_simple_rakuten = jQuery("<div id='tab-"+i+"' class='ui-tabs-panel ui-widget-content ui-corner-bottom'>").appendTo(jQuery("#" + warap_all_item ));
			}else{
				body_tab_simple_rakuten = jQuery("<div id='tab-"+i+"' class='ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide'>").appendTo(jQuery("#" + warap_all_item ));
			}
			flag_of_.eq(i)
			.appendTo(body_tab_simple_rakuten);
		}

	// jQuery("."+ simple_tag).click(function() {
 //        var num = jQuery("."+ simple_tag).index(this);
 //        $(".content_wrap").addClass('disnon');
 //        $(".content_wrap").eq(num).removeClass('disnon');
 //        jQuery("."+ simple_tag).removeClass('select');
 //        $(this).addClass('select')
 //    });




		//hide any parts that is not needed
		to_go_simple();

		//make link to back original page
		make_back_link();
	}

	function to_go_simple(){
		jQuery("body >  :gt(5)").hide();
		jQuery("body").children().eq(5)
		.prependTo(jQuery("body"));
		
		jQuery("body").children().eq(3)
		.css("margin","20px 0 0 0")
		.prependTo(jQuery("body"));
	}



	function make_back_link(){
		jQuery("body").prepend(
			 jQuery("<a class='" + original_page_bottom + "'>")
			.html("back to original page")
			.css("text-size","20px")
			.css("font-size","15px")
			.css("margin","20px 0 0 20px")
			.css("color","blue")
			.click(function(){
				to_back_original();
			})
		);
	}

	function to_back_original(){
		var i;
				for(i=0;i<flag_of_.size(); i +=1){
					jQuery("." + simple_tag + i)
					.before(flag_of_.eq(i));
				}
				jQuery("body > *").css("display","");
				
				jQuery("."+ original_page_bottom ).hide();
	}

});
