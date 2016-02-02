// JavaScript Document

//Hook up the tweet display

$(document).ready(function() {
	$(".tweet").tweet({
		username: "bencito2",
		count: 3,
		loading_text: "loading tweets..."
	});
});

//Hook up the flexslider

$(document).ready(function() {
	$('.flexslider').flexslider({
		directionNav: false,
	});
});


// chris coyier's little dropdown select-->
    
$(document).ready(function() {
			
	//build dropdown
	$("<select />").appendTo(".navigation nav");
			
	// Create default option "Go to..."
	$("<option />", {
   	  "selected": "selected",
   	  "value"   : "",
   	  "text"    : "Go to..."
	}).appendTo("nav select");
	
	// Populate dropdowns with the first menu items		
	$("nav a").each(function() {
	   var el = $(this);
 	$("<option />", {
      "value"   : el.attr("href"),
      "text"    : el.text()
 	 }).appendTo("nav select");
	});
	//make responive dropdown menu actually work		
	$("nav select").change(function() {
  	   window.location = $(this).find("option:selected").val();
	});
});