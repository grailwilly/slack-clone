# Slack Clone

Final project for frontend.

## Tools

1. create-react-app app-name
2. npm
3. postman
4. api

## Documentation

1. Testing api using postman. Learn headers and create variables.
![Postman](./public/read-img/postman-api.png)

2. User Registration API. Create user with params: email, password, password_confirmation
![user registration](./public/read-img/registrationSuccess.png)

3. User Login API. Extract header access-token, client, expiry, and uid
![User Login](./public/read-img/userLoginheader.png)


## Routes
<code>
  import {
    BrowserRouter as Router,
    Routes,
    Switch
  } from 'react-router-dom'

    <Router>
      <Switch>
        <Routes path="/signin">
          <Login />
        </Routes>
        <Routes path="/create-account">
          <Login />
        </Routes>
      </Switch>
    </Router>
</code>