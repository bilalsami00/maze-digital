// "use client";
// import { Bell, Settings, User, Search} from "lucide-react";

// const Header = () => {
//   return (
//     <header className=" p-4 flex justify-between sticky top-0 z-10">
//       <div className="flex items-center ">

//         <div className="flex flex-col flex-grow space-y-10  mr-16">
//           <img
//             src="/images/logo.png"
//             alt="Logo"
//             className="w-22 h-8 object-contain  mr-20"
//           />
//           <h1 className="text-4xl font-bold ml-12 ">Elite Ghost Writing. </h1>
//         </div>

//       </div>
//       {/* <div className="flex items-center space-x-6 p-2"> */}
//       <div className="flex items-start space-x-6 p-2">
//   <div className="relative">
//     <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
//     <input
//       type="text"
//       placeholder="Search..."
//       className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//     />
//   </div>

//   <div className="flex items-center space-x-4">
//     <div className="bg-white p-3 rounded-full cursor-pointer">
//       <Bell className="w-6 h-6 text-black" />
//     </div>
//     <div className="bg-white p-3 rounded-full cursor-pointer">
//       <Settings className="w-6 h-6 text-black" />
//     </div>
//     <div className="bg-white p-3 rounded-full cursor-pointer">
//       <User className="w-6 h-6 text-black" />
//     </div>
//   </div>
// </div>
//     </header>
//   );
// };

// export default Header;

// "use client";
// import { useState } from "react";
// import { Bell, Settings, User } from "lucide-react";

// const Header = () => {
//   const [showSearch, setShowSearch] = useState(false);
//   return (
//     <div className="w-full mx-auto overflow-hidden px-4">
//       {/* <header className="p-4 flex justify-between items-center"> */}
//       {/* <header className="p-4 flex justify-between items-center w-full max-w-screen-xl mx-auto border border-red-500"> */}
//       {/* <header className="p-4 flex justify-between items-center w-full max-w-screen-xl mx-auto"> */}
//       {/* <header className="p-4 flex justify-between items-center w-full mx-auto px-4"> */}
//       <header className="px-2 sm:px-4 py-2 flex justify-between items-center w-full mx-auto">
//         <div className="flex  items-center">
//           {/* <div className="flex flex-wrap justify-between items-center space-y-6"> */}
//           <div className="flex flex-wrap justify-between items-center gap-x-6 gap-y-6">
//             <img
//               src="/images/logo.png"
//               alt="Logo"
//               // className="w-[186px] h-[62px] object-contain"
//               // className="w-[140px] sm:w-[160px] md:w-[186px] h-auto object-contain"
//               className="w-[120px] sm:w-[140px] md:w-[186px] h-auto object-contain"
//             />
//           </div>
//         </div>

//         <div className="flex items-center space-x-4 p-2">
//           {/* Search Icon (Only visible on small screens) */}
//           {!showSearch && (
//             <button
//               className="bg-white w-[40px] h-[40px] sm:hidden flex items-center justify-center rounded-full cursor-pointer"
//               onClick={() => setShowSearch(true)}
//             >
//               <img
//                 src="/images/search.png"
//                 alt="Search Icon"
//                 className="w-[20px] h-[20px]"
//               />
//             </button>
//           )}

//           {/* Search Bar (Hidden on Small Screens, Appears on Click) */}
//           <div
//             className={`${
//               showSearch ? "flex" : "hidden"
//             } sm:flex relative w-[250px] sm:w-[300px] md:w-[400px]`}
//           >
//             <input
//               type="text"
//               className="w-full h-[42px] sm:h-[50px] md:h-[67px] bg-white opacity-40 rounded-[40px] pr-12 pl-6 focus:outline-none focus:ring focus:ring-blue-300"
//             />
//             {/* Search Icon inside the Input (On the Right) */}
//             <button
//               className="absolute top-1/2 right-3 transform -translate-y-1/2"
//               onClick={() => setShowSearch(false)} // Hide on click
//             >
//               <img
//                 src="/images/search.png"
//                 alt="Search Icon"
//                 className="w-[20px] sm:w-[24px] md:w-[30px] h-[20px] sm:h-[24px] md:h-[30px] text-black"
//               />
//             </button>
//           </div>

