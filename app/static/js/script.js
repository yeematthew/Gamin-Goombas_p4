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

    var slider = document.getElementById("sliderRange");
    //var output = document.getElementById("demo");
    output.innerHTML = slider.value; // Display the default slider value

    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function() {
    output.innerHTML = this.value;
    } 

    var gameTypes = new Set();

    new Chart(ctx, {
        type: 'bar',
        data: {
        labels: ['fighting', 'sports', 'action'],
        datasets: [{
            label: '# of Votes',
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