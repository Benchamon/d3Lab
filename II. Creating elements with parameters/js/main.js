/*
*    main.js
*/

var data = [25, 20, 15, 10, 5];
var svg = d3.select("#chart-area").append("svg")
	.attr("width", 400)
	.attr("height", 400)
	.style("background-color", "grey")

var rectangles = svg.selectAll("rectangle").data(data);

rectangles.enter()
	.append("rect")
	.attr("x",(d,i)=>i*50)
	.attr("y", (d)=>400-d)
	.attr("width",40)
	.attr("height", (d)=>d)
	.attr("fill","blue");
