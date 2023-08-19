import { useState } from "react";

const AuthForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
  }

  const onChange = (e) => {
    const {target: {name, value}} = e;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="text" name="email" placeholder="Emali" required onChange={onChange} value={email}/>
        <input type="password" name="password" placeholder="Password" required onChange={onChange} value={password}/>
        <button>Log in</button>
        <div>
          <button type="button">Continue with Email</button>
          <button type="button">Continue with Google</button>
        </div>
      </form>
    </>
  )
}

export default AuthForm;