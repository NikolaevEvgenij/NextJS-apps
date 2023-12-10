import {
   RsbDummyQuestions,
   RsbDummyTags,
} from "@/constants";
import Image from "next/image";
import Link from "next/link";
import RenderTag from "../RenderTag/RenderTag";

const RightSidebar = () => {
   return (
      <section className='flex flex-col justify-start background-light900_dark200 overflow-auto h-screen custom-scrollbar border-l light-border  pt-36 px-6 pb-8 sticky top-0 right-0 max-xl:hidden w-[330px]'>
         <div className='pb-[60px]'>
            <h3 className='h3-bold pb-[26px] text-dark200_light900'>
               Hot Network
            </h3>
            <div className='flex flex-col gap-[30px] w-full'>
               {RsbDummyQuestions.map((question) => {
                  return (
                     <Link
                        href={`/questions/${question._id}`}
                        className='flex gap-[10px] justify-between  items-start'
                        key={question._id}
                     >
                        <p className='body-medium text-dark500_light700'>
                           {question.text}
                        </p>
                        <Image
                           src='/assets/icons/chevron-right.svg'
                           width={20}
                           height={20}
                           alt='chevron right'
                           className='invert-colors'
                        />
                     </Link>
                  );
               })}
            </div>
         </div>
         <div>
            <h3 className='h3-bold pb-[26px] text-dark200_light900'>
               Popular Tags
            </h3>
            <div className='flex flex-col gap-4'>
               {RsbDummyTags.map((tag) => {
                  return (
                     <RenderTag
                        id={tag._id}
                        key={tag._id}
                        text={tag.text}
                        quantity={tag.quantity}
                        showQuantity={true}
                     />
                  );
               })}
            </div>
         </div>
      </section>
   );
};

export default RightSidebar;
