function $(id){
		return document.getElementById(id);
	}
	$('userNameId').onkeyup = function(){
		if(check(this.value,"userName")){
			$('userNameP').innerHTML = '';
			return;
		}else{
			$('userNameP').innerHTML = '！电话号码格式有误';
		}
	}
	$('psId').onkeyup = function(){
		if(check(this.value,"pass")){
			$('passP').innerHTML = '';
			return;
		}else{
			$('passP').innerHTML = '！密码长度是6-20位字符，由数字开头，并且要求字母、数字和字符两种以上';
		}
	}
//	$('emailId').onkeyup = function(){
//		if(check(this.value,"youxiang")){
//			$('emailSpan').innerHTML = '';
//			return;
//		}else{
//			$('emailSpan').innerHTML = '！邮箱输入有误';
//		}
//	}
	$('regId').onkeyup = function(){
		if(check(this.value,"reg")){
			$('yanP').innerHTML = '';
			return;
		}else{
			$('yanP').innerHTML = '！验证码输入有误';
		}
	}
	$('messageId').onkeyup = function(){
		if(check(this.value,"message")){
			$('messageP').innerHTML = '';
			return;
		}else{
			$('messageP').innerHTML = '！短信校验码输入有误';
		}
	}
	$('registerId').onkeyup = function(){
		if(check(this.value,"message")){
			$('regP').innerHTML = '';
			return;
		}else{
			$('regP').innerHTML = '！注册邀请码输入有误';
		}
	}
	
	function check(str,type){
		switch(type){
			case 'userName':
			var pattern=/^[1]\d{10}/;
			break;
			case 'pass':
			var pattern=/^[0-9][\w]+[\w-]{6,20}/g;
			break;
			case 'youxiang':
			var pattern=/^[\w][\w\-]{4,}[\@]([\w]+)[\.][a-z0-9]{2,4}[\.][a-z0-9]{2,4}/ig;
			break;
			case 'reg':
			var pattern=/[1-9][0-9]{5}/;
			break;
			case 'message':
			var pattern=/\d{4,5}/;
			case 'registerName':
			var pattern=/[1-9][0-9]{5}/;
		}
		return pattern.test(str);
	}