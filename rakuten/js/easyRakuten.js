jQuery.noConflict();
jQuery(document).ready(function(){

	//define variables
	var simple_tag='simple_rakuten_tag123456789'
	var original_page_bottom='for_original_page_display12345789'
	var simple_page_bottom='for_simple_page_display12345789'
	var wrap_all_item='wrap_all_item123456789'
	var inited=false;
	var taged=false;
	var SIMPLE_MODE='simple';
	var ORIGINAL_MODE='original';

	//main Item parts
	var flag_of_= jQuery(".susumeruArea")
				.parent()
				.parent()
				.parent()
				.parent()
				.parent()
				.parent()
				.parent()
				.parent()

	// number of item on the page
	var item_num=flag_of_.size();

	//check item number
	if (item_num != 0 && flag_of_ != null) {
		main();
	}

	function main(){
      chrome.storage.local.get('default_mode',function(items){
      var mode_ = items['default_mode'];
        if (!mode_) {
          mode_=SIMPLE_MODE;
        }
		do_simple(mode_);
      });
	}

	function do_simple(mode_){
		if(!inited ){
		//make new div for function"back to originalpage"
			for(i=0;i<flag_of_.size(); i +=1){
				flag_of_.eq(i)
				.after(jQuery("<div class='"+ simple_tag + i + "'>"));
			}
			//make new div for wrap item tab		
			jQuery("body").prepend("<div id ='" + wrap_all_item + "'>");


			//make link to simple page
			make_to_simple_link();

			//make link to back original page
			make_back_link();

			if(mode_ == SIMPLE_MODE){
				//hide any parts that is not needed
				to_go_simple();

				// hide to simple link
				jQuery("."+ simple_page_bottom).hide();

				// scroll to top
			}else{
				jQuery("."+ original_page_bottom ).hide();
			}

			window.scroll(0,0);
			inited=true;


		}
	}

	function to_tagnization(){
		var li_tab_simple_rakuten;
		var body_tab_simple_rakuten;
		var a_tab_simple_rakuten;

		// initialize tag
		if(!taged){
			//prepared about tabsUI
			jQuery("#" + wrap_all_item ).prepend("<ul class='"+simple_tag+"'>");

			//for tabsUI describe tab parent
			for(i=0;i<flag_of_.size(); i +=1){
				li_tab_simple_rakuten = (jQuery("<li>")).appendTo(jQuery("."+ simple_tag));
				a_tab_simple_rakuten = jQuery("<a href='#tags-"+ i +"'>").appendTo(li_tab_simple_rakuten);
				a_tab_simple_rakuten.text("Item"+(i+1));
			}

			// tab 
			jQuery("#" + wrap_all_item ).tabs();

			for(i=0;i<flag_of_.size(); i +=1){
				// Add it white background color 
				jQuery("#ui-tabs-"+(i+1))
				.css("background-color","white");
			}

			//aTag link escape
			jQuery("."+ simple_tag + " li" ).click(function() {
		        return false;
		    });

			taged=true;
		}

		//move to under tag
		for(i=0;i<flag_of_.size(); i +=1){
			// add item data to tag tab
			flag_of_.eq(i)
			.appendTo(jQuery("#ui-tabs-"+(i+1)));
		}
	}

	function make_to_simple_link(){
		jQuery("body").prepend(
			 jQuery("<a class='" + simple_page_bottom + "' id='change_botton'>")
			.html("SIMPLE PAGE")
			.click(function(){
				to_go_simple();
			})
		);
	}

	function to_go_simple(){
		if(i == 1){
			jQuery("#" + wrap_all_item ).prepend(flag_of_.first());
		}else if(i >= 2){
			// to tag
			to_tagnization();
		}

		//tag
		jQuery("body >  :gt(5)").hide();
		jQuery("body").children().eq(3)
		.prependTo(jQuery("body"));
		jQuery("#" + wrap_all_item ).show();

		//botton
		jQuery("."+ simple_page_bottom ).hide();
		jQuery("body").prepend(jQuery("."+ original_page_bottom));
		jQuery("."+ original_page_bottom ).show();

		// scroll to top
		window.scroll(0,0);
	}



	function make_back_link(){
		jQuery("body").prepend(
			 jQuery("<a class='" + original_page_bottom + "' id='change_botton'>")
			.html("ORIGINAL PAGE")
			.click(function(){
				to_back_original();
			})
		);
	}

	function to_back_original(){
		//tag
		for(i=0;i<flag_of_.size(); i +=1){
			jQuery("." + simple_tag + i)
			.before(flag_of_.eq(i));
		}
		jQuery("body > *").css("display","");
		jQuery("."+ original_page_bottom ).hide();

		//botton
		jQuery("body").prepend(jQuery("."+ simple_page_bottom));
		jQuery("."+ simple_page_bottom).show();
		jQuery("#" + wrap_all_item).hide();

		// scroll to top
		window.scroll(0,0);
	}

});
