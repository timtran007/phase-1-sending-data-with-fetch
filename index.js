// Add your code here
function submitData(userName, userEmail){
    let formData = {
        name: userName,
        email: userEmail,
    }
    let configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }
   return fetch('http://localhost:3000/users', configurationObject)
        .then(res => res.json())
        .then(data => {
            let id = data.id
            document.body.append(id)
        })
        .catch(error =>{
            document.body.append(error.message)
        })
}

