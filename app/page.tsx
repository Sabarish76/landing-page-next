import Image from "next/image";
import Navbar from "./components/Navbar/page";
import Main from "./components/Home/page";
import About from "./components/About/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <Main />
      {/* <About /> */}
    </>
  );
}
