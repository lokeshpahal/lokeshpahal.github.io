
var app = {};

app.ajax = 4;

app.ui = {

    navMenu:function(){

        $(document).on('click','#nav_bar nav a,.flat-button, a.logo',function(){

            if(!$(this).hasClass('active')){

                $('#nav_bar nav a.active').removeClass('active');
                $(this).addClass('active');

                app.ui.pageLoad($(this).attr('href'),$(this).attr('rel'));

                window.history.pushState("", "", $(this).attr('href'));

            }

            $('a.logo').removeClass('active');


            return false;
        });

    },
    pageLoad:function(url,rel){

        app.ui.preloader.preloaderInit(rel);

        if (app.ajax != 4) {
            app.ajax.abort();
        }

        app.ajax = $.ajax({
            type: 'GET',
            url: url

        });

        app.ajax.done(function( msg ) {

            var cont = $(msg).filter("#page");
            var cnt = cont.contents();
            $("#page").html(cnt);

            app.ajax = 4;
        });

        app.ajax.fail(function( jqXHR, textStatus ) {


            $("#page").html(errmsg);

        });




    },
    particle:false,
    particles:function(){

        if($('body').hasClass('white')){

            nb = 85;

        }else {
            nb = 95;
        }
        particlesJS('particles-js', {
            particles: {
                color: '#fff',
                color_random: true,
                shape: 'triangle', // "circle", "edge" or "triangle"
                opacity: {
                    opacity: 0.8,
                    anim: {
                        enable: true,
                        speed: 1.5,
                        opacity_min: 0,
                        sync: false
                    }
                },
                size: 2,
                size_random: true,
                nb: nb,
                line_linked: {
                    enable_auto: true,
                    distance: 130,
                    color: '#515152',
                    opacity: 1,
                    width: 1,
                    condensed_mode: {
                        enable: true,
                        rotateX: 600,
                        rotateY: 600
                    }
                },
                anim: {
                    enable: true,
                    speed: 2
                }
            },
            interactivity: {
                enable: true,
                mouse: {
                    distance: 500
                },
                detect_on: 'window', // "canvas" or "window"
                mode: 'grab', // "grab" of false
                line_linked: {
                    opacity: .5
                },
                events: {
                    onclick: {
                        enable: true,
                        mode: 'push', // "push" or "remove"
                        nb: 2
                    },
                    onresize: {
                        enable: true,
                        mode: 'out', // "out" or "bounce"
                        density_auto: false,
                        density_area: 800 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
                    }
                }
            },
            /* Retina Display Support */
            retina_detect: true
        });



    },
    mobileMenu:function(){


        $('#mobile-link').click(function(){

             $('#nav_bar nav').toggleClass('show');

            return false;

        });

    }

}


$(function () {

    app.ui.navMenu();
    app.ui.particles();

    if (Modernizr.localstorage) {
        if(localStorage.getItem("color") == "white") {
            $('body').addClass('white');
        }
    }


    app.ui.mobileMenu();

});



var delay = (function(){
    var timer = 0;
    return function(callback, ms){
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();


//HOME PAGE
Modernizr.load({
    test: $('.container.home-page').size() >0,
    yep : [path+'js/app/app-home.js'],
    complete:function(){

        if(app.home){
            $( "#page").show();
            app.home.init();

        }

    }
});

//ABOUT
Modernizr.load({
    test: $('.container.about').size() > 0,
    yep : [path+'js/app/app-about.js'],
    complete:function(){

        if(app.about){
            $( "#page").show();
            app.about.init();

        }

    }
});

//contact
Modernizr.load({
    test: $('.container.contact').size() > 0,
    yep : [path+'js/app/app-contact.js'],
    complete:function(){

        if(app.contact){
            $( "#page").show();
            app.contact.init();

        }

    }
});

//SKILLS
Modernizr.load({
    test: $('.container.skills').size() >0,
    yep : [path+'js/app/app-skills.js'],
    complete:function(){

        if(app.skills){
            $( "#page").show();
            app.skills.init();

        }

    }
});


//GALLERY
Modernizr.load({
    test: $('.container.gallery').size() >0,
    yep : [path+'js/vendor/magicwall.js',path+'js/app/app-gallery.js'],
    complete:function(){

        if(app.gallery){
            $( "#page").show();
            app.gallery.init();

        }

    }
});



app.ui.preloader = {

    preloaderInit:function(rel){

        $('.preloader').velocity("slideDown",{ duration: 300,complete: function(elements) {


            $('.progress-bar_bg div').width();
            var a = 0;
            var loader = setInterval(function(){

                ++a;
                $('.progress-bar > span').text(a);
                $('.progress-bar > span').css('width',a + '%');
                $('.progress-bar_bg div').css('width',a + '%');

                if(a==100){

                    clearInterval(loader);

                     app.ui.preloader.preloaderHide(rel);



                }

            },7);


        }});

    },
    preloaderHide:function(rel){

        //tu ma sprawdzac czy request ajaxa sie skonczyl ze zmiennej zapisany

        if(rel == 'index'){

            Modernizr.load({

                load : [path +'js/app/app-home.js'],
                complete:function(){

                    if(app.home){
                        app.home.init();
                    }

                }
            });


        }else if(rel == 'about'){


            Modernizr.load({
                load : [path +'js/app/app-about.js'],
                complete:function(){

                    if(app.about){

                        app.about.init();

                    }

                }
            });

        }else if(rel == 'skills'){


            Modernizr.load({
                load : [path +'js/app/app-skills.js'],
                complete:function(){

                    if(app.skills){

                        app.skills.init();

                    }

                }
            });

        }else if(rel == 'gallery'){


            Modernizr.load({
                load : [path +'js/app/magicwall.js',path +'js/app/app-gallery.js'],
                complete:function(){

                    if(app.gallery){

                        app.gallery.init();

                    }

                }
            });

        }else if(rel == 'contact'){

            //contact
            Modernizr.load({

                load : [path +'js/app/app-contact.js'],
                complete:function(){

                    if(app.contact){

                        app.contact.init();

                    }

                }
            });

        }

        $('#page').show().css('opacity',0);
        $('#page').velocity("fadeIn", { duration: 700 });
        $('.preloader').velocity("slideUp", { duration: 300, complete: function (elements) {


           $('.progress-bar > span').text(0);
           $('.progress-bar > span').css('width', '0%');
           $('.progress-bar_bg div').css('width', '0%');

        }});
    }


}





