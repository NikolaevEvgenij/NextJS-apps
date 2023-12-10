"use client";

import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignedOut } from "@clerk/nextjs";
import "../../../app/globals.css";

const LeftSidebar = () => {
   const pathName = usePathname();

   return (
      <section className='flex justify-start flex-col px-6 pb-8 pt-36 max-sm:hidden sticky background-light900_dark200  overflow-auto h-screen custom-scrollbar border-r light-border top-0 shadow-light-200 dark:shadow-none lg:w-[266px]'>
         <div className='flex grow flex-col gap-6'>
            {sidebarLinks.map((link) => {
               const isActive =
                  (pathName.includes(link.route) &&
                     link.route.length > 1) ||
                  pathName === link.route;
               return (
                  <Link
                     href={link.route}
                     className={`${
                        isActive
                           ? "primary-gradient rounded-lg text-light-900"
                           : "text-dark300_light900"
                     } flex gap-4 items-center justify-start bg-transparent p-4`}
                     key={link.label}
                  >
                     <Image
                        className={`${
                           isActive ? "" : "invert-colors"
                        }`}
                        src={link.imgURL}
                        alt={link.label}
                        width={20}
                        height={20}
                     />
                     <p
                        className={`${
                           isActive
                              ? "base-bold"
                              : "base-medium"
                        } max-lg:hidden`}
                     >
                        {link.label}
                     </p>
                  </Link>
               );
            })}
         </div>
         <div className='flex flex-col gap-3 text-center body-semibold w-full'>
            <SignedOut>
               <Link
                  href='/log-in'
                  className='px-4 py-3 rounded-lg background-light800_dark400 '
               >
                  <Image
                     className='lg:hidden invert-colors'
                     src='/assets/icons/account.svg'
                     width={20}
                     height={20}
                     alt='auth'
                  />
                  <p className='primary-text-gradient max-lg:hidden '>
                     Log in
                  </p>
               </Link>
               <Link
                  href='/sign-up'
                  className='px-4 py-3 rounded-lg background-light700_dark300 light-border'
               >
                  <Image
                     className='lg:hidden invert-colors'
                     src='/assets/icons/sign-up.svg'
                     width={20}
                     height={20}
                     alt='auth'
                  />
                  <p className='text-dark400_light900 max-lg:hidden'>
                     Sign up
                  </p>
               </Link>
            </SignedOut>
         </div>
      </section>
   );
};

export default LeftSidebar;
