app.home = {

    init:function(){

        $('#nav_bar nav a').removeClass('active');
        $('.home-link').addClass('active');

        $(".home-page h1").blast({
            delimiter: "character",
            tag: "span"
        });


        a = 0;
        $(".home-page .blast").each(function(){

            if(a==300){

                a=400;

            }

            if(a==1200){

                a=1400;

            }


            var el = $(this);

            if(a==400){

                setTimeout(function(){

                    $(".home-page h1 img").addClass('animated rotateIn');


                },500);
            }

            setTimeout(function(){

                el.addClass('animated bounceIn');




            },a);

            if(a < 1200) {
                a = a + 100;
            }else {

                a = a + 70;

            }



        });
        setTimeout(function(){

            $(".home-page .blast").removeClass('animated bounceIn');
            $(".home-page .blast").css('opacity',1);

            $(".home-page .blast").mouseenter(function (){

                var el = $(this);

                $(this).addClass('animated rubberBand');
                $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){

                    el.removeClass('animated rubberBand');

                });

            });


        },3000);

        setTimeout(function(){

            $(".home-page .flat-button").addClass('animated bounceIn');
            $(".home-page .flat-button").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){

                $(".home-page .flat-button").removeClass('animated bounceIn');
                $(".home-page .flat-button").css('opacity',1);

            });



        },2000);


        $(".home-page .flat-button").mouseenter(function (){

            var el = $(this);


            $(this).addClass('animated rubberBand');
            $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){

                el.removeClass('animated rubberBand');

            });

        });

        $('#bulb').addClass('animated fadeInUp');

        $('#bulb a').click(function(){

            if($(this).hasClass('active')){

                 $(this).removeClass('active');


                 localStorage.removeItem("color");
                 $('body').removeClass('white');

            }else {

                $(this).addClass('active');

                localStorage.setItem("color", 'white');
                $('body').addClass('white');



            }

            return false;
        });

        setInterval(function(){

            $('#bulb a').toggleClass('shake');
        },6000);



    }

}
