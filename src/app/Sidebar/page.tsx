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

// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Home, Users, MessageSquare, ClipboardList, Briefcase } from "lucide-react";

// const Sidebar = () => {
//   const pathname = usePathname(); // Get the current route

//   const menuItems = [
//     { name: "Dashboard", href: "/", icon: <Home size={20} /> },
//     { name: "Leads", href: "/Leads", icon: <Briefcase size={20} />, key: "leads" },
//     { name: "Users", href: "/Users", icon: <Users size={20} /> },
//     { name: "Chatbot", href: "/chatbot", icon: <MessageSquare size={20} /> },
//     { name: "Task Manager", href: "/tasks", icon: <ClipboardList size={20} /> },
//   ];

//   return (
//     <aside className="text-white w-64 min-h-screen p-5 fixed ml-8">
//       <nav>
//         <ul className="space-y-4">
//           {menuItems.map(({ name, href, icon }) => (
//             <li key={name} className="flex items-center space-x-3 p-2 rounded">
//               <span
//                 className={`p-2 rounded-full transition-all duration-300 ${
//                   pathname === href
//                     ? "bg-black text-white scale-210"
//                     : "bg-white text-black scale-100"
//                 }`}
//               >
//                 {icon}
//               </span>
//               <Link href={href} className="flex-1">{name}</Link>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;


// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import Image from "next/image"; // Import Image for PNGs

// const Sidebar = () => {
//   const pathname = usePathname(); // Get the current route

//   const menuItems = [
//     { 
//       name: "Dashboard", 
//       href: "/", 
//       icon: "/images/sidebar-icons/dashboardIcon.png" 
//     },
//     { 
//       name: "Leads", 
//       href: "/Leads", 
//       iconLight: "/images/sidebar-icons/leadsIcon-wb.png", 
//       iconDark: "/images/sidebar-icons/leadsIcon-bb.png" 
//     },
//     { 
//       name: "Users", 
//       href: "/Users", 
//       iconLight: "/images/sidebar-icons/userIcon-wb.png",
//       iconDark: "/images/sidebar-icons/userIcon-bb.png"
//     },
//     { 
//       name: "Chatbot", 
//       href: "/chatbot", 
//       icon: "/images/sidebar-icons/chatIcon.png" 
//     },
//     { 
//       name: "Task Manager", 
//       href: "/tasks", 
//       icon: "/images/sidebar-icons/calenderIcon.png" 
//     },
//   ];

//   return (
//     <aside className="text-white w-64 min-h-screen p-5 fixed ml-8">
//       <nav>
//         <ul className="space-y-4">
//           {menuItems.map(({ name, href, icon, iconLight, iconDark }) => (
//             <li key={name} className="flex items-center space-x-3 p-2 rounded">
//               <span
//                 className={`p-2 rounded-full transition-all duration-300 ${
//                   pathname === href
//                     ? "bg-black text-white scale-110"
//                     : "bg-white text-black scale-100"
//                 }`}
//               >
//                 {iconLight && iconDark ? (
//                   <Image
//                     src={pathname === href ? iconDark : iconLight}
//                     alt={`${name} Icon`}
//                     width={20}
//                     height={20}
//                   />
//                 ) : (
//                   <Image
//                     src={icon!}
//                     alt={`${name} Icon`}
//                     width={20}
//                     height={20}
//                   />
//                 )}
//               </span>
//               <Link href={href} className="flex-1">{name}</Link>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;


// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import Image from "next/image"; // Import Image for PNGs

// const Sidebar = () => {
//   const pathname = usePathname(); // Get the current route

//   const menuItems = [
//     { 
//       name: "Dashboard", 
//       href: "/", 
//       icon: "/images/sidebar-icons/dashboardIcon.png",
//       textStyles: "font-afacad text-lg font-medium leading-7 opacity-40",
//       // textPosition: "absolute top-[19px] left-[76px]",
//       bgSize: "w-[66px] h-[66px]", // Background size (66x66)
//       iconSize: "w-[22px] h-[22px] absolute top-[22px] left-[22px]" // Icon inside background (22px x 22px)
//     },
//     { 
//       name: "Leads", 
//       href: "/Leads", 
//       bgSize: "w-[66px] h-[66px]",
//       iconLight: "/images/sidebar-icons/leadsIcon-wb.png", 
//       textStyles: "font-afacad text-lg font-medium leading-7 opacity-40",

