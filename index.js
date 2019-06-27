// Add your code here
// document.addEventListener('DOMContentLoaded', function(e) {
//    submitData();
// });

const body = document.querySelector('body');

let submitData = (name, email) => {

   let formData = {
      name: name,
      email: email
   };

   let configObj = {
      method: "POST",
      headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
      },
      body: JSON.stringify({name: name, email: email})
   };

   return fetch('http://localhost:3000/users', configObj)
   .then(function(response) {
      return response.json();
   })
   .then(function(r) {
      body.innerHTML = r.id;
   })
   .catch(function(error) {
      alert("Gretchen, stop trying to make fetch happen! It's not going to happen!");
      body.innerHTML = error.message;
   });
};
