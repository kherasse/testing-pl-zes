
/* phone mask */

        $(function() {
            $(".phone").mask("+48 999-999-999");
        });

/* carouFredSel slider */

        $(function() {
            $('#carousel ul').carouFredSel({
                prev: '#prev',
                next: '#next',
                pagination: "#pager",
                auto: false,
                pauseOnHover: true,
                scroll: {duration: 250, items: 1}
            });
        });

/* lightGallery */

        $(function() {
            $('.lightGallery').lightGallery({
                loop:true
            });
        });

/* scroll */

        $(function() {
            $("a.scroll").click(function() {
                $("html, body").stop().animate({
                    scrollTop: $($(this).attr("href")).offset().top - 120
                }, {
                    duration: 700
                });
                return false;
            });
        });

/* nav 2 */

        $(function() {
            $('.nav-2-1').click(function(){
                $(this).parent().children().removeClass('nav-2-active');
                $(this).addClass('nav-2-active');
                $('.box-2').fadeOut(0);
                $('.box-2-1').fadeIn(0);
            });
        });

        $(function() {
            $('.nav-2-2').click(function(){
                $(this).parent().children().removeClass('nav-2-active');
                $(this).addClass('nav-2-active');
                $('.box-2').fadeOut(0);
                $('.box-2-2').fadeIn(0);
            });
        });

        $(function() {
            $('.nav-2-3').click(function(){
                $(this).parent().children().removeClass('nav-2-active');
                $(this).addClass('nav-2-active');
                $('.box-2').fadeOut(0);
                $('.box-2-3').fadeIn(0);
            });
        });

        $(function() {
            $('.nav-2-4').click(function(){
                $(this).parent().children().removeClass('nav-2-active');
                $(this).addClass('nav-2-active');
                $('.box-2').fadeOut(0);
                $('.box-2-4').fadeIn(0);
            });
        });

/* nav 4 */

        $(function() {
            $('.box-4-1').click(function(){
                $(this).parent().children().removeClass('box-4-active');
                $(this).addClass('box-4-active');
                $('.box-4-r').fadeOut(0);
                $('.b4-1').fadeIn(0);
            });
        });

        $(function() {
            $('.box-4-2').click(function(){
                $(this).parent().children().removeClass('box-4-active');
                $(this).addClass('box-4-active');
                $('.box-4-r').fadeOut(0);
                $('.b4-2').fadeIn(0);
            });
        });

        $(function() {
            $('.box-4-3').click(function(){
                $(this).parent().children().removeClass('box-4-active');
                $(this).addClass('box-4-active');
                $('.box-4-r').fadeOut(0);
                $('.b4-3').fadeIn(0);
            });
        });

        $(function() {
            $('.box-4-4').click(function(){
                $(this).parent().children().removeClass('box-4-active');
                $(this).addClass('box-4-active');
                $('.box-4-r').fadeOut(0);
                $('.b4-4').fadeIn(0);
            });
        });

        $(function() {
            $('.box-4-5').click(function(){
                $(this).parent().children().removeClass('box-4-active');
                $(this).addClass('box-4-active');
                $('.box-4-r').fadeOut(0);
                $('.b4-5').fadeIn(0);
            });
        });

        $(function() {
            $('.box-4-6').click(function(){
                $(this).parent().children().removeClass('box-4-active');
                $(this).addClass('box-4-active');
                $('.box-4-r').fadeOut(0);
                $('.b4-6').fadeIn(0);
            });
        });

