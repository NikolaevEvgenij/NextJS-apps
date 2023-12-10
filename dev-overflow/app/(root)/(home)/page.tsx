import RenderFilter from "@/components/shered/RenderFilter/RenderFilter";
import LocalSearch from "@/components/shered/search/LocalSearch";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
   return (
      <>
         <div className='flex flex-between max-sm:flex-col-reverse max-sm:gap-4 max-sm:items-start mb-11'>
            <h1 className='h1-bold text-dark100_light900 '>
               All Questions
            </h1>
            <Link
               href='/ask-question'
               className='flex justify-start max-sm:w-full'
            >
               <Button className='primary-gradient text-light-900 px-4 py-3'>
                  Ask a Question
               </Button>
            </Link>
         </div>
         <div className='flex justify-between gap-5 max-sm:flex-col sm:items-center'>
            <LocalSearch
               route='/'
               iconPosition='left'
               imgSrc='assets/icons/search.svg'
               otherClasses='flex-1'
               placeholder='Search questions...'
            />

            <RenderFilter
               classes={" min-h-[56px] sm:min-w-[170px]"}
            />
         </div>
         <div className='max-md:hidden'>
            Newest Recommended Frequent Unanswered
         </div>
      </>
   );
}
