function init(americanSalesin2011) {
    // console.log(data)
    console.log(americanSalesin2011);
    const ctx = document.getElementById('totalAmericanSalesin2011');

    var sports = 0;
    var action = 0;
    var fighting = 0;

    for (dataPoint in americanSalesin2011) {
        // console.log(americanSalesin2011[dataPoint].NA_Sales)
        if (americanSalesin2011[dataPoint].Genre == "Fighting") {
            fighting += americanSalesin2011[dataPoint].NA_Sales
        }
        else if (americanSalesin2011[dataPoint].Genre == "Sports") {
            sports += americanSalesin2011[dataPoint].NA_Sales
        }
        else if (americanSalesin2011[dataPoint].Genre == "Action") {
            action += americanSalesin2011[dataPoint].NA_Sales
        }
    }

    new Chart(ctx, {
        type: 'bar',
        data: {
        labels: ['fighting', 'sports', 'action'],
        datasets: [{
            label: '# of Votes (in millions)',
            data: [fighting, sports, action],
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

// DOESN'T GO HERE GOES IN INDEX.HTML BUT IT THROWS AN ERROR WHEN IT'S THERE
// var allData = JSON.parse('{{ db | tojson | safe }}');