/* pop-up */

        $(function() {
            $('.button-2').click(function(){
                $('#zb1').fadeIn(300);
                $('.wrapper').fadeIn(300);
                $('body').css('overflow','hidden');
            });
        });

        $(function() {
            $('.button-5').click(function(){
                $('#zb1').fadeIn(300);
                $('.wrapper').fadeIn(300);
                $('body').css('overflow','hidden');
            });
        });

        $(function() {$('.button-3-1').click(function(){$('#zb2').fadeIn(300);$('.wrapper').fadeIn(300);$('body').css('overflow','hidden');});});
        $(function() {$('.button-3-2').click(function(){$('#zb3').fadeIn(300);$('.wrapper').fadeIn(300);$('body').css('overflow','hidden');});});
        $(function() {$('.button-3-3').click(function(){$('#zb4').fadeIn(300);$('.wrapper').fadeIn(300);$('body').css('overflow','hidden');});});
        $(function() {$('.button-3-4').click(function(){$('#zb5').fadeIn(300);$('.wrapper').fadeIn(300);$('body').css('overflow','hidden');});});
        $(function() {$('.button-3-5').click(function(){$('#zb6').fadeIn(300);$('.wrapper').fadeIn(300);$('body').css('overflow','hidden');});});
        $(function() {$('.button-3-6').click(function(){$('#zb7').fadeIn(300);$('.wrapper').fadeIn(300);$('body').css('overflow','hidden');});});
        $(function() {$('.button-3-7').click(function(){$('#zb8').fadeIn(300);$('.wrapper').fadeIn(300);$('body').css('overflow','hidden');});});
        $(function() {$('.button-3-8').click(function(){$('#zb9').fadeIn(300);$('.wrapper').fadeIn(300);$('body').css('overflow','hidden');});});
        $(function() {$('.button-3-9').click(function(){$('#zb10').fadeIn(300);$('.wrapper').fadeIn(300);$('body').css('overflow','hidden');});});

        $(function() {
            $('.wrapper, .close').click(function(){
                $('.wrapper').fadeOut(300);
                $('.z-box, .thnx').fadeOut(300);
                $('body').css('overflow','auto');
            });
        });

/* form */

        $(function() {$('#form1').validate({rules:{"numb":{required:true}}, messages:{"numb":{required:""}}})});
        $(function() {$('#form2').validate({rules:{"numb":{required:true}}, messages:{"numb":{required:""}}})});
        $(function() {$('#form3').validate({rules:{"numb":{required:true}}, messages:{"numb":{required:""}}})});
        $(function() {$('#form4').validate({rules:{"numb":{required:true}}, messages:{"numb":{required:""}}})});
        $(function() {$('#form5').validate({rules:{"numb":{required:true}}, messages:{"numb":{required:""}}})});
        $(function() {$('#form6').validate({rules:{"numb":{required:true}}, messages:{"numb":{required:""}}})});
        $(function() {$('#form7').validate({rules:{"numb":{required:true}}, messages:{"numb":{required:""}}})});
        $(function() {$('#form8').validate({rules:{"numb":{required:true}}, messages:{"numb":{required:""}}})});
        $(function() {$('#form9').validate({rules:{"numb":{required:true}}, messages:{"numb":{required:""}}})});
        $(function() {$('#form10').validate({rules:{"numb":{required:true}}, messages:{"numb":{required:""}}})});
        $(function() {$('#form11').validate({rules:{"numb":{required:true}}, messages:{"numb":{required:""}}})});
        $(function() {$('#form12').validate({rules:{"numb":{required:true}}, messages:{"numb":{required:""}}})});

/* thnx

        $(function() {
            $('#form1, #form2, #form3, #form4, #form5, #form6, #form7, #form8, #form9, #form10, #form11, #form12').ajaxForm(function() {
                $('.wrapper, .thnx').fadeIn(300);
                $('.z-box').fadeOut(300);
                $('body').css('overflow','auto');
                $('#form1')[0].reset();
                $('#form2')[0].reset();
                $('#form3')[0].reset();
                $('#form4')[0].reset();
                $('#form5')[0].reset();
                $('#form6')[0].reset();
                $('#form7')[0].reset();
                $('#form8')[0].reset();
                $('#form9')[0].reset();
                $('#form10')[0].reset();
                $('#form11')[0].reset();
                $('#form12')[0].reset();
            });
        });

 */

/* animation */

        $('.p1-4, .p1-5, .p1-6').waypoint(function () {
            $(this).addClass('fadeInUp').addClass('animated');
        }, {
            offset:'100%'
        });

        $('.box-5, .line-5').waypoint(function () {
            $(this).addClass('fadeInUp').addClass('animated');
        }, {
            offset:'80%'
        });



/* end */