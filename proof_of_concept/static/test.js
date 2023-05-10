// https://www.makeuseof.com/tag/python-javascript-communicate-json/

console.log("js file is correctly connected to the html file")

para = document.getElementById("para")

// fetch('http://127.0.0.1:3000')
//     .then(response => {
//         return response.json();
//     })
//     .then(users => {
//         console.log(users);
//     })

async function logJSONData() {
    const response = await fetch("http://127.0.0.1:5000");
    const jsonData = await response.json();
    console.log(jsonData);
    }
    //  http://127.0.0.1:3000

      

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

para.innerHTML = JSON.parse(logJSONData());