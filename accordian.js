$(document).ready(function () { 
     //accordian
     $( "#accordion" ).accordion({
          collapsible:true
     });

     $("#accordion").show().accordion({
             autoHeight: false
     });
     
     $("#accordion div").css({ 'height': 'auto' });   
 });


