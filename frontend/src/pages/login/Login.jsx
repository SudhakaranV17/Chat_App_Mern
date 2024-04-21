import React from "react";

function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500"> to your account</span>
        </h1>
        <form action="">
          <div className="">
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text">UserName</span>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
