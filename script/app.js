$('#open-btn').click(function(){
    $('.show').css('display', 'block')
    $('#open-btn').css('visibility', 'hidden')
})

$('#close-btn').click(function(){
    $('.show').css('display', 'none')
    $('#open-btn').css('visibility', 'visible')
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


$(body).click(function(e){
    if('.menu-bar'.has(e.target).length === 0) {
        $('.menu-bar').heid();
    }
})


