$(document).ready(function () { 
    //footer
    var exurl = "project.json"
     $.getJSON(exurl, function(data) {
         $.each(data, function() {
             $.each(this, function(key, info) {
                 $("#info").append(
                      "<h4>" + info.copyright + "</h4>" 
                      + "<h4>" + info.email + "</h4>" 
                      + "<h4>" + info.phone + "</h4>"
                 );
             });
         });
     });

     //var url = "view-source: http://worldclockapi.com/api/json/est/now"
     var url = "view-source:https://webpages.uncc.edu/apathak7/Project4/index.html"
     $.getJSON(url, function(data){
         var html = "";
         $.each(data.items, function(x, item){
             html += "<img src=" + item.media.m + " width=120 height=100>";
         });
         $('#locate').html(html);
     });

 });



