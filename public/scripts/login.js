"use strict";require(["../scripts/config.js"],function(){require(["jquery","public","jqcookie"],function(l,e,r){e(),l("#register").click(function(){var e=l("#username").val(),r=l("#password").val(),t=l("#passwordDone").val(),o=l("#CAPTCHA").val(),s=l("#tel").val(),i=l("#messageCode").val();if(r==t&1==/^[a-zA-Z0-9_-]{4,16}$/.test(e)&1==/^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/.test(r)&1==/[a-z]{4}/.test(o)&1==/^1[34578]\d{9}$/.test(s)&1==/\d{4}/.test(i)){var a;if(l.cookie("per_infro"),(a=null==l.cookie("per_infro")?[]:JSON.parse(l.cookie("per_infro"))).length<1)a.push({username:e,password:r,tel:s}),alert("恭喜你注册成功");else{var n=!0;l.each(a,function(e,r){r.tel==s&&(alert("该手机号码已注册请登录"),n=!1)}),n&&(a.push({username:e,password:r,tel:s}),console.log(l("input")),alert("恭喜你注册成功"))}l.cookie("per_infro",JSON.stringify(a))}else alert("信息填写不正确，请重新填写，具体哪个地方不正确我就不判断了，留点时间做其他功能");l(".login-right input:not(:button)").val("")})})});