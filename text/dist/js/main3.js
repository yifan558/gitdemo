console.log("hello");
require.config({
    paths:{
        jquery:"jquery-1.11.3",
        "jquery-cookie":"jquery.cookie",
        move:"move"
    },
    shim: {
        //设置依赖关系
        "jquery-cookie": ["jquery"],
      },
})

require(["move"],function(move){
   move.move();

    
})