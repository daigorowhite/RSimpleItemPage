jQuery.noConflict();
jQuery(document).ready(function(){

//define variables
var simple_tag='simple_rakuten_tag123456789'
var original_page_bottom='for_original_page_display12345789'
var wrap_all_item='wrap_all_item123456789'

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
if( item_num != 0 && flag_of_ != null){
//make new div for function"back to originalpage"
	for(i=0;i<flag_of_.size(); i +=1){
		flag_of_.eq(i)
		.after(jQuery("<div class='"+ simple_tag + i + "'>"));
	}
	//make new div for wrap item tab		
	jQuery("body").prepend("<div id ='" + wrap_all_item + "'>");

	if(i == 1){
		jQuery("#" + wrap_all_item ).prepend(flag_of_.first());
	}else if(i >= 2){
		//prepared about tabsUI
		jQuery("#" + wrap_all_item ).prepend("<ul class='"+simple_tag+"'>");

		// to tag
		to_tagnization();
	}

	//hide any parts that is not needed
	to_go_simple();

	//make link to back original page
	make_back_link();
}

	function to_tagnization(){
		var li_tab_simple_rakuten;
		var body_tab_simple_rakuten;
		var a_tab_simple_rakuten;

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

			// add item data to tag tab
			flag_of_.eq(i)
			.appendTo(jQuery("#ui-tabs-"+(i+1)))
		}

		//aTag link escape
		jQuery("."+ simple_tag + " li" ).click(function() {
	        return false;
	    });

	}

	function to_go_simple(){
		jQuery("body >  :gt(5)").hide();
		jQuery("body").children().eq(5)
		.prependTo(jQuery("body"));
		
		jQuery("body").children().eq(3)
		.css("margin","20px 0 0 0")
		.prependTo(jQuery("body"));

		jQuery("#" + wrap_all_item ).show();
	}



	function make_back_link(){
		jQuery("body").prepend(
			 jQuery("<a class='" + original_page_bottom + "'>")
			.html("back to original page")
			.css("text-size","20px")
			.css("font-size","15px")
			.css("margin","20px 0 0 20px")
			.css("color","blue")
			.css("background-color","white")
			.click(function(){
				to_back_original();
			})
		);
	}

	function to_back_original(){
		for(i=0;i<flag_of_.size(); i +=1){
			jQuery("." + simple_tag + i)
			.before(flag_of_.eq(i));
		}
		jQuery("body > *").css("display","");
		jQuery("."+ original_page_bottom ).hide();
		jQuery("#" + wrap_all_item ).hide();
	}

});
