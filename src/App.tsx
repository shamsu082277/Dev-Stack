import { Suspense } from "react"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Technologies from "./components/Technologies"
import type IStack from "./types/stackType"

const stackFetch = async() : Promise<IStack>=>{
  const res = await fetch('/technology.json')
  const data = await res.json();
  return data;
}

function App() {
  const stackPromise = stackFetch();
  return (
    <>
    <Navbar></Navbar>
    <HeroSection></HeroSection>
    <Suspense fallback = {<h2>Loading....</h2>}>
    <Technologies stackPromise = {stackPromise}></Technologies>
    </Suspense>

    </>
  )
}

export default App
