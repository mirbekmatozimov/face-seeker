import React from "react";
import Tilt from "react-tilt";

export default function Logo() {
  return (
    <Tilt
      className="Tilt logo"
      options={{ max: 25 }}
      style={{ height: 100, width: 100}}
    >
      <div className="Tilt-inner">logo</div>
    </Tilt>
  );
}
