define(['jquery'], function($){
    function sum(){
        $(function(){
            $(".jia").click(function(){
                var n=$(this).prev().html();
                var num=parseInt(n)+1;
                if(num==0){ return;}
                $(this).prev().html(num);
            });

            $(".jian").click(function(){
                var n=$(this).next().html();
                var num=parseInt(n)-1;
                if(num==0){ return alert("数量为1，不能减少")}
                $(this).next().html(num);
            });
        })
    }

    return {
        sum
    }
})