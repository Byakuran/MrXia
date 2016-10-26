// $(function(){
//     var count = 0;
//     document.on('mousewheel',function(e){
//         if(e.wheelDelta < 0){
//             count ++;
//         }else{
//             count --;
//         }
//     })
// })
$(function(){
    $('main').fullpage({
        afterLoad : function(link, i){
            $('section').removeClass('now');
            var $this = $(this);
            setTimeout(function(){
                $this.addClass('now');
            }, 200)

        }
    });
    var $box = $('.carousel');
    var imgWidth = $('#exp_info').width();
    var ols = $('.point');
    ols.each(function(i, value){
        var v = $(value);
        value.index = i;
        v.on('mouseover',function(){
            ols.each(function(i, value){
                $(value).removeClass('current');
            })
            $(this).addClass('current');
            var target = -this.index * imgWidth;
            $box.animate({'left':target+'px'});
            pic = square = this.index;
        })
    });


    var timer = null;
    var square = 0;
    var pic = 0;
    var uls = $('.img_list');
    $('#left').on('click',function(){
        if(pic <= 0){
            pic=uls.length-1;
            $box.css('left',-pic * imgWidth+'px');
        }
        pic--;
        var target = -pic * imgWidth;
        $box.animate({'left':target+'px'});
        if (square > 0) {
            square--;
        } else {
            square = ols.length - 1;
        }
        ols.each(function(i,v){
            $(v).removeClass('current');
        });
        $(ols[square]).addClass('current');
    });
    $('#right').on('click',function(){
        if(pic >= uls.length-1){
            pic=0;
            $box.css('left',-pic * imgWidth+'px');
        }
        pic++;
        var target = -pic * imgWidth;
        $box.animate({'left':target+'px'});
        if(square < ols.length-1){
            square++;
        }else {
            square = 0;
        }
        ols.each(function(i,v){
            $(v).removeClass('current');
        });
        $(ols[square]).addClass('current');
    });
    timer = setInterval(function(){
        $('#right').click();
    },2000);
    $('#exp_info').on('mouseover',function(){
        clearInterval(timer);
    });
    $('#exp_info').on('mouseout',function(){
        timer = setInterval(function(){
            $('#right').click();
        },2000);
    });
});