//           {/* Icons */}
//           {/* <div className="flex items-center space-x-2 md:space-x-6">
//             <div className="bg-white w-[50px] md:w-[66px] h-[50px] md:h-[66px] rounded-full flex items-center justify-center cursor-pointer">
//               <Bell className="w-[24px] md:w-[30px] h-[24px] md:h-[30px] text-black" />
//             </div>
//             <div className="bg-white w-[50px] md:w-[66px] h-[50px] md:h-[66px] rounded-full flex items-center justify-center cursor-pointer">
//               <Settings className="w-[24px] md:w-[30px] h-[24px] md:h-[30px] text-black" />
//             </div>
//             <div className="bg-white w-[50px] md:w-[66px] h-[50px] md:h-[66px] rounded-full flex items-center justify-center cursor-pointer">
//               <User className="w-[24px] md:w-[30px] h-[24px] md:h-[30px] text-black" />
//             </div>
//           </div> */}
//           <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-6">
//             {/** Icon Component */}
//             {["Bell", "Settings", "User"].map((icon, index) => (
//               <div
//                 key={index}
//                 className="bg-white w-[40px] sm:w-[50px] md:w-[66px] h-[40px] sm:h-[50px] md:h-[66px] rounded-full flex items-center justify-center cursor-pointer"
//               >
//                 {icon === "Bell" && (
//                   <Bell className="w-[20px] sm:w-[24px] md:w-[30px] h-[20px] sm:h-[24px] md:h-[30px] text-black" />
//                 )}
//                 {icon === "Settings" && (
//                   <Settings className="w-[20px] sm:w-[24px] md:w-[30px] h-[20px] sm:h-[24px] md:h-[30px] text-black" />
//                 )}
//                 {icon === "User" && (
//                   <User className="w-[20px] sm:w-[24px] md:w-[30px] h-[20px] sm:h-[24px] md:h-[30px] text-black" />
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </header>
//       {/* <h1 className="font-afacad font-bold text-[66px] leading-[80px] tracking-[0%] w-[491px] h-[80px]">
//         Elite Ghost Writing.
//       </h1> */}
//       <h1 className="font-afacad font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[66px] leading-tight sm:leading-[70px] md:leading-[80px] tracking-normal w-full max-w-[491px]">
//         Elite Ghost Writing.
//       </h1>
//     </div>
//   );
// };

// export default Header;

// //////////////////////////////dasd////////////////////////////////////////////////////////////
// "use client";
// import { useState } from "react";
// import { Bell, Settings, User } from "lucide-react";

// const Header = () => {
//   const [showSearch, setShowSearch] = useState(false);

//   return (
//     <div className="w-full mx-auto overflow-hidden px-4">
//       <header className="px-2 sm:px-4 py-2 flex justify-between items-center w-full mx-auto">
//         <div className="flex items-center">
//           <div className="flex flex-wrap justify-between items-center gap-x-6 gap-y-6">
//             <img
//               src="/images/logo.png"
//               alt="Logo"
//               className="w-[120px] sm:w-[140px] md:w-[186px] h-auto object-contain"
//             />
//           </div>
//         </div>

//         <div className="flex items-center space-x-4 p-2">
//           {/* 🔍 Search Bar (Hidden Initially on Small Screens, Visible on Large Screens) */}
//           <div
//             className={`${
//               showSearch ? "flex" : "hidden sm:flex"
//             } relative w-[250px] sm:w-[300px] md:w-[400px] items-center`}
//           >
//             <input
//               type="text"
//               className="w-full h-[35px] sm:h-[45px] md:h-[55px] lg:h-[67px]
//              bg-white opacity-40 rounded-[40px]
//              pr-[50px] sm:pr-[60px] md:pr-[75px] lg:pr-[90px]
//               focus:outline-none focus:ring focus:ring-blue-300"
//               autoFocus
//             />
//             {/* 🔍 Single Search Icon Inside Input (Always Present) */}
//             <button
//               className="absolute top-1/2 right-0.5 sm:right-[-0.25rem] transform -translate-y-1/2
//                bg-white w-[35px] sm:w-[45px] md:w-[55px] lg:w-[67px]
//              h-[35px] sm:h-[45px] md:h-[55px] lg:h-[67px]
//                flex items-center justify-center rounded-full cursor-pointer"
//               onClick={() => setShowSearch(false)}
//             >
//               <img
//                 src="/images/search.png"
//                 alt="Search Icon"
//                 className="w-[20px] sm:w-[24px] md:w-[30px] h-[20px] sm:h-[24px] md:h-[30px]"
//               />
//             </button>
//           </div>

