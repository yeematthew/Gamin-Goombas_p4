var chart;

function init(americanSales) {
    const ctx2 = document.getElementById('lineGraph');
    var years = [];
    for (var i = 1980; i <= 2020; i++) {
        years.push(String(i));
    }
    var yearsData = [];
    for (var i = 1980; i <= 2015; i++) {
        yearsData.push(0); // The list is still 0-indexed, remember to subtract 1980 from the year accordingly
    }
    for(dataPoint in americanSales){
        year = americanSales[dataPoint].Year;        
        yearsData[year - 1980] += americanSales[dataPoint].NA_Sales;
    }
    var names = ["Adventure", "Fighting", "Misc", "Platform", "Puzzle", "Racing", "Role-Playing", "Shooter", "Simulation", "Sports", "Strategy"];
    var saledataset = [];
    for (i in names) {
        saledataset.push([]);
    }
    for (dataPoint in americanSales) {
        for (i = 0; i < names.length; i++) {
            if (americanSales[dataPoint].Genre == names[i]) {
                saledataset[i].push(americanSales[dataPoint].NA_Sales);
            }
        }
     }

     new Chart (ctx2, {
        type: 'line',
        data: {
            labels: years,
            datasets: [
                {
                    label: '# of '+ names[0] +' games sold (in millions)',
                    data: saledataset[0],
                    borderColor: 'rgb(0, 128, 128)',
                    borderWidth: 1,
                },
                {
                    label: '# of '+ names[1] +' games sold (in millions)',
                    data: saledataset[1],
                    borderColor: 'rgb(230, 25, 75)',
                    borderWidth: 1,
                },
                {
                    label: '# of '+ names[2] +' games sold (in millions)',
                    data: saledataset[2],
                    borderColor: 'rgb(60, 180, 75)',
                    borderWidth: 1,
                },
                {
                    label: '# of '+ names[3] +' games sold (in millions)',
                    data: saledataset[3],
                    borderColor: 'rgb(240, 50, 230)',
                    borderWidth: 1,
                },
                {
                    label: '# of '+ names[4] +' games sold (in millions)',
                    data: saledataset[4],
                    borderColor: 'rgb(70, 240, 240)',
                    borderWidth: 1,
                },
                {
                    label: '# of '+ names[5] +' games sold (in millions)',
                    data: saledataset[5],
                    borderColor: 'rgb(255, 127, 0)',
                    borderWidth: 1,
                },
                {
                    label: '# of '+ names[6] +' games sold (in millions)',
                    data: saledataset[6],
                    borderColor: 'rgb(106, 255, 0)',
                    borderWidth: 1,
                },
                {
                    label: '# of '+ names[7] +' games sold (in millions)',
                    data: saledataset[7],
                    borderColor: 'rgb(145, 30, 180)',
                    borderWidth: 1,
                },
                {
                    label: '# of '+ names[8] +' games sold (in millions)',
                    data: saledataset[8],
                    borderColor: 'rgb(0, 128, 128)',
                    borderWidth: 1,
                },
                {
                    label: '# of '+ names[9] +' games sold (in millions)',
                    data: saledataset[9],
                    borderColor: 'rgb(255, 0, 170)',
                    borderWidth: 1,
                },
                {
                    label: '# of '+ names[10] +' games sold (in millions)',
                    data: saledataset[10],
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
                    text: "Sales of Different Genres of Video Games in Europe Over Time"
                }
            }
        },
    });



    ///////////////////// BAR GRAPH
    const ctx = document.getElementById('totalAmericanSales');

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

function reloadGraph(americanSales) {
    const ctx = document.getElementById('totalAmericanSales');

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
 
    chart.destroy()

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