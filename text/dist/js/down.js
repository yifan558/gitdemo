define(['jquery','jquery-cookie'], function($){
    function down(){
        $(function(){
            //下载数据到页面上
            $.ajax({
                type: 'get',
                url: '../data/list.json',
                // dataType: "text",  //自动识别数据，再去做对应的处理
                success: function(arr){
                    var newArr = arr.goodswrap
                    var count = 0 
                    var childArr = newArr[count].child

                    for(var i = 0; i < childArr.length; i++){
                        var node = $(`
                        <div class="img">
                            <img src="images/goodslist/xinpin.png" alt="" class="xinpin">
                            <img src="${childArr[i].pic}" alt="" class="bg">
                            <div class="content">
                                <h4>${childArr[i].h4}</h4>
                                <h2>${childArr[i].h2}</h2>
                                <p class="p1">${childArr[i].p1}</p>
                                <div class="price"${childArr[i].div}</div>
                                <div class="sc_btn" id="${childArr[i].id}"><img src="images/goodslist/buy.jpg" alt=""></div>
                                
                            </div>
                        </div>
                        `);
                        node.appendTo($(".goodslist1 .goodswrap"));
                        }
                },
                error: function(msg){
                    console.log(msg);
                }
            })

            $.ajax({
                type: 'get',
                url: '../data/list.json',
                // dataType: "text",  //自动识别数据，再去做对应的处理
                success: function(arr){
                    var newArr = arr.goodswrap3
                    var count = 0 
                    var childArr = newArr[count].child

                    for(var i = 0; i < childArr.length; i++){
                        var node = $(`
                        <div class="img">
                            <img src="images/goodslist/xinpin.png" alt="" class="xinpin">
                            <img src="${childArr[i].pic}" alt="" class="bg">
                            <div class="content">
                                <h4>${childArr[i].h4}</h4>
                                <h2>${childArr[i].h2}</h2>
                                <p class="p1">${childArr[i].p1}</p>
                                <div class="price"${childArr[i].div}</div>
                                <div class="sc_btn" id="${childArr[i].id}"><img src="images/goodslist/buy.jpg" alt=""></div>
                                
                            </div>
                        </div>
                        `);
                        node.appendTo($(".goodslist3 .goodswrap"));
                        }
                },
                error: function(msg){
                    console.log(msg);
                }
            })
            $.ajax({
                type: 'get',
                url: '../data/list.json',
                // dataType: "text",  //自动识别数据，再去做对应的处理
                success: function(arr){
                    var newArr = arr.goodswrap4
                    var count = 0 
                    var childArr = newArr[count].child

                    for(var i = 0; i < childArr.length; i++){
                        var node = $(`
                        <div class="img">
                            <img src="images/goodslist/xinpin.png" alt="" class="xinpin">
                            <img src="${childArr[i].pic}" alt="" class="bg">
                            <div class="content">
                                <h4>${childArr[i].h4}</h4>
                                <h2>${childArr[i].h2}</h2>
                                <p class="p1">${childArr[i].p1}</p>
                                <div class="price"${childArr[i].div}</div>
                                <div class="sc_btn" id="${childArr[i].id}"><img src="images/goodslist/buy.jpg" alt=""></div>
                                
                            </div>
                        </div>
                        `);
                        node.appendTo($(".goodslist4 .goodswrap"));
                        }
                },
                error: function(msg){
                    console.log(msg);
                }
            })
            $.ajax({
                type: 'get',
                url: '../data/list.json',
                // dataType: "text",  //自动识别数据，再去做对应的处理
                success: function(arr){
                    var newArr = arr.goodswrap5
                    var count = 0 
                    var childArr = newArr[count].child

                    for(var i = 0; i < childArr.length; i++){
                        var node = $(`
                        <div class="img">
                            <img src="images/goodslist/xinpin.png" alt="" class="xinpin">
                            <img src="${childArr[i].pic}" alt="" class="bg">
                            <div class="content">
                                <h4>${childArr[i].h4}</h4>
                                <h2>${childArr[i].h2}</h2>
                                <p class="p1">${childArr[i].p1}</p>
                                <div class="price"${childArr[i].div}</div>
                                <div class="sc_btn" id="${childArr[i].id}"><img src="images/goodslist/buy.jpg" alt=""></div>
                                
                            </div>
                        </div>
                        `);
                        node.appendTo($(".goodslist5 .goodswrap"));
                        }
                },
                error: function(msg){
                    console.log(msg);
                }
            })

            $.ajax({
                type: 'get',
                url: '../data/list.json',
                // dataType: "text",  //自动识别数据，再去做对应的处理
                success: function(arr){
                    var newArr = arr.goodswrap6
                    var count = 0 
                    var childArr = newArr[count].child

                    for(var i = 0; i < childArr.length; i++){
                        var node = $(`
                        <div class="img">
                            <img src="images/goodslist/xinpin.png" alt="" class="xinpin">
                            <img src="${childArr[i].pic}" alt="" class="bg">
                            <div class="content">
                                <h4>${childArr[i].h4}</h4>
                                <h2>${childArr[i].h2}</h2>
                                <p class="p1">${childArr[i].p1}</p>
                                <div class="price"${childArr[i].div}</div>
                                <div class="sc_btn" id="${childArr[i].id}"><img src="images/goodslist/buy.jpg" alt=""></div>
                                
                            </div>
                        </div>
                        `);
                        node.appendTo($(".goodslist6 .goodswrap"));
                        }
                },
                error: function(msg){
                    console.log(msg);
                }
            })
        })

    }


    function down1(){
        $(function(){
            $.ajax({
                type: 'get',
                url: '../data/seletc.json',
                // dataType: "text",  //自动识别数据，再去做对应的处理
                success: function(arr){
                    var newArr = arr.nav
                    var count = 0   
                    $(".select .goodslist li").mouseenter(function(){
                        $(".select .goodsbox ul").html("")
                        count = $(this).index()
                        var childArr = newArr[count].child

                        for(var i = 0; i < childArr.length; i++){
                            var node = $(`<li>
                                        <a href=""><img src="${childArr[i].img}" alt="">
                                        <h4>${childArr[i].name}</h4></a>
                                        </li>
                        `);
                            node.appendTo($(".select .goodsbox ul"));
                        }
                    })
                },
                error: function(msg){
                    console.log(msg);
                }
            })
        })
    }

    

    return {
        down,
        down1
    }
})