$(document).ready(function () {

   setInterval(() => {
       horaire();
   }, 1000);
    
});

function horaire(){
    var heures = $("#heures");
    var secondes = $("#secondes");
    var minutes = $("#minutes");

    var date = new Date();

    $(heures).css("transform","rotate("+30 * date.getHours()+"deg) ");
    $(minutes).css("transform","rotate("+6 * date.getMinutes() +"deg)");
    $(secondes).css("transform","rotate("+6 * date.getSeconds() +"deg)");

    $(".numeric").html(date.getHours()+ " : " + date.getMinutes() + ' : ' + date.getSeconds())
}