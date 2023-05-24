var chart;

function init(japanSales) {
    //////////////////////////////////////LINE GRAPH

    var sliderLow = document.getElementById("sliderLow");
    var outputLow = document.getElementById("lownum");

    outputLow.innerHTML = sliderLow.value; // Display the default slider value

    // Update the current slider value (each time you drag the slider handle)
    sliderLow.oninput = function() {
        outputLow.innerHTML = this.value;
    }

    var sliderHigh = document.getElementById("sliderHigh");
    var outputHigh = document.getElementById("highnum");

    outputHigh.innerHTML = sliderHigh.value; // Display the default slider value

    // Update the current slider value (each time you drag the slider handle)
    sliderHigh.oninput = function() {
        outputHigh.innerHTML = this.value;
    }

    const ctx = document.getElementById('lineGraph');
    var years = [];
    for (var i = 1980; i <= 2015; i++) {
        years.push(String(i));
    }
    var yearsData = [];
    for (var i = 1980; i <= 2015; i++) {
        yearsData.push(0); // The list is still 0-indexed, remember to subtract 1980 from the year accordingly
    }
    for(dataPoint in japanSales){
        year = japanSales[dataPoint].Year;        
        yearsData[year - 1980] += japanSales[dataPoint].JP_Sales;
    }
    var names = ["Adventure", "Fighting", "Misc", "Platform", "Puzzle", "Racing", "Role-Playing", "Shooter", "Simulation", "Sports", "Strategy"];
    var genresum = [];
    for (j in names) {
        genresum.push([]);
        for (i = 0; i < years.length; i++) {
            genresum[j].push(0);
        }
    }
    for (dataPoint in japanSales) {
        for (i = 0; i < names.length; i++) {
            if (japanSales[dataPoint].Genre == names[i]) {
                var yearindex = (japanSales[dataPoint].Year - 1980);
                genresum[i][yearindex] += japanSales[dataPoint].JP_Sales;
            }
        }
     }

     new Chart (ctx, {
        type: 'line',
        data: {
            labels: years,
            datasets: [
                {
                    label: '# of '+ names[0] +' games sold (in millions)',
                    data: genresum[0],
                    borderColor: 'rgb(0, 128, 128)',
                    borderWidth: 1,
                },
                {
                    label: '# of '+ names[1] +' games sold (in millions)',
                    data: genresum[1],
                    borderColor: 'rgb(230, 25, 75)',
                    borderWidth: 1,
                },
                {
                    label: '# of '+ names[2] +' games sold (in millions)',
                    data: genresum[2],
                    borderColor: 'rgb(60, 180, 75)',
                    borderWidth: 1,
                },
                {
                    label: '# of '+ names[3] +' games sold (in millions)',
                    data: genresum[3],
                    borderColor: 'rgb(240, 50, 230)',
                    borderWidth: 1,
                },
                {
                    label: '# of '+ names[4] +' games sold (in millions)',
                    data: genresum[4],
                    borderColor: 'rgb(70, 240, 240)',
                    borderWidth: 1,
                },
                {
                    label: '# of '+ names[5] +' games sold (in millions)',
                    data: genresum[5],
                    borderColor: 'rgb(255, 127, 0)',
                    borderWidth: 1,
                },
                {
                    label: '# of '+ names[6] +' games sold (in millions)',
                    data: genresum[6],
                    borderColor: 'rgb(106, 255, 0)',
                    borderWidth: 1,
                },
                {
                    label: '# of '+ names[7] +' games sold (in millions)',
                    data: genresum[7],
                    borderColor: 'rgb(145, 30, 180)',
                    borderWidth: 1,
                },
                {
                    label: '# of '+ names[8] +' games sold (in millions)',
                    data: genresum[8],
                    borderColor: 'rgb(0, 128, 128)',
                    borderWidth: 1,
                },
                {
                    label: '# of '+ names[9] +' games sold (in millions)',
                    data: genresum[9],
                    borderColor: 'rgb(255, 0, 170)',
                    borderWidth: 1,
                },
                {
                    label: '# of '+ names[10] +' games sold (in millions)',
                    data: genresum[10],
                    borderColor: 'rgb(0, 149, 255)',
                    borderWidth: 1,
                },
            ],
        },
        options: {
            scales: {
                y: {
                beginAtZero: true
                }
            },            
            plugins: {
                title: {
                    display: true,
                    text: "Sales of Different Genres of Video Games in Japan Over Time"
                }
            }
        },
    });

    /////////////////BAR GRAPH

    const ctx2 = document.getElementById('totalJapanSales');

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
    
    chart = new Chart(ctx2, {
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
            },            
            plugins: {
                title: {
                    display: true,
                    text: selectedOption + " Sales over Time"
                }
            }
        }
    });



}

function reloadGraph(japanSales) {
    const ctx2 = document.getElementById('totalJapanSales');

    var dropdown = document.getElementById("genreDropdown");
    var selectedOption = dropdown.value;

    var sliderLow = document.getElementById("sliderLow");
    var lowerbound = sliderLow.value;

    var sliderHigh = document.getElementById("sliderHigh");
    var upperbound = sliderHigh.value;

    var outputLow = document.getElementById("lownum");
    var outputHigh = document.getElementById("highnum");

    if(upperbound<lowerbound){
        outputLow.innerHTML = "Invalid Time Frame";
        outputHigh.innerHTML = "Invalid Time Frame";
        return null;
    }
    else{
        outputLow.innerHTML = lowerbound;
        outputHigh.innerHTML = upperbound;
    }

    var years = [];
    for (var i = lowerbound; i <= upperbound; i++) {
        years.push(String(i));
    }

    var yearsData = [];
    for (var i = lowerbound; i <= upperbound; i++) {
        yearsData.push(0); 
    }
    for(dataPoint in japanSales){
        year = japanSales[dataPoint].Year;        
        if(selectedOption == japanSales[dataPoint].Genre){
            yearsData[year - lowerbound] += japanSales[dataPoint].JP_Sales;
        }
    }    
    
    chart.destroy()

    chart = new Chart(ctx2, {
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
            },            
            plugins: {
                title: {
                    display: true,
                    text: selectedOption + " Sales over Time"
                }
            }
        }
    });

}