//           {/* Search Icon (Small Screens - Outside Input) */}
// {!showSearch && (
//   <button
//     className="bg-white w-[35px] sm:w-[45px] md:w-[55px] lg:w-[67px] h-[35px] sm:h-[45px] md:h-[55px] lg:h-[67px] flex items-center justify-center rounded-full cursor-pointer sm:hidden"
//     onClick={() => setShowSearch(true)}
//   >
//     <img
//       src="/images/search.png"
//       alt="Search Icon"
//       className="w-[18px] sm:w-[22px] md:w-[26px] lg:w-[30px] h-[18px] sm:h-[22px] md:h-[26px] lg:h-[30px]"
//     />
//   </button>
// )}

//           {/* 🛠️ Notification, Settings & Profile Icons */}
//           <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-6">
//   {["Bell", "Settings", "User"].map((icon, index) => (
//     <div
//       key={index}
//       className="bg-white w-[35px] sm:w-[45px] md:w-[55px] lg:w-[66px] h-[35px] sm:h-[45px] md:h-[55px] lg:h-[66px] rounded-full flex items-center justify-center cursor-pointer"
//     >
//       {icon === "Bell" && (
//         <Bell className="w-[18px] sm:w-[22px] md:w-[26px] lg:w-[30px] h-[18px] sm:h-[22px] md:h-[26px] lg:h-[30px] text-black" />
//       )}
//       {icon === "Settings" && (
//         <Settings className="w-[18px] sm:w-[22px] md:w-[26px] lg:w-[30px] h-[18px] sm:h-[22px] md:h-[26px] lg:h-[30px] text-black" />
//       )}
//       {icon === "User" && (
//         <User className="w-[18px] sm:w-[22px] md:w-[26px] lg:w-[30px] h-[18px] sm:h-[22px] md:h-[26px] lg:h-[30px] text-black" />
//       )}
//     </div>
//   ))}
// </div>

//         </div>
//       </header>

//       <h1 className="font-afacad font-bold
//                text-4xl sm:text-5xl md:text-6xl lg:text-[66px]
//                leading-tight sm:leading-[70px] md:leading-[80px]
//                tracking-normal
//                w-full max-w-[491px]
//                mt-[162px] sm:mt-[140px] md:mt-[120px]">
//         Elite Ghost Writing.
//       </h1>
//     </div>
//   );
// };

// export default Header;

