//	思路:
	//	获取多个节点,遍历该节点
	//	给每个节点添加一个click(或者是鼠标划过)事件
	//	比如,我点击的是第二个,那对应的下标为 1,
	//	那下面内容部分,下标也对应是 1 显示,其他的隐藏

	//	获取所有的LI标签节点,以及内容部分的DIV节点
	var headerTopCenter=document.getElementsByClassName('headerTopCenter');
	var productClass_top_right=document.getElementsByClassName("productClass_top_right");
	 var lis=productClass_top_right [0].firstElementChild.children;
	//console.log(lis);
	var productClass_footer_box=document.getElementsByClassName('productClass_footer_box')[0].children;
	//console.log(productClass_footer_box);
	for(var i=0;i<lis.length;i++){  //遍历li
		lis[i].index=i;  //给每个节点添加一个自定义属性，用来接收i的值
		lis[i].onmouseover=fn; //此处不能加（），不然没点击就已经执行了
	}
	function fn(){
		//console.log(this.index);  //this表示事件前面对应的节点对象
		//console.log(this.className);
		for(var j=0;j<lis.length;j++){
			lis[j].className='';
			productClass_footer_box[j].style.display='none';
		}
		this.className='fix';
		productClass_footer_box[this.index].style.display='block';
	}