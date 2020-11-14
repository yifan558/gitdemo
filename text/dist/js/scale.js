define(['jquery'], function($){
    function scale(){
        $(function(){

            $("#small").mouseenter(function () {
                $("#mark,#big").show();
            }).mouseleave(function () {
              $("#mark,#big").hide();
            }).mousemove(function(ev){
                var l = ev.pageX - $("#small").offset().left - 90;
                l = Math.max(0, l);
                l = Math.min(l, 202);
                var t = ev.pageY - $("#small").offset().top - 90;
                t = Math.max(0,t);
                t = Math.min(t, 202);
                $("#mark").css({
                    left: l,
                    top: t
                })
                $("#big img").css({
                    left: -2 * l,
                    top: -2 * t
                })
            })  
        })

        function Magnify(arr){
            //添加属性
            this.oSmall = document.getElementById("small");
            this.oMark = document.getElementById("mark");
            this.oBig = document.getElementById("big");
            this.oBigImg = this.oBig.getElementsByTagName("img")[0];
            //编写一个数组，存放着五个图片的信息
            this.msg = arr;

        }

        Magnify.prototype.load = function(id){
            this.parentNode = document.getElementById(id);
            //通过循环将这些数据全部添加到页面上
            for(var i = 0; i < this.msg.length; i++){
                var newLi = document.createElement("li");
                //三目运算符，设置第一个节点默认被选中
                newLi.className = i == 0 ? "active" : "";
                newLi.style.width = 56 + "px"
                newLi.style.height = 56 + "px"

                var oImg = document.createElement('img');
                oImg.src = this.msg[i];

                newLi.appendChild(oImg);
                this.parentNode.appendChild(newLi);
            }
        }
        //完成点击小图片，完成放大图片的切换
        Magnify.prototype.tab = function(){
            var childs = this.parentNode.children;

            var _this = this;

            this.parentNode.onclick = function(ev){
                var e = ev || window.event;
                var target = e.target || window.event.srcElement;
                if(target.tagName.toLowerCase() == "img"){
                    //去将点前点击的图片样式，改成被选中的
                    for(var i = 0; i < childs.length; i++){
                        childs[i].className = '';
                    }

                    target.parentNode.className = "active";
                    //切换图片
                    _this.oSmall.firstElementChild.src = target.src;
                    _this.oBigImg.src = target.src;

                }
            }
        }

        var m1 = new Magnify(["images/shopcar/mouse.png","images/shopcar/ia_500000009.jpg", "images/shopcar/ia_500000010.jpg"]);
            m1.load("ul1");
            m1.tab();
    }  
    return{
        scale
    } 
})