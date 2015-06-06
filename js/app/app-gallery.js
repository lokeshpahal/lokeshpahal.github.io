app.gallery = {

    init:function(){


            $(".magicwall").magicWall({
                maxItemHeight: 400,
                maxItemWidth: 400,
                delay: 400,
                preloadBeforeSwitch: true,
                loadingMode:"chain",
                pauseOnHover: "item",
                animations: "flipY,rollOutX,-rollOutX,rollOutY,-rollOutY,slideColumn,-slideColumn,slideRow,-slideRow,fade",
                duration:800
            });

            $(".colorbox").colorbox({
                maxWidth:"90%",
                maxHeight:"90%",
                onOpen: function(){
                    $(".magicwall").magicWall("stop");
                },

                onClosed: function(){
                    $(".magicwall").magicWall("start");
                }
            });

              alertify.log(msg5);

              setTimeout(function(){
                  alertify.log(msg6);
              },2000);




    }

}
