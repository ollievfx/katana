$(function() {
  $('.colorWheel').wheelColorPicker();
});
$(function() {
  $(".anchor").click(function() {
    $("#sidebar").toggle();
    $(".anchor").toggleClass("collapsed");
  });
});

$(function() {
  $("#gaffernm1").click(function() {
    $("#networkmaterial1Params").show();
    $("#networkmaterial2Params").hide();
    $("#networkmaterial3Params").hide();
    $("#networkmaterial4Params").hide();
    $("#networkmaterial5Params").hide();
    $("#gaffernm1").addClass("active");
    $("#gaffernm2").removeClass("active");
    $("#gaffernm3").removeClass("active");
    $("#gaffernm4").removeClass("active");
    $("#gaffernm5").removeClass("active");
  });
  $("#gaffernm2").click(function() {
    $("#networkmaterial1Params").hide();
    $("#networkmaterial2Params").show();
    $("#networkmaterial3Params").hide();
    $("#networkmaterial4Params").hide();
    $("#networkmaterial5Params").hide();
    $("#gaffernm1").removeClass("active");
    $("#gaffernm2").addClass("active");
    $("#gaffernm3").removeClass("active");
    $("#gaffernm4").removeClass("active");
    $("#gaffernm5").removeClass("active");
  });
  $("#gaffernm3").click(function() {
    $("#networkmaterial1Params").hide();
    $("#networkmaterial2Params").hide();
    $("#networkmaterial3Params").show();
    $("#networkmaterial4Params").hide();
    $("#networkmaterial5Params").hide();
    $("#gaffernm1").removeClass("active");
    $("#gaffernm2").removeClass("active");
    $("#gaffernm3").addClass("active");
    $("#gaffernm4").removeClass("active");
    $("#gaffernm5").removeClass("active");
  });
  $("#gaffernm4").click(function() {
    $("#networkmaterial1Params").hide();
    $("#networkmaterial2Params").hide();
    $("#networkmaterial3Params").hide();
    $("#networkmaterial4Params").show();
    $("#networkmaterial5Params").hide();
    $("#gaffernm1").removeClass("active");
    $("#gaffernm2").removeClass("active");
    $("#gaffernm3").removeClass("active");
    $("#gaffernm4").addClass("active");
    $("#gaffernm5").removeClass("active");
  });

  $("#gaffernm5").click(function() {
    $("#networkmaterial1Params").hide();
    $("#networkmaterial2Params").hide();
    $("#networkmaterial3Params").hide();
    $("#networkmaterial4Params").hide();
    $("#networkmaterial5Params").show();
    $("#gaffernm1").removeClass("active");
    $("#gaffernm2").removeClass("active");
    $("#gaffernm3").removeClass("active");
    $("#gaffernm4").removeClass("active");
    $("#gaffernm5").addClass("active");
  });



  $(".gafferHeader").click(function() {
    $(".gafferInner").toggle();
  });

});

