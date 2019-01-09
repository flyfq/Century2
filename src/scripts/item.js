require(["../scripts/config.js"],function(){
	require(["jquery","public"],function($,pub){
		pub();
		$(".details-images dl dd ul li").click(function(){
			$(this).addClass("active").siblings().removeClass("active")
			var $index = $(this).index()
			$(".details-images dl dt .smallimg img").eq($index).show().siblings().hide()
		
		})
		
		
		$(".details-images dl dt").mousemove(function(e){
					
					var xpos = e.pageX-$(this).offset().left-$(".movebox").width()/2
					var ypos = e.pageY-$(this).offset().top-$(".movebox").height()/2				
// 					$(".movebox").width($(".bigimg").width()/$(".bigimg img").width()*$(".smallimg").width())
// 					$(".movebox").height($(".bigimg").height()/$(".bigimg img").height()*$(".smallimg").height())
					
					$(".movebox").show().css({
						top: Math.min(Math.max(0,ypos),$(this).height()-$(".movebox").height()) +"px",
						left: Math.min(Math.max(0,xpos),$(this).width()-$(".movebox").width()) +"px"
					})
					$(".bigimg").show()
					$(".bigimg img").attr("src",$(".smallimg img:visible").attr("src"))  //设置src，其实这个很简单，花了一天的时候，其实只要用visible这个方法就好了
					console.log( $(".smallimg img:visible").attr("src"))
					
					var scale = $(".bigimg").width()/$(".details-images dl dt").width()
					
					$(".bigimg img").css({
						left:-$(".movebox").position().left*scale,
						top:-$(".movebox").position().top*scale
					})
					
				})
				
				$(".details-images dl dt").mouseout(function(){
					$(".movebox").hide()
					$(".bigimg").hide()
				})
		
		
			
		
		
	
	})
})