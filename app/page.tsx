import '../styles/globals.css'

export default function Home() {
  return (
    <div className="">


<div className='flex items-center justify-center mb-10'>
<div className="flex flex-col justify-center items-center shadow-lg rounded-full bg-stone-100 w-48 h-48">
  <img className="justify-center items-center w-20 mb-3 " src="/images/cake.png" alt="cake" />
  <h1 className="font-hand-write text-5xl font-bold ">CAKES</h1>
  <h1 className="font-hand-write text-3xl font-bold ">menu</h1>
</div></div>

    <div className="flex flex-row justify-center items-center  gap-10">

{/* BREAKFAST */}
<a href="/breakfast" className="relative group">
  <img 
    className="w-60 rounded-[300px] transition-opacity duration-700 group-hover:opacity-50 group-hover:shadow-large group-hover:scale-105
    border-small" 
    src="/images/homeImages/breakfast.jpg" 
    alt="breakfast" 
  />
  <span 
    className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex-col"
  >
    <img className='w-24' src="/images/homeIcons/breakfast-table.png" alt="breakfast icon" />
    
    <h1 className='text-slate-950 font-hand-write text-3xl text-center' >BREAKFAST <br/>menu</h1>
  </span>
</a>

{/* CAKES */}
<a href="/breakfast" className="relative group">
  <img 
    className="w-60 rounded-[300px] transition-opacity duration-700 group-hover:opacity-50 group-hover:shadow-large group-hover:scale-105
    border-small" 
    src="/images/homeImages/cakes.jpg" 
    alt="cakes" 
  />
  <span 
    className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex-col"
  >
    <img className='w-20' src="/images/homeIcons/cupcake.png" alt="breakfast icon" />
    
    <h1 className='text-slate-950 font-hand-write text-3xl text-center' >CAKES <br/>menu</h1>
  </span>
</a>

{/* DRINKS */}
<a href="/breakfast" className="relative group">
  <img 
    className="w-60 rounded-[300px] transition-opacity duration-700 group-hover:opacity-50 group-hover:shadow-large group-hover:scale-105
    border-small" 
    src="/images/homeImages/drinks.jpg" 
    alt="breakfast" 
  />
  <span 
    className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex-col"
  >
    <img className='w-20' src="/images/homeIcons/iced-latte.png" alt="breakfast icon" />
    
    <h1 className='text-slate-950 font-bold font-hand-write text-3xl text-center' >DRINKS <br/>menu</h1>
  </span>
</a>

    </div>
  </div>
  );
}
