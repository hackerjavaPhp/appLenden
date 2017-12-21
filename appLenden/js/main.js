; (function(){

	// header slider

	var doc = document , 
        headerSliderList = doc.getElementById("headerSliderList") ,
        left = 0 ,
        scrolling_by = 340,
     	scroll_to = 640 , 
     	CONST_DEF_SC = 0;



	function scrollSlider()
	{
		left = left - scrolling_by;

		if(left < -scroll_to)
		{
			left = CONST_DEF_SC;
		}

		headerSliderList.style.transform = "translateX(" + left + "px)";
	}

	setInterval(scrollSlider, 5000);





})()