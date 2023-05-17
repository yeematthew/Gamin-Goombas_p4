// import data from "/thing.json" assert { type: 'json' };
// console.log(data);

// assert { type: 'json' }

// read local JSON file in javascript
fetch("./thing.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })