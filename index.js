// // Add your code here
// const destinationURL = "http://localhost:3000/dogs";

// let form_data = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
// };
// configurationObject ={
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify(form_data)
// }
// fetch(destinationURL, configurationObject)
// .then(function(response){
//     return response.json();  
// }).then(function(object){
//     console.log(object).catch(function(error){
//         alert("Bad things! Ragnarők!");
//         console.log(error.message);
//     })
// });

const destinationUrl = "http://localhost:3000/users";



let user = {
    name : "Steve",
    email : "steve@steve.com"
};

let configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(user)
};


function submitData()
{
    return fetch(destinationUrl, configurationObject)
    .then(function(response){
        return response.json();
    })
    .then(function(object){
        document.body.innerHTML = object["id"];
    })
    .catch(function(error){
        document.body.innerHTML = error.message;
    })
}
