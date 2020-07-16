$(function () {
  // INITIALIZE DATEPICKER PLUGIN
  $(".datepicker").datepicker({
    clearBtn: true,
    format: "dd/mm/yyyy",
  });

  // FOR DEMO PURPOSE
  $("#reservationDate").on("change", function () {
    var pickedDate = $("input").val();
    $("#pickedDate").html(pickedDate);
  });

  // Range Slider
  $(document).ready(function () {
    $(".single-slider").jRange({
      from: 0,
      to: 100,
      step: 10,
      scale: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      format: "%s",
      width: 450,
      showLabels: true,
      snap: true,
    });
  });

  // enable disable screen 2 
  $(function () {
    $("[name=recommendnumber]").click(function () {
      $(".recommendnumber").hide();
      $("#hide-" + $(this).val()).show("slow");
    });
    $("#enableexpectedearnings").click(function () {
      $(".expectedearnings").show("slow");
    });
  });

  // enable disable screen 3
  $(function () {
    $("[name=noteststores]").click(function () {
      $("#hide-11").hide();
      $("#hide-1" + $(this).val()).show("slow");
    });

    $("[name=teststores]").click(function () {
      $("#disable-1").hide();
      $("#disable-" + $(this).val()).show("slow");
    });
    $("#actualtestsites").click(function () {
      $(".samplecalc").show("slow");
    });
  });

  // Bootstrap Multiselect
  $(document).ready(function () {
    $("#boot-multiselect").multiselect({
      nonSelectedText: 'Custom Sets',
      includeSelectAllOption: true,
      numberDisplayed: 1,
      enableFiltering: true,
      templates: {
        li: '<li><a class="dropdown-item"><label class="p-2"></label></a></li>',
        ul: ' <ul class="multiselect-container dropdown-menu p-3 m-0  dark-bg"></ul>',
        button: '<button type="button" class="multiselect dropdown-toggle text-left w100" data-toggle="dropdown" data-flip="true"><span class="multiselect-selected-text"></span> <b class="fa fa-angle-down"></b></button>',
        filter: '<li class="multiselect-item filter"><div class="input-group m-0 p-0"><input class="form-control m-0 multiselect-search" type="text"></div></li>',
        filterClearBtn: '<span class="input-group-btn"><button class="btn multiselect-clear-filter" type="button"><i class="fa fa-remove"></i></button></span>'
    },
    buttonContainer: '<div class="dropdown" />',
    buttonClass: 'btn btn-outline-theme'
    });
  });

  $(document).ready(function () {
    $("#boot-multiselect2").multiselect({
      nonSelectedText: 'Custom Sets',
      includeSelectAllOption: true,
      numberDisplayed: 1,
      enableFiltering: true,
      templates: {
        li: '<li><a class="dropdown-item"><label class="p-2"></label></a></li>',
        ul: ' <ul class="multiselect-container dropdown-menu p-3 m-0  dark-bg"></ul>',
        button: '<button type="button" class="multiselect dropdown-toggle text-left w100" data-toggle="dropdown" data-flip="true"><span class="multiselect-selected-text"></span> <b class="fa fa-angle-down"></b></button>',
        filter: '<li class="multiselect-item filter"><div class="input-group m-0 p-0"><input class="form-control m-0 multiselect-search" type="text"></div></li>',
        filterClearBtn: '<span class="input-group-btn"><button class="btn multiselect-clear-filter" type="button"><i class="fa fa-remove"></i></button></span>'
    },
    buttonContainer: '<div class="dropdown" />',
    buttonClass: 'btn btn-outline-theme'
    });
  });

  $(document).ready(function () {
    $("#boot-multiselect3").multiselect({
      nonSelectedText: 'Custom Sets',
      includeSelectAllOption: true,
      numberDisplayed: 1,
      enableFiltering: true,
      templates: {
        li: '<li><a class="dropdown-item"><label class="p-2"></label></a></li>',
        ul: ' <ul class="multiselect-container dropdown-menu p-3 m-0  dark-bg"></ul>',
        button: '<button type="button" class="multiselect dropdown-toggle text-left w100" data-toggle="dropdown" data-flip="true"><span class="multiselect-selected-text"></span> <b class="fa fa-angle-down"></b></button>',
        filter: '<li class="multiselect-item filter"><div class="input-group m-0 p-0"><input class="form-control m-0 multiselect-search" type="text"></div></li>',
        filterClearBtn: '<span class="input-group-btn"><button class="btn multiselect-clear-filter" type="button"><i class="fa fa-remove"></i></button></span>'
    },
    buttonContainer: '<div class="dropdown" />',
    buttonClass: 'btn btn-outline-theme'
    });
  });

  $('.dropdown-menu').find('form').click(function (e) {
    e.stopPropagation();
  });

});
