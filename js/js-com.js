$(document).ready(function(){
	// 动画效果 每隔3个
	$('.wowlist2 .wow').each(function() {
	    var num = $(this).index();
	    var rem = num % 2;
	    if (rem == 0) {
	        $(this).attr("data-wow-delay","0.1s");
	    } else if(rem == 1) {
	        $(this).attr("data-wow-delay","0.2s");
	    }
	});
	$('.wowlist3 .wow').each(function() {
	    var num = $(this).index();
	    var rem = num % 3;
	    if (rem == 0) {
	        $(this).attr("data-wow-delay","0.1s");
	    } else if(rem == 1) {
	        $(this).attr("data-wow-delay","0.2s");
	    } else if(rem == 2) {
	        $(this).attr("data-wow-delay","0.3s");
	    }
	});
	$('.wowlist4 .wow').each(function() {
	    var num = $(this).index();
	    var rem = num % 4;
	    if (rem == 0) {
	        $(this).attr("data-wow-delay","0.1s");
	    } else if(rem == 1) {
	        $(this).attr("data-wow-delay","0.2s");
	    } else if(rem == 2) {
	        $(this).attr("data-wow-delay","0.3s");
	    }else if(rem == 3) {
	        $(this).attr("data-wow-delay","0.4s");
	    }
	});
	$('.wowlist5 .wow').each(function() {
	    var num = $(this).index();
	    var rem = num % 5;
	    if (rem == 0) {
	        $(this).attr("data-wow-delay","0.1s");
	    } else if(rem == 1) {
	        $(this).attr("data-wow-delay","0.2s");
	    } else if(rem == 2) {
	        $(this).attr("data-wow-delay","0.3s");
	    }else if(rem == 3) {
	        $(this).attr("data-wow-delay","0.4s");
	    }else if(rem == 4) {
	        $(this).attr("data-wow-delay","0.5s");
	    }
		
	});
	
	$('.wowlist .wow').each(function(index) {
		var that = $(this).index() + 1
		 $(this).attr("data-wow-delay", (that/10)+'s');
	});
	
	var wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animated',
		offset: 20,
		mobile: true,
		live: true
	});
	wow.init();
})

document.onreadystatechange = function(){
	console.log(document.readyState);
	if(document.readyState == 'complete'){
		setTimeout(function(){
			$('.loaderbg').fadeOut();
			$("header").removeClass("hidd")
		}, 500);
	}
	setTimeout(function(){
		$('.loaderbg').fadeOut();
		$("header").removeClass("hidd")
	}, 3000);
}

//图片自适应
function setimg(obj, maxw, maxh)
{
	var imgw = jQuery(obj).width();
	var imgh = jQuery(obj).height();
	
	var imgbfb = (imgh/imgw)*100;
	if(imgbfb > maxh){
		ww = (maxh/imgh)*imgw;
		imgw = ww+'%';
		imgh = 100+'%';
		tops = 0;
		left = (100-ww)/2+'%';
	}else{
		hh = (((imgh/imgw)*maxw)/maxh)*maxw;
		imgw = 100+'%';
		imgh = hh+'%';
		tops = (100-hh)/2+'%';
		left = 0;
	}
	jQuery(obj).css({"width":imgw,"height":imgh,"top":tops,"left":left});
}

