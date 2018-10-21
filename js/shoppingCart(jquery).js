// function $(str){
// 	if(str.charAt(0)=="#"){
// 		return document.getElementById(str.substring(1));
// 	}else if(str.charAt(0)=="."){
// 		return document.getElementsByClassName(str.substring(1));
// 	}else{
// 		return document.getElementsByTagName(str);
// 	}
// }	
	window.onload=function(){
		$(".addCls").each(function(){
			$(this).click(function(){
				//1.改数量
				var count=parseFloat($(this).parents(".price2").find(".money").val());
				count++;
				$(this).parents(".price2").find(".money").val(count);
				//2.改单价
				var price=parseFloat($(this).parents(".shopRight").find(".price1 p").html());
				//console.log(price);
				var money=(price*count).toFixed(2);
				console.log(money);
				$(this).parents(".shopRight").find(".price3 .prices").html(money);
				console.log($(this).parents(".shopRight").find(".price3 .prices"))
				//3.改总额
				totalMoney();
			});
		});
	
		
		$(".reduceCls").each(function(){
			$(this).click(function(){
				//1.改数量
				var count=parseFloat($(this).parents(".price2").find(".money").val());
				count--;
				if(count<0){
					return;
				}
				$(this).parents(".price2").find(".money").val(count);
				//2.改单价
				var price=parseFloat($(this).parents(".shopRight").find(".price1 p").html());
				var money=(price*count).toFixed(2);
				$(this).parents(".shopRight").find(".price3 .prices").html(money);
				//3.改总额
				totalMoney();
			});
		});
		
		//删除函数
	$(".removeId").each(function(){
		$(this).click(function(){
			let bb=$(this).parents(".shopRight").parents(".shopping_cen_cen2");
			let del=confirm("你确定删除吗?");
			if(del){
				bb.remove();
			}
			
			//当点击删除时，调用合计函数，重新判断当前合计的价格
			totalMoney();
		});
	});
	
	//总计
	function totalMoney(){
		var sum=0;
		$(".prices").each(function(){
			sum+=parseFloat($(this).html());
		});
		$("#total").html(sum.toFixed(2));
	}
}
	