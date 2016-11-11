$(document).ready(function() {


$('#page8').one('mouseenter', function(){
    $('#page8b').removeClass('hidden');
    $('#src2').attr("src","audio/beep.wav");
    $("#aud2")[0].load();

  $('#page8b').one('mouseenter', function(){
        $('#page8c').removeClass('hidden');
        $('#src2').attr("src","audio/beep.wav");
        $("#aud2")[0].load();


});
});
});
