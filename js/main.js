(function() {
  "use strict";

  var svg, 
    g, 
    born, 
    sco, 
    uni, 
    work, 
    fam, 
    ret, 
    orientation = "";

  // bribe data; last element is the total. 
  var intervals = [0,1406155,3483238,4839985,20388287,32898689,35491510,35491510];

  // each el of the array represents a stack of money
  var birth = ["birth"],
    school = ["school", "school"],
    university = ["university"], 
    workingLife = ["workingLife", "workingLife", "workingLife", "workingLife", "workingLife", "workingLife", "workingLife", "workingLife", "workingLife", "workingLife", "workingLife", "workingLife"],
    familyLife = ["familyLife", "familyLife", "familyLife", "familyLife", "familyLife", "familyLife", "familyLife", "familyLife", "familyLife", "familyLife", "familyLife", "familyLife", "familyLife", "familyLife", "familyLife", "familyLife"],
    retirement = ["retirement", "retirement", "retirement"];  

  var opts = {
    "xlink:href" : "assets/moneyBlue.svg",
    "width" :  function() {
      if(orientation === "landscape") {
        return window.innerHeight / 10;
      }
      else return window.innerHeight / 10;
    },
    "height" : 100
  };

  function getViewportDimensions() { 
    // if portrait
    if(window.innerHeight > window.innerWidth){
      orientation = "portrait";
    }

    // if landscape
    else {
      orientation = "landscape";
    }
  }


  function drawSvg() {
    svg = d3.select("aside")
      .append("svg"); 

      setSvgSize();
  }

  function setSvgSize() {
    svg
      .attr({
        width : document.getElementsByTagName("aside")[0].offsetWidth,
        height : window.innerHeight
      });

    getViewportDimensions();
  }

 
  function appendCostDiv() {
    var footer = document.getElementsByTagName("footer")[0];
    var counterDiv = document.createElement("div"); 
    var span = document.createElement("span");
    footer.appendChild(counterDiv);
    counterDiv.appendChild(span);
    counterDiv.id = "counter";
    span.id = "cost";
    span.classList.add("timer");
    span.innerHTML = "1234";
  }

  function jQueryCountTo(start,end) {
    jQuery('.timer')
      .countTo({
        from: start, 
        to: end,
        formatter: function (value, options) {
          value = value.toFixed(options.decimals);
          value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
          return value;
        }
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
      .attr("transform", "translate(0,50)");

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
          return 62; 
        },       
        "class" : function(d,i){
          return d;
        }
      })
      .transition()
      .duration(1000)
      .style("opacity", 1)
      .attr("transform", "translate(0,50)");
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
      .attr("transform", "translate(0,50)");
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
      .attr("transform", "translate(0,50)");
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
      .attr("transform", "translate(0,50)");
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
          return 124;
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
      .attr("transform", "translate(0,50)");
  }

  // remove selections - to do, just remove for now 
  // refactor

  function exitBirth() {
    born
      .transition()
      .duration(1000)
      .style("opacity",0)
      .remove();
  }

  function exitSchool() {
    sco
      .transition()
      .duration(1000)
      .style("opacity",0)
      .remove();
  }

  function exitUniversity() {
    uni
      .transition()
      .duration(1000)
      .style("opacity",0)
      .remove();
  }

  function exitFamilyLife() {
    fam
      .transition()
      .duration(1000)
      .style("opacity",0)
      .remove();
  }

  function exitWorkingLife() {
    work
      .transition()
      .duration(1000)
      .style("opacity",0)
      .remove();
  }

  function exitRetirement() {
    ret
      .transition()
      .duration(1000)
      .style("opacity",0)
      .remove();
  }

  function hideSVG() {
    svg
      .transition()
      .duration(1000)
      .style("display", "none");
  }

  function showSVG() {
    svg
      .transition()
      .duration(1000)
      .style("display", "block");
  }

  drawSvg();

  d3.select(window).on('resize', resize);

  function resize() {

  }

  // waypoints for calling animate functions

  jQuery(document).ready(function() {

    jQuery('#fullpage').fullpage({
      scrollOverflow:true,
      onLeave: function(index, nextIndex, direction) {

        var footer = document.getElementsByTagName("footer")[0];

        if(index === 1 && direction === "down") {

        }

        // birth 
        if(index === 2 && direction === "down") {  
          footer.classList.remove("invisible");
          drawBirth();
          appendCostDiv();
          jQueryCountTo(intervals[0],intervals[1]); 
        }
        if(index === 3 && direction === "up") {
          footer.classList.add("invisible");
          exitBirth();
          jQueryCountTo(intervals[1],intervals[0]); 
        }

        // school
        if(index === 3 && direction === "down") {
          drawSchool();
          jQueryCountTo(intervals[1],intervals[2]); 
        }
        if(index === 4 && direction === "up") {
          exitSchool();
          jQueryCountTo(intervals[2],intervals[1]); 
        }

        // university 
        if(index === 4 && direction === "down") {
          drawUniversity();
          jQueryCountTo(intervals[2],intervals[3]); 
        }
        if(index === 5 && direction === "up") {
          exitUniversity();
          jQueryCountTo(intervals[3],intervals[2]); 
        }

        // working life
        if(index === 5 && direction === "down") {
          drawWorkingLife();
          jQueryCountTo(intervals[3],intervals[4]); 
        }
        if(index === 6 && direction === "up") {
          exitWorkingLife();
          jQueryCountTo(intervals[4],intervals[3]); 
        }      
      
        // family life
        if(index === 6 && direction === "down") {
          drawFamilyLife();
          jQueryCountTo(intervals[4],intervals[5]); 
        }
        if(index === 7 && direction === "up") {
          exitFamilyLife();
          jQueryCountTo(intervals[5],intervals[4]); 
        }   
      
        // retirement
        if(index === 7 && direction === "down") {
          drawRetirement();
          jQueryCountTo(intervals[5],intervals[6]); 

        }
        if(index === 8 && direction === "up") {
          exitRetirement();
          jQueryCountTo(intervals[6],intervals[5]); 
        }

        // report
        if(index === 8 && direction === "down") {
          hideSVG();
        }
        if(index === 9 && direction === "up") {
          showSVG();
        }
      }
    });
  });




})();
