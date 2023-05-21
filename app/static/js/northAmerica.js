function init(americanSales) {
    console.log(americanSales);
    const ctx = document.getElementById('totalAmericanSales');


    var dropdown = document.getElementById("genreDropdown");
    var selectedOption = dropdown.value;

    var years = [];
    for (var i = 1980; i <= 2020; i++) {
        years.push(String(i));
    }

    var yearsData = [];
    for (var i = 1980; i <= 2020; i++) {
        yearsData.push(0); // The list is still 0-indexed, remember to subtract 1980 from the year accordingly
    }
    for(dataPoint in americanSales){
        year = americanSales[dataPoint].Year;        
        yearsData[year - 1980] += americanSales[dataPoint].NA_Sales;
    }


    


    new Chart(ctx, {
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
