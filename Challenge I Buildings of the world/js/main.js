/*
*    main.js
*/

var svg = d3.select("#chart-area").append("svg")
	.attr("width", 800)
	.attr("height", 900)
	.style("background-color", "grey")
	.style("stroke","white");

d3.json("data/buildings.json").then((data)=> {
	data.forEach((d)=>{

		d.height = +d.height;

	});
	console.log(data);
	var rectangles = svg.selectAll("rectangle").data(data);

	rectangles.enter()
	.append("rect")
	.attr("x",(d,i)=>(i*50)+10)
	.attr("y", (d)=>(900-d.height))
	.attr("width",20)
	.attr("height", (d)=>d.height)
	.attr("fill","blue");
})
.catch((error)=>{console.log(error);});