$(function() {
  $("#p1").click(function() {
    $("#p1group .parameterBoth").toggle();
    $("#p1").toggleClass("expanded");
  });
  $("#p2").click(function() {
    $("#p2group .parameterBoth").toggle();
    $("#p2").toggleClass("expanded");
  });
  $("#nm1").click(function() {
    $("#nm1group").toggle();
    $("#nm1group2").toggle();
    $("#nm1").toggleClass("expanded");
  });
  $("#nm2").click(function() {
    $("#nm2group").toggle();
    $("#nm2").toggleClass("expanded");
  });
  $("#nm3").click(function() {
    $("#nm3group").toggle();
    $("#nm3").toggleClass("expanded");
  });
  $("#nm4").click(function() {
    $("#nm4group").toggle();
    $("#nm4").toggleClass("expanded");
  });
  $("#nm5").click(function() {
    $("#nm5group").toggle();
    $("#nm5").toggleClass("expanded");
  });




  $("#nm1dl").click(function() {
    $("#nm1group .parameterBoth").toggle();
    $("#nm1dl").toggleClass("expanded");
  });
  $("#nm1hydra").click(function() {
    $("#nm1group2 .parameterBoth").toggle();
    $("#nm1hydra").toggleClass("expanded");
  });
  $("#nm2dl").click(function() {
    $("#nm2group .parameterBoth").toggle();
    $("#nm2dl").toggleClass("expanded");
  });
  $("#nm3dl").click(function() {
    $("#nm3group .parameterBoth").toggle();
    $("#nm3dl").toggleClass("expanded");
  });
  $("#nm4dl").click(function() {
    $("#nm4group .parameterBoth").toggle();
    $("#nm4dl").toggleClass("expanded");
  });
  $("#nm5dl").click(function() {
    $("#nm5group .parameterBoth").toggle();
    $("#nm5dl").toggleClass("expanded");
  });




  $("#networkmaterial1Params .nodeParameters").click(function() {
    $(".materialInterface").removeClass("active");
    $(".nodeParameters").addClass("active");
    $(".interfaceControls").removeClass("active");
    $(".nodeParameterContainer").show();
    $(".materialInterfaceContainer").hide();
    $(".interfaceControlsContainer").hide();
  });

  $("#networkmaterial1Params .interfaceControls").click(function() {
    $(".materialInterface").removeClass("active");
    $(".nodeParameters").removeClass("active");
    $(".interfaceControls").addClass("active");
    $(".nodeParameterContainer").hide();
    $(".materialInterfaceContainer").hide();
    $(".interfaceControlsContainer").show();
  });

  $("#networkmaterial1Params .materialInterface").click(function() {
    $(".materialInterface").addClass("active");
    $(".nodeParameters").removeClass("active");
    $(".interfaceControls").removeClass("active");
    $(".nodeParameterContainer").hide();
    $(".materialInterfaceContainer").show();
    $(".interfaceControlsContainer").hide();
  });

});

$(function() {
$( "#node" ).draggable({ containment: "parent" });
  $( "#hudContainer" ).draggable({ containment: "parent" });
  $("#hudContainer").draggable({
    drag: function(event, ui) {
      $(".jquery-line").remove();
      function getOffset(el) {
        var _x = 0;
        var _y = 0;
        while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
          _x += el.offsetLeft - el.scrollLeft;
          _y += el.offsetTop - el.scrollTop;
          el = el.offsetParent;
        }
        return {
          top: _y,
          left: _x
        };

      }

      var fromPoint = getOffset($('#anchor')[0]);
      var toPoint = getOffset($('#hud')[0]);

      var from = function() {},
        to = new String('to');
      from.y = fromPoint.top + 10;
      from.x = fromPoint.left + 10;
      to.y = toPoint.top + 10;
      to.x = toPoint.left + 10;

      $.line(from, to);
    }
  });


});

$(document).ready(function() {
  $("#gaffernm1").addClass("active");
  $("#networkmaterial2Params").hide();
  $("#networkmaterial3Params").hide();
  $("#networkmaterial4Params").hide();
  $("#networkmaterial5Params").hide();
  $("#nm1group").hide();
  $("#nm1group2").hide();
  $("#nm2group").hide();
  $("#nm3group").hide();
  $("#nm4group").hide();
  $("#nm5group").hide();
  $("#nm1group .parameterBoth").hide();
  $("#nm1group2 .parameterBoth").hide();
  $("#nm2group .parameterBoth").hide();
  $("#nm3group .parameterBoth").hide();
  $("#nm4group .parameterBoth").hide();
  $("#nm5group .parameterBoth").hide();
  $(".materialInterfaceContainer").hide();
    $(".interfaceControlsContainer").hide();



  $("#simple").click(function() {
    $("#hudExtension").hide();
    $("#extended").removeClass("active");
    $("#simple").addClass("active");
  });
  $("#extended").click(function() {
    $("#hudExtension").show();
    $("#simple").removeClass("active");
    $("#extended").addClass("active");
  });

  $("#mute").click(function() {
    $("#mute").toggleClass("active");
  });
  $("#solo").click(function() {
    $("#solo").toggleClass("active");
  });
});

