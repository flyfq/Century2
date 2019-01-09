require(["../scripts/config.js"], function() {
	require(["jquery", "cookie", "jqcookie"], function($, cok, jqcok) {

		$.ajax({
			url: "http://localhost:10002/data/products.json",
			success: function(res) {
				var products = res
				var goods = JSON.parse($.cookie("_goods"))
				var str = ""
				for (var i = 0; i < goods.length; i++) {
					for (var j = 0; j < products.length; j++) {
						if (goods[i].$id == products[j].productId) {

							str +=
								`<div class="infro-list clear" index = "${products[j].productId}">
											<div class="" style="width: 190px;">
												<input type="checkbox" name="" id="" value="" checked="checked" />
												<img src="${products[j].smallImage}" >
											</div>
											
											<div class="" style="width: 300px;"><a href="#">${products[j].productName}</a></div>
											<div class="" style="width: 120px;">
												<span>${products[j].vipshopPrice}</span>
												<p>(税费：¥${(products[j].vipshopPrice*0.2).toFixed(2)})</p>
											</div>
											<div class="" style="width: 80px;">
												<a class="minus" href="#">-</a><input type="text" name="" id="" value="${goods[i].num}" /><a class="add" href="#">+</a>
											</div>
											<div class="" style="width: 160px;">${products[j].vipshopPrice*goods[i].num}</div>
											<div class="te" style="width: 120px;"><a class="te" href="##">删除</a></div>
											</div>`
						}
					}
				}
				$(".goodsinfro").append(str)
				
				// 最后算总额
								var num=0
								$.each(goods,function(key,item){
									$.each(products,function(index,value){
										if(item.$id==value.productId){
											num+=value.vipshopPrice*item.num
										}
									})
								})
								$("#total").text("¥"+num)
								$("#tax").text("¥"+num*0.2)
								$("#totalAll").text("¥"+num+num*0.2)
								

				$(".goodsinfro").on("click", "a.te", function() {
					var id = $(this).parent().parent().attr("index")
					for (var i = 0; i < goods.length; i++) {
						if (goods[i].$id == id) {
							$(this).parent().parent().remove()
							goods.splice(i, 1)
						}
					}
					$.cookie("_goods", JSON.stringify(goods))
				})

				$(".goodsinfro").on("click", "a.minus", function() {
					var count = parseInt($(this).siblings("input")[0].value)
					if (count == 1) {
						count = 1;

					} else {
						count--

					}
					$(this).siblings("input")[0].value = count

					var id2 = $(this).parent().parent().attr("index")

					$.each(goods, function(index, value) {
						if (value.$id == id2) {
							value.num = count
						}
						$.cookie("_goods", JSON.stringify(goods))
					})



				})

				$(".goodsinfro").on("click", "a.add", function() {
					var count = parseInt($(this).siblings("input")[0].value)
					count++
					$(this).siblings("input")[0].value = count
					var id3 = $(this).parent().parent().attr("index")
					$.each(goods, function(index, value) {
						if (value.$id == id3) {
							value.num = count

						}
						$.cookie("_goods", JSON.stringify(goods))
					})
				})
			}
		})
	})
})
