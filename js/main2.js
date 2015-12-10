(function() {
  "use strict";

  var height, 
    width, 
    svg, 
    g, 
    asideWidth, 
    asideHeight, 
    born, 
    sco, 
    uni, 
    work, 
    fam, 
    ret;

  var birth = ["birth"],
    school = ["school", "school"],
    university = ["university"], 
    workingLife = ["workingLife", "workingLife", "workingLife", "workingLife", "workingLife", "workingLife", "workingLife", "workingLife", "workingLife", "workingLife", "workingLife", "workingLife"],
    familyLife = ["familyLife", "familyLife", "familyLife", "familyLife", "familyLife", "familyLife", "familyLife", "familyLife", "familyLife", "familyLife", "familyLife", "familyLife", "familyLife", "familyLife", "familyLife", "familyLife"],
    retirement = ["retirement", "retirement", "retirement"];  

  var opts = {
    "xlink:href" : "assets/moneyBlue.svg",
    "width" : 100, 
    "height" : 100,
  };


  function getViewportDimensions() { 
    width = document.getElementsByTagName("main")[0].offsetWidth;
    height = window.innerHeight;

    asideWidth = width;
    asideHeight = window.innerHeight  * 0.5;

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


  // enter selections 

  function drawBirth() {
    born = svg.selectAll("image g.milestoneOne")
      .data(birth)
      .enter()
      .append("g")
      .classed("milestoneOne", true);

    born
      .append("svg:image")
      .attr(opts)
      .attr({
        "x" : 10, 
        "y" : 60, 
        "class" : function(d,i){
          return d;
        }
      })
      .transition()
      .duration(1000)
      .style("opacity", 1)
      .attr("transform", "translate(0,120)");


  }

  function drawSchool() {
    sco = svg.selectAll("image g.milestoneTwo")
      .data(school)
      .enter()
      .append("g")
      .classed("milestoneTwo", true);

    sco
      .append("svg:image")
      .attr(opts)
      .attr({
        "x" : function(d,i) {
          if(i === 0) return 70; 
          if(i === 1) return 123;
        },
        "y" : function(d,i) {
          if(i === 0) return 62; 
          if(i === 1) return 62;
        },       
        "class" : function(d,i){
          return d;
        }
      })
      .transition()
      .duration(1000)
      .style("opacity", 1)
      .attr("transform", "translate(0,120)");
  }

  function drawUniversity() {
     uni = svg.selectAll("image g.milestoneThree")
      .data(university)
      .enter()
      .append("g")
      .classed("milestoneThree", true);

    uni
      .append("svg:image")
      .attr(opts)
      .attr({
        "x" : 182,
        "y" : 65,        
        "class" : function(d,i){
          return d;
        }
      })
      .transition()
      .duration(1000)
      .style("opacity", 1)
      .attr("transform", "translate(0,120)");
  }

  function drawWorkingLife() {

     work = svg.selectAll("image g.milestoneFour")
      .data(workingLife)
      .enter()
      .append("g")
      .classed("milestoneFour", true);

      work
      .append("svg:image")
      .attr(opts)
      .attr({
        "x" : function(d,i) {
          if(i === 0) return 240;
          if(i === 1) return 10;
          if(i === 2) return 70;
          if(i === 3) return 124;
          if(i === 4) return 182;
          if(i === 5) return 240;
          if(i === 6) return 10;
          if(i === 7) return 70;
          if(i === 8) return 124;
          if(i === 9) return 182;
          if(i === 10) return 240;
          if(i === 11) return 10;
        },
        "y" : function(d,i) {
          if(i === 0) return 67; 
          if(i === 1) return 40;
          if(i === 2) return 40;
          if(i === 3) return 41;
          if(i === 4) return 43;
          if(i === 5) return 45;
          if(i === 6) return 20;
          if(i === 7) return 20;
          if(i === 8) return 20;
          if(i === 9) return 22;
          if(i === 10) return 24;
          if(i === 11) return -1;

        },       
        "class" : function(d,i){
          return d;
        }
      })
      .transition()
      .duration(1000)
      .style("opacity", 1)
      .attr("transform", "translate(0,120)");
  }

  function drawFamilyLife() {
    fam = svg.selectAll("image g.milestoneFive")
      .data(familyLife)
      .enter()
      .append("g")
      .classed("milestoneFive", true);

      fam
      .append("svg:image")
      .attr(opts)
      .attr({
        "x" : function(d,i) {
          if(i === 0) return 70;
          if(i === 1) return 124;
          if(i === 2) return 182;
          if(i === 3) return 240;
          if(i === 4) return 10;
          if(i === 5) return 70;
          if(i === 6) return 124;
          if(i === 7) return 182;
          if(i === 8) return 240;
          if(i === 9) return 10;
          if(i === 10) return 70;
          if(i === 11) return 124;
          if(i === 12) return 182;
          if(i === 13) return 240;
          if(i === 14) return 10;
          if(i === 15) return 70;
        },
        "y" : function(d,i) {
          if(i === 0) return -1; 
          if(i === 1) return -1;
          if(i === 2) return 2;
          if(i === 3) return 2;
          if(i === 4) return -19;
          if(i === 5) return -19;
          if(i === 6) return -19;
          if(i === 7) return -18;
          if(i === 8) return -18;
          if(i === 9) return -38;
          if(i === 10) return -38;
          if(i === 11) return -38;
          if(i === 12) return -38;
          if(i === 13) return -38;
          if(i === 14) return -57;
          if(i === 15) return -57;
        },       
        "class" : function(d,i){
          return d;
        }
      })
      .transition()
      .duration(1000)
      .style("opacity", 1)
      .attr("transform", "translate(0,120)");
  }

  function drawRetirement() {
    ret = svg.selectAll("image g.milestoneSix")
      .data(retirement)
      .enter()
      .append("g")
      .classed("milestoneSix", true);

      ret
      .append("svg:image")
      .attr(opts)
      .attr({
        "x" : function(d,i) {
          if(i === 0) return 124;
          if(i === 1) return 124;
          if(i === 2) return 124;
        },
        "y" : function(d,i) {
          if(i === 0) return -57; 
          if(i === 1) return -70;
          if(i === 2) return -90;
        },       
        "class" : function(d,i){
          return d;
        }
      })
      .transition()
      .duration(1000)
      .style("opacity", 1)
      .attr("transform", "translate(0,120)");    
  }

  // remove selections - to do, just remove for now 

  function exitBirth() {
    born.remove();
  }

  function exitSchool() {
    sco.remove();
  }

  function exitUniversity() {
    uni.remove();
  }

  function exitFamilyLife() {
    fam.remove();
  }

  function exitWorkingLife() {
    work.remove();
  }

  function exitRetirement() {
    ret.remove();
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
    handler: function(direction) {
      if(direction === "down") {
        drawBirth();
      }
      else exitBirth();
    },
    offset: 100 
  });

  var waypointSchool = new Waypoint({
    element: document.getElementById('section3'),
    handler: function(direction) {
      if(direction === "down") {
        drawSchool();
      }
      else exitSchool();
    },
    offset: 100 
  });

  var waypointUniversity = new Waypoint({
    element: document.getElementById('section4'),
    handler: function(direction) {
      if(direction === "down") {
        drawUniversity();
      }
      else exitUniversity();
    },
    offset: 100 
  });

  var waypointWorkingLife = new Waypoint({
    element: document.getElementById('section5'),
    handler: function(direction) {
      if(direction === "down") {
        drawWorkingLife();
      }
      else exitWorkingLife();
    },
    offset: 100 
  });

  var waypointFamilyLife = new Waypoint({
    element: document.getElementById('section6'),
    handler: function(direction) {
      if(direction === "down") {
         drawFamilyLife();
      }
      else exitFamilyLife();
    },
    offset: 100 
  });
 
  var waypointRetirement = new Waypoint({
    element: document.getElementById('section7'),
    handler: function(direction) {
      if(direction === "down") {
        drawRetirement();
      }
      else exitRetirement();
    },
    offset: 100 
  });

})();
