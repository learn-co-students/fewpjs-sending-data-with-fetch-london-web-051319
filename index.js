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
      addToDOM(object.id);
      // document.body.append(object.id)
    })
    .catch(function(error) {
      addToDOM(error.message);
    });
};

function addToDOM(text) {
  const p = document.createElement('p');
  p.innerHTML = text;
  document.body.appendChild(p)
};