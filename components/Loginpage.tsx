import React from "react";
import { useRouter } from "next/router";


const Loginpage = () =>  {

  const router = useRouter();

  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');
    

  const handleEmail = (e: any) =>{
    setEmail(e.target.value);
  }

  const handlePass = (e: any) =>{
    setPass(e.target.value);
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (window.localStorage.getItem('email') === email && window.localStorage.getItem('pass') === pass){
      window.localStorage.setItem('logged', '1');

      router.push("/forecast")
    }
  }

  return (
    <div className="loginpage">
      <p>Please, log in to see the weather forecast</p>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleEmail}
        />
        <br />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={pass}
          onChange={handlePass}
        />
        <br />
        <button className="buttons" type="submit" name="login">Login</button>
      </form>
    </div>
  )

}

export default Loginpage;