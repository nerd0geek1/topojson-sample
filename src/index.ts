var svg = d3.select('svg')
            .attr("width", 900)
            .attr("height", 900);
var projection = d3.geoMercator().center([145, 45]).translate([450, 450]).scale(5000);

var path = d3.geoPath().projection(projection);

d3.json("assets/prefs/hokkaido.topojson").then(function(data){
  svg
    .append("path")
    .datum(topojson.mesh(data, data.objects.hokkaido))
    .attr("d", path)
    .attr("fill", "none")
    .attr("stroke", "#000");
})
.catch(function(error){
  console.log(error);
});
