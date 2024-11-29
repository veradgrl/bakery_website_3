import list from "@/components/breakfastItem"
import { BreakfastItem } from "@/components/breakfastItem";


export default function Id ({
    params,
}: {
    params: {breakfastId:number};
}) {
    const breakfastItem: BreakfastItem | undefined = list[params.breakfastId];


   return(
    <div className="grid grid-cols-2 grid-row-4 justify-center items-center  mt-10 font-hand-write text-lg">
        <img  className="w-[500px] object-cover h-[500px] rounded-2xl" src={breakfastItem.img} alt={breakfastItem.title} />
        <div className=" ">
    <h1 className="font-bold text-5xl">{breakfastItem.title}</h1>
    <hr className="my-5" />
    <div className="row-span-2">
    <h1>{breakfastItem.intro}</h1>
    
    </div>
    <hr className="my-5" />
    <h1>{breakfastItem.price}</h1>
    </div>
</div>
   )
}