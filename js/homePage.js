$(document).ready(function() {
    var lastScrollTop = 0;
     
    animateSlder();
    parallIntt=0;
   
$(window).scroll(function(event){
   
   var st = $(this).scrollTop();
    var scrollTop     = $(window).scrollTop();
     var   elementOffset = $('#siteNavigatee').offset().top;
     var   distance      = (elementOffset - scrollTop);
     
   
    
   //  $('#parallImg').css({'background-position':'0px '+parallInt});
    /// $('#parallImg').text(scrollTop);
   //  alert(scrollTop);
     
   if (st > lastScrollTop){
       if(parallIntt<50){
          parallInt=parallIntt+'px';
          
       // $('.SFC_S1').css({'background-position':'0px '+parallInt});
    //$('.SFC_S1').text(parallInt);
   
    
    
    }
    
     parallIntt++;
      // $('.SFC_S1').css('');
        if(distance<10){
         $('#siteNavigateeHii').slideDown();
   }
   else{
        $('#siteNavigateeHii').hide();
   }
    
   
     // SM_MoveLift(cufllor-1+2);
     // alert('1');
       // downscroll code
      
   } else {
       if(parallIntt<50){
          parallInt=parallIntt+'px';
          
     //   $('.SFC_S1').css({'background-position':'0px '+parallInt});
    //$('.SFC_S1').text(parallInt);
   
    
    
    }
    
     parallIntt--;
      // upscroll code
     if(distance<10){
         $('#siteNavigateeHii').slideDown();
   }
   else{
        $('#siteNavigateeHii').hide();
   }
     
         
   
    
     // SM_MoveLift(cufllor-1);
     // alert('2');
   }
   lastScrollTop = st;
});
});

function animateSlder(){
   var curSlide=$('.siteFocusSlider').attr('data-curslide');
   
}