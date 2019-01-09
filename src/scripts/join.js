require(["../scripts/config.js"],function(){
	require(["jquery","public","jqcookie"],function($,pub,jqcok){
		
		pub();
		var peopleinfro = JSON.parse($.cookie("per_infro")) 
		console.log($.cookie("per_infro"))
		
		$("#join").click(function(){
			for(var i = 0;i<peopleinfro.length;i++){
				if($("#username").val()==peopleinfro[i].username & $("#password").val()== peopleinfro[i].password){
					alert("登录成功")
					
					break;
				}else{
					alert("该用户名不存在，请注册")
					break;
				}
			}
			$("#username").val("")
			$("#password").val("")
			
		})
		
	
	})
})