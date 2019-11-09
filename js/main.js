
function capFirst(s){
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function radius(n){
  n= +n;
  return n*.1;
}

document.querySelector(".select-control").addEventListener("change", updateBarChart);
let column = document.querySelector(".select-control").value;

d3.csv("/data/coffee-house-chains.csv")
    .then(function(data){
      console.log(data);
    });

function updateBarChart(){
  let column = document.querySelector(".select-control").value;
  console.log(column);
  let spec = {
    "data": {"url": "data/coffee-house-chains.csv"},
    "mark": "bar",
    "encoding": {
      "x": {
        "field": "company",
        "type": "ordinal",
        "sort":"-y",
        "title": "Company"
      },
      "y": {
        "field": column,
        "type": "quantitative",
        "title": capFirst(column)
      },
      "tooltip":[
        {"field":"company", "type":"ordinal"},
        {"field":"revenue", "type":"quantitative"},
        {"field":"stores", "type":"quantitative"}
      ]
    }
  };
  vegaEmbed('#chart-area', spec);
}

function updateScatter(){
  let spec = {
    "data": {"url": "data/wealth-health-2014.csv"},
    "width": 200,
    "height": 200,
    "padding": 5,
    "mark": {"type":"point"},
    "encoding": {
      "x": {"field": "Income", "type": "quantitative"},
      "y": {"field": "LifeExpectancy", "type": "quantitative"},
      "size": {"field": "Population", "type": "quantitative"},
      "tooltip": [
        {"field": "Country", "type": "ordinal"},
        {"field": "Income", "type": "quantitative"},
        {"field": "LifeExpectancy", "type": "quantitative"},
        {"field": "Population", "type": "quantitative"},
      ]
    }
  }
  vegaEmbed('#scatter-area', spec);
}

updateBarChart();
updateScatter();