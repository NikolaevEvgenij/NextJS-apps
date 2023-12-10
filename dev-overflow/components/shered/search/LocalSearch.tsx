"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";

interface CustomInputProps {
   route: string;
   iconPosition: string;
   imgSrc: string;
   placeholder: string;
   otherClasses?: string;
}

const LocalSearch = ({
   route,
   iconPosition,
   imgSrc,
   placeholder,
   otherClasses,
}: CustomInputProps) => {
   return (
      <div
         className={`${otherClasses} background-light800_darkgradient flex min-h-[56px] items-center gap-1 rounded-[10px] px-4`}
      >
         {iconPosition === "left" && (
            <Image
               src={imgSrc}
               alt='search'
               width={24}
               height={24}
               className='coursor-pointer'
            />
         )}

         <Input
            type='text'
            placeholder={placeholder}
            value=''
            onChange={() => {}}
            className='paragraph-regular no-focus placeholder:text-dark400_light700 background-light800_darkgradient  border-none shadow-none outline-none'
         />

         {iconPosition === "right" && (
            <Image
               src={imgSrc}
               alt='search'
               width={24}
               height={24}
               className='coursor-pointer'
            />
         )}
      </div>
   );
};

export default LocalSearch;
