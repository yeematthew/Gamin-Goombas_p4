function init(americanSalesin2011) {
    // console.log(data)
    //console.log(americanSalesin2011);
    const ctx = document.getElementById('totalAmericanSalesin2011');

    var sports = 0;
    var action = 0;
    var fighting = 0;

    var slider = document.getElementById("sliderRange");
    var output = document.getElementById("demo");

    output.innerHTML = slider.value; // Display the default slider value

    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function() {
        output.innerHTML = this.value;
    }
    

    for (dataPoint in americanSalesin2011) {
        if(americanSalesin2011[dataPoint].Year == slider.value){
            // console.log(americanSalesin2011[dataPoint].NA_Sales)
            if (americanSalesin2011[dataPoint].Genre == "Fighting") {
                fighting += americanSalesin2011[dataPoint].Global_Sales
            }
            else if (americanSalesin2011[dataPoint].Genre == "Sports") {
                sports += americanSalesin2011[dataPoint].Global_Sales
            }
            else if (americanSalesin2011[dataPoint].Genre == "Action") {
                action += americanSalesin2011[dataPoint].Global_Sales
            }
        }
    }

    var gameTypes = new Set();

    new Chart(ctx, {
        type: 'bar',
        data: {
        labels: ['fighting', 'sports', 'action'],
        datasets: [{
            label: 'Sales in Millions',
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

function rerender(americanSalesin2011) {

    e.preventDefault();

    console.log("I'm ALIVE");
    const ctx = document.getElementById('totalAmericanSalesin2011');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var first = 0;
    var second = 0;
    var third = 0;

    var slider = document.getElementById("sliderRange");

    for (dataPoint in americanSalesin2011) {
        if(americanSalesin2011[dataPoint].Year == slider.value){
            // console.log(americanSalesin2011[dataPoint].NA_Sales)
            if (americanSalesin2011[dataPoint].Genre == "genreDropdown0") {
                first += americanSalesin2011[dataPoint].Global_Sales
            }
            else if (americanSalesin2011[dataPoint].Genre == "genreDropdown1") {
                second += americanSalesin2011[dataPoint].Global_Sales
            }
            else if (americanSalesin2011[dataPoint].Genre == "genreDropdown2") {
                third += americanSalesin2011[dataPoint].Global_Sales
            }
        }
    }

    var gameTypes = new Set();

    new Chart(ctx, {
        type: 'bar',
        data: {
        labels: ['genreDropdown0', 'genreDropdown1', 'genreDropdown2'],
        datasets: [{
            label: 'Sales in Millions',
            data: [first, second, third],
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