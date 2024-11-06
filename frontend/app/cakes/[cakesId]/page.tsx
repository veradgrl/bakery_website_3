import list from "@/components/cakesItem"
import { CakesItem } from "@/components/cakesItem"


export default function Id ({
    params,
}: {
    params: {cakesId:number};
}) {
    const cakeItem: CakesItem | undefined = list[params.cakesId];


   return(
    <div className="grid grid-cols-2 grid-row-4 justify-center items-center  mt-10 font-hand-write text-lg">
        <img  className="w-[500px] object-cover h-[500px] rounded-2xl" src={cakeItem.img} alt={cakeItem.title} />
        <div className=" ">
    <h1 className="font-bold text-5xl">{cakeItem.title}</h1>
    <hr className="my-5" />
    <div className="row-span-2">
    <h1>{cakeItem.intro}</h1>
    
    </div>
    <hr className="my-5" />
    <h1>{cakeItem.price}</h1>
    </div>
</div>
   )
}