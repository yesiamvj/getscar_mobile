function EE_shrinkTtl(ttlno){
    var ttlid="#EEItm"+ttlno;
    $(ttlid).attr({'onclick':'EE_backTTls('+ttlno+')'});
    for(i=1;i<ttlno;i++){
        var tgtid='#EEItm'+i;
        $(tgtid).slideUp();
    }
    $(ttlid).animate({'width':'100%','padding':'15px'});
    $(ttlid+' div').css({'display':'inline-block'});
    $(ttlid+' div').animate({'padding':'0px'});
    $(ttlid+' .EE_Ico i').css({'position':'absolute'}).animate({'font-size':'35px','right':'20px','top':'25%'}).css({'float':'right'});
  $('.EE_ITM_ttl:not('+ttlid+')').slideUp(1050);
  $('#EE_Engg_Ans .EE_eItm').slideDown(2500);
  $(ttlid+' .left-arr').show(1000);
}
function EE_backTTls(ttlno){
     
      var ttlid="#EEItm"+ttlno;
      $(ttlid).attr({'onclick':'EE_shrinkTtl('+ttlno+')'});
    for(i=1;i<=6;i++){
        if(i===ttlno){
            
        }
        else{
            var tgtid='#EEItm'+i;
        $(tgtid).show(750);
        }
        
    }
    $(ttlid).animate({'width':'33.33%','padding':'40px'});
    $(ttlid+' div').css({'display':'block'});
    $(ttlid+' .EE_ExNme').animate({'padding-bottom':'25px'});
    $(ttlid+' .EE_Ico i').css({'position':'unset'}).animate({'font-size':'120px','right':'0px','top':'0px'}).css({'float':'none','margin-left':'0px '});
 $('#EE_Engg_Ans .EE_eItm').hide(100);
    $('.EE_ITM_ttl:not('+ttlid+')').slideDown(1050);
    
  
  $(ttlid+' .left-arr').hide(1000);
}