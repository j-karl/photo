$(function(){

	// for(var i=0;i<50;i++){
	// 	var w = Math.floor(Math.random()*20+10);
	// 	var r = Math.floor(Math.random()*256);
	// 	var g = Math.floor(Math.random()*256);
	// 	var b = Math.floor(Math.random()*256);
	// 	var div = $("<div>")
	// 	.addClass("yuan")
	// 	.addClass(function(){
	// 		if(Math.random()>0.5){
	// 			return "zuo";
	// 		}else{
	// 			return "you";
	// 		}
	// 	})
	// 	.width(w)
	// 	.height(w)
	// 	.css({
	// 		top:Math.floor(Math.random()*600),
	// 		left:Math.floor(Math.random()*800),
	// 		background:'rgba('+r+','+g+','+b+',0.8)'
	// 	});

	// 	$(".box1").append(div);
	// }
	


	// $(".box1 .yuan").on("click",function(){
	// 	$(this).toggleClass("selected");
	// 	if($(this).hasClass("selected")){
	// 		$(this).css('background','red');
	// 		$(this).attr('color',$(this).css('background'));
	// 	}else{
	// 		$(this).css('background',$(this).attr('color'));
	// 	}

	// })

	// $(".box1 .yuan").on("mousedown",function(e){
	// 	var ev = e || window.event;
	// 	e.preventDefault();
	//  	ox = ev.offsetX;
	//  	oy = ev.offsetY;
	//  	$(this).removeAttr("transform");
	//  	$(this).on("mousemove",function(e){
	//  		var that = this;
	//  		var ev = e || window.event;
	// 	 	var cx = ev.clientX;
	// 	 	var cy = ev.clientY;
	// 	 	// console.log($(that));
	//  		$(this).css({
	//  			left:cx-ox-(offset(this).left-this.offsetLeft),
	//  			top:cy-oy-(offset(this).top-this.offsetTop)
	//  		});
	//  		console.log($(this).css('left'));
	//  		// console.log(this);
	//  	});
	//  	$(this).on("mouseup",function(){

	//  	})
	// })
	// $(document).on("keydown",function(e){
	// 	if(e.keyCode === 13){
	// 		$('.selected').removeClass('zuo you').appendTo($('.box1 .hezi'));
	// 	}
	// 	if(e.keyCode === 37){
	// 		$('.zuo').wrap('<div class="wrap"></div>');
	// 		$('.wrap').each(function(){
	// 			var yuan = $(this).find('.zuo');
	// 			var weizhi = yuan.position();
	// 			// console.log(yuan);
	// 			yuan.css({left:0,top:0});
	// 			$(this).css({
	// 				width:yuan.width(),
	// 				height:yuan.height(),
	// 				left:weizhi.left,
	// 				top:weizhi.top
	// 			});
	// 		});
	// 	}
	// 	if(e.keyCode === 46){
	// 		if($('#abc ~ div').hasClass('selected')){
	// 			$('#abc ~ div').filter('.selected').remove();
	// 		}
	// 	}
	// });


	var arr = [
		{img:"img/9.jpg",link:"www.baidu.com"},
		{img:"img/10.jpg",link:"www.hao123.com"},
		{img:"img/11.jpg",link:"www.qq.com"},
		{img:"img/12.jpg",link:"www.163.com"},
		{img:"img/13.jpg",link:"www.sina.com"},
		{img:"img/14.jpg",link:"www.baidu.com"},
		{img:"img/15.jpg",link:"www.163.com"},
		{img:"img/16.jpg",link:"www.qq.com"}
	];
	$(".products .button").on("click",function(){
		$(".products img").attr("src",function(i,oldsrc){
			return arr[i].img;
		});
		$(".products a").attr("href",function(i,oldsrc){
			return arr[i].link;
		})

	});


	// $("#checkall").on("click",function(){
	// 	$(".table tbody input:checkbox").prop("checked",$(this).prop("checked"));
	// });
	// $(".table tbody input:checkbox").on("click",function(){
	// 	var len = $(".table tbody input:checkbox").length;
	// 	if($(".table tbody input:checked").length === len){
	// 		$("#checkall").prop("checked",true);
	// 	}else{
	// 		$("#checkall").prop("checked",false);
	// 	}
	// })



	// $(".search").on("keyup",function(){
	// 	var key = $(this).val();
	// 	$("tbody tr").removeClass("hide");
	// 	if(key === ''){
	// 		return;
	// 	}
	// 	$("tbody tr").not(":contains("+key+")").addClass("hide");
	// });


	// // setInterval(function(){
	// 	$(".music").height(function(){
	// 		return Math.floor(Math.random()*300+100);
	// 	});
	// 	// $(".music").
	// // },200);

	$(".products li").on("click",function(e){
		e.preventDefault();
		$(".cart").addClass("show");
		$(".cart img").attr("src",$(this).find("img").attr("src"));
		$(".cart").attr("data_id",$(this).index());
		var index = parseInt($(".cart").attr("data_id"));

		$(".cart").on("mousedown",function(e){
			e.preventDefault();
		});

		$(".cart").on("click",function(e){
			var widths = parseInt(document.documentElement.clientWidth/2);
			if(e.clientX>widths){
				index += 1;
			}else{
				index -= 1;
			}
			if(index === $(".products li").length){	
				var last = document.getElementById("last");
				animate(last,{display:"block"});
					setTimeout(function(){
						animate(last,{display:"none"});
					},1500);
				return;
			}else if(index === -1){
					var first = document.getElementById("first");
					animate(first,{display:"block"});
						setTimeout(function(){
							animate(first,{display:"none"});
						},1500);
						index = $(".products img").length-1;
					return;
			}
			$('.cart').attr('data-id',index);
			$(".cart img").attr("src",$(".products img").eq(index).attr("src"));
		})
	})

	$(".cart .close").on("click",function(e){
		e.stopPropagation();
		$(".cart").removeClass("show");
	});



	$('.l1').on('mouseenter',function(e){
		e.stopPropagation();
		$('.l1').stop().animate({width:'500px',height:'471px'},200);
		$('.l2').stop().animate({width:'335px',height:'228px',left:'515px',top:'0px'},200);
		$('.l3').stop().animate({width:'335px',height:'228px',left:'865px',top:'0px'},200);
		$('.l4').stop().animate({width:'218px',height:'228px',left:'515px',top:'243px'},200);
		$('.l5').stop().animate({width:'218px',height:'228px',left:'748px',top:'243px'},200);
		$('.l6').stop().animate({width:'218px',height:'228px',left:'981px',top:'243px'},200);
	});
	$('.l1').on('mouseleave',function(){
		$('.l1').stop().animate({width:'390px',height:'228px',left:'0',top:'0'},200);
		$('.l2').stop().animate({width:'390px',height:'228px',left:'405px',top:'0px'},200);
		$('.l3').stop().animate({width:'390px',height:'228px',left:'810px',top:'0px'},200);
		$('.l4').stop().animate({width:'390px',height:'228px',left:'0px',top:'243px'},200);
		$('.l5').stop().animate({width:'390px',height:'228px',left:'405px',top:'243px'},200);
		$('.l6').stop().animate({width:'390px',height:'228px',left:'810px',top:'243px'},200);
	});
	$(".l2").mouseover(function(event){
		$(".l1").stop(true,true).animate({width:"390px",height:"228px",left:"0px",top:"0px"},200);
		$(".l2").stop(true,true).animate({width:"500px",height:"471px"},200);
		$(".l3").stop(true,true).animate({width:"280px",height:"228px",left:"920px",top:"0px"},200);
		$(".l4").stop(true,true).animate({width:"187px",height:"228px",left:"0px",top:"243px"},200);
		$(".l5").stop(true,true).animate({width:"188px",height:"228px",left:"203px",top:"243px"},200);
		$(".l6").stop(true,true).animate({width:"280px",height:"228px",left:"920px",top:"243px"},200);
		        event.stopPropagation();    //  阻止事件冒泡

	})
	$(".l2").mouseout(function(event){
		$(".l1").stop(true,true).animate({width:"390px",height:"228px",left:"0px",top:"0px"},200);
		$(".l2").stop(true,true).animate({width:"390px",height:"228px",left:"405px",top:"0px"},200);
		$(".l3").stop(true,true).animate({width:"390px",height:"228px",left:"810px",top:"0px"},200);
		$(".l4").stop(true,true).animate({width:"390px",height:"228px",left:"0px",top:"243px"},200);
		$(".l5").stop(true,true).animate({width:"390px",height:"228px",left:"405px",top:"243px"},200);
		$(".l6").stop(true,true).animate({width:"390px",height:"228px",left:"810px",top:"243px"},200);
	})

	$(".l3").mouseover(function(event){
		$(".l3").stop(true,true).animate({width:"500px",height:"471px",left:"700",top:"0px"},300);
		$(".l1").stop(true,true).animate({width:"335px",height:"228px",left:"0px",top:"0px"},200);
		$(".l2").stop(true,true).animate({width:"335px",height:"228px",left:"350px",top:"0px"},200);
		$(".l4").stop(true,true).animate({width:"218px",height:"228px",left:"0px",top:"243px"},200);
		$(".l5").stop(true,true).animate({width:"218px",height:"228px",left:"233px",top:"243px"},200);
		$(".l6").stop(true,true).animate({width:"218px",height:"228px",left:"466px",top:"243px"},200);
		        event.stopPropagation();    //  阻止事件冒泡
	})
	$(".l3").mouseout(function(event){
		$(".l1").stop(true,true).animate({width:"390px",height:"228px",left:"0px",top:"0px"},200);
		$(".l2").stop(true,true).animate({width:"390px",height:"228px",left:"405px",top:"0px"},200);
		$(".l3").stop(true,true).animate({width:"390px",height:"228px",left:"810px",top:"0px"},200);
		$(".l4").stop(true,true).animate({width:"390px",height:"228px",left:"0px",top:"243px"},200);
		$(".l5").stop(true,true).animate({width:"390px",height:"228px",left:"405px",top:"243px"},200);
		$(".l6").stop(true,true).animate({width:"390px",height:"228px",left:"810px",top:"243px"},200);
	})

	$(".lest .l4").mouseover(function(event){
		$(".l4").stop(true,true).animate({width:"500px",height:"471px"},200);
		$(".l5").stop(true,true).animate({width:"335px",height:"228px",left:"515px",top:"243px"},200);
		$(".l6").stop(true,true).animate({width:"335px",height:"228px",left:"865px",top:"243px"},200);
		$(".l7").stop(true,true).animate({width:"218px",height:"228px",left:"515px",top:"486px"},200);
		$(".l8").stop(true,true).animate({width:"218px",height:"228px",left:"748px",top:"486px"},200);
		$(".l9").stop(true,true).animate({width:"218px",height:"228px",left:"981px",top:"486px"},200);
		event.stopPropagation();
	})
	$(".l4").mouseout(function(event){
		$(".l4").stop(true,true).animate({width:"390px",height:"228px",left:"0px",top:"243px"},200);
		$(".l5").stop(true,true).animate({width:"390px",height:"228px",left:"405px",top:"243px"},200);
		$(".l6").stop(true,true).animate({width:"390px",height:"228px",left:"810px",top:"243px"},200);
		$(".l7").stop(true,true).animate({width:"390px",height:"228px",left:"0px",top:"486px"},200);
		$(".l8").stop(true,true).animate({width:"390px",height:"228px",left:"405px",top:"486px"},200);
		$(".l9").stop(true,true).animate({width:"390px",height:"228px",left:"810px",top:"486px"},200);
	})


	$(".l5").mouseover(function(event){
		$(".l4").stop(true,true).animate({width:"390px",height:"228px",left:"0px",top:"243px"},200);
		$(".l5").stop(true,true).animate({width:"500px",height:"471px"},200);
		$(".l6").stop(true,true).animate({width:"280px",height:"228px",left:"920px",top:"243px"},200);
		$(".l7").stop(true,true).animate({width:"187px",height:"228px",left:"0px",top:"486px"},200);
		$(".l8").stop(true,true).animate({width:"188px",height:"228px",left:"203px",top:"486px"},200);
		$(".l9").stop(true,true).animate({width:"280px",height:"228px",left:"920px",top:"486px"},200);
		        event.stopPropagation();

	})
	$(".l5").mouseout(function(event){
		$(".l4").stop(true,true).animate({width:"390px",height:"228px",left:"0px",top:"243px"},200);
		$(".l5").stop(true,true).animate({width:"390px",height:"228px",left:"405px",top:"243px"},200);
		$(".l6").stop(true,true).animate({width:"390px",height:"228px",left:"810px",top:"243px"},200);
		$(".l7").stop(true,true).animate({width:"390px",height:"228px",left:"0px",top:"486px"},200);
		$(".l8").stop(true,true).animate({width:"390px",height:"228px",left:"405px",top:"486px"},200);
		$(".l9").stop(true,true).animate({width:"390px",height:"228px",left:"810px",top:"486px"},200);
	})
	
	//l6
	$(".l6").mouseover(function(event){
		$(".l6").stop(true,true).animate({width:"500px",height:"471px",left:"700",top:"243px"},200);
		$(".l4").stop(true,true).animate({width:"335px",height:"228px",left:"0px",top:"243px"},200);
		$(".l5").stop(true,true).animate({width:"335px",height:"228px",left:"350px",top:"243px"},200);
		$(".l7").stop(true,true).animate({width:"218px",height:"228px",left:"0px",top:"486px"},200);
		$(".l8").stop(true,true).animate({width:"218px",height:"228px",left:"233px",top:"486px"},200);
		$(".l9").stop(true,true).animate({width:"218px",height:"228px",left:"466px",top:"486px"},200);
		        event.stopPropagation();
		
		
	})
	$(".l6").mouseout(function(event){
		$(".l4").stop(true,true).animate({width:"390px",height:"228px",left:"0px",top:"243px"},200);
		$(".l5").stop(true,true).animate({width:"390px",height:"228px",left:"405px",top:"243px"},200);
		$(".l6").stop(true,true).animate({width:"390px",height:"228px",left:"810px",top:"243px"},200);
		$(".l7").stop(true,true).animate({width:"390px",height:"228px",left:"0px",top:"486px"},200);
		$(".l8").stop(true,true).animate({width:"390px",height:"228px",left:"405px",top:"486px"},200);
		$(".l9").stop(true,true).animate({width:"390px",height:"228px",left:"810px",top:"486px"},200);
	})


})



