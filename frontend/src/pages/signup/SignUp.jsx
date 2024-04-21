import React from "react";
import GenderCheckBox from "./GenderCheckBox";

function SignUp() {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-cyan-600">
          Sign Up
          {/* <span className="text-blue-500"> to your account</span> */}
        </h1>
        <form action="">
          <div className="">
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter FullName"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div className="">
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text">UserName</span>
            </label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter UserName"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div className="">
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div className="">
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Password Again"
              className="w-full input input-bordered h-10"
            />
          </div>
          <GenderCheckBox />
          <a className="link link-primary mt-3 inline-block text-sm hover:underline">
            Already have an account?
          </a>
          <div className="">
            <button className="btn btn-block btn-sm mt-3">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

// STARTER  CODE
// import React from "react";
// import GenderCheckBox from "./GenderCheckBox";

// function SignUp() {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center text-cyan-600">
//           Sign Up
//           {/* <span className="text-blue-500"> to your account</span> */}
//         </h1>
//         <form action="">
//           <div className="">
//             <label htmlFor="" className="label p-2">
//               <span className="text-base label-text">Full Name</span>
//             </label>
//             <input
//               type="text"
//               name=""
//               id=""
//               placeholder="Enter FullName"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div className="">
//             <label htmlFor="" className="label p-2">
//               <span className="text-base label-text">UserName</span>
//             </label>
//             <input
//               type="text"
//               name=""
//               id=""
//               placeholder="Enter UserName"
//               className="w-full input input-bordered h-10"
//             />
//           </div>

//           <div className="">
//             <label htmlFor="" className="label p-2">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input
//               type="text"
//               name=""
//               id=""
//               placeholder="Enter Password"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div className="">
//             <label htmlFor="" className="label p-2">
//               <span className="text-base label-text">Confirm Password</span>
//             </label>
//             <input
//               type="text"
//               name=""
//               id=""
//               placeholder="Enter Password Again"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <GenderCheckBox />
//           <a className="link link-primary mt-3 inline-block text-sm hover:underline">
//             Already have an account?
//           </a>
//           <div className="">
//             <button className="btn btn-block btn-sm mt-3">Sign Up</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default SignUp;
