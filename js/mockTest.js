function chooseOptionn(que,ans){
    $('.Q_'+que+'_option:not(#Q'+que+'A'+ans+') .MCT_OptNum').css({'background-color':'silver'});
    $('.Q_'+que+'_option:not('+'#Q'+que+'A'+ans).css({'color':'black'});
    $('#Q'+que+'A'+ans+' .MCT_OptNum').css({'background-color':'#27ae60'});
    $('#Q'+que+'A'+ans).css({'color':'#27ae60'});
    nexQ=que-1+2;
    $('#QBtn_'+que).addClass('attendedQue');
    $('.attendedQue').css({'background-color':'#27ae60'});
    gotoQue(nexQ);
   
}