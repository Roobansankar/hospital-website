// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { Menu, X, ChevronDown } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { cn } from "@/lib/utils";
// import { useMobile } from "@/hooks/use-mobile";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const isMobile = useMobile();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const closeMenu = () => {
//     setIsOpen(false);
//   };

//   const navLinks = [
//     {
//       title: "Home",
//       href: "/",
//       dropdown: false,
//     },
//     {
//       title: "About",
//       href: "#",
//       dropdown: true,
//       items: [
//         { title: "Our Profile", href: "/about/profile" },
//         { title: "Vision and Mission", href: "/about/vision-mission" },
//         { title: "Hospital Awards", href: "/about/awards" },
//         { title: "Leadership & Management", href: "/about/leadership" },
//       ],
//     },
//     {
//       title: "Doctors",
//       href: "/doctors",
//       dropdown: false,
//     },
//     {
//       title: "Patients & Visitors",
//       href: "#",
//       dropdown: true,
//       items: [
//         { title: "Visiting Hours", href: "/patients/visiting-hours" },
//         { title: "Inpatient Information", href: "/patients/inpatient" },
//         { title: "Outpatient Services", href: "/patients/outpatient" },
//       ],
//     },
//     {
//       title: "Facilities",
//       href: "#",
//       dropdown: true,
//       items: [
//         { title: "ICU", href: "/facilities/icu" },
//         { title: "Operation Theatre", href: "/facilities/operation-theatre" },
//         { title: "Pharmacy", href: "/facilities/pharmacy" },
//         { title: "Emergency Department", href: "/facilities/emergency" },
//         { title: "Diagnostic Services", href: "/facilities/diagnostic" },
//       ],
//     },
//     {
//       title: "Departments",
//       href: "#",
//       dropdown: true,
//       items: [
//         { title: "Cardiology", href: "/departments/cardiology" },
//         { title: "Neurology", href: "/departments/neurology" },
//         { title: "Orthopedics", href: "/departments/orthopedics" },
//         { title: "Pediatrics", href: "/departments/pediatrics" },
//         { title: "General Surgery", href: "/departments/general-surgery" },
//       ],
//     },
//   ];

//   return (
//     <header
//       className={cn(
//         "sticky top-0 z-50 w-full transition-all duration-300",
//         isScrolled
//           ? "bg-white shadow-md dark:bg-gray-900"
//           : "bg-white/80 backdrop-blur-sm dark:bg-gray-900/80"
//       )}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex h-20 items-center justify-between">
//           <Link
//             href="/"
//             className="flex items-center space-x-2"
//             onClick={closeMenu}
//           >
//             <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
//               MediCare
//             </span>
//             <span className="hidden text-xl font-semibold text-gray-700 dark:text-gray-300 sm:inline-block">
//               Hospital
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex lg:items-center lg:space-x-6">
//             {navLinks.map((link) =>
//               link.dropdown ? (
//                 <DropdownMenu key={link.title}>
//                   <DropdownMenuTrigger asChild>
//                     <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
//                       <span>{link.title}</span>
//                       <ChevronDown className="h-4 w-4" />
//                     </button>
//                   </DropdownMenuTrigger>
//                   <DropdownMenuContent align="end" className="w-56">
//                     {link.items?.map((item) => (
//                       <DropdownMenuItem key={item.title} asChild>
//                         <Link
//                           href={item.href}
//                           className="w-full cursor-pointer"
//                         >
//                           {item.title}
//                         </Link>
//                       </DropdownMenuItem>
//                     ))}
//                   </DropdownMenuContent>
//                 </DropdownMenu>
//               ) : (
//                 <Link
//                   key={link.title}
//                   href={link.href}
//                   className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
//                 >
//                   {link.title}
//                 </Link>
//               )
//             )}
//           </nav>

