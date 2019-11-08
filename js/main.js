


document.querySelector(".select-control").addEventListener("change", updateBarChart);

function updateBarChart(){
  let column = document.querySelector(".select-control").value;
  let spec = {
   
  };
  vegaEmbed('#chart-area', spec);
}

updateBarChart();