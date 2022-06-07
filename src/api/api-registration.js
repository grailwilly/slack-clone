const apiRegistration = () => {

  const userProfile = {
    "email": "",
    "password": "",
    "password_confirmation": ""
  }

  const requestOptions = {
    method: "POST",
    body: userProfile,
    redirect: 'follow'
  }

  fetch("http://206.189.91.54//api/v1/auth/", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}