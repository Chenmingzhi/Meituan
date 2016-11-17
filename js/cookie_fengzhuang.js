//保存数据    name value day
function setCookie(name,value,expiresday){
	var date=new Date();
	date.setDate(date.getDate()+expiresday);
	document.cookie = name+"="+encodeURIComponent(value)+";expires="+date;
	}

//读取数据
function getCookie(name){
	var cookieArray=document.cookie.split(";");
	for(var i=0;i<cookieArray.length;i++){
		var array=cookieArray[i].split("=");
		if(array[0]==name){
			return decodeURIComponent(array[1]);
		}
	}
			return null;
}

//删除数据
function removeCookie(name){
	var date=new Date;
	document.cookie = name+"="+" "+";expires="+date;
}


//setCookie("username","张三;",10); 

//alert(getCookie("username"));
window.onload = function(){
	var div=document.getElementsByTagName("div")[0];
	
		
	 	div.style.top =getCookie("top")+"px";
	 	div.style.left =getCookie("left")+"px";
	div.onmousedown = function(evt){
		var evts=evt||event;
		document.onmousemove = function(evt){
			var evtss=evt||event;
//			var X=evtss.clientX-evts.offsetX;
//			var Y=evtss.clientY-evts.offsetY;
			div.style.left=evtss.clientX-evts.offsetX+"px";
			div.style.top=evtss.clientY-evts.offsetY+"px";
			div.innerHTML = "X"+(evtss.clientX-evts.offsetX)+","+"Y"+(evtss.clientY-evts.offsetY);
			
			div.onmouseup =function(){
				document.onmousemove = null;
				setCookie("left",parseInt(evtss.clientX-evts.offsetX),10);
				setCookie("top",parseInt(evtss.clientY-evts.offsetY),10);
				div.onmouseup=null;
	}
		}
	}
}
