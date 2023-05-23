function init(europeSales) {
    // console.log(data)
    //console.log(europeSales);
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
    var names = ["Adventure", "Fighting", "Misc", "Platform", "Puzzle", "Racing", "Role-Playing", "Shooter", "Simulation", "Sports", "Strategy"];
    var saledataset = [];
    for (i in names) {
        saledataset.push([]);
    }
    console.log("dataset:");
    console.log(saledataset);
    for (dataPoint in europeSales) {
        for (i = 0; i < names.length; i++) {
            if (europeSales[dataPoint].Genre == names[i]) {
                saledataset[i].push(europeSales[dataPoint].EU_Sales);
            }
        }
     }
    // console.log(yearsData);
    new Chart (ctx, {
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
            }
        },
    });
}

