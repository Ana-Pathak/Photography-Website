function display_e(){
    var x=1000;
    myTime=setTimeout('display_time()', x)
}
function display_time() {
    var t = new Date()
    document.getElementById('time').innerHTML = t;
    display_e();
}
$( function() {
    $( "#datepicker" ).datepicker();
  } );