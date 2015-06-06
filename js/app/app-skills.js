app.skills = {

    init:function(){

        $(".skills h1").blast({
            delimiter: "character",
            tag: "span"
        });

        $(".skills p").blast({
            delimiter: "word",
            tag: "span"
        });

        a = 0;


        $(".skills h1 .blast").each(function(){

             var el = $(this);

            setTimeout(function(){

                el.addClass('animated bounceIn');


            },a);


            a = a + 80;

        });


        setTimeout(function(){

            $(".skills .blast").removeClass('animated bounceIn');
            $(".skills .blast").css('opacity',1);

            $(".skills .blast").mouseenter(function (){

                var el = $(this);

                $(this).addClass('animated rubberBand');
                $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){

                    el.removeClass('animated rubberBand');

                });

            });


        },2000);

        a = 0;
        $('.chart').not('.small').each(function(){


            var el = $(this);



            setTimeout(function(){

                el.addClass('animated rotateIn');
                el.circliful();


            },a)

            a = a + 200;

        });

        a = 0;
        $('.chart.small').each(function(){


            var el = $(this);



            setTimeout(function(){

                el.addClass('animated flipInX');
                el.circliful();


            },a)

            a = a + 100;

        });





    }

}
