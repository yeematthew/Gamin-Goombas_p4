function init(japaneseSales) {
    // console.log(data)
    console.log(japaneseSales);
    const ctx = document.getElementById('totalJapaneseSales');

    var years = [];
    for (var i = 1980; i <= 2020; i++) {
        years.push(String(i));
    }

    var yearsData = [];
    for (var i = 1980; i <= 2020; i++) {
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