//       // textStyles: "font-afacad text-lg font-medium leading-7 opacity-40",
//       iconDark: "/images/sidebar-icons/leadsIcon-bb.png" 
//     },
//     { 
//       name: "Users", 
//       href: "/Users", 
//       iconLight: "/images/sidebar-icons/userIcon-wb.png",
//       textStyles: "font-afacad text-lg font-medium leading-7 opacity-40",

//       bgSize: "w-[66px] h-[66px]",
//       iconDark: "/images/sidebar-icons/userIcon-bb.png"
//     },
//     { 
//       name: "Chatbot", 
//       href: "/chatbot", 
//       bgSize: "w-[66px] h-[66px]",
//       textStyles: "font-afacad text-lg font-medium leading-7 opacity-40",

//       icon: "/images/sidebar-icons/chatIcon.png" 
//     },
//     { 
//       name: "Task Manager", 
//       href: "/tasks", 
//       bgSize: "w-[66px] h-[66px]",
//       textStyles: "font-afacad text-lg font-medium leading-7 opacity-40",

//       icon: "/images/sidebar-icons/calenderIcon.png" 
//     },
//   ];

//   return (
//     <aside className="text-white w-64 min-h-screen fixed ml-8">
//       <nav>
//         <ul className="space-y-4">
//           {menuItems.map(({ name, href, icon, iconLight, iconDark, textStyles, bgSize, iconSize }) => (
//             <li key={name} className="relative flex items-center space-x-3 p-2 rounded">
//               <span
//                 className={`flex items-center justify-center rounded-full transition-all duration-300 ${
//                   pathname === href ? "bg-black text-white scale-110" : "bg-white text-black scale-100"
//                 } ${bgSize || "w-10 h-10"}`}
//               >
//                 {iconLight && iconDark ? (
//                   <Image
//                     src={pathname === href ? iconDark : iconLight}
//                     alt={`${name} Icon`}
//                     width={22}
//                     height={22}
//                     className={iconSize || ""}
//                   />
//                 ) : (
//                   <Image
//                     src={icon!}
//                     alt={`${name} Icon`}
//                     width={22}
//                     height={22}
//                     className={iconSize || ""}
//                   />
//                 )}
//               </span>
//               <Link href={href} className={`flex-1 ${textStyles ? `${textStyles}` : ""}`}>
//                 {name}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;


// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import Image from "next/image"; // Import Image for PNGs

// const Sidebar = () => {
//   const pathname = usePathname(); // Get the current route

//   const menuItems = [
//     { 
//       name: "Dashboard", 
//       href: "/", 
//       icon: "/images/sidebar-icons/dashboardIcon.png",
//       textStyles: "font-afacad text-lg font-medium leading-7",
//       bgSize: "w-[66px] h-[66px]", // Background size (66x66)
//       iconSize: "w-[22px] h-[22px] absolute top-[22px] left-[22px]" // Icon inside background (22px x 22px)
//     },
//     { 
//       name: "Leads", 
//       href: "/Leads", 
//       bgSize: "w-[66px] h-[66px]",
//       iconLight: "/images/sidebar-icons/leadsIcon-wb.png", 
//       textStyles: "font-afacad text-lg font-medium leading-7",
//       iconDark: "/images/sidebar-icons/leadsIcon-bb.png" 
//     },
//     { 
//       name: "Users", 
//       href: "/Users", 
//       iconLight: "/images/sidebar-icons/userIcon-wb.png",
//       textStyles: "font-afacad text-lg font-medium leading-7",
//       bgSize: "w-[66px] h-[66px]",
//       iconDark: "/images/sidebar-icons/userIcon-bb.png"
//     },
//     { 
//       name: "Chatbot", 
//       href: "/chatbot", 
//       bgSize: "w-[66px] h-[66px]",
//       textStyles: "font-afacad text-lg font-medium leading-7",
//       icon: "/images/sidebar-icons/chatIcon.png" 
//     },
//     { 
//       name: "Task Manager", 
//       href: "/tasks", 
//       bgSize: "w-[66px] h-[66px]",
//       textStyles: "font-afacad text-lg font-medium leading-7",
//       icon: "/images/sidebar-icons/calenderIcon.png" 
//     },
//   ];

