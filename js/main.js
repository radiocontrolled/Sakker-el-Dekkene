
  "use strict";

  var height, width, svg, pointGrid, point, processed = [];
  var data = [
      ["birth"],
      ["school"],
      ["school"],
      ["university"],
      ["workingLife"],
      ["workingLife"],
      ["workingLife"],
      ["workingLife"],
      ["workingLife"],
      ["workingLife"],
      ["workingLife"],
      ["workingLife"],
      ["workingLife"],
      ["workingLife"],
      ["workingLife"],
      ["workingLife"],
      ["familyLife"],
      ["familyLife"],
      ["familyLife"],
      ["familyLife"],
      ["familyLife"],
      ["familyLife"],
      ["familyLife"],
      ["familyLife"],
      ["familyLife"],
      ["familyLife"],
      ["familyLife"],
      ["familyLife"],
      ["familyLife"],
      ["familyLife"],
      ["familyLife"],
      ["familyLife"],
      ["retirement"],
      ["retirement"],
      ["retirement"]
    ];
        

  function processData() {
    for(var i = 0; i < data.length; i++) {
      var obj = {};
      obj.lebanesePound = data[i];
      processed.push(obj);
    }
  }

  function getViewportDimensions() { 
    width = document.getElementsByTagName("main")[0].offsetWidth * 0.80;
    height = window.innerHeight * 0.90;
  };

  function drawSvg() {
    svg = d3.select("main")
      .append("svg")
      .attr("transform", "translate(60,60)");

      getViewportDimensions();
      setSvgSize();
      gridLayout();
      processData(); //process data that will be added to the grid
      drawPoints();
  }

  function setSvgSize() {
    svg
      .attr({
        width: width,
        height: height
      })
      .append("grid")
  }

  function gridLayout() {
    pointGrid = d3.layout.grid()
      .cols([5])
      .rows([15])
      .points()
      .size([500, 500]);
  }

 function showBirth() {
    d3.selectAll("circle.birth")
      .transition()
      .duration(1000)
      .style("opacity", 1)
      
  }

  function showSchool() {
    d3.selectAll("circle.school")
      .transition()
      .duration(1000)
      .style("opacity", 1)
       
  }

  function showUniversity() {
    d3.selectAll("circle.university")
   .transition()
      .duration(1000)
      .style("opacity", 1)
       
  }

  function showWorkingLife() {
    d3.selectAll("circle.workingLife")
   .transition()
      .duration(1000)
      .style("opacity", 1)
  }

  function showFamilyLife() {
    d3.selectAll("circle.familyLife")
   .transition()
      .duration(1000)
      .style("opacity", 1)
  }

  function showRetirement () {
    d3.selectAll("circle.retirement")
   .transition()
      .duration(1000)
      .style("opacity", 1)
  }

  function drawPoints () {

    point = svg.selectAll(".point")
      .data(pointGrid(processed));


    point
      .enter()
      .append("circle")
      .attr("class", "point")
      .attr("class", function(d,i) {
        return d.lebanesePound[0];
      })
      .attr({
        "r" : 5,
        "fill" : "#d91f2b"
      })
      .attr("transform", function(d) { 
        return "translate(" + d.x + "," + d.y + ")"; 
      });

 
  }

  var arrayOfFunctions = [showBirth, showSchool, showUniversity, showWorkingLife, showFamilyLife, showRetirement];

  function drawSection () {
    var i = 0; 
    
    var intervalID = window.setInterval(myCallback, 1000);

    function myCallback () {
      if(i <= 5) {
        arrayOfFunctions[i]();
        i += 1;
      }
    }

  }
 

  drawSection(); 

  drawSvg();


