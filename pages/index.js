import Head from "next/head";
import Main from "../components/Main";
import Navbar from "../components/Navbar";


export default function Home() {
  return (
    <div>
    <Head>
      <title>Clint | Front-End Developer</title>
    </Head>
    <Navbar/>
    <Main/>
    </div>
  )
}
