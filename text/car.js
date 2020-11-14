define(['jquery','jquery-cookie'], function($){
    function cook(){
        $(function(){
            $("#list ").on("click",".sc_btn",function(){
                var id = this.id
                var first = $.cookie("goods") === null ? true : false
                if(first){
                    var cookieArr = [{id:id,num:1}]
                    $.cookie("goods",JSON.stringify(cookieArr),{
                        expires:7
                    })
                    
                }else{
                    var cookieArr = JSON.parse($.cookie("goods"))
                    var same = false
                    for(var i = 0;i<cookieArr.length;i++){
                        if(cookieArr[i].id == id){
                            same = true
                            break;
                        }
                    }
                    if(same){
                        cookieArr[i].num++
                    }
                    else{
                        let obj = {id:id,num:1}
                        cookieArr.push(obj)
                    }
                    $.cookie("goods",JSON.stringify(cookieArr),{
                        expires:7
                    })
                }
                //alert($.cookie("goods"))
                loadcardata()
            })
        })
    }

    function loadcardata(){
        $(".listbox tbody").empty()
            $.ajax({
                type:"get",
                url:"../data/listcar.json",
                success:function(arr){
                    var cookieStr = $.cookie("goods")
                    if(cookieStr){
                        var cookieArr = JSON.parse(cookieStr)
                        var newArr = []
    
                        for(var i = 0; i < cookieArr.length; i++){
                            for(var j = 0; j < arr.length;j++){
                                if(cookieArr[i].id == arr[j].id){
                                    arr[j].num = cookieArr[i].num
                                    newArr.push(arr[j])
                                    break;
                                }
                            }
                        }

                        for(var i=0;i < newArr.length; i++){
                            var node = $(`<tr id="${newArr[i].id}" class="items_row">
                            <td><img src="${newArr[i].pho}" alt=""></td>
                            <td>${newArr[i].name}</td>
                            <td class="td">
                                <button class="jian">-</button>
                                <span class="num">${newArr[i].num}</span>
                                <button class="jia">+</button>
                            </td>
                            <td class="col-price">${newArr[i].div}</td>
                            <td class="col-total">￥<span>${newArr[i].div * newArr[i].num}</span></td>
                            <td>
                                <u class="del">删除</u>
                            </td>
                        </tr>`)
                        node.appendTo(".listbox tbody")
                        }
                        changecar()
                        allprice()
                    }
                    
                },
                error:function(msg){
                    console.log(msg)
                }
    
            })
    }
    
    function changecar(){
        $(".listbox .tbody").on("click",".del",function(){
            var id = $(this).closest(".items_row").remove().attr("id")
            
            var cookieStr = $.cookie("goods")
            var cookieArr = JSON.parse(cookieStr)
            for(var i = 0;i < cookieArr.length; i++){
                if(id == cookieArr[i].id){
                    cookieArr.splice(i,1)
                    break;
                }
            }
            cookieArr.length == 0 ? $.cookie("goods",null) : $.cookie("goods",JSON.stringify(cookieArr),{expires:7})
            allprice()        
        })

        $(".listbox .tbody").on("click",".jian,.jia",function(){
            var id = $(this).closest(".items_row").attr("id")
            var cookieStr = $.cookie("goods")
            var cookieArr = JSON.parse(cookieStr)

            for(var i = 0;i < cookieArr.length; i++){
                if(id == cookieArr[i].id){
                    if(this.className == "jian"){
                        cookieArr[i].num == 1 ? alert("商品数量为1，不能减少") : cookieArr[i].num--
                    }else{
                        cookieArr[i].num++
                    }
                    break;
                }
            }
           
            $(this).siblings(".num").html(cookieArr[i].num)
            var price = $(this).closest(".td").siblings(".col-price").html().trim()
            $(this).closest(".td").siblings(".col-total").html("￥"+(price * cookieArr[i].num))

            $.cookie("goods",JSON.stringify(cookieArr),{
                expires:7
            })

            allprice()
            
        })
    }

    function allprice(){
        var allchecks = $(".tbody").find(".items_row")
        var total =0
        // console.log(allchecks)
        allchecks.each(function(index,item){
            total += parseFloat($(item).find(".col-price").html()) * parseFloat($(item).find(".num").html())
        })
        $(".bodybottom .allprice").html("￥"+total)

    }

    function delete1(){
        $(".bodybottom .delete").click(function(){
            $.cookie("goods", null);
            loadcardata()
            allprice()
            
        })
    }

    return {
        cook,
        loadcardata,
        delete1
    }
})