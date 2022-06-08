export const sendMessage = (receiverId, message) => {
  const myHeaders = new Headers();
  myHeaders.append("access-token", JSON.parse(localStorage.getItem("access-token")));
  myHeaders.append("client", JSON.parse(localStorage.getItem("client")));
  myHeaders.append("expiry", JSON.parse(localStorage.getItem("expiry")));
  myHeaders.append("uid", JSON.parse(localStorage.getItem("uid")));

  const formData = new FormData();
  formData.append("receiver_id", receiverId);
  formData.append("receiver_class", "User");
  formData.append("body", message)

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formData,
    redirect: 'follow'
  }

  fetch("http://206.189.91.54//api/v1/messages", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error))
}