function offset(obj){
	var result = {left:0,top:0};
	var arr = [];
	arr.push(obj);
	var parent = obj.parentNode;
	while(parent.nodeName!="BODY"){
		if(getStyle(parent,"position")=="relative" || getStyle(parent,"position")=="absolute"){
			arr.push(parent);
		}
		parent = parent.parentNode;
	}

	//开始计算
	for(var i=0;i<arr.length;i++){
		var borderWidth = getStyle(arr[i],"borderLeftWidth")?parseInt(getStyle(arr[i],"borderLeftWidth")):0;
		var borderTop = getStyle(arr[i],"borderTopWidth")?parseInt(getStyle(arr[i],"borderTopWidth")):0;
		// var borderTop = getStyle(arr[i],"borderTopWidth");
		// console.log(borderTop);

		if(i==0){
			borderWidth = 0;
			borderTop = 0;
		}

		result.left += arr[i].offsetLeft+borderWidth;
		result.top += arr[i].offsetTop+borderTop;

		
	}


	return result;
}
function getStyle(obj,arrt){
	if(obj.currentStyle){
		//ie6~8
		// alert(1+"ie");
		return obj.currentStyle[arrt];
	}else{
		//w3c
		// alert(2+"w3c");
		return getComputedStyle(obj,null)[arrt];
	}
}