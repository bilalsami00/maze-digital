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



"use client";
import { Bell, Settings, User } from "lucide-react";

const Header = () => {
  return (
    <div className="w-full mx-auto overflow-hidden px-4">
      <header className="p-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex flex-col space-y-6 ml-10">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="w-[186px] h-[62px] object-contain"
            />
            <h1 className="font-afacad font-bold text-[66px] leading-[80px] tracking-[0%] w-[491px] h-[80px] ml-10">
              Elite Ghost Writing.
            </h1>
          </div>
        </div>

        <div className="flex items-center space-x-4 p-2">
          {/* Search Bar */}
          <div className="relative w-[300px] md:w-[400px]">
            <input
              type="text"
              className="w-full h-[50px] md:h-[66px] bg-gray-300 rounded-[40px] pr-12 pl-6 focus:outline-none focus:ring focus:ring-blue-300"
            />
            <img
              src="/images/search.png"
              alt="Search Icon"
              className="absolute w-[50px] md:w-[67px] h-[50px] md:h-[67px] top-0 right-0"
            />
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-2 md:space-x-6">
            <div className="bg-white w-[50px] md:w-[66px] h-[50px] md:h-[66px] rounded-full flex items-center justify-center cursor-pointer">
              <Bell className="w-[24px] md:w-[30px] h-[24px] md:h-[30px] text-black" />
            </div>
            <div className="bg-white w-[50px] md:w-[66px] h-[50px] md:h-[66px] rounded-full flex items-center justify-center cursor-pointer">
              <Settings className="w-[24px] md:w-[30px] h-[24px] md:h-[30px] text-black" />
            </div>
            <div className="bg-white w-[50px] md:w-[66px] h-[50px] md:h-[66px] rounded-full flex items-center justify-center cursor-pointer">
              <User className="w-[24px] md:w-[30px] h-[24px] md:h-[30px] text-black" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
