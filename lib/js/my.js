$(function(){
	var $as = $("#nav>a:gt(0):not(:last)");

    	$as.click(function(event) {
    		$as.removeClass('newBar');
    		$(this).addClass('newBar');
    	});
  		
    	var dom = $('<div class="contentLeft_1" id="contentLeft_1">'+
				'<div class="box1" id="box1">'+
					'<a href="#"><img src=""></a>'+
					'<a href="#"><h2></h2></a>'+
				'</div>'+
				'<div class="box2" id="box2"></div>'+
				'<div class="box3" id="box3">'+
					'<span><i></i> 好笑</span>'+
					'<span>•</span>'+
					'<a href="#"><i></i> 评论</a>'+
				'</div>'+
				'<div class="box4" id="box4">'+
					'<ul>'+
						'<a href="#"><i></i></a>'+
						'<a href="#"><i></i></a>'+
						'<a href="#"><i></i></a>'+
					'</ul>'+
				'</div>'+
				'<div class="box5" id="box5">'+
					'<a href="#"></a>'+
					'<a href="#"></a>'+
					'<a href="#"></a>'+
					'<a href="#"></a>'+
				'</div>'+
			'</div>');

	function donload(num,num2){
		$.get('info.json', function(result) {
				debugger;
			    var obj = result;
			
				for(var i = num; i <= num2; i++){

				var ele = dom.clone();
				var data = obj.data[i];

				ele.find('img').attr("src", data.src);
				ele.find('h2').text(data.username);
				ele.find('.box2').text(data.content);
				ele.find(".box3>span>i").text(data.number1);
				ele.find(".box3>a>i").text(data.number2);
				$("#contentLeft").prepend(ele);
			}
			console.log(data)

		});
	};

	donload(0,7);
	
	$(".box6>a").eq(1).click(function(){
			$(".box6>a").eq(0).css({"background":"#fff","color":"#666"});
			$(this).css({"background":"#FFAA14","color":"#fff"});
			$(".contentLeft_1").remove();

			donload(8,15);
		});
	$(".box6>a").eq(2).click(function(){
			$(".box6>a").eq(0).css({"background":"#fff","color":"#666"});
			$(".box6>a").eq(1).css({"background":"#FFAA14","color":"#fff"});
			$(".contentLeft_1").remove();

			donload(8,15);
		});
	$(".box6>a").eq(0).click(function(){
			$(".box6>a").eq(1).css({"background":"#fff","color":"#666"});
			$(this).css({"background":"#FFAA14","color":"#fff"});
			$(".contentLeft_1").remove();

			donload(0,7);
		});

	
})