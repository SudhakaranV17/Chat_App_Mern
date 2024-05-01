import React from "react";
import Convo from "./Convo";

function Conversations() {
  return (
    <div className="py-2 flex flex-col overflow-auto">
      <Convo />
      <Convo />
      <Convo />
    </div>
  );
}

export default Conversations;