//   return (
//     <aside className="text-white w-64 min-h-screen fixed ml-8">
//       <nav>
//         <ul className="space-y-4">
//           {menuItems.map(({ name, href, icon, iconLight, iconDark, textStyles, bgSize, iconSize }) => (
//             <li key={name} className="relative flex items-center space-x-3 p-2 rounded">
//               <span
//                 className={`flex items-center justify-center rounded-full transition-all duration-300 ${
//                   pathname === href ? "bg-black text-white scale-110" : "bg-white text-black scale-100"
//                 } ${bgSize || "w-10 h-10"}`}
//               >
//                 {iconLight && iconDark ? (
//                   <Image
//                     src={pathname === href ? iconDark : iconLight}
//                     alt={`${name} Icon`}
//                     width={22}
//                     height={22}
//                     className={iconSize || ""}
//                   />
//                 ) : (
//                   <Image
//                     src={icon!}
//                     alt={`${name} Icon`}
//                     width={22}
//                     height={22}
//                     className={iconSize || ""}
//                   />
//                 )}
//               </span>
//               <Link 
//                 href={href} 
//                 className={`flex-1 transition-all duration-300 ${
//                   pathname === href ? "text-[#1F1F1F] font-semibold" : "text-gray-600 opacity-40"
//                 } ${textStyles}`}
//               >
//                 {name}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import Image from "next/image";

// const Sidebar = () => {
//   const pathname = usePathname();

//   const menuItems = [
//     {
//       name: "Dashboard",
//       href: "/",
//       icon: "/images/sidebar-icons/dashboardIcon.png",
//       textStyles: "font-afacad text-lg font-medium leading-7",
//       bgSize: "w-[66px] h-[66px]",
//       iconSize: "w-[22px] h-[22px] y top-[22px] left-[22px]",
//     },
//     {
//       name: "Leads",
//       href: "/Leads",
//       bgSize: "w-[66px] h-[66px]",
//       iconLight: "/images/sidebar-icons/leadsIcon-wb.png",
//       textStyles: "font-afacad text-lg font-medium leading-7",
//       iconDark: "/images/sidebar-icons/leadsIcon-bb.png",
//     },
//     {
//       name: "Users",
//       href: "/Users",
//       iconLight: "/images/sidebar-icons/userIcon-wb.png",
//       textStyles: "font-afacad text-lg font-medium leading-7",
//       bgSize: "w-[66px] h-[66px]",
//       iconDark: "/images/sidebar-icons/userIcon-bb.png",
//     },
//     {
//       name: "Chatbot",
//       href: "/chatbot",
//       bgSize: "w-[66px] h-[66px]",
//       textStyles: "font-afacad text-lg font-medium leading-7",
//       icon: "/images/sidebar-icons/chatIcon.png",
//     },
//     {
//       name: "Task Manager",
//       href: "/tasks",
//       bgSize: "w-[66px] h-[66px]",
//       textStyles: "font-afacad text-lg font-medium leading-7",
//       icon: "/images/sidebar-icons/calenderIcon.png",
//     },
//   ];

