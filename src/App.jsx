import React from "react";
import Background from "./components/background";
import Title from "./components/Title";
import Portal from "./components/Portal";
import Rocks from "./components/Blackrock";
import TreeShadow from "./components/TreeShadow";
import Mist from "./components/Mist";
import Arrows from "./components/Arrows";

function App() {
  return (
    <div className="relative min-h-screen w-full flex justify-center items-center overflow-hidden">      <Background />
      <Title />
      <TreeShadow />
      {/* <Crystals /> */}
      <Rocks />
      <div className="w-full max-w-5xl flex justify-center items-center">
        <Portal/>
      </div>
      <Mist />
      <Arrows />
    </div>
  );
}

export default App;