const requestOptions = {
    method: 'POST',
    headers: {

    },
    body: JSON.stringify({
      "Username": username,
      "Pasword": password
    })
  }


  fetch('http://127.0.0.1:8000/login', requestOptions).then((res) => {
    return res.json()
  }).then((res) =>{
    if(res !=='' && res !=='error') {
      storeToken(res).then()
      console.log('GOT TOKEN')
    } else {
      console.log('GOT ERROR OR EMPTY RESULT')
    }
    
  }).catch(function(error) {
    console.log('GOT ERROR: ', error)
  })
