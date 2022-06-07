import { useState } from 'react';
import {userRegistration} from '../api/api-registration.js';

const UserRegistration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const changeEmail = (e) => {
    setEmail(e.target.value);
  }

  const changePassword = (e) => {
    setPassword(e.target.value)
  }

  const changePassConfirmation = (e) => {
    setPasswordConfirmation(e.target.value)
  }

  const registrationSubmit = (e) => {
    e.preventDefault();
    userRegistration(email, password, passwordConfirmation);
    setEmail("");
    setPassword("");
    setPasswordConfirmation("");
  }

  return (
    <div>
      <h2>Create Account</h2>
      <form onSubmit={registrationSubmit} >
        <input type="text" placeholder="email" value={email} onChange={changeEmail} />
        <input type="password" placeholder="password" value={password} onChange={changePassword} />
        <input type="password" placeholder="password confirmation" value={passwordConfirmation} onChange={changePassConfirmation} />
        <button type="submit">Create Account</button>
      </form>
    </div>
  )
}

export default UserRegistration;