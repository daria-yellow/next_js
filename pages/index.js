import Header from "../components/Header";
import Homepage from '../components/Homepage';
import Footer from '../components/Footer';
import { useRouter } from "next/router";


if (typeof window !== "undefined") {
window.localStorage.setItem('email','welcome');
window.localStorage.setItem('pass','home');
window.localStorage.setItem('logged','0');
}

const Home = () => {

  const router = useRouter();

  const logout = () => {

    window.localStorage.setItem('logged', '0')
    router.push("/");
  }

  if (window.localStorage.getItem('logged')=='0') {
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