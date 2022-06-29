import Head from "next/head";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Finace from '../components/Finance'
import Dealing from "../components/Dealing";
import Team from '../components/Team';
import Busib from '../components/Busib';
import Benefit from "../components/Benefit";
import Testion from "../components/Testion";
import CFOs from '../components/CFOs';
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
    <Head>
      <title>Clint | Front-End Developer</title>
    </Head>
    <Navbar/>
    <Main/>
    <Finace/>
    <Dealing/>
    <Team/>
    <Busib/>
    <Benefit/>
    <CFOs/>
    <Testion/>
    <Footer/>
    </div>
  )
}
