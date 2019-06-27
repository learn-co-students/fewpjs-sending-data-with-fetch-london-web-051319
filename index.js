function submitData(userName, userEmail) {
  let formData = {
    name: userName,
    email: userEmail
  };
   
  
  let configObj = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };
   
  return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      console.log(object.id);
      addToDOM(object.id);
    })
    .catch(function(error) {
      console.log(error.message);
      addToDOM(error.message);
    });
};

function addToDOM(text) {
  const body = document.querySelector('body');
  const p = document.createElement('p');
  p.innerText = text;
  body.appendChild(p)
};