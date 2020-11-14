console.log("hello");
require.config({
    paths:{
        jquery:"jquery-1.11.3",
        "jquery-cookie":"jquery.cookie",
        nav:"nav",
        down:"down",
        car:"car"
    },
    shim: {
        //设置依赖关系
        "jquery-cookie": ["jquery"],
      },
})

require(["nav","down","car"],function(nav,down,car){

    nav.seletc();
    down.down1();

    car.loadcardata();
    car.cook();
    car.delete1()
})