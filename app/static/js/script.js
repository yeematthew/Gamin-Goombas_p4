function init(americanSalesin2011) {
    var caption = document.getElementById("caption");
    caption.innerHTML = "Sum of Global Sales in three different genres throughout 2000."

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
    
    chart = new Chart(ctx, {
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
            },            
            plugins: {
                title: {
                    display: true,
                    text: "Global Sales of Video Games in Select Genres in " + slider.value
                }
            }
        }
    });

    const ctx2 = document.getElementById('platformgraph');

    var platdropdown = document.getElementById("platformDropdown");
    var selectedOption = platdropdown.value;

    var years = [];
    for (var i = 1980; i <= 2015; i++) {
        years.push(String(i));
    }

    var yearsData = [];
    for (var i = 1980; i <= 2015; i++) {
        yearsData.push(0); 
    }
    for(dataPoint in americanSalesin2011){
        year = americanSalesin2011[dataPoint].Year;        
        if(selectedOption == americanSalesin2011[dataPoint].Platform){
            yearsData[year - 1980] += americanSalesin2011[dataPoint].Global_Sales;
        }
    }    
    
    chart2 = new Chart(ctx2, {
        type: 'bar',
        data: {
        labels: years,
        datasets: [{
            label: "# of Sales of Games on " + selectedOption + " (in millions)",
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
                    text: selectedOption + " Relevance over Time"
                }
            }
        }
    });
}

function rerender(americanSalesin2011) {

    const ctx = document.getElementById('totalAmericanSalesin2011');

    var g0 = document.getElementById("genreDropdown0").value;
    var g1 = document.getElementById("genreDropdown1").value;
    var g2 = document.getElementById("genreDropdown2").value;

    var first = 0;
    var second = 0;
    var third = 0;

    var slider = document.getElementById("sliderRange");

    for (dataPoint in americanSalesin2011) {
        if(americanSalesin2011[dataPoint].Year == slider.value){
            // console.log(americanSalesin2011[dataPoint].NA_Sales)
            if (americanSalesin2011[dataPoint].Genre == g0) {
                first += americanSalesin2011[dataPoint].Global_Sales
            }
            if (americanSalesin2011[dataPoint].Genre == g1) {
                second += americanSalesin2011[dataPoint].Global_Sales
            }
            if (americanSalesin2011[dataPoint].Genre == g2) {
                third += americanSalesin2011[dataPoint].Global_Sales
            }
        }
    }

    var caption = document.getElementById("caption");
    caption.innerHTML = "Sum of American Sales in three different genres throughout " + slider.value + "."

    if(chart != null){
        chart.destroy();
    }

    chart = new Chart(ctx, {
        type: 'bar',
        data: {
        labels: [g0, g1, g2],
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
            },            
            plugins: {
                title: {
                    display: true,
                    text: "Global Sales of Video Games in Select Genres in " + slider.value
                }
            }
        }
    });

}

function reloadGraph(americanSalesin2011) {
    const ctx2 = document.getElementById('platformgraph');

    var platdropdown = document.getElementById("platformDropdown");
    var selectedOption = platdropdown.value;

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
    for(dataPoint in americanSalesin2011){
        year = americanSalesin2011[dataPoint].Year;        
        if(selectedOption == americanSalesin2011[dataPoint].Platform){
            yearsData[year - lowerbound] += americanSalesin2011[dataPoint].JP_Sales;
        }
    }    
    
    chart2.destroy()

    chart2 = new Chart(ctx2, {
        type: 'bar',
        data: {
        labels: years,
        datasets: [{
            label: "# of " + selectedOption + " Sales of Games on Platform (in millions)",
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

// preventing form default -> no reloading
var form=document.getElementById("rerender");
function submitForm(event){

   //Preventing page refresh
   event.preventDefault();
}

//Calling a function during form submission.
form.addEventListener('submit', submitForm);