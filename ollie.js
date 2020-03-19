//load colorpicker from jquery.wheelcolorpicker.js
$(function() {
  $('.colorWheel').wheelColorPicker();
});


//sidebar functions
$(function() {
  $(".anchor").click(function() {
    $("#sidebar").toggle();
    $(".anchor").toggleClass("collapsed");
  });
});

//node functions

$(function() {



  $("#node #p1group li").click(function() {
    $(this).toggleClass("parameterEdited");
  });

  $("#node #p2group li").click(function() {
    $(this).toggleClass("parameterEdited");
  });
  $("#nodeTwo #p1group li").click(function() {
    $(this).toggleClass("parameterEdited");
  });
  $("#nodeTwo #p2group li").click(function() {
    $(this).toggleClass("parameterEdited");
  });

  $("#nodeThree #p1group li").click(function() {
    $(this).toggleClass("parameterEdited");
  });
  $("#nodeThree #p2group li").click(function() {
    $(this).toggleClass("parameterEdited");
  });
  $("#nodeFour #p1group li").click(function() {
    $(this).toggleClass("parameterEdited");
  });
  $("#nodeFour #p2group li").click(function() {
    $(this).toggleClass("parameterEdited");
  });
  $("#nodeFive #p1group li").click(function() {
    $(this).toggleClass("parameterEdited");
  });
  $("#nodeFive #p2group li").click(function() {
    $(this).toggleClass("parameterEdited");
  });
});


//parameter Pane functions
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

