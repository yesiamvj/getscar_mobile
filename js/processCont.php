<?php

    
  
  //Email information
  $admin_email = "vijirobotic@gmail.com";
  $name = $_REQUEST['name'];
  $email = $_REQUEST['email'];
  $mobile_no = $_REQUEST['mobile_no'];
  $message = $_REQUEST['message'];
  $msg=" Customer Name : $name  ., Email_Id : $email ., Mobile No : $mobile_no ., Message : $message  .........End ";
  //send email
     mail($admin_email,"Requset from Ritahomeneeds.com",$msg);
     
     header("location:tycontact.html");
     
?>