$(document).ready(function() {
  $(".increase").on("click", function() {

    var $button = $(this);
    var oldVal = $button.parent().find("input").val();
    var newVal = parseFloat(oldVal) + 0.1;


    if ($button.text() == "+") {
      $button.parent().find("h2").addClass("active");
      $button.parent().find("input").addClass("active");
      if (newVal === 1) {
        $button.parent().find("h2").removeClass("active");
        $button.parent().find("input").removeClass("active");
      }
    }
    $button.parent().find("input").val(newVal.toFixed(1));

  });

  $(".decrease").on("click", function() {

    var $button = $(this);
    var oldVal = $button.parent().find("input").val();
    var newVal = parseFloat(oldVal) - 0.1;

    if ($button.text() == "-") {
      $button.parent().find("h2").addClass("active");
      $button.parent().find("input").addClass("active");
      if (newVal === 1) {
        $button.parent().find("h2").removeClass("active");
        $button.parent().find("input").removeClass("active");
      }
    }
    $button.parent().find("input").val(newVal.toFixed(1));

  });

});

$(function() {
  $("#coneSlider").slider({
    orientation: "horizontal",
    range: "min",
    min: 0,
    max: 100,
    value: 60,
    slide: function(event, ui) {
      var $button = $(this);

      $("#coneAmount").val(ui.value);
      if ($("#coneSlider").slider("value") !== 60) {
        $("#coneAmount").addClass("active");
        $button.parent().find("h3").addClass("active");
      };
      if ($("#coneSlider").slider("value") === 60) {
        $("#coneAmount").removeClass("active");
        $button.parent().find("h3").removeClass("active");
      }
    }
  });
  $("#coneAmount").val($("#coneSlider").slider("value"));

  $("#penumbraSlider").slider({
    orientation: "horizontal",
    range: "min",
    min: 0,
    max: 100,
    value: 60,
    slide: function(event, ui) {
      var $button = $(this);
      $("#penumbraAmount").val(ui.value);

      if ($("#penumbraSlider").slider("value") !== 60) {
        $("#penumbraAmount").addClass("active");
        $button.parent().find("h3").addClass("active");
      };
      if ($("#penumbraSlider").slider("value") === 60) {
        $("#penumbraAmount").removeClass("active");
        $button.parent().find("h3").removeClass("active");
      }
    }
  });
  $("#penumbraAmount").val($("#penumbraSlider").slider("value"));

  $("#dropoffSlider").slider({
    orientation: "horizontal",
    range: "min",
    min: 0,
    max: 100,
    value: 60,
    slide: function(event, ui) {
      var $button = $(this);
      $("#dropoffAmount").val(ui.value);

      if ($("#dropoffSlider").slider("value") !== 60) {
        $("#dropoffAmount").addClass("active");
        $button.parent().find("h3").addClass("active");
      };
      if ($("#dropoffSlider").slider("value") === 60) {
        $("#dropoffAmount").removeClass("active");
        $button.parent().find("h3").removeClass("active");
      }
    }
  });
  $("#dropoffAmount").val($("#dropoffSlider").slider("value"));

  $("#spreadSlider").slider({
    orientation: "horizontal",
    range: "min",
    min: 0,
    max: 100,
    value: 60,
    slide: function(event, ui) {
      var $button = $(this);
      $("#spreadAmount").val(ui.value);
      if ($("#spreadSlider").slider("value") !== 60) {
        $("#spreadAmount").addClass("active");
        $button.parent().find("h3").addClass("active");
      };
      if ($("#spreadSlider").slider("value") === 60) {
        $("#spreadAmount").removeClass("active");
        $button.parent().find("h3").removeClass("active");
      }
    }
  });
  $("#spreadAmount").val($("#spreadSlider").slider("value"));
});

$(function() {

  var down = false;
  var speed = 150;
  var counter;
  $("#intValue").mousedown(function() {
    down = true;
  });

  $(document).mouseup(function() {
    down = false;
    clearInterval(counter);
  });
  $("#intValue").mouseenter(function(e) {
    clearInterval(counter);
  })

  $("#intValue").mouseout(function(e) {
    var current_value = $(this).val();
    var self = $(this);

    if (down) {
      var $button = $(this);
      $button.parent().find("h2").addClass("active");
      $button.parent().find("input").addClass("active");

      if (e.clientX * 1.1 > $("#intValue").offset().left) {
        counter = setInterval(function() {
          self.val((current_value++).toFixed(1));
        }, speed);
      }
      if (e.clientX * 1.1 < $("#intValue").offset().left) {
        counter = setInterval(function() {
          self.val((current_value--).toFixed(1));
        }, speed);
      }
    }


  });
});
