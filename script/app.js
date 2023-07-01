$('#open-btn').click(function(){
    $('.show').css('display', 'block')
    $('#open-btn').css('visibility', 'hidden')
    $('.black-bg02').css('visibility', 'visible')
    $('.black-bg01').css('background', 'rgba(0, 0, 0, 0.5)')
})


$('#close-btn').click(function(){
    $('.show').css('display', 'none')
    $('.black-bg02').css('visibility', 'hidden')
    $('#open-btn').css('visibility', 'visible')
    $('.black-bg01').css('background', 'rgba(0, 0, 0, 0)')
})


$('.black-bg02').click(function(e){
    if(e.target == document.querySelector('.black-bg02')){
        $('.black-bg02').css('visibility','hidden')
        $('.show').css('display', 'none')
        $('#open-btn').css('visibility','visible')
        $('.black-bg01').css('background', 'rgba(0, 0, 0, 0)')
    }
})






$('.header-fixed').each(function(){
    let win = $(window);
    let main = $('.main-img');
    let topspot = main.offset().top

    console.log(topspot)

    win.scroll(function(){
        if(win.scrollTop() < topspot + 920 && win.scrollTop() > topspot - 1){
            $('.header').css('color','white')    
        }else {
            $('.header').css('color', 'black')
        }

        if(win.scrollTop() > topspot + 920){
            $('.header h1').css('visibility','hidden')
        }else {
            $('.header h1').css('visibility','visible')
        }
    })
    
})



$(window).on('scroll', function(){
    var 스크롤양 = document.querySelector('html').scrollTop;
    var 전체높이 = document.querySelector('html').scrollHeight;
    var 보이는높이 = document.querySelector('html').clientHeight;
    var 토탈높이 = 전체높이 - 보이는높이 ;
    var 퍼센트 = (스크롤양 / 토탈높이) * 100;
    document.querySelector('.ui-bar').style.width = 퍼센트 + "%";
})


