$(function () {

    // INITIALIZE DATEPICKER PLUGIN
    $('.datepicker').datepicker({
        clearBtn: true,
        format: "dd/mm/yyyy"
    });


    // FOR DEMO PURPOSE
    $('#reservationDate').on('change', function () {
        var pickedDate = $('input').val();
        $('#pickedDate').html(pickedDate);
    });

    // Range Slider
    $(document).ready(function(){
        $('.single-slider').jRange({
            from: 0,
            to: 100,
            step: 10,
            scale: [0,10,20,30,40,50,60,70,80,90,100],
            format: '%s',
            width: 450,
            showLabels: true,
            snap: true
        });
    });

    // Range Slider
    $(function() {
        $("[name=recommendnumber]").click(function(){
                $('.recommendnumber').hide();
                $("#hide-"+$(this).val()).show('slow');
        });
        $("#enableexpectedearnings").click(function(){
            $('.expectedearnings').show('slow');
    });
     });

});
