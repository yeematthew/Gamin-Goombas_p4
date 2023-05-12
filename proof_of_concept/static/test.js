// https://www.makeuseof.com/tag/python-javascript-communicate-json/

var sqlite3 = require('sqlite3').verbose();

console.log("js file is correctly connected to the html file")

para = document.getElementById("para")

function createDatabase(file){
    var db = new sqlite3.Database(file);
    if(!fs.existsSync(file)){
      console.log("creating database file");
      fs.openSync(file, "w");
      db.run("SELECT * from video_games");
      
      console.log("database initialized");
    }
  
    return db;
  }

  db = createDatabase('../sales.db');
  console.log(db);
/*
// fetch('http://127.0.0.1:3000')
//     .then(response => {
//         return response.json();
//     })
//     .then(users => {
//         console.log(users);
//     })
*/

// async function logJSONData() {
//     // const response = await fetch("http://127.0.0.1:3000");
//     // const jsonData = await response.json();
//     // console.log(jsonData);
//     // para.innerHTML = jsonData
//     let url = "http://127.0.0.1:5000";
//     let request = new Request(url, { 
//         method: 'get'
//     });

//     fetch(request)
//         .then((response)=>{
//             if(response.ok){
//                 console.log(response.text())
//                 return response.text();
//             } else{
//                 throw new Error("Somethin's wrong");
//             }
//         })
//         .then((textData) =>{            
            
//             // para.innerHTML = textData;
//             console.log(textData);
//         }).catch((error) => {
//             console.log('Error occured', error);
//         });
        
//     }
    //  http://127.0.0.1:3000

      
/*
// function callAPI() {

//     <strong>// Get the reciever endpoint from Python using fetch</strong>:
//     fetch("http://127.0.0.1:5000/receiver", 
//         {
//             method: 'POST',
//             headers: {
//             'Content-type': 'application/json',
//             'Accept': 'application/json'
//             },
//         body:JSON.stringify(cars)}).then(res=>{
//             if(res.ok){
//                 return res.json()
//             }else{
//                 alert("something is wrong")
//             }
//             }).then(jsonResponse=>{


//             console.log(jsonResponse)
//             } 
//             ).catch((err) => console.error(err));
// }

// fetch("http://127.0.0.1:5000/receiver",

// {method: ''}

// )
*/

// para.innerHTML = logJSONData();
// para.innerHTML = JSON.parse(logJSONData());