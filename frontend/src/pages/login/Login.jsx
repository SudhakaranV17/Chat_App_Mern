import { useState } from "react";
import { Link } from "react-router-dom";
import UseLogin from "../../hooks/UseLogin";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = UseLogin();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(username, password);
    await login(username, password);
  };

  return (
    // <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
    //   <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
    //     <h1 className="text-3xl font-semibold text-center text-cyan-600">
    //       Login
    //       <span className="text-blue-500"> to your account</span>
    //     </h1>
    //     <form onSubmit={handleSubmit}>
    //       <div className="">
    //         <label htmlFor="username" className="label p-2">
    //           <span className="text-base label-text">UserName</span>
    //         </label>
    //         <input
    //           type="text"
    //           name="username"
    //           id="username"
    //           placeholder="Enter UserName"
    //           className="w-full input input-bordered h-10"
    //           value={username}
    //           onChange={(e) => setUsername(e.target.value)}
    //         />
    //       </div>

    //       <div className="">
    //         <label htmlFor="password" className="label p-2">
    //           <span className="text-base label-text">Password</span>
    //         </label>
    //         <input
    //           type="text"
    //           name="password"
    //           id="password"
    //           placeholder="Enter Password"
    //           className="w-full input input-bordered h-10"
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //         />
    //       </div>
    //       <Link
    //         to="/signup"
    //         className="link link-primary mt-3 inline-block text-sm hover:underline"
    //       >
    //         {"Don't"} have an account?
    //       </Link>
    //       <div className="">
    //         <button className="btn btn-block btn-sm mt-3" disabled={loading}>
    //           {loading ? (
    //             <span className="loading loading-spinner"></span>
    //           ) : (
    //             "Login"
    //           )}
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </div>
    //
    <div className="flex min-h-full h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        {/* <img
        className="mx-auto h-10 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-messages-square ring-indigo-600 text-indigo-600 fill-current w-16 h-16 mx-auto"
        >
          <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2z" />
          <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
        </svg>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white ">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-white"
            >
              User Name
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="block w-full rounded-md border-0 py-1.5 px-3 bg-gray-900 text-gray-200 shadow-sm ring-1 ring-inset  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus-visible:outline-none"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6  text-white"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 px-3 bg-gray-900 text-gray-200 shadow-sm ring-1 ring-inset  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus-visible:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a
                href="#"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign In"
              )}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          {"Don't"} have an account?{" "}
          <Link
            to="/signup"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;

// function Login() {
//     return (
//       <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//         <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//           <h1 className="text-3xl font-semibold text-center text-cyan-600">
//             Login
//             <span className="text-blue-500"> to your account</span>
//           </h1>
//           <form action="">
//             <div className="">
//               <label htmlFor="" className="label p-2">
//                 <span className="text-base label-text">UserName</span>
//               </label>
//               <input
//                 type="text"
//                 name=""
//                 id=""
//                 placeholder="Enter UserName"
//                 className="w-full input input-bordered h-10"
//               />
//             </div>

//             <div className="">
//               <label htmlFor="" className="label p-2">
//                 <span className="text-base label-text">Password</span>
//               </label>
//               <input
//                 type="text"
//                 name=""
//                 id=""
//                 placeholder="Enter Password"
//                 className="w-full input input-bordered h-10"
//               />
//             </div>
//             <a className="link link-primary mt-3 inline-block text-sm hover:underline">
//               {"Don't"} have an account?
//             </a>
//             <div className="">
//               <button className="btn btn-block btn-sm mt-3">Login</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   }
