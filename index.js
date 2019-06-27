// Add your code here

function submitData(name, email){
    let formData = {
        name: name,
        email: email
    }

   
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(formData)
  };
   
   return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      addObjectToDom(object);
    })
    .catch(function(error) {
      addErrorToDom(error);
    });
}

function addObjectToDom(object){
    // debugger
    const div = document.createElement("div");
    div.innerHTML = `id ${object.id} name ${object.name}` ;
    document.body.appendChild(div);
    
}

function addErrorToDom(error){
    // debugger
    const div = document.createElement("div");
    div.innerHTML = "Unauthorized Access" ;
    document.body.appendChild(div);
    
}
submitData('dewsy', 'chris@dews');