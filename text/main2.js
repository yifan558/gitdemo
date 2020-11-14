require.config({
    paths:{
        jquery:"jquery-1.11.3",
        "jquery-cookie":"jquery.cookie",
        nav:"nav",
        banner:"banner",
        down:"down",
        car:"car"
    },
    shim: {
        //设置依赖关系
        "jquery-cookie": ["jquery"],
      },
})

require(["nav","banner","down","car"],function(nav,banner,down,car){
    nav.nav();
    nav.fix();
    nav.scroll();
    
    banner.banner();

    down.down();
    car.cook()
})