$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

      // get initial position of the element

$(document).ready(function() {
    var lastScrollTop = 0;
     var fixmeTop = $('.fixme').offset().top; 
     
     $('#leftNavPnl').attr({'data-tw':$('#leftNavPnl').css('width'),'data-lft':$('#leftNavPnl').offset().left});
     $('.EEP_C_CentrContTab').attr({'data-lft':$('.EEP_C_CentrContTab').offset().left})
     
     
$(window).scroll(function(event){
    
   var currentScroll = $(window).scrollTop(); // get current position
    if (currentScroll >= fixmeTop) {           // apply position: fixed if you
        $('.fixme').css({                      // scroll to that element or below it
            position: 'fixed',
            top: '15%',
           
            left:  $('#leftNavPnl').attr('data-lft'),
            width:  $('#leftNavPnl').attr('data-tw')
            
        });
        $('.dummyTabPnl').css({'width':$('.leftNavPnl').attr('data-tw'),'display':'inline-block','height':'100%'}).show();
        
        
       
    } else {                                   // apply position: static
        $('.fixme').css({                      // if you scroll above it
            position: 'unset',
            top: 'unset',
            bottom: 'unset',
            left:  'unset',
            width:'25%',
            
            
           
        });
          $('.dummyTabPnl').hide();
    }

});
});
function chngId(itmno){
    $('.EEPC_Itm').removeClass('EEPC_CurTab');
    $('#EEPCL_'+itmno).addClass('EEPC_CurTab');
    $('#EETAB_'+itmno).slideDown();
}
function chngId_l(itmno){
    $('.EEPC_Itm').removeClass('EEPC_CurTab');
    $('#EEPCL_'+itmno).addClass('EEPC_CurTab');
   
}