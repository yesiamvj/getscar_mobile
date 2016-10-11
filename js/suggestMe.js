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

function SM_Srch(srchQue){
	$('.SM_appAutoCompHolder').slideDown();
	if(srchQue.length===0){
          $('.SM_appAutoCompHolder').slideDown();
         
          $('.SM_autoC_Empty').slideDown();
           $('.SM_autoCompEmptyText').animate({'opacity':'1'});
         
           $('.SM_appFetchedResults').text("");
          
          
        }
        else{
            
            
             $('.SM_autoC_Empty').slideUp();
              $('.SM_autoCompEmptyText').css({'opacity':'0'});
             
             // for adding results
             
             $('.SM_appFetchedResults').append('<div class="SM_autoCompItms">'+srchQue+'</div>');
             
             
        }
	
}
function SM_srchSts(srchQue){
    if(srchQue.trim().length<1){
         if($('.SM_appFetchedResults').html().length<4){
           
              $('.SM_appAutoCompHolder').slideDown();
         
          $('.SM_autoC_Empty').slideDown();
           $('.SM_autoCompEmptyText').animate({'opacity':'1'});
           
         }
         else{
           $('.SM_appAutoCompHolder').slideDown();
            $('.SM_autoC_Empty').slideDown();
         
         }
       
    }
    else{
      
         if($('.SM_appFetchedResults').html().length<4){
           
              $('.SM_appAutoCompHolder').slideDown();
         
          $('.SM_autoC_Empty').slideDown();
           $('.SM_autoCompEmptyText').animate({'opacity':'1'});
           
         }
         else{
           
         }
    }
   
}
function SM_srchOff(srchQue){
    if(srchQue.trim().length<1){
         $('.SM_appAutoCompHolder').slideUp();
         //a($('.SM_appFetchedResults').html());
       
    }
    else{
        
    }
}

