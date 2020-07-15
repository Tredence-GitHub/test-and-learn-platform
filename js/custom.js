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

    const rangeSlider = document.querySelector("input");
    const value = document.querySelector(".rangevalue");
    value.textContent = rangeSlider.value;

    rangeSlider.oninput = function(){
    	value.textContent = this.value;
    }
});