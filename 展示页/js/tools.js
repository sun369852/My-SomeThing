var tools =  {
	addPx: function(obj){
		if(!isNaN(obj)) {
			obj = obj + "px";
		}
		return obj;
	},
    lightmove: function () {
        // console.log(ev);
        var light = document.getElementById('light');
        var showBox = document.querySelector('.show-index');
        console.log(showBox.getBoundingClientRect(),light.getBoundingClientRect())
        
        if(light) {
            document.onmousemove = function (ev) {
            	if (tools.crash(light,showBox)) {
            		light.style.display = "none";
            	} else{
            		light.style.display = "block";
            	}
                var left = ev.clientX - light.clientWidth/2;
                var top = ev.clientY - light.clientHeight/2;
                light.style.left = left + "px";
                light.style.top = top + "px";
//              
            }
        }

    },
    crash: function(drag,obj){
    	var dragPos = drag.getBoundingClientRect();
    	var objPos = obj.getBoundingClientRect();
    	if(dragPos.left<objPos.right && dragPos.right>objPos.left && dragPos.top<objPos.bottom && dragPos.bottom > objPos.top){
    		return true;
    	}
    	return false;
    },
    
    circleMoving: function(where,obj,x,y,speed,callback){
    	var time = null;
    	var isMoving = false;
    	where.onclick = function(){
    		if(isMoving){
    			return;
    		}
    		var r = 0;
    		isMoving = true;
    		time = setInterval(function(){
    			if(callback) {
    				clearInterval(time);
    			}
				r+=5;
				obj.style.clipPath = "circle("+ r +"px at "+ tools.addPx(x) + " "+tools.addPx(y) + ")";
			
			},speed)
    	}
    }
    

}