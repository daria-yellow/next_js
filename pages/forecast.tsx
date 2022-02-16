import Header from "../components/Header";
import Footer from '../components/Footer';
import Weather from "../components/Weather";
import { useRouter } from "next/router";



const Home = () => {

  const router = useRouter();

  const logout = () => {

    window.localStorage.setItem('logged', '0')
    router.push("/");
  }

  if (window.localStorage.getItem('logged')=='0') {
      router.push("/Login")
  }

  return (
    <div>
      <Header />
      <button className="logout" onClick={logout}>Logout</button>
      <Weather />
      <Footer />
    </div>
  );

}

export default Home;