//   return (
//     <aside
//       className="text-white fixed"
//       style={{
//         width: "187px",
//         height: "765px",
//         top: "312px",
//         left: "40px",
//       }}
//     >
//       <nav>
//         <ul className="space-y-4">
//           {menuItems.map(
//             ({ name, href, icon, iconLight, iconDark, textStyles, bgSize, iconSize }) => (
//               <li key={name} className="relative flex items-center space-x-3 p-2 rounded">
//                 <span
//                   className={`flex items-center justify-center rounded-full transition-all duration-300 ${
//                     pathname === href ? "bg-black text-white scale-110" : "bg-white text-black scale-100"
//                   } ${bgSize || "w-10 h-10"}`}
//                 >
//                   {iconLight && iconDark ? (
//                     <Image
//                       src={pathname === href ? iconDark : iconLight}
//                       alt={`${name} Icon`}
//                       width={22}
//                       height={22}
//                       className={iconSize || ""}
//                     />
//                   ) : (
//                     <Image src={icon!} alt={`${name} Icon`} width={22} height={22} className={iconSize || ""} />
//                   )}
//                 </span>
//                 <Link
//                   href={href}
//                   className={`flex-1 transition-all duration-300 ${
//                     pathname === href ? "text-[#1F1F1F] font-semibold" : "text-gray-600 opacity-40"
//                   } ${textStyles}`}
//                 >
//                   {name}
//                 </Link>
//               </li>
//             )
//           )}
//         </ul>
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    {
      name: "Dashboard",
      href: "/",
      icon: "/images/sidebar-icons/dashboardIcon.png",
      textStyles: "font-afacad text-lg font-medium leading-7",
      bgSize: "w-[66px] h-[66px]",
      iconSize: "w-[22px] h-[22px] y top-[22px] left-[22px]",
    },
    {
      name: "Leads",
      href: "/leads",
      bgSize: "w-[66px] h-[66px]",
      iconLight: "/images/sidebar-icons/leadsIcon-wb.png",
      textStyles: "font-afacad text-lg font-medium leading-7",
      iconDark: "/images/sidebar-icons/leadsIcon-bb.png",
    },
    {
      name: "Users",
      href: "/Users",
      iconLight: "/images/sidebar-icons/userIcon-wb.png",
      textStyles: "font-afacad text-lg font-medium leading-7",
      bgSize: "w-[66px] h-[66px]",
      iconDark: "/images/sidebar-icons/userIcon-bb.png",
    },
    {
      name: "Chatbot",
      href: "/chatbot",
      bgSize: "w-[66px] h-[66px]",
      textStyles: "font-afacad text-lg font-medium leading-7",
      icon: "/images/sidebar-icons/chatIcon.png",
    },
    {
      name: "Task Manager",
      href: "/tasks",
      bgSize: "w-[66px] h-[66px]",
      textStyles: "font-afacad text-lg font-medium leading-7",
      icon: "/images/sidebar-icons/calenderIcon.png",
    },
  ];

  return (
    // CHANGED: Removed "fixed" so the sidebar is now relative.
    <aside
      className="text-white relative"
      style={{
        width: "187px",
        // Instead of a fixed height and fixed position,
        // you can use margin or padding in the parent if needed.
        // For now, we’ll keep the height as is.
        height: "765px",
        marginTop: "20px",
        marginLeft: "20px",
      }}
    >
      <nav>
        <ul className="space-y-4">
          {menuItems.map(
            ({ name, href, icon, iconLight, iconDark, textStyles, bgSize, iconSize }) => (
              <li key={name} className="relative flex items-center space-x-3 p-2 rounded">
                <span
                  className={`flex items-center justify-center rounded-full transition-all duration-300 ${
                    pathname === href ? "bg-black text-white scale-110" : "bg-white text-black scale-100"
                  } ${bgSize || "w-10 h-10"}`}
                >
                  {iconLight && iconDark ? (
                    <Image
                      src={pathname === href ? iconDark : iconLight}
                      alt={`${name} Icon`}
                      width={22}
                      height={22}
                      className={iconSize || ""}
                    />
                  ) : (
                    <Image src={icon!} alt={`${name} Icon`} width={22} height={22} className={iconSize || ""} />
                  )}
                </span>
                <Link
                  href={href}
                  className={`flex-1 transition-all duration-300 ${
                    pathname === href ? "text-[#1F1F1F] font-semibold" : "text-gray-600 opacity-40"
                  } ${textStyles}`}
                >
                  {name}
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
