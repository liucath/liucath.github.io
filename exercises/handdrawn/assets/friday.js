const fridayData = [
  {name: 'instagram', amount: 47},
  {name: 'imessage', amount: 32},
  {name: 'photos', amount: 7},
  {name: 'photos', amount: 7},
  {name: 'spotify', amount: 7},
  {name: 'clock', amount: 4},
  {name: 'safari', amount: 4},
  {name: 'tik tok', amount: 3},
  {name: 'camera', amount: 2},
  {name: 'canvas', amount: 2},
  {name: 'gmail', amount: 1},
  {name: 'messenger', amount: 1}
];
const width = 1500;
const height = 800;
const margin = {top: 0, bottom: 0, left: 50, right: 50};


// create svg that will hold chart, you can then target the svg with css to see it
const svg = d3.select(".d3-container")
.append("svg")
.attr("height", height - margin.top - margin.bottom)
.attr("width", width - margin.left - margin.right)
.attr("viewBox", [0,0, width, height]);

// set up the x scale to match how many elements we have in our object
const x = d3.scaleBand()
.domain(d3.range(fridayData.length))
.range([margin.left, width - margin.right])
.padding(0.1);

// set up y scale to match the amounts. 0 to 15 will work
const y = d3.scaleLinear()
.domain([0,200])
.range([height - margin.bottom, margin.top]);

// start creating the bars for the chart.
// we set up rectangles, as well as sort the data from biggest to smallest
svg
  .append("g")
  .attr("fill", "#9FB3DB")
  .selectAll("rect")
  .data(fridayData.sort((a,b) => d3.descending(a.amount, b.amount)))
  .join("rect")
  // places data on correct positions
  .attr("x", (d, i) => x(i))
  .attr("y", (d) => y(d.amount))
  .attr("height", d => y(0) - y(d.amount))
  .attr("width", x.bandwidth())
  //add a class
  .attr("class", "rectangle")

// set up labels for x axis
// the transform moves the labels to the bottom, comment out to see what i mean
function xAxis(g) {
  g.attr("transform", `translate(0, ${height - margin.bottom})`)
  g.call(d3.axisBottom(x).tickFormat(i => fridayData[i].name))
}

// set up labels for y axis
function yAxis(g){
  g.attr("transform", `translate(${margin.left}, 0)`)
  .call(d3.axisLeft(y).ticks(null, fridayData.format))
}


// draw the labels onto the page for y
svg.append("g").call(yAxis);

//draws the labels onto the page. this puts them at the top by default so the you need to transform their position.
svg.append("g").call(xAxis);

// draws bars onto page. try adding another flower to the data to see how it changes.
  svg.node();