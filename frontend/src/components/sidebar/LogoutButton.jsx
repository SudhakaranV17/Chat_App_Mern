import React from "react";
import { BiLogOut } from "react-icons/bi";

function LogoutButton() {
  return (
    <div className="mt-auto">
      <div className="divider h-1 px-3"></div>
      <BiLogOut className="w-6 h-6  cursor-pointer" />
    </div>
  );
}

export default LogoutButton;
