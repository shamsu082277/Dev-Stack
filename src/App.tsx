import { Suspense } from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";
import type IStack from "./types/stackType";

const stackFetch = async (): Promise<IStack[]> => {
  const res = await fetch("/technology.json");
  const data = await res.json();
  return data;
};

function App() {
  const stackPromise = stackFetch();

  return (
    <>
      <Navbar />
      <HeroSection />
      <Suspense
        fallback={
          <div className="flex items-center justify-center py-10">
            <span className="loading loading-spinner loading-lg"></span>
          </div>}>
        <Technologies stackPromise={stackPromise} />
      </Suspense>
    </>
  );
}

export default App;