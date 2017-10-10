/**
 * Created by AHMED on 4/16/2017.
 */

$(window).load( function () { loading(); });


$( function () {
    'use strict'

    show_nav();

    /* Fit Text ===============*/
    fitText('.h1');

    if ($(document).width() <= 768) {

        if ($(document).width() <= 500) {

            fitText('.p-head' , 2.1);
            fitText('.h3-head' , 1.4);

            if ($(document).width() <= 320) {
                fitText('.p-head' , 1.7);
                fitText('.h1' , .8);
                fitText('.h2' , 1.3);
                fitText('.h3' , 1.2);
            }

        }else {

            fitText('.p-head' , 3.2);
            fitText('.h3-head' , 2);
            fitText('.h2' , 1.8);
            fitText('.h3' , 1.6);

        }

    }else {

        fitText('.h3-head' , 1.5);
        fitText('.p-head' , 2.9);
        $('.h2').css('font-size' , '30px');
        $('.h3').css('font-size' , '24px');
    }

    $(window).resize(function () {

       if ($(document).width() <= 768) {

           if ($(document).width() <= 500) {

               fitText('.p-head' , 2.1);
               fitText('.h3-head' , 1.4);
               fitText('.h2' , 1.3);
               fitText('.h3' , 1.2);

           }else {

               fitText('.p-head' , 3.2);
               fitText('.h3-head' , 2);
               fitText('.h2' , 1.8);
               fitText('.h3' , 1.6);

           }

       }else {

           fitText('.p-head' , 2.9);
           $('.h2').css('font-size' , '30px');
           $('.h3').css('font-size' , '24px');
       }


    });

    /*#END# Fit Text =============*/

    tabs();




});

/*Loading ==========*/
function loading ()
{
    var loader = $('#loader');

    loader.fadeOut('speed' , function () { loader.remove(); })
}


/*Show Nav ===============*/
function show_nav()
{
    var show = $(window).height() - 200;
    var nav  = $('#nav');

    $(window).scroll(function () {

        if ($(window).scrollTop() >= show) {

            nav.fadeIn('speed');

        }else {

            nav.fadeOut('speed');

        }

    })
}


/*Fit Text Plugin ==========*/
function fitText(element , x = 1)
{
    $(element).fitText(x);
}


/*Change Tabs ==============*/
function tabs()
{
    var tab = $('.tabs .container-tabs > div');

    tab.on('click' , function () {

        $(this).addClass('active').siblings().removeClass('active');

        $($(this).data('target')).fadeIn(800).siblings().hide();


    });
}