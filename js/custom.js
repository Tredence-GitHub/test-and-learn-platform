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

  // Enable Disable Screen 2 
  $(function () {
    $("[name=recommendnumber]").click(function () {
      $(".recommendnumber").hide();
      $("#hide-" + $(this).val()).show("slow");
    });

    $("#enableexpectedearnings").click(function () {
      $(".expectedearnings").show("slow");
    });
  });

  // Enable Disable Screen 3
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

    $("[name=noofzone]").click(function () {
      $("#noofzone-2").hide();
      $("#noofzone-" + $(this).val()).show("slow");
    });

    $("[name=matchtest]").click(function () {
      $("#matchtest-2").hide();
      $("#matchtest-" + $(this).val()).show("slow");
    });
  });

// Datatable 
  $(function() {
    $(document).ready(function() {
      $('.zonelist').DataTable({
        "paging":   false,
        "info":     false,
        "searching" : false
      });
    });
  });

  $(function() {
    $(document).ready(function() {
      $('.overview').DataTable({
        "paging":   true,
        "info":     false,
        "searching" : true
      });
    });
  });

  // Bootstrap Multiselect
  $(document).ready(function () {
    $(".boot-multiselect").multiselect({
      nonSelectedText: 'Select from custom set',
      includeSelectAllOption: true,
      numberDisplayed: 1,
      enableFiltering: true,
      templates: {
        li: '<li><a class="dropdown-item"><label class="p-2"></label></a></li>',
        ul: ' <ul class="multiselect-container dropdown-menu p-3 m-0  dark-bg"></ul>',
        button: '<button type="button" class="multiselect dropdown-toggle text-left w-100" data-toggle="dropdown" data-flip="true"><span class="multiselect-selected-text"></span> <b class="fa fa-angle-down"></b></button>',
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

// Login Slider
let $slides, interval, $selectors, $btns, currentIndex, nextIndex;

let cycle = index => {
  let $currentSlide, $nextSlide, $currentSelector, $nextSelector;

  nextIndex = index !== undefined ? index : nextIndex;

  $currentSlide = $($slides.get(currentIndex));
  $currentSelector = $($selectors.get(currentIndex));

  $nextSlide = $($slides.get(nextIndex));
  $nextSelector = $($selectors.get(nextIndex));

  $currentSlide.removeClass("active").css("z-index", "0");

  $nextSlide.addClass("active").css("z-index", "1");

  $currentSelector.removeClass("current");
  $nextSelector.addClass("current");

  currentIndex =
  index !== undefined ?
  nextIndex :
  currentIndex < $slides.length - 1 ?
  currentIndex + 1 :
  0;

  nextIndex = currentIndex + 1 < $slides.length ? currentIndex + 1 : 0;
};

$(() => {
  currentIndex = 0;
  nextIndex = 1;

  $slides = $(".slide");
  $selectors = $(".selector");
  $btns = $(".btn");

  $slides.first().addClass("active");
  $selectors.first().addClass("current");

  interval = window.setInterval(cycle, 6000);

  $selectors.on("click", e => {
    let target = $selectors.index(e.target);
    if (target !== currentIndex) {
      window.clearInterval(interval);
      cycle(target);
      interval = window.setInterval(cycle, 6000);
    }
  });

  $btns.on("click", e => {
    window.clearInterval(interval);
    if ($(e.target).hasClass("prev")) {
      let target = currentIndex > 0 ? currentIndex - 1 : $slides.length - 1;
      cycle(target);
    } else if ($(e.target).hasClass("next")) {
      cycle();
    }
    interval = window.setInterval(cycle, 6000);
  });
});

});

function redirectDesign() {
  location.replace("https://tredence-github.github.io/test-and-learn-platform/design.html")
}