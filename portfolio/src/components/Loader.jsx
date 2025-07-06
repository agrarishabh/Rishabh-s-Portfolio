// src/components/Loader.jsx
import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-[9999]">
      <Player
        autoplay
        loop
        src="/animations/loader.json"
        style={{ height: "300px", width: "300px" }}
      />
    </div>
  );
};

export default Loader;
