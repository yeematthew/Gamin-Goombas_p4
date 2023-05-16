// import data from 'thing.json' assert { type: 'json' };

// <!--./index.js-->

/*
fetch('thing.json')
    .then((response) => response.json())
    .then((json) => console.log(json))
*/



// async function logJSONData() {
//   const response = await fetch("thing.json");
//   const jsonData = await response.json();
//   console.log(jsonData);
//   console.log("ran");
// }

// logJSONData();


// console.log(data);

// "thing.json"
var parseData = JSON.parse(thing)
console.log(parseData)