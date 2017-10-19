var tools =  {
    lightmove: function () {
        // console.log(ev);
        var light = document.getElementById('light');
        if(light) {
            document.onmousemove = function (ev) {
                var left = ev.clientX - light.clientWidth/2;
                var top = ev.clientY - light.clientHeight/2;
                light.style.left = left + "px";
                light.style.top = top + "px";
            }
        }

    },

}