/*
*    main.js
*/
var svg = d3.select("#chart-area").append("svg")
	.attr("width", 400)
	.attr("height", 400)
	.style("background-color", "cyan")

d3.json("data/ages.json").then((data)=> {
	data.forEach((d)=>{

		d.age = +d.age;

	});

	var circles = svg.selectAll().data(data);

	circles.enter()
		.append("circle")
		.attr("cx",(d,i)=>(i*50)+35)
		.attr("cy", 200)
		.attr("r", (d)=>d.age)
		.attr("fill",(d)=>{if(d.age>10){return "blue"}else{return"red"};})
})
.catch((error)=>{console.log(error);});





