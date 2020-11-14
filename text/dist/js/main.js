console.log("hello");
require.config({
    paths:{
        jquery:"jquery-1.11.3",
        "jquery-cookie":"jquery.cookie",
        index:"index",
        banner:"banner",
        nav:"nav"
    },
    shim: {
        //设置依赖关系
        "jquery-cookie": ["jquery"],
      },
})

require(["index","banner","nav"],function(index,banner,nav){
    index.vague();

    banner.banner();
    
    nav.nav();
    nav.fix();
    nav.scroll();
})
