
$( document ).ready(function() {

    $.scrollSpy('.scrollspy',{
      offsetTop: -120
    });

    $('#body').localScroll({duration:800, offset:-75});


    $('.button-collapse').sideNav();
    $('#navbar').affix({offset: {top: $('#navbar-top').outerHeight(true)} });

    $('.slider').slider({full_width: true, height: 600});

    $('#carrusel-empresa').carousel({ interval: 8000});


});



function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 100,
            header = document.querySelector('header');
        // se muestra
        if (distanceY > shrinkOn) {
            $('#logo').removeClass('esconder');
            if(!$('#logo').hasClass('mostrar')){
                $('#logo').addClass('mostrar');
                $('#logo').delay(300).css('opacity', '1');
                $('#logo').delay(300).css('display', 'inline');
            }
        } else {
        // se esconde
            if(!$('#logo').hasClass('esconder') &&
                    $('#logo').hasClass('mostrar')
                ){

                $('#logo').removeClass('mostrar');
                $('#logo').addClass('esconder');
                $('#logo').delay(300).css('opacity', '0');
                $('#logo').delay(300).css('display', 'none');
            }
        }
    });
}

window.onload = init();


function scrollFooter(scrollY, heightFooter)
{
    //console.log(scrollY);
    //console.log(heightFooter);

    if(scrollY >= heightFooter)
    {
        $('footer').css({
            'bottom' : '0px'
        });
    }
    else
    {
        $('footer').css({
            'bottom' : '-' + heightFooter + 'px'
        });
    }
}

//$(window).load(function(){
$( document ).ready(function() {

    var windowHeight        = $(window).height(),
        footerHeight        = $('footer').height();
        //heightDocument      = (windowHeight) + ($('.content').height()) + ($('footer').height()) - 20;

    
    $('#scroll-animate, #scroll-animate-main').css({
        'height' :  footerHeight + 'px'
    });
/*    // Definindo o tamanho dos elementos header e conteúdo
    $('header').css({
        'height' : windowHeight + 'px',
        'line-height' : windowHeight + 'px'
    });
*/

/*    $('.wrapper-parallax').css({
        'margin-top' : windowHeight + 'px'
    });
*/
    scrollFooter(window.scrollY, footerHeight);

    // ao dar rolagem
    window.onscroll = function(){
        var scroll = window.scrollY;

        $('#scroll-animate-main').css({
            'top' : '-' + scroll + 'px'
        });
/*
        $('header').css({
            'background-position-y' : 50 - (scroll * 100 / heightDocument) + '%'
        });
*/
        scrollFooter(scroll, footerHeight);
    }
});