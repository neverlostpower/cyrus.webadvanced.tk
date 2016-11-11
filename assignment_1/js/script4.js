$(document).ready(function() {


$('#page3').one('click', function(){
    $('#tri').removeClass('hidden');
    $('#page3b').removeClass('hidden');
    $('#src1').attr("src","audio/tri.wav");
    $("#aud1")[0].load();

});
});
