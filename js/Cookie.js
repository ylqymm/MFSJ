//设置Cookie
function setCookie(key,value,days){
	var d = new Date();
	d.setDate(d.getDate()+days);
	document.cookie = key + "=" + value +";expires=" + d.toGMTString();
}

//获取Cookie
function getCookie(key){
	var str = document.cookie;
	var arr = str.split(';');
	for(var i in arr){
		if(arr[i].indexOf(key) != -1){
			return arr[i].substring((key+'=').length);
		}
	}
	return null;
}

//删除Cookie
function delCookie(key){
	setCookie(key,'',-1);
}