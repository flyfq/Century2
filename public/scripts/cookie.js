"use strict";define([],function(){return{setCookie:function(e,t,o){var i=new Date;i.setDate(i.getDate()+o),document.cookie=e+"="+t+";expires="+i},removeCookie:function(e){setCookie(e,1,-1)},getCookie:function(e){for(var t=document.cookie.split("; "),o=0;o<t.length;o++)if(t[o].split("=")[0]==e)return t[o].split("=")[1];return""}}});