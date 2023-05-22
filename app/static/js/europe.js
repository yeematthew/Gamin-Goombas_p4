function init(europeSales) {
    // console.log(data)
    console.log(europeSales);
    const ctx = document.getElementById('totalEuropeanSales');

    var years = [];
    for (var i = 1980; i <= 2020; i++) {
        years.push(String(i));
    }

    var yearsData = [];
    for (var i = 1980; i <= 2015; i++) {
        yearsData.push(0); // The list is still 0-indexed, remember to subtract 1980 from the year accordingly
    }
    for(dataPoint in europeSales){
        year = europeSales[dataPoint].Year;        
        yearsData[year - 1980] += europeSales[dataPoint].EU_Sales;
    }

    // console.log(yearsData);
    
    
    var chart = new Chart(ctx, {
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
    chart.destroy();
}