//node Graph functions
$(function() {

  $("#stateFilterLabel").click(function() {
    $("#stateFilterBoxes").toggle("slide", {
      direction: 'left'
    });
    $(".stateFilterExpand").toggleClass("on");
  });
  $("#stateFilterExpand").click(function() {
    $("#stateFilterBoxes").toggle("slide", {
      direction: 'left'
    });
    $(".stateFilterExpand").toggleClass("on");
  });

  $("#nodeStandard").click(function() {
    $(".stateFilter label").removeClass("active");
    $("#nodeStandard").addClass("active");
    $("#nodeEdited").removeClass("active");
    $("#nodeNew").removeClass("active");
    $("#nodeDisconnected").removeClass("active");
    $("#nodeDeleted").removeClass("active");
    $("#nodeUnedited").removeClass("active");
    $("#node").removeClass("filteredOut");
    $("#nodeTwo").removeClass("filteredOut");
    $("#nodeThree").addClass("filteredOut");
    $("#nodeFour").addClass("filteredOut");
    $("#nodeFive").addClass("filteredOut");
  });

  $("#nodeEdited").click(function() {
    $(".stateFilter label").addClass("active");
    $("#nodeEdited").toggleClass("active");
    $("#node").toggleClass("filteredOut");
  });

  $("#nodeNew").click(function() {
    $(".stateFilter label").addClass("active");
    $("#nodeNew").toggleClass("active");
    $("#nodeTwo").toggleClass("filteredOut");

  });

  $("#nodeDeleted").click(function() {
    $(".stateFilter label").addClass("active");
    $("#nodeDeleted").toggleClass("active");
    $("#nodeFour").toggleClass("filteredOut");

  });


  $("#nodeDisconnected").click(function() {
    $(".stateFilter label").addClass("active");
    $("#nodeDisconnected").toggleClass("active");
    $("#nodeFive").toggleClass("filteredOut");
  });

  $("#nodeUnedited").click(function() {
    $(".stateFilter label").addClass("active");
    $("#nodeUnedited").toggleClass("active");
    $("#nodeThree").toggleClass("filteredOut");
  });

  //Node functions
  $("#node #p1").click(function() {
    $("#node #p1group .parameterBoth").toggle();
    $("#node #p1").toggleClass("expanded");
  });
  $("#node #p2").click(function() {
    $("#node #p2group .parameterBoth").toggle();
    $("#node #p2").toggleClass("expanded");
  });
  $("#node #parameterGroup").click(function() {
    $("#node #p1group").toggle();
    $("#node #p2group").toggle();
    $("#node #parameterGroup").toggleClass("expanded");
  });
  $("#node #outputGroup").click(function() {
    $("#node .parameterOutputs").toggle();
    $("#node #outputGroup").toggleClass("expanded");
  });

  $("#nodeTwo #p1").click(function() {
    $("#nodeTwo #p1group .parameterBoth").toggle();
    $("#nodeTwo #p1").toggleClass("expanded");
  });
  $("#nodeTwo #p2").click(function() {
    $("#nodeTwo #p2group .parameterBoth").toggle();
    $("#nodeTwo #p2").toggleClass("expanded");
  });
  $("#nodeTwo #parameterGroup").click(function() {
    $("#nodeTwo #p1group").toggle();
    $("#nodeTwo #p2group").toggle();
    $("#nodeTwo #parameterGroup").toggleClass("expanded");
  });
  $("#nodeTwo #outputGroup").click(function() {
    $("#nodeTwo .parameterOutputs").toggle();
    $("#nodeTwo #outputGroup").toggleClass("expanded");
  });

  $("#nodeThree #p1").click(function() {
    $("#nodeThree #p1group .parameterBoth").toggle();
    $("#nodeThree #p1").toggleClass("expanded");
  });
  $("#nodeThree #p2").click(function() {
    $("#nodeThree #p2group .parameterBoth").toggle();
    $("#nodeThree #p2").toggleClass("expanded");
  });
  $("#nodeThree #parameterGroup").click(function() {
    $("#nodeThree #p1group").toggle();
    $("#nodeThree #p2group").toggle();
    $("#nodeThree #parameterGroup").toggleClass("expanded");
  });
  $("#nodeThree #outputGroup").click(function() {
    $("#nodeThree .parameterOutputs").toggle();
    $("#nodeThree #outputGroup").toggleClass("expanded");
  });


  $("#nodeFour #p1").click(function() {
    $("#nodeFour #p1group .parameterBoth").toggle();
    $("#nodeFour #p1").toggleClass("expanded");
  });
  $("#nodeFour #p2").click(function() {
    $("#nodeFour #p2group .parameterBoth").toggle();
    $("#nodeFour #p2").toggleClass("expanded");
  });
  $("#nodeFour #parameterGroup").click(function() {
    $("#nodeFour #p1group").toggle();
    $("#nodeFour #p2group").toggle();
    $("#nodeFour #parameterGroup").toggleClass("expanded");
  });
  $("#nodeFour #outputGroup").click(function() {
    $("#nodeFour .parameterOutputs").toggle();
    $("#nodeFour #outputGroup").toggleClass("expanded");
  });


  $("#nodeFive #p1").click(function() {
    $("#nodeFive #p1group .parameterBoth").toggle();
    $("#nodeFive #p1").toggleClass("expanded");
  });
  $("#nodeFive #p2").click(function() {
    $("#nodeFive #p2group .parameterBoth").toggle();
    $("#nodeFive #p2").toggleClass("expanded");
  });
  $("#nodeFive #parameterGroup").click(function() {
    $("#nodeFive #p1group").toggle();
    $("#nodeFive #p2group").toggle();
    $("#nodeFive #parameterGroup").toggleClass("expanded");
  });
  $("#nodeFive #outputGroup").click(function() {
    $("#nodeFive .parameterOutputs").toggle();
    $("#nodeFive #outputGroup").toggleClass("expanded");
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
    $("#nm4group2").toggle();
    $("#nm4").toggleClass("expanded");
  });
  $("#nm5").click(function() {
    $("#nm5group").toggle();
    $("#nm5").toggleClass("expanded");
  });
  $("#namespace1").click(function() {
    $("#gaffernm1").toggle();
    $("#gaffernm2").toggle();
    $("#namespace1").toggleClass("expanded");
  });
  $("#namespace2").click(function() {
    $("#gaffernm3").toggle();
    $("#namespace2").toggleClass("expanded");
  });
  $("#namespace3").click(function() {
    $("#gaffernm4").toggle();
    $("#namespace3").toggleClass("expanded");
  });

  $("#nm1dl").click(function() {
    $("#nm1group .parameterBoth").toggle();
    $("#nm1dl").toggleClass("expanded");
  });
  $("#nm1hydra").click(function() {
    $("#nm1group2 .parameterBoth").toggle();
    $("#nm1hydra").toggleClass("expanded");
  });
  $("#nm2redshift").click(function() {
    $("#nm2group .parameterBoth").toggle();
    $("#nm2redshift").toggleClass("expanded");
  });
  $("#nm3prman").click(function() {
    $("#nm3group .parameterBoth").toggle();
    $("#nm3prman").toggleClass("expanded");
  });
  $("#nm4arnold").click(function() {
    $("#nm4group .parameterBoth").toggle();
    $("#nm4arnold").toggleClass("expanded");
  });
  $("#nm4hydra").click(function() {
    $("#nm4group2 .parameterBoth").toggle();
    $("#nm4hydra").toggleClass("expanded");
  });
  $("#nm5vray").click(function() {
    $("#nm5group .parameterBoth").toggle();
    $("#nm5vray").toggleClass("expanded");
  });

  $("#node #min").click(function() {
    $("#node #min").addClass("active");
    $("#node #std").removeClass("active");
    $("#node #full").removeClass("active");
    $("#node #nodeHeader").show();
    $("#node #nodeUtils").hide();
    $("#node #nodeParameters").hide();
  });
  $("#node #std").click(function() {
    $("#node #min").addClass("active");
    $("#node #std").addClass("active");
    $("#node #full").removeClass("active");
    $("#node #nodeHeader").show();
    $("#node #nodeUtils").show();
    $("#node #nodeParameters").show();
    $("#node .parameterOutputs").hide();
    $("#node #p1group").hide();
    $("#node #p2group").hide();
    $("#node #parameterGroup").removeClass("expanded");
    $("#node #outputGroup").removeClass("expanded");
  });
  $("#node #full").click(function() {
    $("#node #min").addClass("active");
    $("#node #std").addClass("active");
    $("#node #full").addClass("active");
    $("#node #nodeHeader").show();
    $("#node #nodeUtils").show();
    $("#node #nodeParameters").show();
    $("#node .parameterOutputs").show();
    $("#node #p1group").show();
    $("#node #p2group").show();
    $("#node #parameterGroup").addClass("expanded");
    $("#node #outputGroup").addClass("expanded");
    $("#node #p1group .parameterBoth").show();
    $("#node #p2group .parameterBoth").show();
  });


  $("#nodeTwo #min").click(function() {
    $("#nodeTwo #min").addClass("active");
    $("#nodeTwo #std").removeClass("active");
    $("#nodeTwo #full").removeClass("active");
    $("#nodeTwo #nodeHeader").show();
    $("#nodeTwo #nodeUtils").hide();
    $("#nodeTwo #nodeParameters").hide();
  });
  $("#nodeTwo #std").click(function() {
    $("#nodeTwo #min").addClass("active");
    $("#nodeTwo #std").addClass("active");
    $("#nodeTwo #full").removeClass("active");
    $("#nodeTwo #nodeHeader").show();
    $("#nodeTwo #nodeUtils").show();
    $("#nodeTwo #nodeParameters").show();
    $("#nodeTwo .parameterOutputs").hide();
    $("#nodeTwo #p1group").hide();
    $("#nodeTwo #p2group").hide();
    $("#nodeTwo #parameterGroup").removeClass("expanded");
    $("#nodeTwo #outputGroup").removeClass("expanded");
  });
  $("#nodeTwo #full").click(function() {
    $("#nodeTwo #min").addClass("active");
    $("#nodeTwo #std").addClass("active");
    $("#nodeTwo #full").addClass("active");
    $("#nodeTwo #nodeHeader").show();
    $("#nodeTwo #nodeUtils").show();
    $("#nodeTwo #nodeParameters").show();
    $("#nodeTwo .parameterOutputs").show();
    $("#nodeTwo #p1group").show();
    $("#nodeTwo #p2group").show();
    $("#nodeTwo #parameterGroup").addClass("expanded");
    $("#nodeTwo #outputGroup").addClass("expanded");
    $("#nodeTwo #p1group .parameterBoth").show();
    $("#nodeTwo #p2group .parameterBoth").show();
  });



  $("#nodeThree #min").click(function() {
    $("#nodeThree #min").addClass("active");
    $("#nodeThree #std").removeClass("active");
    $("#nodeThree #full").removeClass("active");
    $("#nodeThree #nodeHeader").show();
    $("#nodeThree #nodeUtils").hide();
    $("#nodeThree #nodeParameters").hide();
  });
  $("#nodeThree #std").click(function() {
    $("#nodeThree #min").addClass("active");
    $("#nodeThree #std").addClass("active");
    $("#nodeThree #full").removeClass("active");
    $("#nodeThree #nodeHeader").show();
    $("#nodeThree #nodeUtils").show();
    $("#nodeThree #nodeParameters").show();
    $("#nodeThree .parameterOutputs").hide();
    $("#nodeThree #p1group").hide();
    $("#nodeThree #p2group").hide();
    $("#nodeThree #parameterGroup").removeClass("expanded");
    $("#nodeThree #outputGroup").removeClass("expanded");
  });
  $("#nodeThree #full").click(function() {
    $("#nodeThree #min").addClass("active");
    $("#nodeThree #std").addClass("active");
    $("#nodeThree #full").addClass("active");
    $("#nodeThree #nodeHeader").show();
    $("#nodeThree #nodeUtils").show();
    $("#nodeThree #nodeParameters").show();
    $("#nodeThree .parameterOutputs").show();
    $("#nodeThree #p1group").show();
    $("#nodeThree #p2group").show();
    $("#nodeThree #parameterGroup").addClass("expanded");
    $("#nodeThree #outputGroup").addClass("expanded");
    $("#nodeThree #p1group .parameterBoth").show();
    $("#nodeThree #p2group .parameterBoth").show();
  });

  $("#nodeFour #min").click(function() {
    $("#nodeFour #min").addClass("active");
    $("#nodeFour #std").removeClass("active");
    $("#nodeFour #full").removeClass("active");
    $("#nodeFour #nodeHeader").show();
    $("#nodeFour #nodeUtils").hide();
    $("#nodeFour #nodeParameters").hide();
  });
  $("#nodeFour #std").click(function() {
    $("#nodeFour #min").addClass("active");
    $("#nodeFour #std").addClass("active");
    $("#nodeFour #full").removeClass("active");
    $("#nodeFour #nodeHeader").show();
    $("#nodeFour #nodeUtils").show();
    $("#nodeFour #nodeParameters").show();
    $("#nodeFour .parameterOutputs").hide();
    $("#nodeFour #p1group").hide();
    $("#nodeFour #p2group").hide();
    $("#nodeFour #parameterGroup").removeClass("expanded");
    $("#nodeFour #outputGroup").removeClass("expanded");
  });
  $("#nodeFour #full").click(function() {
    $("#nodeFour #min").addClass("active");
    $("#nodeFour #std").addClass("active");
    $("#nodeFour #full").addClass("active");
    $("#nodeFour #nodeHeader").show();
    $("#nodeFour #nodeUtils").show();
    $("#nodeFour #nodeParameters").show();
    $("#nodeFour .parameterOutputs").show();
    $("#nodeFour #p1group").show();
    $("#nodeFour #p2group").show();
    $("#nodeFour #parameterGroup").addClass("expanded");
    $("#nodeFour #outputGroup").addClass("expanded");
    $("#nodeFour #p1group .parameterBoth").show();
    $("#nodeFour #p2group .parameterBoth").show();
  });


  $("#nodeFive #min").click(function() {
    $("#nodeFive #min").addClass("active");
    $("#nodeFive #std").removeClass("active");
    $("#nodeFive #full").removeClass("active");
    $("#nodeFive #nodeHeader").show();
    $("#nodeFive #nodeUtils").hide();
    $("#nodeFive #nodeParameters").hide();
  });
  $("#nodeFive #std").click(function() {
    $("#nodeFive #min").addClass("active");
    $("#nodeFive #std").addClass("active");
    $("#nodeFive #full").removeClass("active");
    $("#nodeFive #nodeHeader").show();
    $("#nodeFive #nodeUtils").show();
    $("#nodeFive #nodeParameters").show();
    $("#nodeFive .parameterOutputs").hide();
    $("#nodeFive #p1group").hide();
    $("#nodeFive #p2group").hide();
    $("#nodeFive #parameterGroup").removeClass("expanded");
    $("#nodeFive #outputGroup").removeClass("expanded");
  });
  $("#nodeFive #full").click(function() {
    $("#nodeFive #min").addClass("active");
    $("#nodeFive #std").addClass("active");
    $("#nodeFive #full").addClass("active");
    $("#nodeFive #nodeHeader").show();
    $("#nodeFive #nodeUtils").show();
    $("#nodeFive #nodeParameters").show();
    $("#nodeFive .parameterOutputs").show();
    $("#nodeFive #p1group").show();
    $("#nodeFive #p2group").show();
    $("#nodeFive #parameterGroup").addClass("expanded");
    $("#nodeFive #outputGroup").addClass("expanded");
    $("#nodeFive #p1group .parameterBoth").show();
    $("#nodeFive #p2group .parameterBoth").show();
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

$(document).ready(function() {
  var $nodeHeader = $("#node #nodeHeader");
  $nodeHeader.on('mousedown', function(evt) {
    $nodeHeader.on('mouseup mousemove', function handler(evt) {
      if (evt.type === 'mouseup') {
        $("#node").toggleClass("selected");
      } else {

      }
      $nodeHeader.off('mouseup mousemove', handler);
    });
  });
  var $nodeHeaderTwo = $("#nodeTwo #nodeHeader");
  $nodeHeaderTwo.on('mousedown', function(evt) {
    $nodeHeaderTwo.on('mouseup mousemove', function handler(evt) {
      if (evt.type === 'mouseup') {
        $("#nodeTwo").toggleClass("selected");
      } else {

      }
      $nodeHeaderTwo.off('mouseup mousemove', handler);
    });
  });

  var $nodeHeaderThree = $("#nodeThree #nodeHeader");
  $nodeHeaderThree.on('mousedown', function(evt) {
    $nodeHeaderThree.on('mouseup mousemove', function handler(evt) {
      if (evt.type === 'mouseup') {
        $("#nodeThree").toggleClass("selected");
      } else {

      }
      $nodeHeaderThree.off('mouseup mousemove', handler);
    });
  });

  var $nodeHeaderFour = $("#nodeFour #nodeHeader");
  $nodeHeaderFour.on('mousedown', function(evt) {
    $nodeHeaderFour.on('mouseup mousemove', function handler(evt) {
      if (evt.type === 'mouseup') {
        $("#nodeFour").toggleClass("selected");
      } else {

      }
      $nodeHeaderFour.off('mouseup mousemove', handler);
    });
  });

  var $nodeHeaderFive = $("#nodeFive #nodeHeader");
  $nodeHeaderFive.on('mousedown', function(evt) {
    $nodeHeaderFive.on('mouseup mousemove', function handler(evt) {
      if (evt.type === 'mouseup') {
        $("#nodeFive").toggleClass("selected");
      } else {

      }
      $nodeHeaderFive.off('mouseup mousemove', handler);
    });
  });


});


$(function() {
  $("#node").draggable({
    containment: "parent"
  });
  $("#nodeTwo").draggable({
    containment: "parent"
  });
  $("#nodeThree").draggable({
    containment: "parent"
  });
  $("#nodeFour").draggable({
    containment: "parent"
  });
  $("#nodeFive").draggable({
    containment: "parent"
  });
  $("#hudContainer").draggable({
    containment: "parent"
  });
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
$(function() {
  $("#nm1").hover(function() {
    $("#nm1").toggleClass("hoverishere");
    $("#gaffernm1").toggleClass("hoverishere");

  });
  $("#nm2").hover(function() {
    $("#nm2").toggleClass("hoverishere");
    $("#gaffernm2").toggleClass("hoverishere"); // if hovered then it has class active
  });
  $("#nm3").hover(function() {
    $("#nm3").toggleClass("hoverishere"); // if hovered then it has class active
    $("#gaffernm3").toggleClass("hoverishere"); // if hovered then it has class active
  });
  $("#nm4").hover(function() {
    $("#nm4").toggleClass("hoverishere");
    $("#gaffernm4").toggleClass("hoverishere"); // if hovered then it has class active
  });
  $("#nm5").hover(function() {
    $("#nm5").toggleClass("hoverishere");
    $("#gaffernm5").toggleClass("hoverishere"); // if hovered then it has class active
  });

  $("#gaffernm1").hover(function() {
    $("#nm1").toggleClass("hoverishere");
    $("#gaffernm1").toggleClass("hoverishere");

  });
  $("#gaffernm2").hover(function() {
    $("#nm2").toggleClass("hoverishere");
    $("#gaffernm2").toggleClass("hoverishere"); // if hovered then it has class active
  });
  $("#gaffernm3").hover(function() {
    $("#nm3").toggleClass("hoverishere"); // if hovered then it has class active
    $("#gaffernm3").toggleClass("hoverishere"); // if hovered then it has class active
  });
  $("#gaffernm4").hover(function() {
    $("#nm4").toggleClass("hoverishere");
    $("#gaffernm4").toggleClass("hoverishere"); // if hovered then it has class active
  });
  $("#gaffernm5").hover(function() {
    $("#nm5").toggleClass("hoverishere");
    $("#gaffernm5").toggleClass("hoverishere"); // if hovered then it has class active
  });

});

$(document).ready(function() {



  $(document).keypress(function(e) {
    if (e.which == 100) {
      $('.hoverishere').toggleClass("disabled"); // if d is pressed then remove active image
    }
  });

  $("#nodeFilter").on("click", function() {
    if ($(this).val() == "Filter")
      $(this).val("")
  });
  $("#nodeTwoFilter").on("click", function() {
    if ($(this).val() == "Filter")
      $(this).val("")
  });
  $("#nodeThreeFilter").on("click", function() {
    if ($(this).val() == "Filter")
      $(this).val("")
  });
  $("#nodeFourFilter").on("click", function() {
    if ($(this).val() == "Filter")
      $(this).val("")
  });
  $("#nodeFiveFilter").on("click", function() {
    if ($(this).val() == "Filter")
      $(this).val("")
  });
  $("#nmFilter").on("click", function() {
    if ($(this).val() == "Filter")
      $(this).val("")
  });

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
  $("#nm4group2").hide();
  $("#nm5group").hide();
  $("#nm1group .parameterBoth").hide();
  $("#nm1group2 .parameterBoth").hide();
  $("#nm2group .parameterBoth").hide();
  $("#nm3group .parameterBoth").hide();
  $("#nm4group .parameterBoth").hide();
  $("#nm4group2 .parameterBoth").hide();
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
$(document).ready(function() {
  $('span.html').rainbow({
    colors: [
      '#FF0000',
      '#f26522',
      '#fff200',
      '#00a651',
      '#28abe2',
      '#2e3192',
      '#6868ff'
    ],
    animate: true,
    animateInterval: 100,
    pad: false,
    pauseLength: 100,
  });
});
