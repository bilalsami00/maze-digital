"use client";
import { Bell, Settings, User, Search} from "lucide-react";

const Header = () => {
  return (
    <header className=" p-4 flex justify-between sticky top-0 z-10">
      <div className="flex items-center ">
        
        <div className="flex flex-col flex-grow space-y-10  mr-16">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-22 h-8 object-contain  mr-20"
          />
          <h1 className="text-4xl font-bold ml-12 ">Elite Ghost Writing. </h1>
        </div>
        
      </div>
      {/* <div className="flex items-center space-x-6 p-2"> */}
      <div className="flex items-start space-x-6 p-2"> 
  <div className="relative">
    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
    <input
      type="text"
      placeholder="Search..."
      className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
    />
  </div>
  
  <div className="flex items-center space-x-4">
    <div className="bg-white p-3 rounded-full cursor-pointer">
      <Bell className="w-6 h-6 text-black" />
    </div>
    <div className="bg-white p-3 rounded-full cursor-pointer">
      <Settings className="w-6 h-6 text-black" />
    </div>
    <div className="bg-white p-3 rounded-full cursor-pointer">
      <User className="w-6 h-6 text-black" />
    </div>
  </div>
</div>
    </header>
  );
};

export default Header;
