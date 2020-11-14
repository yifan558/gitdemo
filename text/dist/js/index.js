define(['jquery'], function($){
    function vague(){
        $(function(){
            var pic1 = $(".goodslist").find(".picture")

            pic1.mouseenter(function(){
                $(this).attr("class","blur");
            })
            pic1.mouseleave(function(){
                $(this).removeClass("blur");
            })
        })

        
    }
    return{
        vague
    }
})