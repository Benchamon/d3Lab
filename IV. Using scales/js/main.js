/*
*    main.js
*/
var svg = d3.select("#chart-area").append("svg")
	.attr("width", 500)
	.attr("height", 500)
	.style("background-color", "grey")
	.style("stroke","white");

d3.json("data/buildings.json").then((data)=> {
	var names =[];
	data.forEach((d)=>{
		

		d.height = +d.height;
		names.push(d.name);

	});
	console.log(names);

	var x = d3.scaleBand()
    .domain(names)
    .range([0,400])
    .paddingInner(0.3)
    .paddingOuter(0.3);

  	var y = d3.scaleLinear()
    .domain([0,828])
    .range([0,400]);

    var ordinal = d3.scaleOrdinal()
   	.domain(names)
   	.range(d3.schemeSet3)


	var rectangles = svg.selectAll("rectangle").data(data);

	rectangles.enter()
	.append("rect")
	.attr("x",(d)=>x(d.name))
	.attr("y", (d)=>(500-y(d.height)))
	.attr("width",x.bandwidth)
	.attr("height", (d)=>y(d.height))
	.attr("fill",(d)=>ordinal(d.name));
})
.catch((error)=>{console.log(error);});

