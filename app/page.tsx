
import { DraggableCardDemo } from "@/components/Draggable";
import MusicPlayer from "@/components/MusicPlayer";
import { MoveDown, Music2Icon } from "lucide-react";

import Link from "next/link";


export default function Home() {
  
 


  return (
    <div  className="  flex  flex-col gap-2 w-full h-full bg-white dark:bg-neutral-950 text-black dark:text-white">
      <MusicPlayer/>
<section className=" h-full w-full ">
  <div className=" text-black dark:text-white text-center h-full w-full flex items-center justify-center mt-10 gap-2 flex-col ">
    <h1 className="text-4xl font-semibold sour-gummy">Ashish agarwal 👋</h1>
    <div className=" bg-red-950  w-fit p-1 text-center">
 <h1 className=" font-semibold text-white  ">Full Stack Developer  .</h1>


  </div>
  </div>
  <div className=" flex items-center justify-center gap-2 mt-5  flex-col  ">
  <h1 className="text-4xl font-semibold flex gap-2  text-center sour-gummy">Projects <MoveDown className="ml-2 size-6 hover:scale-105 transition-all duration-300 ease-in-out"/></h1>
   <DraggableCardDemo/>
  <Link href="/certificates" className="text-center">Certificates</Link>

  </div>
  
  <div className=" flex items-center justify-center gap-2 mt-5  flex-col  ">
    <h1>Contact me :</h1>
    <div>
      <h1>Mail : aviinashgarwal@gmail.com</h1>
      <h1>Phone : 6367395312</h1>
    </div>
  </div>
  

 </section>

    </div>
  );
}
