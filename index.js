function submitData(name, email) {
  let obj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  };

  return fetch("http://localhost:3000/users", obj)
    .then(res => res.json())
    .then(user_ob => {
      document.body.append(user_ob.id);
    })
    .catch(err => document.body.append(err.message));
}

// function printUser(obj) {
//   const div = document.createElement('div');
//   div.textContent = obj.id;
//   document.body.append(div);
// }
