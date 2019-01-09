
require(["../scripts/config.js"], function(){
	require(["jquery","public","jqcookie"], function($,pub,jqcok){
	
	pub();
	
	
	$("#register").click(function(){
		var $username =$("#username").val()
		var $password =$("#password").val()
		var $passwordDone =$("#passwordDone").val()
		var $CAPTCHA =$("#CAPTCHA").val()
		var $tel=$("#tel").val()
		var $messageCode=$("#messageCode").val()
		
		var reg1=/^[a-zA-Z0-9_-]{4,16}$/;
		var reg2= /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
		var reg3 = /[a-z]{4}/;
		var reg4=/^1[34578]\d{9}$/;
		var reg5 = /\d{4}/
		if($password== $passwordDone &reg1.test($username)==true&reg2.test($password)==true&reg3.test($CAPTCHA)==true&reg4.test($tel)==true&reg5.test($messageCode)==true){
			$.cookie("per_infro")
			var _perinfro
			if($.cookie("per_infro")==undefined){
				_perinfro = []
			}else{
				_perinfro = JSON.parse($.cookie("per_infro"))
			}
			
			if(_perinfro.length<1){
				_perinfro.push({
				username:$username,
				password:$password,
				tel:$tel
			})
			
			alert("恭喜你注册成功")
			
			}else{
				var onOff = true;
				$.each(_perinfro,function(index,value){
					if(value.tel == $tel ){
						alert("该手机号码已注册请登录")
						onOff=false
					}
				})
				if(onOff){
					_perinfro.push({
					username:$username,
					password:$password,
					tel:$tel
					})
					console.log($("input"))
					alert("恭喜你注册成功")
					
				}  
			}
			$.cookie("per_infro",JSON.stringify(_perinfro))
			// console.log(JSON.stringify(_perinfro))
			
		}else{
			alert("信息填写不正确，请重新填写，具体哪个地方不正确我就不判断了，留点时间做其他功能")
		}
		
		$(".login-right input:not(:button)").val("")
		
	})
		
	})
})
