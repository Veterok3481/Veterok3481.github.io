$(document).ready(function(){
    function calculate(){
        let sum = parseInt($(".select1 option:selected").val()) + parseInt($(".select2 option:selected").val()) + parseInt($(".select3 option:selected").val());
        let days = parseInt($(".select1 option:selected").attr("days")) + parseInt($(".select2 option:selected").attr("days")) + parseInt($(".select3 option:selected").attr("days"));
        $(".days .main5text0").text(days);
        $(".price .main5text00").text(sum);
    }
    $('select').on("change", function(){
        calculate();
    });
    calculate();
});