function SM_appMoveToNextStep(curStepNo){
   
    var nextStepNo=curStepNo-1+2;
    var curTab="#SM__Contentstep_"+curStepNo;
    var nextTab="#SM__Contentstep_"+nextStepNo;
    $('#CSG_ApplicationHoldr').animate({'margin-top':$(nextTab).height()+20});
    // var curLeftPos=$(curTab).css('left');
     var curLeftPos= $('#SM_data_leftTabPos').text();
     //alert(curLeftPos);
    $(curTab).css({'position':'absolute','width':'inherit'}).animate({'left':'-100%'},'slow').fadeOut();
    $(nextTab).css({'position':'absolute','width':'inherit'}).show().animate({'left':curLeftPos},'slow',function(){window.location.assign(nextTab);});
    var curTabTtl="SM_appTab_"+curStepNo;
    var nextTabTtl="#SM_appTab_"+nextStepNo;
    $('#SM_curStep').attr({'id':curTabTtl});
    $(nextTabTtl).attr({'id':'SM_curStep'});
    var curTabTT='#'+curTabTtl+' .forBorderProg';
    $(curTabTT).animate({'width':'0%'});
    $('#SM_curStep .forBorderProg').animate({'width':'100%'});
    var curTabTTC="#"+curTabTtl+' .forBorderProg_Completed';
    $('#SM_curStep .forBorderProg_Completed').animate({'width':'100%'});
    $(curTabTTC).animate({'width':'100%'});
      $('#SM_CurrentStep').text(nextStepNo);
      
       return true;
    
}
function SM_appMoveToBackStep(curStepNo){
   
    var preStepNo=curStepNo-1;
    var curTab="#SM__Contentstep_"+curStepNo;
    var preTab="#SM__Contentstep_"+preStepNo;
            //var curLeftPos=$(curTab).css('left');
            $('#CSG_ApplicationHoldr').css({'margin-top':$(preTab).height()});
    var curLeftPos= $('#SM_data_leftTabPos').text();
    $(curTab).css({'position':'absolute','width':'inherit'}).animate({'left':'100%'},'slow').fadeOut();
    $(preTab).css({'position':'absolute','width':'inherit'}).show().animate({'left':curLeftPos},'slow',function(){window.location.assign(preTab);});
   var curTabTtl="SM_appTab_"+curStepNo;
    var preTabTtl="#SM_appTab_"+preStepNo;
    $('#SM_curStep').attr({'id':curTabTtl});
    $(preTabTtl).attr({'id':'SM_curStep'});
    var curTabTT='#'+curTabTtl+' .forBorderProg';
    $(curTabTT).css({'left':'0px','right':'unset'}).animate({'width':'0%'});
    $('#SM_curStep .forBorderProg').css({'right':'0px','left':'unset'}).animate({'width':'100%'});
    var curTabTTC="#"+curTabTtl+' .forBorderProg_Completed';
    $('#SM_curStep .forBorderProg_Completed').animate({'width':'100%'});
    $(curTabTTC).animate({'width':'0%'});
     $('#SM_CurrentStep').text(preStepNo);
    return true;
}
function SM_appMoveToThisStep(NextStepNo){
    var curStep=$('#SM_CurrentStep').text();
    //alert(NextStepNo);
    //alert(curStep);
    curStep=curStep-1+1;
    
    if(NextStepNo<curStep){
       
        for(i=curStep;i>NextStepNo;i--){
            if(SM_appMoveToBackStep(i)){
                i=i;
            }
          //  $('#SM_CurrentStep').val(i);
        }
        
    }
    else{
         for(i=curStep;i<NextStepNo;i++){
            if(SM_appMoveToNextStep(i)){
                i=i;
            }
          //  $('#SM_CurrentStep').val(i);
        }
    }
}
function SelctGotoNextStep(selectedItm){
    existing=1;
    if($('#SM_Selection_S1').text().length>2){
       $('#SM_Selection_S1').remove();
       existing=0;
    }
    else{
       existing=0;
    }
    if(existing===0){
       
    var selId="#SM_S1C_"+selectedItm;
    var selectedValue=$(selId).val();
    var template=' <div class="SM_fltrItm" id="SM_Selection_S1" data-selected="'+selectedValue+'"  ><span onclick="SM_appMoveToThisStep(1)">'
                    +selectedValue+'</span> <button class="SM_fltr_X" onclick="removeSelItm(this)" ><i class="fa fa-close"></i></button>'+
                '</div>';
        $('#SgstMeSlctedFltrs').append(template);
         $('#SM_Selection_S1').fadeOut().fadeIn();
     SM_appMoveToThisStep(2);
    }
     
}

function removeSelItm(elem){
    $(elem).parent().fadeOut().queue().remove();
}
function calcCutOff(){
    
    var mark_1=$('#inp_SM_COC_1').val()-1+1;
    var mark_2=$('#inp_SM_COC_2').val()-1+1;
    var mark_3=$('#inp_SM_COC_3').val()-1+1;
    var halfed1=(mark_1+mark_2)/4;
    var halfed2=mark_3/2;
    var cutOffMark=halfed1+halfed2;
    $('#SM_CutOfffValue').val(cutOffMark);
   //$('#CutOffCalculator').fadeOut();
    
}

function SM_putAnGo(){
    existing=1;
    
    if($('#SM_Selection_S3').text().length>2){
       $('#SM_Selection_S3').remove();
       existing=0;
    }
    else{
       existing=0;
    }
    if(existing===0){
       
    var selId="#SM_CutOfffValue";
    var selectedValue=$(selId).val();
    if(selectedValue.length>1){
        var template=' <div class="SM_fltrItm" id="SM_Selection_S3" data-selected="'+selectedValue+'"  ><span onclick="SM_appMoveToThisStep(3)"> Cut Off : '
                    +selectedValue+'</span> <button class="SM_fltr_X" onclick="removeSelItm(this)" ><i class="fa fa-close"></i></button>'+
                '</div>';
        $('#SgstMeSlctedFltrs').append(template);
         $('#SM_Selection_S3').fadeOut().fadeIn();
    }
   
     SM_appMoveToNextStep(3);
    }
    

}

