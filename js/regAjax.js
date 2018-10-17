
function register(){
	$("#btn").click(function(){
		//console.log(123);
		let xhr = new XMLHttpRequest();
		xhr.open("post","regSave.php",true);
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4 && xhr.status==200){
				let str= xhr.responseText;
				if(str=="1"){
					console.log($("#tishi"));
					$("#tishi").html("注册失败，用户名已存在");
				}
				if(str=="-1"){
					console.log($("#tishi"));
					$("#tishi").html("注册成功");
				}		
			}
		}
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		let str="username="+$("#userNameId").val()+"&userpass="+$("#passwordId").val();
		xhr.send(str);
	});
}
