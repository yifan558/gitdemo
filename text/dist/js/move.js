define(['jquery'], function($){
    function move(){
        $(function(){
            var oBlock = $(".bottom .mian").find(".slider .slider-handle")
            var oFull = $(".bottom .mian").find(".slider .slider-progress")
           
            oBlock.mousedown(function(ev){
                var e = ev || window.event
                var offsetX = e.clientX - this.offsetLeft

                $(this).mousemove(function(ev){
                    var e = ev || window.event
                    var l = e.clientX - offsetX
                    l = Math.min(l,244)
                    l = Math.max(l,0)
                    
                    $(this).css("left",l)
                    oFull.css("width",l)

                })
            })
            oBlock.mouseup(function(ev){
                var e = ev || window.event
                var offsetX = e.clientX - this.offsetLeft
                var e = ev || window.event
                var l = e.clientX - offsetX
                l = Math.min(l,244)
                l = Math.max(l,0)

                $(this).off("mousemove")
                if(l != 244){
                    oBlock.css("left",0)
                    oFull.css("width",0)
                }else{
                    $(".move").html("验证通过").css("color","#fff")
                    $(".slider-handle").addClass("back")
                }
            })
        })
    }

    return{
        move
    }
})