jQuery.divselect = function(divselectid,inputselectid) {
	var inputselect = $(inputselectid);
	$(divselectid+" cite").click(function(){
		var ul = $(divselectid+" ul");
		 $(divselectid).toggleClass("zIndex"); 				
		if(ul.css("display")=="none"){
			ul.slideDown("fast");
		}else{
			ul.slideUp("fast");
		}
	});
	$(divselectid+" ul li a").click(function(){
		var index = $(this).attr("selectid");
		var startAge = $(this).children("input[name='startTime']").val();
		var endAge = $(this).children("input[name='endTime']").val();
		if(!isNaN(index)){			
			var txt = "" ;
			if(startAge !="" && startAge != undefined){
				txt = startAge +$(this).find("span:first").text();
			}
			if(endAge !="" && endAge != undefined){
				txt = txt+ endAge +$(this).find("span:last").text();
			}
			if((startAge =="" || startAge == undefined) && (endAge =="" || endAge == undefined)){
				txt = $(this).text();
			}
			$(divselectid+" cite").html(txt);
			var value = $(this).attr("selectid");
			$("#startAge").val(startAge);
			$("#endAge").val(endAge);
			inputselect.val(value);
			if(index>10){
				$(divselectid+" ul").show();
			}else{				
				$(divselectid+" ul").hide();
			}
		}
		
	});
	$(divselectid+" ul li a").dblclick(function(){
		var index = $(this).attr("selectid");
		 $(divselectid).toggleClass("zIndex");  
		$(divselectid+" ul li a").each(function(i, e) {
            if(index-1 !=i){
				$(this).children("input[name='startTime']").val('');
				$(this).children("input[name='endTime']").val('');
			}
        });
		$(divselectid+" ul").hide();
	});
};