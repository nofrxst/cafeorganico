$(document).ready(function(){

	$("#banner").css({"height":$(window).height() + "px"});

	var flag = false;
	var scroll;

	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if(scroll > 500){
			if(!flag){
				

				$("header").css({"background-color": "#3C3C3C"});
				flag = true;
			}
		}else{
			if(flag){
			

				$("header").css({"background-color": "transparent"});
				flag = false;
			}
		}


	});

});