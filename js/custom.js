$(document).ready(function(){
	var isopen = true;

	$("#sidebar").click(function(){

		if(isopen){
			$(this).animate({'left':'-=150px'});
			isopen=false;
		}else{
			$(this).animate({'left':'+=150px'});
			isopen=true;
		}
	});

	$("li").hover(function(){
				$(this).find("a").velocity("callout.bounce");
			});

	$("#dropdown01").click(function()
	{
    	$("#dropdown01").html("Visited");
    	$("#dropdown01").css('color', 'black');
 	 });


});