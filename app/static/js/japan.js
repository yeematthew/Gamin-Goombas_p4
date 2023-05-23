/*
function init(japaneseSales) {
    // console.log(data)
    console.log(japaneseSales);
    const ctx = document.getElementById('totalJapaneseSales');

    var years = [];
    for (var i = 1980; i <= 2015; i++) {
        years.push(String(i));
    }

    var yearsData = [];
    for (var i = 1980; i <= 2015; i++) {
        yearsData.push(0); // The list is still 0-indexed, remember to subtract 1980 from the year accordingly
    }
    for(dataPoint in japaneseSales){
        year = japaneseSales[dataPoint].Year;        
        yearsData[year - 1980] += japaneseSales[dataPoint].JP_Sales;
    }

    // console.log(yearsData);
    

    new Chart(ctx, {
        type: 'bar',
        data: {
        labels: years,
        datasets: [{
            label: '# of Sales (in millions)',
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
}
*/

var chart;

function init(japanSales) {
    console.log(japanSales);
    const ctx = document.getElementById('totalJapanSales');
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
    for(dataPoint in japanSales){
        year = japanSales[dataPoint].Year;        
        if(selectedOption == japanSales[dataPoint].Genre){
            yearsData[year - 1980] += japanSales[dataPoint].JP_Sales;
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



}