//           <div className="hidden lg:block">
//             <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800">
//               Book Appointment
//             </Button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 lg:hidden"
//             onClick={toggleMenu}
//             aria-label="Toggle menu"
//           >
//             {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="absolute left-0 right-0 top-20 z-50 bg-white px-4 py-5 shadow-lg dark:bg-gray-900 lg:hidden">
//             <nav className="flex flex-col space-y-4">
//               {navLinks.map((link) =>
//                 link.dropdown ? (
//                   <div key={link.title} className="space-y-2">
//                     <div className="font-medium text-gray-900 dark:text-white">
//                       {link.title}
//                     </div>
//                     <div className="ml-4 flex flex-col space-y-2">
//                       {link.items?.map((item) => (
//                         <Link
//                           key={item.title}
//                           href={item.href}
//                           className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
//                           onClick={closeMenu}
//                         >
//                           {item.title}
//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                 ) : (
//                   <Link
//                     key={link.title}
//                     href={link.href}
//                     className="font-medium text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
//                     onClick={closeMenu}
//                   >
//                     {link.title}
//                   </Link>
//                 )
//               )}
//             </nav>
//             <div className="mt-6">
//               <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800">
//                 Book Appointment
//               </Button>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useMobile();
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    {
      title: "Home",
      href: "/",
      dropdown: false,
    },
    {
      title: "About",
      href: "#",
      dropdown: true,
      items: [
        { title: "Our Profile", href: "/about/profile" },
        { title: "Vision and Mission", href: "/about/vision-mission" },
        { title: "Hospital Awards", href: "/about/awards" },
        { title: "Leadership & Management", href: "/about/leadership" },
      ],
    },
    {
      title: "Doctors",
      href: "/doctors",
      dropdown: false,
    },
    {
      title: "Patients & Visitors",
      href: "#",
      dropdown: true,
      items: [
        { title: "Visiting Hours", href: "/patients/visiting-hours" },
        { title: "Inpatient Information", href: "/patients/inpatient" },
        { title: "Outpatient Services", href: "/patients/outpatient" },
      ],
    },
    {
      title: "Facilities",
      href: "#",
      dropdown: true,
      items: [
        { title: "ICU", href: "/facilities/icu" },
        { title: "Operation Theatre", href: "/facilities/operation-theatre" },
        { title: "Pharmacy", href: "/facilities/pharmacy" },
        { title: "Emergency Department", href: "/facilities/emergency" },
        { title: "Diagnostic Services", href: "/facilities/diagnostic" },
      ],
    },
    {
      title: "Departments",
      href: "#",
      dropdown: true,
      items: [
        { title: "Cardiology", href: "/departments/cardiology" },
        { title: "Neurology", href: "/departments/neurology" },
        { title: "Orthopedics", href: "/departments/orthopedics" },
        { title: "Pediatrics", href: "/departments/pediatrics" },
        { title: "General Surgery", href: "/departments/general-surgery" },
      ],
    },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white shadow-md dark:bg-gray-900"
          : "bg-white/80 backdrop-blur-sm dark:bg-gray-900/80"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-2"
            onClick={closeMenu}
          >
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              MediCare
            </span>
            <span className="hidden text-xl font-semibold text-gray-700 dark:text-gray-300 sm:inline-block">
              Hospital
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-6 relative">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.title} className="group relative">
                  <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 relative before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-blue-600 before:transition-all before:duration-300 group-hover:before:w-full">
                    <span>{link.title}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <div className="invisible absolute left-0 top-full z-50 w-56 rounded-md bg-white py-2 shadow-md opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 dark:bg-gray-800">
                    {link.items?.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-blue-400"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.title}
                  href={link.href}
                  className="relative text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-blue-600 before:transition-all before:duration-300 hover:before:w-full"
                >
                  {link.title}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:block">
            <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800">
              Book Appointment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 lg:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute left-0 right-0 top-20 z-50 bg-white px-4 py-5 shadow-lg dark:bg-gray-900 lg:hidden">
            <nav className="flex flex-col space-y-4">
              {/* {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.title} className="space-y-2">
                    <div className="font-medium text-gray-900 dark:text-white">
                      {link.title}
                    </div>
                    <div className="ml-4 flex flex-col space-y-2">
                      {link.items?.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                          onClick={closeMenu}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="font-medium text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
                    onClick={closeMenu}
                  >
                    {link.title}
                  </Link>
                )
              )} */}
              {navLinks.map((link, index) =>
                link.dropdown ? (
                  <div key={link.title} className="space-y-1">
                    <button
                      onClick={() =>
                        setOpenDropdown((prev) =>
                          prev === index ? null : index
                        )
                      }
                      className="flex w-full items-center justify-between font-medium text-gray-900 dark:text-white"
                    >
                      {link.title}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          openDropdown === index && "rotate-180"
                        )}
                      />
                    </button>
                    {openDropdown === index && (
                      <div className="ml-4 flex flex-col space-y-2">
                        {link.items?.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                            onClick={closeMenu}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="font-medium text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
                    onClick={closeMenu}
                  >
                    {link.title}
                  </Link>
                )
              )}
            </nav>
            <div className="mt-6">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800">
                Book Appointment
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
