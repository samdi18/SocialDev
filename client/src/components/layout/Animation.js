import React from "react";
import "@lottiefiles/lottie-player";

const Animation = () => {
  return (
    <div className="home-anim">
      <p className="home-text text-1">Collaborate.</p>
      <p className="home-text text-2">Share.</p>
      <p className="home-text text-3">Learn.</p>

      <lottie-player
        autoplay
        loop
        mode="normal"
        src="https://assets5.lottiefiles.com/private_files/lf30_WdTEui.json"
        style={{ width: "100%" }}
      ></lottie-player>
    </div>
  );
};

export default Animation;
