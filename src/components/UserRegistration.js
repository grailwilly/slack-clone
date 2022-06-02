const UserRegistration = () => {
  return (
    <div>
      <h2>Create Account</h2>
      <form>
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" />
        <input type="password" placeholder="password confirmation" />
        <button type="submit">Create Account</button>
      </form>
    </div>
  )
}

export default UserRegistration;