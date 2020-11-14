console.log("hello");
require.config({
    paths:{
        jquery:"jquery-1.11.3",
        "jquery-cookie":"jquery.cookie",
        scale:"scale",
        nav:"nav",
        down:"down",
        sum:"sum"
    },
    shim: {
        //设置依赖关系
        "jquery-cookie": ["jquery"],
      },
})

require(["scale","nav","down","sum"],function(scale,nav,down,sum){
    scale.scale();
    nav.scroll();
    nav.seletc();
    down.down1();
    down.down();
    sum.sum();
})