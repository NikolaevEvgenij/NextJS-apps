import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

interface Props {
   classes: string;
   icon?: {
      src: string;
      alt: string;
      width: number;
      height: number;
   };
}

const RenderFilter = ({ classes, icon }: Props) => {
   return (
      <div className='relative hidden max-md:flex'>
         <Select>
            <SelectTrigger
               className={`h-9 w-full items-center text-sm shadow-sm px-5 py-2.5 focus:outline-none focus:ring-1 focus:ring-slate-950 border-slate-200 bg-transparent dark:border-slate-800 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-slate-300 body-regular light-border background-light800_dark300 text-dark500_light700 ${classes}`}
            >
               {icon && (
                  <Image
                     src={icon.src}
                     alt={icon.alt}
                     width={icon.width}
                     height={icon.height}
                  />
               )}
               <SelectValue placeholder='Select a filter' />
            </SelectTrigger>
            <SelectContent>
               <SelectItem value='newest'>
                  Newest
               </SelectItem>
               <SelectItem value='recommended'>
                  Recommended
               </SelectItem>
               <SelectItem value='frequent'>
                  Frequent
               </SelectItem>
               <SelectItem value='unanswered'>
                  Unanswered
               </SelectItem>
            </SelectContent>
         </Select>
      </div>
   );
};

export default RenderFilter;
