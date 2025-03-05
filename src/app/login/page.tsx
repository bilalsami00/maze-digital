// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import "tailwindcss/tailwind.css";

// // export default function LoginPage() {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [showPassword, setShowPassword] = useState(false); // State for password visibility

// //   const handleLogin = () => {
// //     alert(`Email: ${email}\nPassword: ${password}`);
// //   };

// //   return (
// //     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#7450BF] to-[#D3CCE3] py-8 sm:py-16">

// //       {/* Logo and Title Section */}
// //       <div className="flex flex-col items-center text-center mb-8">
// //         <Image src="/images/logo.png" alt="Logo" width={80} height={80} />
// //         <h2 className="text-3xl font-semibold text-gray-800 mt-4">Elite Ghost Writing.</h2>
// //       </div>

// //       {/* Login Box with Border and Shadow */}
// //       <div className="bg-white p-6 rounded-2xl w-full max-w-md mx-4 sm:mx-8 border-2 border-gray-300">
// //         <h2 className="text-2xl font-semibold text-gray-800">Login</h2>
// //         <p className="text-gray-600 mt-2 m-12 ">Please login here to checkout your upcoming leads.</p>

// //         {/* Email Input */}
// //         <div className="mt-4 text-left">
// //           <label className="block text-gray-600">Email</label>
// //           <input
// //             type="email"
// //             placeholder="Enter your email"
// //             className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //           />
// //         </div>

// //         {/* Password Input */}
// //         <div className="mt-4 text-left relative">
// //           <label className="block text-gray-600">Password</label>
// //           <input
// //             type={showPassword ? "text" : "password"} // Toggle between text and password input type
// //             placeholder="Enter your password"
// //             className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //           />
// //           {/* Show/Hide Password Icon inside the input */}
// //           <span
// //             className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
// //             onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
// //           >
// //             {showPassword ? (
// //               <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
// //                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 6c3.313 0 6 2.687 6 6s-2.687 6-6 6c-2.067 0-3.938-1.052-5.156-2.633L3.727 14.027a9.956 9.956 0 0 0 1.978 2.392c1.14 1.138 2.594 1.8 4.094 1.8 3.313 0 6-2.687 6-6s-2.687-6-6-6z" />
// //               </svg>
// //             ) : (
// //               <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
// //                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 6c3.313 0 6 2.687 6 6s-2.687 6-6 6c-2.067 0-3.938-1.052-5.156-2.633L3.727 14.027a9.956 9.956 0 0 0 1.978 2.392c1.14 1.138 2.594 1.8 4.094 1.8 3.313 0 6-2.687 6-6s-2.687-6-6-6z" />
// //               </svg>
// //             )}
// //           </span>
// //         </div>

// //         {/* Forgot Password Link */}
// //         <div className="mt-2 flex justify-end">
// //           <a href="#" className="text-black-500 text-sm">Forgot password</a>
// //         </div>

// //         {/* Login Circle Icon */}
// // <div
// //   onClick={handleLogin}
// //   className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-full mx-auto mt-6 cursor-pointer"
// // >
// //   <svg
// //     className="w-6 h-6"
// //     fill="none"
// //     stroke="currentColor"
// //     strokeWidth="2"
// //     viewBox="0 0 24 24"
// //   >
// //     <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
// //   </svg>
// // </div>

// //         {/* Login Text Below the Icon */}
// //         <div className="text-center mt-4">
// //           <button
// //             onClick={handleLogin}
// //             className="text-black font-semibold text-lg"
// //           >
// //             Login
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // import Image from "next/image";
// // import { useState } from "react";

// // import Image from "next/image";
// // import { useState } from "react";

// // "use client";

// // import Image from "next/image";
// // import { useState } from "react";

