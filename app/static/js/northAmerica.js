var chart;

function init(americanSales) {
    console.log(americanSales);
    const ctx = document.getElementById('totalAmericanSales');
    // const ctx2 = ctx.getContext("2d")

    var dropdown = document.getElementById("genreDropdown");
    var selectedOption = dropdown.value;

    var years = [];
    for (var i = 1980; i <= 2015; i++) {
        years.push(String(i));
    }

    var yearsData = [];
    for (var i = 1980; i <= 2015; i++) {
        yearsData.push(0); 
    }
    for(dataPoint in americanSales){
        year = americanSales[dataPoint].Year;        
        if(selectedOption == americanSales[dataPoint].Genre){
            yearsData[year - 1980] += americanSales[dataPoint].NA_Sales;
        }
    }

    if(chart != null){
        chart.destroy();    
    }
    
    
    
    chart = new Chart(ctx, {
        type: 'bar',
        data: {
        labels: years,
        datasets: [{
            label: "# of " + selectedOption + " Sales (in millions)",
            data: yearsData,
            borderWidth: 1
        }]
        },
        options: {
        scales: {
            y: {
            beginAtZero: true
            }
        }
        }
    });





    // chart.destroy();
}
