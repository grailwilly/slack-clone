export const userLogin = (email, password) => {

  const formData = new FormData()
    formData.append('email', email);
    formData.append('password', password);

  const requestOptions = {
    method: "POST",
    body: formData,
    redirect: 'follow'
  }

  fetch("http://206.189.91.54//api/v1/auth/sign_in", requestOptions)
    .then(response => {
      console.log(response.headers.get('access-token'));
      console.log(response.headers.get('client'));
      console.log(response.headers.get('expiry'));
      console.log(response.headers.get('uid'));
      return response.json();
    })
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}