"use client";
import { useState } from "react";
import { Bell, Settings, User, Menu } from "lucide-react";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full mx-auto overflow-hidden px-4">
      <header className="px-2 sm:px-4 py-2 sm:pt-6 sm:pb-2 flex justify-between items-center w-full mx-auto">
        {/* 🔹 Logo (Now Always Visible) */}
        <div className="flex items-center">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-[100px] sm:w-[120px] md:w-[140px] lg:w-[186px] object-contain"
          />
        </div>

        {/* 🔹 Right Side: Search & Icons */}
        <div className="flex items-center space-x-4 p-2">
          {/* 🔍 Search Bar (Hidden Initially on Small Screens, Visible on Large Screens) */}
          <div
            className={`${
              showSearch ? "flex" : "hidden sm:flex"
            } relative w-[250px] sm:w-[300px] md:w-[400px] items-center`}
          >
            <input
              type="text"
              className="w-full h-[35px] sm:h-[45px] md:h-[55px] lg:h-[67px] 
             bg-white opacity-40 rounded-[40px] 
             pr-[50px] sm:pr-[60px] md:pr-[75px] lg:pr-[90px] 
              focus:outline-none focus:ring focus:ring-blue-300"
              autoFocus
            />
            {/* 🔍 Single Search Icon Inside Input */}
            <button
              className="absolute top-1/2 right-0.5 sm:right-[-0.25rem] transform -translate-y-1/2
               bg-white w-[35px] sm:w-[45px] md:w-[55px] lg:w-[67px] 
             h-[35px] sm:h-[45px] md:h-[55px] lg:h-[67px]  
               flex items-center justify-center rounded-full cursor-pointer"
              onClick={() => setShowSearch(false)}
            >
              <img
                src="/images/search-16x.png"
                alt="Search Icon"
                className="w-[20px] sm:w-[24px] md:w-[30px] h-[20px] sm:h-[24px] md:h-[30px]"
              />
            </button>
          </div>

          {/* 🔍 Search Icon (Mobile - Outside Input) */}
          {!showSearch && (
            <button
              className="bg-white w-[35px] sm:w-[45px] md:w-[55px] lg:w-[67px] 
              h-[35px] sm:h-[45px] md:h-[55px] lg:h-[67px] 
              flex items-center justify-center rounded-full cursor-pointer sm:hidden"
              onClick={() => setShowSearch(true)}
            >
              <img
                src="/images/search-16x.png"
                alt="Search Icon"
                className="w-[18px] sm:w-[22px] md:w-[26px] lg:w-[30px] h-[18px] sm:h-[22px] md:h-[26px] lg:h-[30px]"
              />
            </button>
          )}

          {/* 🍔 Custom Hamburger Menu (Mobile Only) */}
          <button
            className="sm:hidden bg-white w-[35px] h-[35px] flex items-center justify-center rounded-full cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          >
            <img
              src="/images/dots.png"
              alt="Menu"
              className="w-[20px] h-[20px] object-contain"
            />
          </button>

          {/* 🛠️ Notification, Settings & Profile Icons (Hidden on Mobile) */}
          <div className="hidden sm:flex items-center space-x-2 sm:space-x-4 md:space-x-6">
            {["Bell", "Settings", "User"].map((icon, index) => (
              <div
                key={index}
                className="bg-white w-[35px] sm:w-[45px] md:w-[55px] lg:w-[66px] 
                 h-[35px] sm:h-[45px] md:h-[55px] lg:h-[66px] 
                 rounded-full flex items-center justify-center cursor-pointer"
              >
                {icon === "Bell" && (
                  <Bell
                    className="w-[18px] sm:w-[22px] md:w-[26px] lg:w-[30px] 
                   h-[18px] sm:h-[22px] md:h-[26px] lg:h-[30px] text-black"
                  />
                )}
                {icon === "Settings" && (
                  <Settings
                    className="w-[18px] sm:w-[22px] md:w-[26px] lg:w-[30px] 
                   h-[18px] sm:h-[22px] md:h-[26px] lg:h-[30px] text-black"
                  />
                )}
                {icon === "User" && (
                  <User
                    className="w-[18px] sm:w-[22px] md:w-[26px] lg:w-[30px] 
                   h-[18px] sm:h-[22px] md:h-[26px] lg:h-[30px] text-black"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* 🍔 Mobile Menu (Expands When three dots Clicked) */}
      {showMenu && (
        <div className="sm:hidden bg-white absolute right-4 top-16 p-4 rounded-lg shadow-lg z-50">
          {["Bell", "Settings", "User"].map((icon, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 py-2 cursor-pointer"
            >
              {icon === "Bell" && <Bell className="w-5 h-5 text-black" />}
              {icon === "Settings" && (
                <Settings className="w-5 h-5 text-black" />
              )}
              {icon === "User" && <User className="w-5 h-5 text-black" />}
              <span className="text-black">{icon}</span>
            </div>
          ))}
        </div>
      )}

      {/* 🔹 Heading - Adjusted for Figma */}
      <h1
        className="font-afacad font-bold 
               text-4xl sm:text-5xl md:text-6xl lg:text-[66px] 
               leading-tight sm:leading-[70px] md:leading-[80px] 
               tracking-normal 
               w-full max-w-[491px] 
               mt-[2px] sm:mt-[40px] md:mt-[50px]"
      >
        Elite Ghost Writing.
      </h1>
    </div>
  );
};

export default Header;
