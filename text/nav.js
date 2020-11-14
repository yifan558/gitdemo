define(['jquery'], function($){
    function nav(){
        $(function(){
            var oLis = $(".header .wrap").find("ul li");
            
            oLis.mouseenter(function(){
                oLis.attr("class","");
                $(this).attr("class","active");
                $("li:first").css("backgroundColor", '#171719');
            }).mouseleave(function(){
                oLis.attr("class","");
            })

            $("li:eq(10)").mouseenter(function(){
                $(this).css("backgroundColor", '#171719')
                    .find(".last2").css("color","#fff");
            }).mouseleave(function(){
                $(this).css("backgroundColor", '#171719')
                .find(".last2").css("color","#c3c3c3");
            })
            
            $("li:eq(2)").mouseenter(function(){
                $(".list1").css("display", 'block')
            }).mouseleave(function(){
                $(".list1").css("display", 'none')
            })
            
            $("li:eq(3)").mouseenter(function(){
                $(".list2").css("display", 'block')
            }).mouseleave(function(){
                $(".list2").css("display", 'none')
            })

            $("li:eq(9)").mouseenter(function(){
                $(".list3").css("display", 'block')
                $(".last").find("").css("top","-50px")
            }).mouseleave(function(){
                $(".list3").css("display", 'none')
                $(this).css("top","0")
            })
        })
    }

    function fix(){
        $(function(){
            var fix1 = $(".fix").find(".fix1")
            var fix2 = $(".fix").find(".fix2")
            var an = true
            var pic = true

            fix1.click(function(){
                if(an){
                    $(".fix").animate({
                        right:0
                    },400)
                    $(".fix .fix1").find(".anniu").css("top",-43)
                    an = false
                }else{
                    $(".fix").animate({
                        right:-155
                    },400)
                    $(".fix .fix1").find(".anniu").css("top",0)
                    an = true
                }
            })

            fix2.click(function(){
                if(pic){
                    $(".fix .fix2").find(".pic2").css("display","block")
                    pic = false
                }else{
                    $(".fix .fix2").find(".pic2").css("display","none")
                    pic = true
                }
            })
        })

    }

    function scroll(){
        $(function(){
            var oBtn = $("#scroll")

            $("#scroll").hide()
            $(window).scroll(function(){
                if($(window).scrollTop() > 250){
                    $("#scroll").show();
                }else{
                    $("#scroll").hide();
                }
            })
            
            oBtn.click(function(){
                $('body,html').animate({
                    scrollTop: 0
                },500)
                return false
            })
        })
    }

    function seletc(){
        var oLis = $(".menu .wrap").find("ul li");
            
            oLis.mouseenter(function(){
                $(this).css("background","#fff")
                $(".menu1").css("backgroundColor", '#eee')
                $(".menu3").css("backgroundColor",'#ce1125')
            })
            .mouseleave(function(){
                $(this).css("background","#f9f9f9")
                $(".menu1").css("backgroundColor", '#eee')
                $(".menu3").css("backgroundColor",'#ce1125')
            })

            $(".menu1").mouseenter(function(){
                $(".select").show()
            })

            $(".select .ul1 li").mouseenter(function(){
                $(this).css("background","orange")
            }).mouseleave(function(){
                $(this).css("background","rgba(105,101,101,.6)")
            })

            $(".select").mouseleave(function(){
                $(".select").hide()
            })

    }

    return {
        nav,
        fix,
        scroll,
        seletc
    }
})