// export default function Login() {
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   const handleLogin = (e: { preventDefault: () => void }) => {
//     e.preventDefault();
//     console.log("Login clicked");
//   };

//   return (
//     <div className="flex items-center justify-center  min-h-screen bg-[#D5D5DE] relative px-4 py-8 sm:py-16">
//       {/* Gradient Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#A7A7C4] to-[#D5D5DE]">
//         <Image
//           src="/images/ground.png"
//           alt="Background"
//           layout="fill"
//           objectFit="cover"
//         />
//       </div>

//       <div className="relative z-10 flex flex-col items-center w-full">
//         {/* Logo */}
//         <Image src="/images/logo.png" alt="Logo" width={170} height={62} />
//         <p className="text-[66px] font-bold text-black font-afacad leading-[80px]">
//           Elite Ghost Writing.
//         </p>

//         {/* White Login Box */}
//         <div className="bg-[#D9D9D9] p-8 rounded-3xl border-2 border-white shadow-xl mt-6 w-full max-w-md sm:w-96 mx-auto">
//         <h2 className="text-[26px] font-semibold text-[#1F1F1F] font-afacad leading-[32px] tracking-[0%]">
//   LOGIN
// </h2>
// <p className="text-[16px] font-medium text-[#1F1F1F] font-afacad leading-[18px] tracking-[0%] mt-1">
//   Please login here to check out your upcoming leads.
// </p>

//           <form className="mt-2" onSubmit={handleLogin}>
//             {/* Email Input */}
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full border border-gray-300 p-3 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-blue-500 text-[16px] font-medium leading-[22px] tracking-[0%] font-afacad"
//               required
//             />

//             {/* Password Input with Toggle */}
//             <div className="relative mt-4">
//               <input
//                 type={passwordVisible ? "text" : "password"}
//                 placeholder="Password"
//                 className="w-full border border-gray-300 p-3 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-blue-500 text-[16px] font-medium leading-[22px] tracking-[0%] font-afacad"
//                 required
//               />
//               <span
//                 className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
//                 onClick={() => setPasswordVisible(!passwordVisible)}
//               >
//                 {passwordVisible ? "👁" : "👁"}
//               </span>
//             </div>

//             {/* Forgot Password */}
//             <div className="text-right mt-2 text-sm text-gray-500 cursor-pointer">
//               Forgot Password
//             </div>

//             {/* Circular Login Button */}
//             <div
//               onClick={handleLogin}
//               className="flex items-center justify-center w-14 h-14 bg-black text-yellow rounded-full border-2  mx-auto mt-6 cursor-pointer hover:bg-gray-800 transition duration-300"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 fill="#FFD537"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
//               </svg>
//             </div>

//             {/* Login Text */}
//             <div className="text-center mt-2 text-black font-semibold">
//               <p>Login</p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useState } from "react";
import Image from "next/image";
import eyeIcon from "../../../public/images/eye.png"; // Import the eye icon
import "tailwindcss/tailwind.css";

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Login clicked");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#D5D5DE] relative px-4 py-8 sm:py-16">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#A7A7C4] to-[#D5D5DE]">
        <Image
          src="/images/ground.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center w-full">
        {/* Logo */}
        <Image src="/images/logo.png" alt="Logo" width={170} height={62} />
        <p className="text-[66px] font-bold text-black font-afacad leading-[80px]">
          Elite Ghost Writing.
        </p>

        {/* White Login Box */}
        <div className="bg-[#D9D9D9] p-8 rounded-3xl border-2 border-white shadow-xl mt-6 w-full max-w-md sm:w-96 mx-auto">
          <h2 className="text-[26px] font-semibold text-[#1F1F1F] font-afacad leading-[32px] tracking-[0%]">
            LOGIN
          </h2>
          <p className="text-[16px] font-medium text-[#1F1F1F] font-afacad leading-[18px] tracking-[0%] mt-1">
            Please login here to check out your upcoming leads.
          </p>

          <form className="mt-2" onSubmit={handleLogin}>
            {/* Email Input */}
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 p-3 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-blue-500 text-[16px] font-medium leading-[22px] tracking-[0%] font-afacad"
              required
            />

            {/* Password Input with Toggle */}
            <div className="relative mt-4">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                className="w-full border border-gray-300 p-3 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-blue-500 text-[16px] font-medium leading-[22px] tracking-[0%] font-afacad pr-12"
                required
              />
              <span
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                <Image
                  src={eyeIcon}
                  alt="Toggle Password Visibility"
                  width={24}
                  height={24}
                />
              </span>
            </div>

            {/* Forgot Password */}
            <div className="text-right mt-2 text-[16px] font-afacad font-medium leading-[22px] tracking-[0%] text-[#1F1F1F] cursor-pointer">
              Forgot Password
            </div>

            {/* Circular Login Button */}
            <div
              onClick={handleLogin}
              className="flex items-center justify-center w-14 h-14 bg-black text-yellow rounded-full border-2 mx-auto mt-6 cursor-pointer hover:bg-gray-800 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#FFD537"
                viewBox="0 0 24 24"
              >
                <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
              </svg>
            </div>

            {/* Login Text */}
            <div className="text-center mt-2 text-black font-semibold">
              <p>Login</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
