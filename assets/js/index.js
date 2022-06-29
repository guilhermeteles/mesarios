$('#main-menu-left').click(function() {
    if ($('#main-menu-right').hasClass('width-0')) {
        $('#main-menu-right').removeClass('width-0')
        $('#main-menu-left').removeClass('height-100')
        $('#main-menu-right').removeClass('height-100')
    }else{
        $('#main-menu-right').addClass('width-0')
        $('#main-menu-left').addClass('height-100')
        $('#main-menu-right').addClass('height-100')
    }
    $('#main-menu-left .title-back').toggle()
    
    $('#main-content-left').slideToggle(2000)
})

$('#main-menu-right').click(function() {
    if ($('#main-menu-left').hasClass('width-0')) {
        $('#main-menu-left').removeClass('width-0')
        $('#main-menu-right').removeClass('height-100')
        $('#main-menu-left').removeClass('height-100')
    }else{
        $('#main-menu-left').addClass('width-0')
        $('#main-menu-right').addClass('height-100')
        $('#main-menu-left').addClass('height-100')
    }
    $('#main-menu-right .title-back').toggle()
    $('#main-menu-left-menu').slideToggle(2000)
    $('#main-content-right').slideToggle(2000)
})

$('.main-menu-left-menu').click(function(){
    id = $('.main-menu-left-menu.active').attr('data-toggle')

    $('#' + id).slideToggle(500)

    $('.main-menu-left-menu').removeClass('active')
    $(this).addClass('active')

    id = $('.main-menu-left-menu.active').attr('data-toggle')
    $('#' + id).slideToggle(500)
})