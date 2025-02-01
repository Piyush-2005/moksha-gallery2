import React from "react";
import Background from "./components/background";
import Title from "./components/Title";
import Portal from "./components/Portal";
// import Crystals from "./components/Crystals";
import TreeShadow from "./components/TreeShadow";
import Mist from "./components/Mist";
import Arrows from "./components/Arrows";
import Blackrock from "./components/Blackrock";

function App() {
  return (
    <div className="relative h-screen w-full flex justify-center items-center overflow-hidden">
      <Background />
      <Title />
      <TreeShadow />
      {/* <Crystals /> */}
      <Portal />
      <Mist />
      <Blackrock/>
      <Arrows />
    </div>
  );
}

export default App;
