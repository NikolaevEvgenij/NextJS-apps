import Link from "next/link";

interface Props {
   id: string;
   text: string;
   quantity?: number;
   showQuantity?: boolean;
}

const RenderTag = ({
   id,
   text,
   quantity,
   showQuantity,
}: Props) => {
   return (
      <Link
         href={`/tags/${id}`}
         className='flex justify-between w-full items-center'
      >
         <span className='px-4 py-2 rounded-md subtle-medium text-light400_light500 background-light800_dark300 shadow-light100_darknone uppercase'>
            {text}
         </span>
         {showQuantity && (
            <p className='small-medium text-dark500_light700'>
               {quantity}+
            </p>
         )}
      </Link>
   );
};

export default RenderTag;
