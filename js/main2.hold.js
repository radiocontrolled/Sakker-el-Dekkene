(function() {
  "use strict";

  var height, width, svg, g, asideWidth, asideHeight;

  var birth = ["birth"],
    school = ["school", "school"],
    university = ["university"], 
    workingLife = ["workingLife", "workingLife", "workingLife", "workingLife", "workingLife", "workingLife", "workingLife", "workingLife", "workingLife", "workingLife", "workingLife", "workingLife"],
    familyLife = ["familyLife", "familyLife", "familyLife", "familyLife", "familyLife", "familyLife", "familyLife", "familyLife", "familyLife", "familyLife", "familyLife", "familyLife", "familyLife", "familyLife", "familyLife", "familyLife"],
    retirement = ["retirement", "retirement", "retirement"];  

  var opts = {
    "xlink:href" : "assets/moneyBlue.svg",
    "width" : 50, 
    "height" : 50,
  };


  function getViewportDimensions() { 
    width = document.getElementsByTagName("main")[0].offsetWidth;
    height = window.innerHeight;

    asideWidth = width;
    asideHeight = window.innerHeight  * 0.25;

  }

  getViewportDimensions();

  /* sets the width/height of a hero or div to fullscreen */ 
  function setSize(el) {  
    jQuery(el).css({
      width: jQuery(window).width(),
      height: jQuery(window).height()
    });
  }

  function setWidth(el) {  
    jQuery(el).css({
      width: jQuery(window).width(),
    });
  }

  setSize("#hero");
  setSize("#section1");
  setSize("#section2");
  setSize("#section3");    
  setSize("#section4");
  setSize("#section5"); 
  setSize("#section6");    
  setSize("#section7");      
  setWidth("footer");


  function drawSvg() {
    svg = d3.select("main")
      .append("svg");

      setSvgSize();
  }

  function setSvgSize() {
    svg
      .attr({
        width: asideWidth,
        height: asideHeight
      });
  }

  function drawBirth() {
    var born = svg.selectAll("image g.milestoneOne")
      .data(birth)
      .enter()
      .append("g")
      .classed("milestoneOne", true);

    born
      .append("svg:image")
      .attr(opts)
      .attr({
        "x" : 10, 
        "y" : 100, 
        "class" : function(d,i){
          return d;
        }
      })
      .transition()
      .duration(1000)
      .style("opacity", 1)
      .attr("transform", "translate(0,10)");

  }

  function drawSchool() {
    var sco = svg.selectAll("image g.milestoneTwo")
      .data(school)
      .enter()
      .append("g")
      .classed("milestoneTwo", true);

    sco
      .append("svg:image")
      .attr(opts)
      .attr({
        "x" : function(d,i) {
          if(i === 0) return 40; 
          if(i === 1) return 70;
        },
        "y" : 101,        
        "class" : function(d,i){
          return d;
        }
      })
      .transition()
      .duration(1000)
      .style("opacity", 1)
      .attr("transform", "translate(0,10)");
  }

  function drawUniversity() {
     var uni = svg.selectAll("image g.milestoneThree")
      .data(university)
      .enter()
      .append("g")
      .classed("milestoneThree", true);

    uni
      .append("svg:image")
      .attr(opts)
      .attr({
        "x" : 100,
        "y" : 101,        
        "class" : function(d,i){
          return d;
        }
      })
      .transition()
      .duration(1000)
      .style("opacity", 1)
      .attr("transform", "translate(0,10)");
  }

  function drawWorkingLife() {

     var work = svg.selectAll("image g.milestoneFour")
      .data(workingLife)
      .enter()
      .append("g")
      .classed("milestoneFour", true);

      work
      .append("svg:image")
      .attr(opts)
      .attr({
        "x" : function(d,i) {
          if(i === 0) return 128;
          if(i === 1) return 10;
          if(i === 2) return 40;
          if(i === 3) return 70;
          if(i === 4) return 100;
          if(i === 5) return 128;
          if(i === 6) return 10;
          if(i === 7) return 40;
          if(i === 8) return 70;
          if(i === 9) return 100;
          if(i === 10) return 128;
          if(i === 11) return 10;
        },
        "y" : function(d,i) {
          if(i === 0) return 101; 
          if(i === 1) return 90;
          if(i === 2) return 90;
          if(i === 3) return 90;
          if(i === 4) return 90;
          if(i === 5) return 90;
          if(i === 6) return 80;
          if(i === 7) return 80;
          if(i === 8) return 80;
          if(i === 9) return 80;
          if(i === 10) return 80;
          if(i === 11) return 70;

        },       
        "class" : function(d,i){
          return d;
        }
      })
      .transition()
      .duration(1000)
      .style("opacity", 1)
      .attr("transform", "translate(0,10)");
  }

  function drawFamilyLife() {
    var fam = svg.selectAll("image g.milestoneFive")
      .data(familyLife)
      .enter()
      .append("g")
      .classed("milestoneFive", true);

      fam
      .append("svg:image")
      .attr(opts)
      .attr({
        "x" : function(d,i) {
          if(i === 0) return 40;
          if(i === 1) return 70;
          if(i === 2) return 100;
          if(i === 3) return 128;
          if(i === 4) return 10;
          if(i === 5) return 40;
          if(i === 6) return 70;
          if(i === 7) return 100;
          if(i === 8) return 128;
          if(i === 9) return 10;
          if(i === 10) return 40;
          if(i === 11) return 70;
          if(i === 12) return 100;
          if(i === 13) return 128;
          if(i === 14) return 10;
          if(i === 15) return 40;
        },
        "y" : function(d,i) {
          if(i === 0) return 70; 
          if(i === 1) return 70;
          if(i === 2) return 70;
          if(i === 3) return 70;
          if(i === 4) return 60;
          if(i === 5) return 60;
          if(i === 6) return 60;
          if(i === 7) return 60;
          if(i === 8) return 60;
          if(i === 9) return 50;
          if(i === 10) return 50;
          if(i === 11) return 50;
          if(i === 12) return 50;
          if(i === 13) return 50;
          if(i === 14) return 40;
          if(i === 15) return 40;
        },       
        "class" : function(d,i){
          return d;
        }
      })
      .transition()
      .duration(1000)
      .style("opacity", 1)
      .attr("transform", "translate(0,10)");
  }

  function drawRetirement() {
    var ret = svg.selectAll("image g.milestoneSix")
      .data(retirement)
      .enter()
      .append("g")
      .classed("milestoneSix", true);

      ret
      .append("svg:image")
      .attr(opts)
      .attr({
        "x" : function(d,i) {
          if(i === 0) return 70;
          if(i === 1) return 70;
          if(i === 2) return 70;
        },
        "y" : function(d,i) {
          if(i === 0) return 40; 
          if(i === 1) return 30;
          if(i === 2) return 20;
        },       
        "class" : function(d,i){
          return d;
        }
      })
      .transition()
      .duration(1000)
      .style("opacity", 1)
      .attr("transform", "translate(0,10)");    
  }

  drawSvg();


  d3.select(window).on('resize', resize);

  function resize() {

    // resize hero, six section milestones, and footer
    setSize("#hero");
    setSize("#section1");
    setSize("#section2");
    setSize("#section3");    
    setSize("#section4");
    setSize("#section5"); 
    setSize("#section6");    
    setSize("#section7");      
    setWidth("footer");

    // resize visualisation (TBC)
    getViewportDimensions();
    setSvgSize();

  }

    // waypoints for calling animate functions
  var waypointBirth = new Waypoint({
    element: document.getElementById('section2'),
    handler: drawBirth,
    offset: 100 
  });

  var waypointSchool = new Waypoint({
    element: document.getElementById('section3'),
    handler: drawSchool,
    offset: 100 
  });

  var waypointUniversity = new Waypoint({
    element: document.getElementById('section4'),
    handler: drawUniversity,
    offset: 100 
  });

  var waypointWorkingLife = new Waypoint({
    element: document.getElementById('section5'),
    handler: drawWorkingLife,
    offset: 100 
  });

  var waypointFamilyLife = new Waypoint({
    element: document.getElementById('section6'),
    handler: drawFamilyLife,
    offset: 100 
  });
 
  var waypointRetirement = new Waypoint({
    element: document.getElementById('section7'),
    handler: drawRetirement,
    offset: 100 
  });

})();
