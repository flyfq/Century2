
require(["../scripts/config.js"], function(){
	require(["common","jquery","swiper","public"], function(com, $, Swiper,pub){
		pub();
// 		$(".header-right").mousemove(function(){
// 			$(".productnotice").show()
// 		})
// 		
// 		$(".header-right").mouseout(function(){
// 			$(".productnotice").hide()
// 		})
// 		
		// 轮播图swiper插件
		var mySwiper = new Swiper('.swiper-container', {
		autoplay:true,
		loop : true,
		effect : 'fade',
		pagination: {
    el: '.swiper-pagination',
  },
		});
		
			var dar = {
				"channel": [
				{
				"text": "首页",
				"href": "http://www.sjgo365.com"
				},
				{
				"text": "电器馆",
				"href": "http://www.sjgo365.com/zt/hd/eahome"
				},
				{
				"text": "车管家",
				"href": "http://www.sjgo365.com/zt/hd/atgthome"
				},
				{
				"text": "美妆馆",
				"href": "http://www.sjgo365.com/zt/hd/mzg1"
				},
				{
				"text": "母婴馆",
				"href": "http://www.sjgo365.com/zt/hd/myg2018"
				},
				{
				"text": "食品保健馆",
				"href": "http://www.sjgo365.com/zt/hd/spbjg2018"
				},
				{
				"text": "大牌街",
				"href": "http://www.sjgo365.com/BrandStreet/Brands"
				}
				]
			}
		 
			for(var i =0;i<$(".nav-center ul li a").length;i++){
				$(".nav-center ul li a")[i].innerHTML = dar.channel[i].text
				$(".nav-center ul li a")[i].href = dar.channel[i].href
			} 
			
// 	// 导航的数据处理		
// 			var categories = [
// 				{
// 				"category": "母婴儿童",
// 				"cateItems": [
// 				{
// 				"text": "奶粉",
// 				"href": "http://www.sjgo365.com/Products/Search?keyWord=奶粉"
// 				},
// 				{
// 				"text": "纸尿裤",
// 				"href": "http://www.sjgo365.com/Products/Search?keyWord=纸尿裤"
// 				},
// 				{
// 				"text": "拉拉裤",
// 				"href": "http://www.sjgo365.com/Products/Search?keyWord=拉拉裤"
// 				},
// 				{
// 				"text": "营养辅食",
// 				"href": "http://www.sjgo365.com/Products/Search?keyWord=营养辅食"
// 				},
// 				{
// 				"text": "宝宝用品",
// 				"href": "http://www.sjgo365.com/Products/Search?keyWord=宝宝用品"
// 				},
// 				{
// 				"text": "孕妈必备",
// 				"href": "http://www.sjgo365.com/Products/Search?keyWord=孕妈必备"
// 				}
// 				]
// 				},
// 				{
// 				"category": "美容彩妆",
// 				"cateItems": [
// 				{
// 				"text": "护肤",
// 				"href": "http://www.sjgo365.com/Products/Search?keyWord=护肤"
// 				},
// 				{
// 				"text": "洁面/卸妆",
// 				"href": "http://www.sjgo365.com/Products/Search?keyWord=洁面卸妆"
// 				},
// 				{
// 				"text": "面膜",
// 				"href": "http://www.sjgo365.com/Products/Search?keyWord=面膜"
// 				},
// 				{
// 				"text": "乳液/面霜",
// 				"href": "http://www.sjgo365.com/Products/Search?keyWord=乳液面霜"
// 				},
// 				{
// 				"text": "彩妆",
// 				"href": "http://www.sjgo365.com/Products/Search?keyWord=彩妆"
// 				}
// 				]
// 				},
// 				{
// 				"category": "家居个护",
// 				"cateItems": [
// 				{
// 				"text": "洗护日用",
// 				"href": "http://www.sjgo365.com/Products/Search?keyWord=洗护日用"
// 				},
// 				{
// 				"text": "女性护理",
// 				"href": "http://www.sjgo365.com/Products/Search?keyWord=女性护理"
// 				},
// 				{
// 				"text": "其他个护",
// 				"href": "http://www.sjgo365.com/Products/Search?keyWord=其他个护"
// 				},
// 				{
// 				"text": "居家用品",
// 				"href": "http://www.sjgo365.com/Products/Search?keyWord=居家用品"
// 				},
// 				{
// 				"text": "宠物生活",
// 				"href": "http://www.sjgo365.com/Products/Search?keyWord=宠物生活"
// 				}
// 				]
// 				},
// 				{
// 				"category": "食品保健",
// 				"cateItems": [
// 				{
// 				"text": "生鲜",
// 				"href": "http://www.sjgo365.com/Products/Search?keyWord=生鲜"
// 				},
// 				{
// 				"text": "营养补充",
// 				"href": "http://www.sjgo365.com/Products/Search?keyWord=营养补充"
// 				},
// 				{
// 				"text": "健康养护",
// 				"href": "http://www.sjgo365.com/Products/Search?keyWord=健康养护"
// 				},
// 				{
// 				"text": "女性保养",
// 				"href": "http://www.sjgo365.com/Products/Search?keyWord=女性保养"
// 				},
// 				{
// 				"text": "关爱老年",
// 				"href": "http://www.sjgo365.com/Products/Search?keyWord=关爱老年"
// 				},
// 				{
// 				"text": "进口食品",
// 				"href": "http://www.sjgo365.com/Products/Search?keyWord=进口食品"
// 				}
// 				]
// 				},
// 				{
// 				"category": "电器馆",
// 				"cateItems": [
// 				{
// 				"text": "冰洗馆",
// 				"href": "http://www.sjgo365.com/zt/hd/eafridge"
// 				},
// 				{
// 				"text": "彩电馆",
// 				"href": "http://www.sjgo365.com/zt/hd/eatv"
// 				},
// 				{
// 				"text": "厨卫馆",
// 				"href": "http://www.sjgo365.com/zt/hd/eakitchen"
// 				},
// 				{
// 				"text": "空调馆",
// 				"href": "http://www.sjgo365.com/zt/hd/eaac"
// 				},
// 				{
// 				"text": "小家电",
// 				"href": "http://www.sjgo365.com/zt/hd/ealive"
// 				},
// 				{
// 				"text": "数码馆",
// 				"href": "http://www.sjgo365.com/zt/hd/eadigit"
// 				}
// 				]
// 				}
// 				]
// 				
// 				   var goodlist = []
// 					for(let i = 0;i<categories.length;i++){
// 						var oh4 = document.createElement("h4")
// 						$(".nav-left ul li")[i].append(oh4)
// 						$(".nav-left ul li h4")[i].innerHTML = categories[i].category
// 						for(let j= 0;j<categories[i].cateItems.length;j++){
// 							goodlist.push(categories[i].cateItems[j])
// 							var oa = document.createElement("a")
// 							$(".nav-left ul li")[i].append(oa)		
// 						}
// 					}
// 					
// 				for(var i=0;i<goodlist.length;i++){
// 					$(".nav-left ul li a")[i].innerHTML = goodlist[i].text
// 					$(".nav-left ul li a")[i].href = goodlist[i].href
// 				}	
// 
			// 轮播图
				var sliderjson =[
						{
						"text": "12.12主会场",
						"src": "../images/twelvemain.jpg",
						"href": "/zt/hd/dtwelvemain",
						"startTime": "2018/12/07 00:00:00",
						"endTime": "2018/12/17 00:00:00"
						},
						{
						"text": "12.12美妆",
						"src": "../images/caizhuang.jpg",
						"href": "/zt/hd/dtwelvebeauty",
						"startTime": "2018/12/07 00:00:00",
						"endTime": "2018/12/17 00:00:00"
						},
						{
						"text": "12.12母婴",
						"src": "../images/twelvebaby.jpg",
						"href": "/zt/hd/dtwelvebaby",
						"startTime": "2018/12/07 00:00:00",
						"endTime": "2018/12/17 00:00:00"
						},
						{
						"text": "12.12食品",
						"src": "../images/twelvefood.jpg",
						"href": "/zt/hd/dtwelvefood",
						"startTime": "2018/12/07 00:00:00",
						"endTime": "2018/12/17 00:00:00"
						},
						{
						"text": "12.12个护家居",
						"src": "../images/twelvehouse.jpg",
						"href": "/zt/hd/dtwelvehouse",
						"startTime": "2018/12/07 00:00:00",
						"endTime": "2018/12/17 00:00:00"
						},
						{
						"text": "新会员首单福利",
						"src": "../images/newmembers.jpg",
						"href": "/zt/hd/newmembers",
						"startTime": "2018/11/12 00:00:00",
						"endTime": "2019/11/19 00:00:00"
						}
						]    
						
						// var str =""
						for(var i=0;i<sliderjson.length;i++){
							
							var oa = document.createElement("a")
							var oimg = document.createElement("img")
									oa.append(oimg)
							$(".swiper-wrapper .swiper-slide")[i].append(oa)
							// $(".swiper-wrapper .swiper-slide a")[i].append(oimg)
							$(".swiper-wrapper .swiper-slide a")[i].href=sliderjson[i].href
							$(".swiper-wrapper .swiper-slide a img")[i].src=sliderjson[i].src	
							
							 // str = str +`<div class="swiper-slide"><a href="${sliderjson[i].href}"><img src="${sliderjson[i].src}"/></a></div>`
						 
						}
						// $(".swiper-wrapper").append(str)
						
						
						// 全球优先限时抢
						var flashsale = [
											{
											"category": "大牌推荐",
											"products": [
											{
											"productID": "28450630",
											"productName": "日本SK-II精华露/青春露 230ml补水保湿控油提亮肤色（保税仓发货）",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											},
											{
											"productID": "21598234",
											"productName": "兰蔻小黑瓶精华肌底液 50ml（保税仓发货）",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											},
											{
											"productID": "22600799",
											"productName": "法国Lancome/兰蔻 清滢柔肤水 大粉水 400ml（保税仓发货）",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											},
											{
											"productID": "25278066",
											"productName": "倩碧卓越润肤乳200ml 有油黄油补水保湿乳液（保税仓发货）",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											},
											{
											"productID": "29505464",
											"productName": "日本资生堂盼丽风姿抗皱修护眼霜国际版15ml（保税仓发货）",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											},
											{
											"productID": "22429207",
											"productName": "圣罗兰方形蕾丝气垫粉底B10 15g（保税仓发货）",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											},
											{
											"productID": "27436874",
											"productName": "乔治阿玛尼漆光迷情唇釉黑管 人鱼姬色#502 6ml（保税仓发货）",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											},
											{
											"productID": "20485419",
											"productName": "纳斯丝绒雾面哑光唇膏笔 豆沙色#Dolce Vita 2.4g（保税仓发货）",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											},
											{
											"productID": "20900905",
											"productName": "纪梵希轻盈无痕明星四色散粉定妆粉#7（白色+粉色+米色+淡粉色）12g 遮瑕持妆（保税仓发货）",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											},
											{
											"productID": "22852752",
											"productName": "Marc Jacobs马克雅克布DAISY小雏菊女士香水50ml 女士淡香水清新持久（保税仓发货）",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											}
											]
											},
											{
											"category": "母婴儿童",
											"products": [
											{
											"productID": "20557952",
											"productName": "日本nepia妮飘Genki!更祺拉拉裤 L44【2件起发】（保税仓发货）",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											},
											{
											"productID": "25333698",
											"productName": "日本nepia妮飘Genki!更祺拉拉裤 M58【2件起发】（保税仓发货）",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											},
											{
											"productID": "29338800",
											"productName": "EG(edger) 爱德嘉拉拉裤XL28",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											},
											{
											"productID": "27179210",
											"productName": "爱婴舒坦（BioFities）天使系列 新版4号L号纸尿裤 美国原装进口（40片）",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											},
											{
											"productID": "20884004",
											"productName": "狮子座天使（Leo Angel） 护梦天使金装超薄透气干爽纸尿裤M号66（6-11kg）【两包起购】",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											},
											{
											"productID": "26108256",
											"productName": "狮子座天使（Leo Angel） 护梦天使金装超薄透气干爽纸尿裤L58（9-14kg）【两包起购】",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											},
											{
											"productID": "27802439",
											"productName": "德国CONCORD康科德ULTIMAX.3儿童安全座椅 0-4岁 红色(保税仓发货）",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											},
											{
											"productID": "28891077",
											"productName": "法国宝弘BOIRON布瓦宏宝宝金盏花面霜 20g（保税仓发货）",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											},
											{
											"productID": "23331147",
											"productName": "韩国Pororo宝露露小企鹅苹果味儿童牙膏 90g【2瓶起发】（保税仓发货）",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											},
											{
											"productID": "21863174",
											"productName": "德国 贝丽芭恩Bellybutton 宝宝滋润保湿身体乳250ml（保税仓发货）",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											}
											]
											},
											{
											"category": "进口奶粉",
											"products": [
											{
											"productID": "26370066",
											"productName": "德国Hipp BIO喜宝益生菌奶粉2+段 2035（2周岁以上宝宝）600g 【2盒起发】(保税仓发货)",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											},
											{
											"productID": "23579186",
											"productName": "荷兰Nutrilon牛栏奶粉3段(10-12个月宝宝) 800g(保税仓发货)",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											},
											{
											"productID": "25340192",
											"productName": "德国Aptamil爱他美奶粉2+段(24个月以上宝宝) 600g(保税仓发货)",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											},
											{
											"productID": "26270224",
											"productName": "荷兰Nutrilon牛栏奶粉6段(3岁以上）400g【2罐起发】（保税仓发货）",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											},
											{
											"productID": "20115939",
											"productName": "德国Aptamil爱他美奶粉1+段(12-24个月宝宝) 600g（保税仓发货）（2件起购）",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											},
											{
											"productID": "27748604",
											"productName": "德国Aptamil爱他美奶粉3段(10-12个月宝宝) 800g（保税仓发货）（2件起购）",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											},
											{
											"productID": "28512755",
											"productName": "新西兰A2 Platinum酪蛋白婴儿奶粉4段(3岁以上宝宝) 900g【2罐起发】（保税仓发货）",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											},
											{
											"productID": "24758824",
											"productName": "荷兰Hero Baby奶粉3段（10-12个月宝宝）800g(保税仓发货)",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											},
											{
											"productID": "26079382",
											"productName": "新西兰S26惠氏金装新生婴儿牛奶粉4段(2岁以上宝宝) 900g（产地：澳大利亚)【2罐起发】（保税仓发货） 新老包装随机发货",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											},
											{
											"productID": "26088224",
											"productName": "香港Friso美素佳儿Friso GOLD金装婴儿奶粉4段（3岁以上）900g（保税仓发货）",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											}
											]
											},
											{
											"category": "美妆护肤",
											"products": [
											{
											"productID": "27703380",
											"productName": "su:m37°苏秘37°臻选套装入门尝新礼盒（保湿啫喱霜20ml+精华露30ml）舒缓肌肤保湿补水滋润",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											},
											{
											"productID": "22927634",
											"productName": "韩国Whoo后秘贴焕然修护精华液礼盒5件套128ml（精华50ml+精华20ml+滋养液25ml+滋养液25ml+面霜8ml）",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											},
											{
											"productID": "22292431",
											"productName": "Bioderma/贝德玛 洁肤液卸妆水500ml粉水 原装进口(保税仓发货)",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											},
											{
											"productID": "20485419",
											"productName": "纳斯丝绒雾面哑光唇膏笔 豆沙色#Dolce Vita 2.4g（保税仓发货）",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											},
											{
											"productID": "25184718",
											"productName": "freeplus 芙丽芳丝净润洗面霜100g 深层清洁 氨基酸洗面奶",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											},
											{
											"productID": "20369458",
											"productName": "德国Balea芭乐雅玻尿酸浓缩精华安瓶（紫色） 1ml*7支（保税仓发货）",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											},
											{
											"productID": "22027490",
											"productName": "韩国兰芝Laneige 雪纱丝柔防晒隔离霜30ml（紫色） 妆前乳 防辐射 遮瑕 美白提亮（保税仓发货）",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											},
											{
											"productID": "21614352",
											"productName": "韩国Sulwhasoo雪花秀与润修护睡眠面膜120ml 补水保湿 免洗滋养 平衡养肤（保税仓发货）",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											},
											{
											"productID": "27097052",
											"productName": "泰国ANJERI蚕丝面膜10片金色保湿补水面膜收缩毛孔",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											},
											{
											"productID": "20185893",
											"productName": "韩国Mediheal/美迪惠尔 N.M.F水库保湿睡眠面膜 深层补水 15ml（保税仓发货）（5件起）",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											}
											]
											},
											{
											"category": "个护生活",
											"products": [
											{
											"productID": "21207708",
											"productName": "德国碧然德摩登系列滤水壶净水器 2.4L 白色（保税仓发货）",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											},
											{
											"productID": "28396794",
											"productName": "日本ZOJIRUSHI象印保温杯360ml 黑色（保税仓发货）",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											},
											{
											"productID": "28845301",
											"productName": "日本ZOJIRUSHI象印保温杯480ml 玫瑰红（保税仓发货）",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											},
											{
											"productID": "25232290",
											"productName": "日本YANAGIYA柳屋发根护发营养液 240ml（保税仓发货）",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											},
											{
											"productID": "22561285",
											"productName": "意大利东方宝石 土耳其香水沐浴露香氛精油沐浴乳250ml",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											},
											{
											"productID": "20340583",
											"productName": "德国LAMY 凌美钢笔一次性水芯墨胆T10 黑色 5支装（保税仓发货）2盒起购",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											},
											{
											"productID": "27109256",
											"productName": "英国Femfresh女性私处护理液洋甘菊味 250ml（保税仓发货）",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											},
											{
											"productID": "20474228",
											"productName": "保税区直发 日本P＆G宝洁碧浪bold洗衣凝珠18颗（浅蓝百合花香）",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											},
											{
											"productID": "22125766",
											"productName": "新西兰Red Seal红印 天然蜂胶牙膏 100g【2支起发】（保税仓发货）",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											},
											{
											"productID": "28230913",
											"productName": "日本ATSUGI厚木140D加厚连裤丝袜 L-LL 2双装（保税仓发货）",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											}
											]
											},
											{
											"category": "食品保健",
											"products": [
											{
											"productID": "24850606",
											"productName": "澳大利亚Blackmores澳佳宝深海鱼油胶囊 400粒/瓶（保税仓发货）",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											},
											{
											"productID": "24115330",
											"productName": "美国NORDIC NATURALS挪威小鱼儿童草莓味液体鱼油DHA 119ml【2件起购】(保税仓发货）",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											},
											{
											"productID": "25573678",
											"productName": "德国altapharma 泡腾片 香橙味20片(保税仓发货)",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											},
											{
											"productID": "22100806",
											"productName": "澳大利亚Nature's Way佳思敏 Kids Smart儿童维生素c+锌软糖 60粒 【2瓶起发】（保税仓发货）",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											},
											{
											"productID": "27965189",
											"productName": "澳大利亚DEVONDALE德运高钙脱脂成人儿童牛奶粉1KG（保税仓发货）（2件起购）",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											},
											{
											"productID": "27750953",
											"productName": "North Shore Fishery 北洋海产 野生毛鳞鱼(多春鱼)300g*3袋（顺丰快递）",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											},
											{
											"productID": "26947289",
											"productName": "倍禧澳洲牛嫩肩肉0.5kg（仅限重庆主城区域）",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											},
											{
											"productID": "22171542",
											"productName": "倍禧乌拉圭进口牛尾切段 0.5kg 原切草饲牛肉 牛尾骨炖汤食材（仅限重庆主城区域）",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											},
											{
											"productID": "28234044",
											"productName": "澳大利亚进口西冷牛排 真空盒装 1kg（仅限重庆主城区域）",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											},
											{
											"productID": "20003110",
											"productName": "格鲁庄园红葡萄酒750ml/瓶",
											"marketPrice": "1",
											"salePrice": "1",
											"productTag": "包邮",
											"storage": "1"
											}
											]
											}
											]
						var product=[
								{
								"productId": "707934860",
								"productName": "美国Nordic Naturals挪威小鱼 孕妇DHA深海鱼油软胶囊 孕期营养品 180粒 瓶装",
								"brandName": "美国挪威小鱼NORDIC NATURALS母婴膳食营养海外专场",
								"brandId": "3676711",
								"vSpuId": "8462339994606960640",
								"skuId": "8462339994606960643",
								"brandStoreSn": "10023018",
								"brandShowName": "Nordic Naturals",
								"sellTimeTo": "1545962340",
								"vipshopPrice": "260",
								"vipshopPriceSuff": "",
								"marketPrice": "480",
								"vipDiscount": "5.4折",
								"isNuke": 0,
								"newCatId": "74775",
								"smallImage": "http://a.vpimg2.com/upload/merchandise/pdc/8462339994606960640/d39fe4dd-153e-482a-86de-eeab269a7f0c/768990017483-5.jpg",
								"squareImage": "http://a.vpimg4.com/upload/merchandise/pdc/8462339994606960640/7245e56d-181e-46d4-81ca-be78c8293dea/768990017483-1.jpg",
								"preferSquare": 1,
								"type": 0,
								"isPrepay": 0,
								"isWarmup": 0,
								"isHaiTao": 1,
								"isPreSale": 0,
								"isIndependent": 0,
								"isMultiColor": 0,
								"isLoginAddCart": 0,
								"promotionPriceType": 0,
								"priceIconType": 0,
								"couponDisabled": 1,
								"showPriceType": 0,
								"warehouseMark": "唯品国际",
								"isMedicine": 0,
								"image3": "http://a.vpimg4.com/upload/merchandise/pdc/640/960/8462339994606960640/12/768990017483-3.jpg",
								"image7": "http://a.vpimg3.com/upload/merchandise/pdc/640/960/8462339994606960640/12/768990017483-7.jpg",
								"sellTimeFrom": "1544184000",
								"subTitle": "美国原装，孕妇及备孕人群适用，挪帝克孕产DHA系列，深海鱼类提炼，有助于胎儿眼脑神经发育及妈妈顺利生产。",
								"multiColorNum": 1,
								"isMixSaleStyle": 0,
								"saleStyle": 17,
								"sendByVendor": 0,
								"countryFlag": "http://d.vpimg1.com/upcb/2016/05/27/172/34242988.jpg",
								"featureLabel": "#热销爆款#",
								"featureLabelText": "榜单第1名",
								"fallingTagSn": ""
								},
								{
								"productId": "705697852",
								"productName": "【增强免疫】L'il Critters 儿童补充维生素C+锌+紫锥菊小熊糖 190粒",
								"brandName": "美国L'il Critters 小熊糖儿童营养海外专场",
								"brandId": "3676718",
								"vSpuId": "456347610727673858",
								"skuId": "456347610727673859",
								"brandStoreSn": "10028225",
								"brandShowName": "L'il Critters",
								"sellTimeTo": "1545962340",
								"vipshopPrice": "178",
								"vipshopPriceSuff": "",
								"marketPrice": "336",
								"vipDiscount": "5.3折",
								"isNuke": 0,
								"newCatId": "74776",
								"smallImage": "http://a.vpimg2.com/upload/merchandise/pdcimg/2018/11/06/154/72359471541473989873_5t.jpg",
								"squareImage": "http://a.vpimg4.com/upload/merchandise/pdcimg/2018/11/06/5/629520541541473989494.jpg",
								"preferSquare": 1,
								"type": 0,
								"isPrepay": 0,
								"isWarmup": 0,
								"isHaiTao": 1,
								"isPreSale": 0,
								"isIndependent": 0,
								"isMultiColor": 0,
								"isLoginAddCart": 0,
								"promotionPriceType": 0,
								"priceIconType": 0,
								"couponDisabled": 1,
								"showPriceType": 0,
								"warehouseMark": "保税仓直发",
								"isMedicine": 0,
								"sellTimeFrom": "1544184000",
								"subTitle": "科学配方，增强免疫防护线，帮助改善食欲，帮助预防感冒。",
								"multiColorNum": 1,
								"isMixSaleStyle": 0,
								"saleStyle": 17,
								"sendByVendor": 0,
								"countryFlag": "http://d.vpimg1.com/upcb/2016/05/27/172/34242988.jpg",
								"fallingTagSn": ""
								},
								{
								"productId": "718963462",
								"productName": "安婴妈妈A+奶粉（孕产妇）900克罐装(新旧包装随机发货)",
								"brandName": "美赞臣MEAD JOHNSON奶粉专场",
								"brandId": "3761059",
								"vSpuId": "84237321996566530",
								"skuId": "84237321996566531",
								"brandStoreSn": "10014366",
								"brandShowName": "美赞臣",
								"sellTimeTo": "1545271140",
								"vipshopPrice": "159",
								"vipshopPriceSuff": "",
								"marketPrice": "189",
								"vipDiscount": "8.4折",
								"isNuke": 0,
								"newCatId": "28225",
								"smallImage": "http://a.vpimg4.com/upload/merchandise/pdc/530/566/84237321996566530/56/6916457002693-5.jpg",
								"squareImage": "",
								"preferSquare": 1,
								"type": 0,
								"isPrepay": 0,
								"isWarmup": 0,
								"isHaiTao": 0,
								"isPreSale": 0,
								"isIndependent": 0,
								"isMultiColor": 0,
								"isLoginAddCart": 0,
								"promotionPriceType": 0,
								"priceIconType": 0,
								"couponDisabled": 1,
								"showPriceType": 0,
								"isMedicine": 0,
								"image3": "http://a.vpimg2.com/upload/merchandise/pdc/530/566/84237321996566530/56/6916457002693-3.jpg",
								"image7": "http://a.vpimg3.com/upload/merchandise/pdc/530/566/84237321996566530/56/6916457002693-7.jpg",
								"sellTimeFrom": "1544666401",
								"subTitle": "含优量DHA 帮助维持肠道健康 怀孕及哺乳期妈妈适用",
								"multiColorNum": 1,
								"isMixSaleStyle": 0,
								"saleStyle": 0,
								"sendByVendor": 0,
								"fallingTagSn": ""
								},
								{
								"productId": "718045514",
								"productName": "启韵孕产妇配方奶粉 800g（怀孕及哺乳期）罐装",
								"brandName": "惠氏Wyeth奶粉专场",
								"brandId": "3761061",
								"vSpuId": "463947222421020673",
								"skuId": "463947222421020675",
								"brandStoreSn": "10003930",
								"brandShowName": "惠氏",
								"sellTimeTo": "1545271140",
								"vipshopPrice": "288",
								"vipshopPriceSuff": "",
								"marketPrice": "369",
								"vipDiscount": "7.8折",
								"isNuke": 0,
								"newCatId": "28225",
								"smallImage": "http://a.vpimg2.com/upload/merchandise/pdc/673/020/463947222421020673/5/7613035681293-5.jpg",
								"squareImage": "",
								"preferSquare": 1,
								"type": 0,
								"isPrepay": 0,
								"isWarmup": 0,
								"isHaiTao": 0,
								"isPreSale": 0,
								"isIndependent": 0,
								"isMultiColor": 0,
								"isLoginAddCart": 0,
								"promotionPriceType": 0,
								"priceIconType": 0,
								"couponDisabled": 1,
								"showPriceType": 0,
								"isMedicine": 0,
								"image3": "http://a.vpimg3.com/upload/merchandise/pdc/673/020/463947222421020673/5/7613035681293-3.jpg",
								"image7": "http://a.vpimg4.com/upload/merchandise/pdc/673/020/463947222421020673/5/7613035681293-7.jpg",
								"sellTimeFrom": "1544666401",
								"subTitle": "爱尔兰进口 亲和人体配方 备孕妈妈优选",
								"multiColorNum": 1,
								"isMixSaleStyle": 0,
								"saleStyle": 0,
								"sendByVendor": 0,
								"fallingTagSn": ""
								},
								{
								"productId": "717472776",
								"productName": "孕产妇配方奶粉（调制奶粉）900g",
								"brandName": "美素佳儿奶粉专场",
								"brandId": "3761060",
								"vSpuId": "322928319885996032",
								"skuId": "322928319885996033",
								"brandStoreSn": "10012623",
								"brandShowName": "美素佳儿",
								"sellTimeTo": "1545271140",
								"vipshopPrice": "251",
								"vipshopPriceSuff": "",
								"marketPrice": "288",
								"vipDiscount": "8.7折",
								"isNuke": 0,
								"newCatId": "28225",
								"smallImage": "http://a.vpimg4.com/upload/merchandise/pdc/032/996/322928319885996032/1/8716200717786-5.jpg",
								"squareImage": "",
								"preferSquare": 1,
								"type": 0,
								"isPrepay": 0,
								"isWarmup": 0,
								"isHaiTao": 0,
								"isPreSale": 0,
								"isIndependent": 0,
								"isMultiColor": 0,
								"isLoginAddCart": 0,
								"promotionPriceType": 0,
								"priceIconType": 0,
								"couponDisabled": 1,
								"showPriceType": 0,
								"isMedicine": 0,
								"image3": "http://a.vpimg3.com/upload/merchandise/pdc/032/996/322928319885996032/1/8716200717786-3.jpg",
								"image7": "http://a.vpimg2.com/upload/merchandise/pdc/032/996/322928319885996032/1/8716200717786-7.jpg",
								"sellTimeFrom": "1544666401",
								"subTitle": "原装进口孕妇奶粉，鲜奶到罐装一次完成，备孕妈妈优选",
								"multiColorNum": 1,
								"isMixSaleStyle": 0,
								"saleStyle": 0,
								"sendByVendor": 0,
								"featureLabel": "#超值精选#",
								"featureLabelText": "",
								"fallingTagSn": ""
								},
								{
								"productId": "718045500",
								"productName": "Promama妈妈奶粉（怀孕及哺乳期）900g 音孕罐限量版",
								"brandName": "惠氏Wyeth奶粉专场",
								"brandId": "3761061",
								"vSpuId": "593707398330736641",
								"skuId": "593707398330736646",
								"brandStoreSn": "10003930",
								"brandShowName": "惠氏",
								"sellTimeTo": "1545271140",
								"vipshopPrice": "129",
								"vipshopPriceSuff": "",
								"marketPrice": "197",
								"vipDiscount": "6.5折",
								"isNuke": 0,
								"newCatId": "28225",
								"smallImage": "http://a.vpimg2.com/upload/merchandise/pdcimg/2018/10/08/31/102090431538990244112_5t.jpg",
								"squareImage": "http://a.vpimg3.com/upload/merchandise/pdcimg/2018/10/08/113/164924091538990243852.jpg",
								"preferSquare": 1,
								"type": 0,
								"isPrepay": 0,
								"isWarmup": 0,
								"isHaiTao": 0,
								"isPreSale": 0,
								"isIndependent": 0,
								"isMultiColor": 0,
								"isLoginAddCart": 0,
								"promotionPriceType": 0,
								"priceIconType": 0,
								"couponDisabled": 1,
								"showPriceType": 0,
								"isMedicine": 0,
								"sellTimeFrom": "1544666401",
								"subTitle": "",
								"multiColorNum": 1,
								"isMixSaleStyle": 0,
								"saleStyle": 0,
								"sendByVendor": 0,
								"fallingTagSn": ""
								},
								{
								"productId": "546775589",
								"productName": "妈妈(孕产妇)配方奶粉 900g罐装(新旧包装随机发货)",
								"brandName": "雀巢奶粉特卖旗舰店",
								"brandId": "3023963",
								"vSpuId": "1375568211185468806",
								"skuId": "1375568211186245751",
								"brandStoreSn": "10001143",
								"brandShowName": "雀巢",
								"sellTimeTo": "1577721600",
								"vipshopPrice": "144",
								"vipshopPriceSuff": "",
								"marketPrice": "178",
								"vipDiscount": "8.1折",
								"isNuke": 0,
								"newCatId": "28225",
								"smallImage": "http://a.vpimg2.com/upload/merchandise/pdc/1375568211185468806/45c00381-cdbe-4c08-a79a-b10abf41b9ff/6917878025162-5.jpg",
								"squareImage": "http://a.vpimg4.com/upload/merchandise/pdc/1375568211185468806/de681654-502c-42a6-95e3-8c6ac7e5bbd4/6917878025162-1.jpg",
								"preferSquare": 1,
								"type": 0,
								"isPrepay": 0,
								"isWarmup": 0,
								"isHaiTao": 0,
								"isPreSale": 0,
								"isIndependent": 0,
								"isMultiColor": 0,
								"isLoginAddCart": 0,
								"promotionPriceType": 0,
								"priceIconType": 0,
								"couponDisabled": 1,
								"showPriceType": 0,
								"isMedicine": 0,
								"image3": "http://a.vpimg2.com/upload/merchandise/pdc/806/468/1375568211185468806/25/6917878025162-3.jpg",
								"image7": "http://a.vpimg3.com/upload/merchandise/pdc/806/468/1375568211185468806/25/6917878025162-7.jpg",
								"sellTimeFrom": "1513149067",
								"subTitle": "补充孕期营养 不添加蔗糖 备孕妈妈优选",
								"multiColorNum": 1,
								"isMixSaleStyle": 0,
								"saleStyle": 0,
								"sendByVendor": 0,
								"featureLabel": "#超值精选#",
								"featureLabelText": "",
								"fallingTagSn": ""
								},
								{
								"productId": "718054392",
								"productName": "妈妈(孕产妇)配方奶粉 400g盒装(新旧包装随机发货)",
								"brandName": "雀巢婴幼儿奶粉专场",
								"brandId": "3761058",
								"vSpuId": "1803973125739074627",
								"skuId": "1803973125739844886",
								"brandStoreSn": "10001143",
								"brandShowName": "雀巢",
								"sellTimeTo": "1545271140",
								"vipshopPrice": "54",
								"vipshopPriceSuff": "",
								"marketPrice": "75",
								"vipDiscount": "7.2折",
								"isNuke": 0,
								"newCatId": "28225",
								"smallImage": "http://a.vpimg3.com/upload/merchandise/pdc/627/074/1803973125739074627/0/6917878025933-5.jpg",
								"squareImage": "",
								"preferSquare": 1,
								"type": 0,
								"isPrepay": 0,
								"isWarmup": 0,
								"isHaiTao": 0,
								"isPreSale": 0,
								"isIndependent": 0,
								"isMultiColor": 0,
								"isLoginAddCart": 0,
								"promotionPriceType": 0,
								"priceIconType": 0,
								"couponDisabled": 1,
								"showPriceType": 0,
								"isMedicine": 0,
								"image3": "http://a.vpimg2.com/upload/merchandise/pdc/627/074/1803973125739074627/0/6917878025933-3.jpg",
								"image7": "http://a.vpimg4.com/upload/merchandise/pdc/627/074/1803973125739074627/0/6917878025933-7.jpg",
								"sellTimeFrom": "1544666401",
								"subTitle": "",
								"multiColorNum": 1,
								"isMixSaleStyle": 0,
								"saleStyle": 0,
								"sendByVendor": 0,
								"fallingTagSn": ""
								},
								{
								"productId": "717386099",
								"productName": "NESTLÉ MOM 港版雀巢孕妇DHA叶酸多元营养锁养胶囊",
								"brandName": "雀巢能恩NAN奶粉海外专场",
								"brandId": "3693500",
								"vSpuId": "20342860772921348",
								"skuId": "20342860772921353",
								"brandStoreSn": "10001143",
								"brandShowName": "雀巢",
								"sellTimeTo": "1545962399",
								"vipshopPrice": "372",
								"vipshopPriceSuff": "",
								"marketPrice": "416",
								"vipDiscount": "8.9折",
								"isNuke": 0,
								"newCatId": "74775",
								"smallImage": "http://a.vpimg4.com/upload/merchandise/pdc/20342860772921348/9d9b71de-94e3-4ad5-bcc0-033f316a2952/4710498994847-5.jpg",
								"squareImage": "http://a.vpimg4.com/upload/merchandise/pdcimg/2018/09/25/72/632434691537861667183.jpg",
								"preferSquare": 1,
								"type": 0,
								"isPrepay": 0,
								"isWarmup": 0,
								"isHaiTao": 1,
								"isPreSale": 0,
								"isIndependent": 0,
								"isMultiColor": 0,
								"isLoginAddCart": 0,
								"promotionPriceType": 0,
								"priceIconType": 0,
								"couponDisabled": 1,
								"showPriceType": 0,
								"warehouseMark": "保税仓直发",
								"isMedicine": 0,
								"sellTimeFrom": "1544184000",
								"subTitle": "采用独特Trio-Pro 3层锁养技术，彻底锁住关键营养不受胃酸破坏，直达肠道吸收，富含叶酸、DHA及多元营养素组合，满足妈妈和宝宝营养需求",
								"multiColorNum": 1,
								"isMixSaleStyle": 0,
								"saleStyle": 17,
								"sendByVendor": 0,
								"fallingTagSn": ""
								},
								{
								"productId": "718438052",
								"productName": " ANMUM港版孕妇牛奶粉 孕前孕期妈咪奶粉 800g",
								"brandName": "新西兰Anmum安满孕婴奶粉海外专场",
								"brandId": "3693487",
								"vSpuId": "226663831192145923",
								"skuId": "226663831192145924",
								"brandStoreSn": "10012624",
								"brandShowName": "安满",
								"sellTimeTo": "1545962399",
								"vipshopPrice": "165",
								"vipshopPriceSuff": "",
								"marketPrice": "238",
								"vipDiscount": "6.9折",
								"isNuke": 0,
								"newCatId": "28225",
								"smallImage": "http://a.vpimg4.com/upload/merchandise/pdc/923/145/226663831192145923/7/9415007002208-5.jpg",
								"squareImage": "http://a.vpimg2.com/upload/merchandise/pdc/923/145/226663831192145923/7/9415007002208-1.jpg",
								"preferSquare": 1,
								"type": 0,
								"isPrepay": 0,
								"isWarmup": 0,
								"isHaiTao": 1,
								"isPreSale": 0,
								"isIndependent": 0,
								"isMultiColor": 0,
								"isLoginAddCart": 0,
								"promotionPriceType": 0,
								"priceIconType": 0,
								"couponDisabled": 1,
								"showPriceType": 0,
								"warehouseMark": "唯品国际",
								"isMedicine": 0,
								"image3": "http://a.vpimg2.com/upload/merchandise/pdc/923/145/226663831192145923/1/9415007002208-3.jpg",
								"image7": "http://a.vpimg3.com/upload/merchandise/pdc/923/145/226663831192145923/1/9415007002208-7.jpg",
								"sellTimeFrom": "1544184000",
								"subTitle": "助力胎儿发育，专为备孕、怀孕及哺乳期妇女营养调配，口味清淡易入口",
								"multiColorNum": 1,
								"isMixSaleStyle": 0,
								"saleStyle": 17,
								"sendByVendor": 0,
								"countryFlag": "http://c.vpimg1.com/upcb/2016/06/23/75/29369922.jpg",
								"fallingTagSn": ""
								}]
						var str1 = ""
						
						for(let i =0;i<product.length;i++){
							str1+=`<li><a href="#"><img src="${product[i].smallImage}"><p class="des-item">${product[i].productName}</p><p class="price-item">￥${product[i].vipshopPrice}</p><span>包邮</span></a></li>`
						}
						$("ul.foodshow").append(str1)
						$("ul.beautyshow").append(str1)
						$("ul.momshow").append(str1)
						
						
						var product2=[
								{
								"productId": "690763288",
								"productName": " 兰蔻 清滢柔肤水 (小粉水）",
								"brandName": "法国lancome兰蔻奇迹护肤专场",
								"brandId": "3696726",
								"vSpuId": "658165154115731456",
								"skuId": "658165154115731502",
								"brandStoreSn": "10000521",
								"brandShowName": "Lancome",
								"sellTimeTo": "1546221599",
								"vipshopPrice": "265",
								"vipshopPriceSuff": "",
								"marketPrice": "320",
								"vipDiscount": "8.3折",
								"isNuke": 0,
								"newCatId": "1017",
								"smallImage": "http://a.vpimg2.com/upload/merchandise/pdcimg/2018/12/10/174/321120231544431887024_5t.jpg",
								"squareImage": "http://a.vpimg2.com/upload/merchandise/pdcimg/2018/12/10/84/558285181544431886797.jpg",
								"preferSquare": 1,
								"type": 0,
								"icons": [],
								"isPrepay": 0,
								"isWarmup": 0,
								"isHaiTao": 1,
								"isPreSale": 0,
								"isIndependent": 0,
								"isMultiColor": 0,
								"isLoginAddCart": 0,
								"promotionPriceType": 0,
								"priceIconType": 0,
								"couponDisabled": 1,
								"showPriceType": 0,
								"warehouseMark": "保税仓直发",
								"isMedicine": 0,
								"sellTimeFrom": "1544184000",
								"subTitle": "谷类和酵母精华滋养、柔软肌肤。补水保湿,为肌肤提供滋润,帮助后续保养品的吸收。",
								"multiColorNum": 1,
								"isMixSaleStyle": 0,
								"saleStyle": 17,
								"sendByVendor": 0,
								"countryFlag": "http://d.vpimg1.com/upcb/2016/06/23/127/51193716.jpg",
								"fallingTagSn": ""
								},
								{
								"productId": "718327818",
								"productName": "OLAY 新生塑颜金纯活能水250ml 买赠礼盒 大红水 补水保湿",
								"brandName": "玉兰油Olay护肤品专场",
								"brandId": "3731896",
								"vSpuId": "231167625054855168",
								"skuId": "231167625054855169",
								"brandStoreSn": "10000828",
								"brandShowName": "玉兰油",
								"sellTimeTo": "1546307999",
								"vipshopPrice": "238",
								"vipshopPriceSuff": "",
								"marketPrice": "490",
								"vipDiscount": "4.9折",
								"isNuke": 0,
								"newCatId": "1017",
								"smallImage": "http://a.vpimg2.com/upload/merchandise/pdcvis/105209/2018/1212/37/b44b0496-72e9-46f9-b647-2594496c36b6_5t.jpg",
								"squareImage": "http://a.vpimg3.com/upload/merchandise/pdcvis/105209/2018/1204/32/b54c0874-7e34-485d-ba60-2caf87d55157.jpg",
								"preferSquare": 1,
								"type": 0,
								"isPrepay": 0,
								"isWarmup": 0,
								"isHaiTao": 0,
								"isPreSale": 0,
								"isIndependent": 0,
								"isMultiColor": 0,
								"isLoginAddCart": 0,
								"promotionPriceType": 0,
								"priceIconType": 0,
								"couponDisabled": 1,
								"showPriceType": 0,
								"isMedicine": 0,
								"sellTimeFrom": "1544666400",
								"subTitle": "【大红水 补水 保湿 提拉紧致】蕴含B3修护精华+五胜肽，水润保湿，提升肌肤弹力；细滑紧致，令肌肤充盈饱满。",
								"multiColorNum": 1,
								"isMixSaleStyle": 0,
								"saleStyle": 21,
								"sendByVendor": 0,
								"fallingTagSn": ""
								},
								{
								"productId": "495210883544520",
								"productName": "明星同款 复颜玻尿酸水光充盈导入晶露130ml 玻尿酸 护肤爽肤水",
								"brandName": "欧莱雅Loreal化妆品专场",
								"brandId": "100019400",
								"vSpuId": "3780003805197488128",
								"skuId": "3780003805197488130",
								"brandStoreSn": "10000641",
								"brandShowName": "欧莱雅",
								"sellTimeTo": "1544796000",
								"vipshopPrice": "193",
								"vipshopPriceSuff": "",
								"marketPrice": "240",
								"vipDiscount": "8折",
								"isNuke": 0,
								"newCatId": "1017",
								"smallImage": "http://a.vpimg2.com/upload/merchandise/pdcvis/2018/05/28/97/064d5d6a-7570-431d-9881-9baea5a1192a_5t.jpg",
								"squareImage": "http://a.vpimg3.com/upload/merchandise/pdc/128/488/3780003805197488128/2/6928820020227-61.jpg",
								"preferSquare": 1,
								"type": 0,
								"isPrepay": 0,
								"isWarmup": 0,
								"isHaiTao": 0,
								"isPreSale": 0,
								"isIndependent": 0,
								"isMultiColor": 0,
								"isLoginAddCart": 0,
								"promotionPriceType": 0,
								"priceIconType": 0,
								"couponDisabled": 1,
								"showPriceType": 0,
								"isMedicine": 0,
								"sellTimeFrom": "1544666400",
								"subTitle": "巴黎欧莱雅明星同款晶露肌肤膨润弹出水无惧岁月痕迹轻松应对。",
								"multiColorNum": 1,
								"isMixSaleStyle": 0,
								"saleStyle": 21,
								"sendByVendor": 0,
								"fallingTagSn": ""
								},
								{
								"productId": "717410622",
								"productName": "清润葡萄籽保湿柔肤水130ml 补水护肤爽肤水",
								"brandName": "滋润肌肤“水”说了算",
								"brandId": "3754557",
								"vSpuId": "3347376758946013184",
								"skuId": "3347376758946013186",
								"brandStoreSn": "10000641",
								"brandShowName": "欧莱雅",
								"sellTimeTo": "1544925599",
								"vipshopPrice": "96",
								"vipshopPriceSuff": "",
								"marketPrice": "120",
								"vipDiscount": "8折",
								"isNuke": 0,
								"newCatId": "1017",
								"smallImage": "http://a.vpimg3.com/upload/merchandise/pdcvis/2018/12/12/183/b9ae8ce7-395a-4883-9fcf-f0c8d992286e_5t.jpg",
								"squareImage": "http://a.vpimg2.com/upload/merchandise/pdcvis/2018/12/12/146/4fe3005b-fb0c-40ad-8652-ae80075c0fad.jpg",
								"preferSquare": 1,
								"type": 0,
								"isPrepay": 0,
								"isWarmup": 0,
								"isHaiTao": 0,
								"isPreSale": 0,
								"isIndependent": 0,
								"isMultiColor": 0,
								"isLoginAddCart": 0,
								"promotionPriceType": 0,
								"priceIconType": 0,
								"couponDisabled": 1,
								"showPriceType": 0,
								"isMedicine": 0,
								"sellTimeFrom": "1544184000",
								"subTitle": "巴黎欧莱雅葡萄籽鲜养补水锁水提亮肤色仿佛穿上水润保护膜。",
								"multiColorNum": 1,
								"isMixSaleStyle": 0,
								"saleStyle": 21,
								"sendByVendor": 0,
								"fallingTagSn": ""
								},
								{
								"productId": "710956956",
								"productName": "【呵宠水润肌肤】佰草集 桃花露（焕新版）200ml 爽肤水补水保湿",
								"brandName": "佰草集Herborist化妆品专场",
								"brandId": "3731933",
								"vSpuId": "94933744887394333",
								"skuId": "94933744887394511",
								"brandStoreSn": "10000294",
								"brandShowName": "佰草集",
								"sellTimeTo": "1546307999",
								"vipshopPrice": "129",
								"vipshopPriceSuff": "",
								"marketPrice": "169",
								"vipDiscount": "7.6折",
								"isNuke": 0,
								"newCatId": "1017",
								"smallImage": "http://a.vpimg4.com/upload/merchandise/pdcvis/107028/2018/1127/144/8699eaf4-1613-4b98-ad0d-0295209dde9b_5t.jpg",
								"squareImage": "http://a.vpimg4.com/upload/merchandise/pdcvis/107028/2018/1127/2/a7ea7baf-1825-4785-9a2c-ba3faeed8fd3.jpg",
								"preferSquare": 1,
								"type": 0,
								"isPrepay": 0,
								"isWarmup": 0,
								"isHaiTao": 0,
								"isPreSale": 0,
								"isIndependent": 0,
								"isMultiColor": 0,
								"isLoginAddCart": 0,
								"promotionPriceType": 0,
								"priceIconType": 0,
								"couponDisabled": 1,
								"showPriceType": 0,
								"isMedicine": 0,
								"sellTimeFrom": "1544666400",
								"subTitle": "有效补充肌肤缺失水分，令肌肤漾现水润光泽，面若桃花",
								"multiColorNum": 1,
								"isMixSaleStyle": 0,
								"saleStyle": 21,
								"sendByVendor": 0,
								"fallingTagSn": ""
								},
								{
								"productId": "710956961",
								"productName": "【水润迸发】佰草集 新七白美白柔肤水（焕新版） 150ml 均匀肤色",
								"brandName": "佰草集Herborist化妆品专场",
								"brandId": "3731933",
								"vSpuId": "82267370935414818",
								"skuId": "82267370935414968",
								"brandStoreSn": "10000294",
								"brandShowName": "佰草集",
								"sellTimeTo": "1546307999",
								"vipshopPrice": "128",
								"vipshopPriceSuff": "",
								"marketPrice": "180",
								"vipDiscount": "7.1折",
								"isNuke": 0,
								"newCatId": "1017",
								"smallImage": "http://a.vpimg3.com/upload/merchandise/pdcvis/107028/2018/1023/39/94433576-d171-4cd4-a866-205cec694ad8_5t.jpg",
								"squareImage": "http://a.vpimg4.com/upload/merchandise/pdcvis/107028/2018/1023/115/cfce3b93-f546-460e-b41f-339c73e984d8.jpg",
								"preferSquare": 1,
								"type": 0,
								"isPrepay": 0,
								"isWarmup": 0,
								"isHaiTao": 0,
								"isPreSale": 0,
								"isIndependent": 0,
								"isMultiColor": 0,
								"isLoginAddCart": 0,
								"promotionPriceType": 0,
								"priceIconType": 0,
								"couponDisabled": 1,
								"showPriceType": 0,
								"isMedicine": 0,
								"sellTimeFrom": "1544666400",
								"subTitle": "质地轻薄爽洁，可有效均匀肤色，令肌肤柔白润泽，晶莹透亮",
								"multiColorNum": 1,
								"isMixSaleStyle": 0,
								"saleStyle": 21,
								"sendByVendor": 0,
								"fallingTagSn": ""
								},
								{
								"productId": "495210900608456",
								"productName": "金致臻颜奢养肌活源液 130ml 爽肤水",
								"brandName": "欧莱雅Loreal化妆品专场",
								"brandId": "100019400",
								"vSpuId": "7742608556715876353",
								"skuId": "7742608556715876354",
								"brandStoreSn": "10000641",
								"brandShowName": "欧莱雅",
								"sellTimeTo": "1544796000",
								"vipshopPrice": "222",
								"vipshopPriceSuff": "",
								"marketPrice": "280",
								"vipDiscount": "7.9折",
								"isNuke": 0,
								"newCatId": "1017",
								"smallImage": "http://a.vpimg2.com/upload/merchandise/pdcvis/2018/05/28/184/f72ff590-7f6f-4909-84a5-c4ba9a0f6fee_5t.jpg",
								"squareImage": "http://a.vpimg4.com/upload/merchandise/pdc/353/876/7742608556715876353/1/6928820012109-61.jpg",
								"preferSquare": 1,
								"type": 0,
								"icons": [
								{
								"id": 0,
								"sort": 0,
								"image": "http://a.vpimg4.com/upload/category/2017/10/23/121/5ff17ef2-cad8-4d28-b69b-c76d5997868f.png",
								"name": null
								}
								],
								"isPrepay": 0,
								"isWarmup": 0,
								"isHaiTao": 0,
								"isPreSale": 0,
								"isIndependent": 0,
								"isMultiColor": 0,
								"isLoginAddCart": 0,
								"promotionPriceType": 0,
								"priceIconType": 0,
								"couponDisabled": 1,
								"showPriceType": 0,
								"isMedicine": 0,
								"sellTimeFrom": "1544666400",
								"subTitle": "巴黎欧莱雅淡化疲劳痕迹重现年轻活力。",
								"multiColorNum": 1,
								"isMixSaleStyle": 0,
								"saleStyle": 21,
								"sendByVendor": 0,
								"fallingTagSn": ""
								},
								{
								"productId": "718327957",
								"productName": "OLAY新生塑颜金纯活能水150ml 爽肤水保湿 紧致滋润化妆品",
								"brandName": "玉兰油Olay护肤品专场",
								"brandId": "3731896",
								"vSpuId": "1802847225843242725",
								"skuId": "1802847225865367280",
								"brandStoreSn": "10000828",
								"brandShowName": "玉兰油",
								"sellTimeTo": "1546307999",
								"vipshopPrice": "189",
								"vipshopPriceSuff": "",
								"marketPrice": "240",
								"vipDiscount": "7.9折",
								"isNuke": 0,
								"newCatId": "1017",
								"smallImage": "http://a.vpimg4.com/upload/merchandise/pdcvis/105209/2018/1112/48/6bbdcdc3-8163-48eb-b3bd-95cc0babc2cc_5t.jpg",
								"squareImage": "http://a.vpimg4.com/upload/merchandise/pdc/725/242/1802847225843242725/1/6903148151877-61.jpg",
								"preferSquare": 1,
								"type": 0,
								"isPrepay": 0,
								"isWarmup": 0,
								"isHaiTao": 0,
								"isPreSale": 0,
								"isIndependent": 0,
								"isMultiColor": 0,
								"isLoginAddCart": 0,
								"promotionPriceType": 0,
								"priceIconType": 0,
								"couponDisabled": 1,
								"showPriceType": 0,
								"isMedicine": 0,
								"sellTimeFrom": "1544666400",
								"subTitle": "【大红水 补水 保湿 提拉紧致】蕴含B3修护精华+五胜肽，水润保湿，提升肌肤弹力；细滑紧致，令肌肤充盈饱满。",
								"multiColorNum": 1,
								"isMixSaleStyle": 0,
								"saleStyle": 21,
								"sendByVendor": 0,
								"fallingTagSn": ""
								},
								{
								"productId": "693225334",
								"productName": "AHC 黄金蜗牛玻尿酸爽肤水140ml AHC水乳 改善皱纹保湿补水嫩白紧致",
								"brandName": "韩国高端美容院线AHC专场",
								"brandId": "3696707",
								"vSpuId": "94089176993316864",
								"skuId": "94089176993316865",
								"brandStoreSn": "10020258",
								"brandShowName": "A.H.C",
								"sellTimeTo": "1553997540",
								"vipshopPrice": "126",
								"vipshopPriceSuff": "",
								"marketPrice": "355",
								"vipDiscount": "3.5折",
								"isNuke": 0,
								"newCatId": "1017",
								"smallImage": "http://a.vpimg2.com/upload/merchandise/pdc/94089176993316864/642eded3-0ec1-4d9c-a3b7-1037c638e296/8809471950034-5.jpg",
								"squareImage": "http://a.vpimg2.com/upload/merchandise/pdc/94089176993316864/fc602014-c5ef-4dfb-9345-9edacd12908e/8809471950034-1.jpg",
								"preferSquare": 1,
								"type": 0,
								"isPrepay": 0,
								"isWarmup": 0,
								"isHaiTao": 1,
								"isPreSale": 0,
								"isIndependent": 0,
								"isMultiColor": 0,
								"isLoginAddCart": 0,
								"promotionPriceType": 0,
								"priceIconType": 0,
								"couponDisabled": 1,
								"showPriceType": 0,
								"warehouseMark": "唯品国际",
								"isMedicine": 0,
								"sellTimeFrom": "1544184000",
								"subTitle": "黄金能量，打造梦寐以求的光彩肌肤",
								"multiColorNum": 1,
								"isMixSaleStyle": 0,
								"saleStyle": 17,
								"sendByVendor": 0,
								"countryFlag": "http://d.vpimg1.com/upcb/2016/10/17/178/49516989.jpg",
								"fallingTagSn": ""
								},
								{
								"productId": "714277346",
								"productName": "【巨补水 “狠“保湿”】千纤草 黄瓜水 250ml 再也不用切瓜敷片",
								"brandName": "千纤草化妆品专场",
								"brandId": "3731868",
								"vSpuId": "87052274632851456",
								"skuId": "87052274632851457",
								"brandStoreSn": "10010156",
								"brandShowName": "千纤草",
								"sellTimeTo": "1546185600",
								"vipshopPrice": "15",
								"vipshopPriceSuff": "",
								"marketPrice": "29",
								"vipDiscount": "5.2折",
								"isNuke": 0,
								"newCatId": "1017",
								"smallImage": "http://a.vpimg2.com/upload/merchandise/pdcvis/110871/2018/0530/10/736d75e5-f864-4659-b489-677a4452d8d7_5t.jpg",
								"squareImage": "http://a.vpimg2.com/upload/merchandise/pdc/456/851/87052274632851456/0/6955558020670-61.jpg",
								"preferSquare": 1,
								"type": 0,
								"icons": [
								{
								"id": 0,
								"sort": 0,
								"image": "http://a.vpimg4.com/upload/category/2017/10/23/76/214b14d4-30e5-46fa-9710-bdb16b9d96b0.png",
								"name": null
								}
								],
								"isPrepay": 0,
								"isWarmup": 0,
								"isHaiTao": 0,
								"isPreSale": 0,
								"isIndependent": 0,
								"isMultiColor": 0,
								"isLoginAddCart": 0,
								"promotionPriceType": 0,
								"priceIconType": 0,
								"couponDisabled": 1,
								"showPriceType": 0,
								"isMedicine": 0,
								"sellTimeFrom": "1544666400",
								"subTitle": "#促肌肤自然循环#千纤草天然黄瓜水，柔和养护保湿 清爽自然 锁水保湿，还原肌肤白皙粉嫩光彩。",
								"multiColorNum": 1,
								"isMixSaleStyle": 0,
								"saleStyle": 21,
								"sendByVendor": 0,
								"fallingTagSn": ""
								}]
						var str2 =""
						for(let i =0;i<product2.length;i++){
							str2+=`<li><a href="#"><img src="${product2[i].smallImage}"><p class="des-item">${product2[i].productName}</p><p class="price-item">￥${product2[i].vipshopPrice}</p><span>包邮</span></a></li>`
						}
						
						$("ul.hotshow").append(str2)
						
						$("ul.lifeshow").append(str2)
						$("ul.milkshow").append(str2)
						
						
						
						for(let i=0;i<flashsale.length;i++){
							var oa = document.createElement("a")
							$("ul.hotgoodsnav li")[i].append(oa)
							$("ul.hotgoodsnav li a")[i].innerHTML =flashsale[i].category
							$("ul.hotgoodsnav li a")[i].href ="#"
						}
						
						$("ul.hotgoodsnav li").mousemove(function(){
							$("ul.hotgoodsnav li").removeClass("active")
						  $(this).addClass("active")
							var $index = $(this).index()
							$(".hotgoodslist ul").siblings().hide().eq($index).show().css('display','flex')
						})
						
						
						// 更多活动
						var acts = [
					{
					"src": "../images/childrenproducts.jpg",
					"href": "http://www.sjgo365.com/zt/hd/childrenproducts",
					"text": "妈妈的贴心守护",
					"products": [
					{
					"productID": "28891077",
					"productName": "法国BOIRON布瓦宏宝宝金盏花面霜 20g（保税仓发货）",
					"marketPrice": "1",
					"salePrice": "1",
					"storage": "1"
					},
					{
					"productID": "29962030",
					"productName": "启初婴儿舒缓云朵霜 30g",
					"marketPrice": "1",
					"salePrice": "1",
					"storage": "1"
					},
					{
					"productID": "24737777",
					"productName": "启初婴儿舒缓保湿露 135ml",
					"marketPrice": "1",
					"salePrice": "1",
					"storage": "1"
					}
					]
					},
					{
					"src": "../images/supplefood.jpg",
					"href": "http://www.sjgo365.com/zt/hd/supplefood",
					"text": "最科学的营养补充",
					"products": [
					{
					"productID": "22358470",
					"productName": "美国Earth's best 婴儿纯燕麦米粉227g（保税仓发货）",
					"marketPrice": "1",
					"salePrice": "1",
					"storage": "1"
					},
					{
					"productID": "25398172",
					"productName": "美国Gerber嘉宝水密桃星星泡芙42g【2罐起发】（保税仓发货）",
					"marketPrice": "1",
					"salePrice": "1",
					"storage": "1"
					},
					{
					"productID": "23255483",
					"productName": "美国Gerber嘉宝 1段燕麦米粉 227g 宝宝辅食【2罐起发】（保税仓发货）",
					"marketPrice": "1",
					"salePrice": "1",
					"storage": "1"
					}
					]
					},
					{
					"src": "../images/ysl181126.jpg",
					"href": "http://www.sjgo365.com/zt/hd/ysl181126",
					"text": "圣罗兰",
					"products": [
					{
					"productID": "25128303",
					"productName": "圣罗兰明彩轻垫气垫BB霜 #B10 14g 透亮隔离乳BB霜 哑光持久遮瑕修容（保税仓发货）",
					"marketPrice": "1",
					"salePrice": "1",
					"storage": "1"
					},
					{
					"productID": "23591943",
					"productName": "圣罗兰妍活青春粉底液B10 30ml逆龄女神粉底液（保税仓发货）",
					"marketPrice": "1",
					"salePrice": "1",
					"storage": "1"
					},
					{
					"productID": "24962422",
					"productName": "圣罗兰金色圆管唇膏 珊瑚橘#14 4.5g（保税仓发货）",
					"marketPrice": "1",
					"salePrice": "1",
					"storage": "1"
					}
					]
					},
					{
					"src": "../images/cpb181126.jpg",
					"href": "http://www.sjgo365.com/zt/hd/cpb181126",
					"text": "资生堂",
					"products": [
					{
					"productID": "20925866",
					"productName": "日本资生堂CPB肌肤之钥钻光隔离霜国际版 36ml隔离霜遮瑕保湿（保税仓发货）",
					"marketPrice": "1",
					"salePrice": "1",
					"storage": "1"
					},
					{
					"productID": "27711439",
					"productName": "日本资生堂CPB肌肤之钥水磨精华液美容液国际版 170ml（保税仓发货）",
					"marketPrice": "1",
					"salePrice": "1",
					"storage": "1"
					},
					{
					"productID": "23492101",
					"productName": "肌肤之钥亮采柔肤粉高光粉 #14 10g 定妆修容蜜粉 提亮肤色（保税仓发货）",
					"marketPrice": "1",
					"salePrice": "1",
					"storage": "1"
					}
					]
					},
					{
					"src": "../images/act_75.jpg",
					"href": "http://www.sjgo365.com/BrandStreet/Index/75",
					"text": "大众喜爱的营养保健品牌",
					"products": [
					{
					"productID": "29011182",
					"productName": "澳大利亚BIO ISLAND婴幼儿补锌咀嚼片120片（保税仓发货）",
					"marketPrice": "1",
					"salePrice": "1",
					"storage": "1"
					},
					{
					"productID": "22765897",
					"productName": "澳大利亚bioisland 深海鱼油胶囊 90粒（保税仓发货）",
					"marketPrice": "1",
					"salePrice": "1",
					"storage": "1"
					},
					{
					"productID": "24966567",
					"productName": "澳洲bioisland海藻油胶囊 孕妇用 60粒（保税仓发货）（2件起购）",
					"marketPrice": "1",
					"salePrice": "1",
					"storage": "1"
					}
					]
					},
					{
					"src": "../images/act_192.jpg",
					"href": "http://www.sjgo365.com/BrandStreet/Index/192",
					"text": "游客必买的保健品",
					"products": [
					{
					"productID": "20368675",
					"productName": "澳大利亚Nature's Way佳思敏儿童维生素c锌软糖60粒（保税仓发货）",
					"marketPrice": "1",
					"salePrice": "1",
					"storage": "1"
					},
					{
					"productID": "22100806",
					"productName": "澳大利亚Nature's Way佳思敏 Kids Smart儿童维生素c+锌软糖 60粒 【2瓶起发】（保税仓发货）",
					"marketPrice": "1",
					"salePrice": "1",
					"storage": "1"
					},
					{
					"productID": "20523366",
					"productName": "澳大利亚Nature's Way佳思敏儿童鱼油胶囊 180粒（保税仓发货）",
					"marketPrice": "1",
					"salePrice": "1",
					"storage": "1"
					}
					]
					},
					{
					"src": "../images/act_73.jpg",
					"href": "http://www.sjgo365.com/BrandStreet/Index/73",
					"text": "自然亲和好吸收",
					"products": [
					{
					"productID": "22839996",
					"productName": "新西兰A2 Platinum酪蛋白婴儿奶粉1段(0-6个月宝宝) 900g【2罐起发】（保税仓发货）",
					"marketPrice": "1",
					"salePrice": "1",
					"storage": "1"
					},
					{
					"productID": "28064249",
					"productName": "新西兰A2 Platinum酪蛋白婴儿奶粉2段(6-12个月宝宝) 900g【2罐起发】（保税仓发货）",
					"marketPrice": "1",
					"salePrice": "1",
					"storage": "1"
					},
					{
					"productID": "23288502",
					"productName": "新西兰A2 Platinum酪蛋白婴儿奶粉3段（1-3周岁宝宝）900g【2罐起发】（保税仓发货）",
					"marketPrice": "1",
					"salePrice": "1",
					"storage": "1"
					}
					]
					},
					{
					"src": "../images/act_39.jpg",
					"href": "http://www.sjgo365.com/BrandStreet/Index/39",
					"text": "冬季保养首选",
					"products": [
					{
					"productID": "28296952",
					"productName": "澳大利亚Swisse钙及维生素D片 150片（保税仓发货）",
					"marketPrice": "1",
					"salePrice": "1",
					"storage": "1"
					},
					{
					"productID": "22611206",
					"productName": "澳大利亚Swisse奶蓟草肝脏排毒片120片（保税仓发货）",
					"marketPrice": "1",
					"salePrice": "1",
					"storage": "1"
					},
					{
					"productID": "27835459",
					"productName": "澳大利亚Swisse葡萄籽精华片 180片（保税仓发货）",
					"marketPrice": "1",
					"salePrice": "1",
					"storage": "1"
					}
					]
					},
					{
					"src": "../images/act_288.jpg",
					"href": "http://www.sjgo365.com/BrandStreet/Index/288",
					"text": "源自英国工艺品质",
					"products": [
					{
					"productID": "25659750",
					"productName": "狮子座天使（Leo Angel） 护梦天使金装超薄透气干爽纸尿裤S号76（3-8kg）【两包起购】",
					"marketPrice": "1",
					"salePrice": "1",
					"storage": "1"
					},
					{
					"productID": "27005269",
					"productName": "狮子座天使（Leo Angel） 护梦天使金装超薄透气干爽小内裤XXL50（>15kg）【两包起购】",
					"marketPrice": "1",
					"salePrice": "1",
					"storage": "1"
					},
					{
					"productID": "26556763",
					"productName": "狮子座天使（Leo Angel） 护梦天使金装系列超薄透气干爽小内裤L58（9-14kg）【两包起购】",
					"marketPrice": "1",
					"salePrice": "1",
					"storage": "1"
					}
					]
					},
					{
					"src": "../images/act_259.jpg",
					"href": "http://www.sjgo365.com/BrandStreet/Index/259",
					"text": "节食瘦身人群的福音",
					"products": [
					{
					"productID": "28670577",
					"productName": "美国Naturade营养奶昔粉 巧克力味 540g（保税仓发货）",
					"marketPrice": "1",
					"salePrice": "1",
					"storage": "1"
					},
					{
					"productID": "23894831",
					"productName": "美国Naturade营养奶昔粉 香草味 540g（保税仓发货）",
					"marketPrice": "1",
					"salePrice": "1",
					"storage": "1"
					},
					{
					"productID": "29119083",
					"productName": "美国Naturade营养奶昔粉 草莓味 540g（保税仓发货）",
					"marketPrice": "1",
					"salePrice": "1",
					"storage": "1"
					}
					]
					},
					{
					"src": "../images/act_fresh.jpg",
					"href": "http://www.sjgo365.com/zt/hd/fresh",
					"text": "甄选美食 挑逗味蕾",
					"products": [
					{
					"productID": "22078194",
					"productName": "North Shore Fishery 北洋海产 北极甜虾仁90-125只/lb 750g（顺丰快递）",
					"marketPrice": "1",
					"salePrice": "1",
					"storage": "1"
					},
					{
					"productID": "20441991",
					"productName": "North Shore Fishery 北洋海产 三去大黄鱼500g（顺丰快递）",
					"marketPrice": "1",
					"salePrice": "1",
					"storage": "1"
					},
					{
					"productID": "27750953",
					"productName": "North Shore Fishery 北洋海产 野生毛鳞鱼(多春鱼)300g*3袋（顺丰快递）",
					"marketPrice": "1",
					"salePrice": "1",
					"storage": "1"
					}
					]
					},
					{
					"src": "../images/act_beautybrands.jpg",
					"href": "http://www.sjgo365.com/zt/hd/beautybrands",
					"text": "国际一线大牌 全场6折起",
					"products": [
					{
					"productID": "29679405",
					"productName": "美国雅诗兰黛小棕瓶眼霜精华霜 ANR 肌透修护眼部精华霜 II 15ML（保税仓发货）",
					"marketPrice": "1",
					"salePrice": "1",
					"storage": "1"
					},
					{
					"productID": "26249177",
					"productName": "日本资生堂CPB肌肤之钥光采日间防护乳液清爽型 125ml国际版（保税仓发货）",
					"marketPrice": "1",
					"salePrice": "1",
					"storage": "1"
					},
					{
					"productID": "23981686",
					"productName": "圣罗兰明彩轻垫粉底液 羽毛气垫墨水气垫哑光妆感遮瑕#10 14g（保税仓发货）",
					"marketPrice": "1",
					"salePrice": "1",
					"storage": "1"
					}
					]
					},
					{
					"src": "../images/act_Sulwhasoo.jpg",
					"href": "http://www.sjgo365.com/zt/hd/Sulwhasoo",
					"text": "雪花秀系列蕴含亚洲智慧的调和之美",
					"products": [
					{
					"productID": "21614352",
					"productName": "韩国Sulwhasoo雪花秀与润修护睡眠面膜120ml 补水保湿 免洗滋养 平衡养肤（保税仓发货）",
					"marketPrice": "1",
					"salePrice": "1",
					"storage": "1"
					},
					{
					"productID": "26332118",
					"productName": "韩国Sulwhasoo雪花秀滋盈生水乳2件套装（保税仓发货）",
					"marketPrice": "1",
					"salePrice": "1",
					"storage": "1"
					},
					{
					"productID": "21107866",
					"productName": "韩国Sulwhasoo雪花秀滋盈肌本护肤礼盒组合2件套化妆水乳液爽肤水补水保湿（保税仓发货）",
					"marketPrice": "1",
					"salePrice": "1",
					"storage": "1"
					}
					]
					},
					{
					"src": "../images/act_laneige.jpg",
					"href": "http://www.sjgo365.com/zt/hd/laneige",
					"text": "唤醒与生俱来的闪耀之美",
					"products": [
					{
					"productID": "29792234",
					"productName": "韩国LANEIGE兰芝 夜间锁水免洗睡眠面膜 70ml(保税仓发货)",
					"marketPrice": "1",
					"salePrice": "1",
					"storage": "1"
					},
					{
					"productID": "20185110",
					"productName": "韩国LANEIGE兰芝雪纱丝柔防晒隔离霜60#绿色SPF22 PA++30ml 防晒保湿提亮肤色",
					"marketPrice": "1",
					"salePrice": "1",
					"storage": "1"
					},
					{
					"productID": "29343728",
					"productName": "韩国兰芝Laneige 水凝轻盈精华水 净化柔软肌肤 200ml （保税仓发货）",
					"marketPrice": "1",
					"salePrice": "1",
					"storage": "1"
					}
					]
					},
					{
					"src": "../images/act_edeka.jpg",
					"href": "http://www.sjgo365.com/zt/hd/edeka",
					"text": "德国最大日用品品牌",
					"products": [
					{
					"productID": "25950434",
					"productName": "EDEKA艾德卡强效洁厕剂 1L",
					"marketPrice": "1",
					"salePrice": "1",
					"storage": "1"
					},
					{
					"productID": "21174688",
					"productName": "EDEKA艾德卡油污净750ml",
					"marketPrice": "1",
					"salePrice": "1",
					"storage": "1"
					},
					{
					"productID": "26398940",
					"productName": "EDEKA艾德卡净白鲜艳洗衣液 1.5L",
					"marketPrice": "1",
					"salePrice": "1",
					"storage": "1"
					}
					]
					},
					{
					"src": "../images/act_lego.jpg",
					"href": "http://www.sjgo365.com/zt/hd/lego",
					"text": "小积木大智慧",
					"products": [
					{
					"productID": "23026693",
					"productName": "丹麦LEGO乐高City拼插积木玩具 警用巡逻艇（5-12岁）60129 (保税仓发货）",
					"marketPrice": "1",
					"salePrice": "1",
					"storage": "1"
					},
					{
					"productID": "23923705",
					"productName": "丹麦LEGO乐高Friends拼插积木玩具 心湖城超级市场（6-12岁）41118 (保税仓发货）",
					"marketPrice": "1",
					"salePrice": "1",
					"storage": "1"
					},
					{
					"productID": "28699452",
					"productName": "丹麦LEGO乐高Duplo拼插积木玩具 警用巡逻车（2-5岁）10809 (保税仓发货）",
					"marketPrice": "1",
					"salePrice": "1",
					"storage": "1"
					}
					]
					},
					{
					"src": "../images/act_eaaudiovideo.jpg",
					"href": "http://www.sjgo365.com/zt/hd/eaaudiovideo",
					"text": "随心而动 影音娱乐专场",
					"products": [
					{
					"productID": "26646197",
					"productName": "B&O耳机H5粉 入耳式吸磁耳机 扔掉束缚 灵感加倍",
					"salePrice": "1598",
					"marketPrice": "1",
					"storage": "1"
					},
					{
					"productID": "28888728",
					"productName": "BEATS耳机Solo3 Wireless红 蓝牙无线 头戴式降噪耳机",
					"salePrice": "1650",
					"marketPrice": "1",
					"storage": "1"
					},
					{
					"productID": "29238175",
					"productName": "JBL 通讯专用有线耳机 C100 黑色",
					"salePrice": "98",
					"marketPrice": "1",
					"storage": "1"
					}
					]
					},
					{
					"src": "../images/act_eareading.jpg",
					"href": "http://www.sjgo365.com/zt/hd/eareading",
					"text": "掌上阅读 畅想书香",
					"products": [
					{
					"productID": "21579767",
					"productName": "Kindle阅读器Ｐaperwhite黑送价值50元书卡一张",
					"salePrice": "958",
					"marketPrice": "1",
					"storage": "1"
					},
					{
					"productID": "24694350",
					"productName": "华为 平板M3青春版CPW-W09(4GB+64GB)灰",
					"salePrice": "1699",
					"marketPrice": "1",
					"storage": "1"
					},
					{
					"productID": "24245844",
					"productName": "Apple 苹果iPad 平板电脑 2018年新款9.7英寸（128G WLAN版/A10 芯片/Retina显示屏/Touch ID MRJP2CH/A）金色 限重庆区域发货",
					"salePrice": "3086",
					"marketPrice": "1",
					"storage": "1"
					}
					]
					},
					{
					"src": "../images/act_eacellphone.jpg",
					"href": "http://www.sjgo365.com/zt/hd/eacellphone",
					"text": "清凉风暴 机情一夏",
					"products": [
					{
					"productID": "27103545",
					"productName": "荣耀 全网手机 V10(6+128G) 幻夜黑(S)",
					"salePrice": "2699",
					"marketPrice": "1",
					"storage": "1"
					},
					{
					"productID": "22618483",
					"productName": "华为 全网手机 畅享8Plus(FLA-AL10)4+64G 蓝色(S)",
					"salePrice": "1569",
					"marketPrice": "1",
					"storage": "1"
					},
					{
					"productID": "24703192",
					"productName": "华为 全网手机 畅享8(LDN-AL00)3+32G 金色(S)",
					"salePrice": "1089",
					"marketPrice": "1",
					"storage": "1"
					}
					]
					},
					{
					"src": "../images/act_eatv.jpg",
					"href": "http://www.sjgo365.com/zt/hd/eatv",
					"text": "彩电专场 点亮质感人生",
					"products": [
					{
					"productID": "22643443",
					"productName": "三星 液晶电视QA65Q6FAMJXXZ",
					"salePrice": "14999",
					"marketPrice": "1",
					"storage": "1"
					},
					{
					"productID": "23540456",
					"productName": "索尼 液晶电视KD-55A8F",
					"salePrice": "14999",
					"marketPrice": "1",
					"storage": "1"
					},
					{
					"productID": "28232479",
					"productName": "长虹电视机43Q3T 43英寸超轻薄双64位全程4K超清智能启客液晶平板电视",
					"salePrice": "3297",
					"marketPrice": "1",
					"storage": "1"
					}
					]
					}
					]
					
					let str =""
					for(let i=0;i<acts.length;i++){
						str+=`<li><a href="${acts[i].href}"><img src="${acts[i].src}" ><p>${acts[i].text}</p></a></li>`
					}
					$("ul.activelist").append(str)
				
		$.ajax({
			url:"https://localhost:10002/listmore",
			success:function(data){
				console.log(data)
			}
		})
		
	})
})
