// Add your code here

const body = document.querySelector("body")


function submitData (name, email) {
  return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify( {name, email} )
  })
    .then(response => response.json())
    .then(object => body.append(object.id))
    .catch(function (error) {
      alert('Bad Request')
      body.append(error.message)
    })
}