function SelctCourseGotoNextStep(selectedItm){
    existing=1;
    if($('#SM_Selection_S2').text().length>2){
       $('#SM_Selection_S2').remove();
       existing=0;
    }
    else{
       existing=0;
    }
    if(existing===0){
       
    var selId="#SM_S2C_"+selectedItm;
    var selectedValue=$(selId).val();
    var template=' <div class="SM_fltrItm" id="SM_Selection_S2" data-selected="'+selectedValue+'"  ><span onclick="SM_appMoveToThisStep(2)">'
                    +selectedValue+'</span> <button class="SM_fltr_X" onclick="removeSelItm(this)" ><i class="fa fa-close"></i></button>'+
                '</div>';
        $('#SgstMeSlctedFltrs').append(template);
         $('#SM_Selection_S3').fadeOut().fadeIn();
     SM_appMoveToThisStep(3);
    }
}
function SM_fillSrchBox(elem){
   // $('#SM_inpCourse').val(elem.text());
   //alert(elem.child);
}

function SM_finishLocate(){
    existing=1;
    
    if($('#SM_Selection_S4').text().length>2){
       $('#SM_Selection_S4').remove();
       existing=0;
    }
    else{
       existing=0;
    }
    if(existing===0){
       
    var selId="#SM_inpLocation";
    var selectedValue=$(selId).val();
     if(selectedValue.length>1){
       var template=' <div class="SM_fltrItm" id="SM_Selection_S4" data-selected="'+selectedValue+'"  ><span onclick="SM_appMoveToThisStep(4)">'
                    +selectedValue+'</span> <button class="SM_fltr_X" onclick="removeSelItm(this)" ><i class="fa fa-close"></i></button>'+
                '</div>';
        $('#SgstMeSlctedFltrs').append(template);
         $('#SM_Selection_S4').fadeOut().fadeIn();   
     }
   
     SM_appMoveToNextStep(4);
    }
    
   
}

function SM_putAndGotoInfra(){
    
     existing=1;
    
    if($('#SM_Selection_S5').text().length>2){
       $('#SM_Selection_S5').remove();
       existing=0;
    }
    else{
       existing=0;
    }
    if(existing===0){
       
    var selId="#SM_sel_clgType";
    var selectedValue=$(selId).val();
    var template=' <div class="SM_fltrItm" id="SM_Selection_S5" data-selected="'+selectedValue+'"  ><span onclick="SM_appMoveToThisStep(5)">'
                    +selectedValue+'</span> <button class="SM_fltr_X" onclick="removeSelItm(this)" ><i class="fa fa-close"></i></button>'+
                '</div>';
        $('#SgstMeSlctedFltrs').append(template);
         $('#SM_Selection_S5').fadeOut().fadeIn();
    
    }
     existing=1;
    
    if($('#SM_Selection_S6').text().length>2){
       $('#SM_Selection_S6').remove();
       existing=0;
    }
    else{
       existing=0;
    }
    if(existing===0){
       
    var selId="#inp_SM_fee";
    var selectedValue=$(selId).val();
    var template=' <div class="SM_fltrItm" id="SM_Selection_S6" data-selected="'+selectedValue+'"  ><span onclick="SM_appMoveToThisStep(5)">'
                    +selectedValue+' Lakhs</span> <button class="SM_fltr_X" onclick="removeSelItm(this)" ><i class="fa fa-close"></i></button>'+
                '</div>';
        $('#SgstMeSlctedFltrs').append(template);
         $('#SM_Selection_S6').fadeOut().fadeIn();
    
    }
     SM_appMoveToNextStep(5);

}






function SM_iniApp(){
   
    var leftPosTab=$('#SM__Contentstep_1').position().left;
    $('#SM_data_leftTabPos').text(leftPosTab);
   
}

function a(m){
    alert(m);
     
}