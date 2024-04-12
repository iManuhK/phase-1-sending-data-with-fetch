function submitData(stringOne, stringTwo){
    fetch("http://localhost:3000/users",{
        method: 'POST',
        headers: {
            "content-type": "application/json",
            "accept": "application/json",
        },
        body: JSON.stringify({
            'name' : stringOne, 
            'email': stringTwo,
        })
    })
    .then(res=>res.json())
    .then(obj=>{console.log(obj.id)
    })
    .catch(function (error) {
        alert("Unauthorized Access");
        console.log(error.message);
    })
    return fetch("http://localhost:3000/users")
    }
submitData("Steve","steve@steve.com")