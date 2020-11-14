define(['jquery'], function($){
    function banner(){
        $(function(){
            var aBtns = $(".banner .bannerbottom").find("ol li");
            var oUL = $(".banner .bannerbox").find("ul");
            
            var iNow = 0;
            var timer = null;

            $(".banner").mouseenter(function(){
                clearInterval(timer);
            });

            $(".banner").mouseleave(function(){
                //轮播
                timer = setInterval(function(){
                    iNow++;
                    tab();
                },3000)
            })

            aBtns.click(function(){
                iNow = $(this).index();
                tab();
            })
            //轮播
            timer = setInterval(function(){
                iNow++;
                tab();
            },3000)

            function tab(){
                aBtns.removeClass("active1").eq(iNow).addClass("active1");
                if(iNow == aBtns.size()){
                    aBtns.eq(0).addClass("active1")
                }

                oUL.animate(
                    {
                        left:iNow * -1263,
                    },
                    500,
                    function(){
                        if(iNow === aBtns.size()){
                            iNow = 0;
                            oUL.css("left",0);
                        }
                    }                
                )
            }

            aBtns.mouseenter(function(){
                iNow = $(this).index();
                aBtns.eq(iNow).addClass("blur");
            })
            aBtns.mouseleave(function(){
                iNow = $(this).index();
                aBtns.eq(iNow).removeClass("blur");
            })
        })
    }

    
    return {
        banner
        
    }
})