import Header from "../components/Header";
import Homepage from '../components/Homepage';
import Footer from '../components/Footer';
import { useRouter } from "next/router";
import React from "react";
import { isBrowser } from "../helpers/isBrowser.ts"

const Home = () => {
  React.useEffect(() => {
    isBrowser() && localStorage.setItem('email','welcome');
    isBrowser() && localStorage.setItem('pass','home');
    isBrowser() && localStorage.setItem('logged','0');
  }, []);

  const router = useRouter();

  const logout = () => {

    isBrowser() && localStorage.setItem('logged', '0')
    router.push("/");
  }

  if (isBrowser() && localStorage.getItem('logged')=='0') {
    return (
      <>
      <Header />
      <Homepage />
      <Footer />
      </>
    )
  }

  return (
    <>
    <Header />
    <button className="logout" onClick={logout}>Logout</button>
    <Homepage />
    <Footer />
    </>
  )
}

export default Home;