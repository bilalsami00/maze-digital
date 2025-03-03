// import Link from "next/link";
// import { Home, Users, MessageSquare, ClipboardList, Briefcase } from "lucide-react";
// // import User from "../Users/page";

// const Sidebar = () => {
//   const menuItems = [
//     { name: "Dashboard", href: "/", icon: <Home size={20} /> },
//     { name: "Leads", href: "/leads", icon: <Briefcase size={20} /> },
//     { name: "Users", href: "/Users", icon: <Users size={20} /> },
//     { name: "Chatbot", href: "/chatbot", icon: <MessageSquare size={20} /> },
//     { name: "Task Manager", href: "/tasks", icon: <ClipboardList size={20} /> },
//   ];
  


//   return (
//     // <aside className=" top-32 text-white w-64 min-h-screen p-5 fixed ml-8" >
    
//     <aside className="text-white w-64 min-h-screen p-5 fixed ml-8" > 
//       <nav>
//         <ul className="space-y-4 " >
//           {menuItems.map(({ name, href, icon }) => (
//             <li key={name} className="flex items-center space-x-3 p-2  rounded">
//               <span className="bg-white text-black p-2 rounded-full">{icon}</span>
//               <Link href={href} className="flex-1">{name}</Link>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Users, MessageSquare, ClipboardList, Briefcase } from "lucide-react";

const Sidebar = () => {
  const pathname = usePathname(); // Get the current route

  const menuItems = [
    { name: "Dashboard", href: "/", icon: <Home size={20} /> },
    { name: "Leads", href: "/Leads", icon: <Briefcase size={20} />, key: "leads" },
    { name: "Users", href: "/Users", icon: <Users size={20} /> },
    { name: "Chatbot", href: "/chatbot", icon: <MessageSquare size={20} /> },
    { name: "Task Manager", href: "/tasks", icon: <ClipboardList size={20} /> },
  ];

  return (
    <aside className="text-white w-64 min-h-screen p-5 fixed ml-8">
      <nav>
        <ul className="space-y-4">
          {menuItems.map(({ name, href, icon }) => (
            <li key={name} className="flex items-center space-x-3 p-2 rounded">
              <span
                className={`p-2 rounded-full transition-all duration-300 ${
                  pathname === href
                    ? "bg-black text-white scale-210"
                    : "bg-white text-black scale-100"
                }`}
              >
                {icon}
              </span>
              <Link href={href} className="flex-1">{name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
