import { Laptop2, LayoutList, Maximize2, Mic2, Play, Repeat, Shuffle, SkipBack, SkipForward, Volume } from "lucide-react";
import Image from "next/image";

export function Footer(){
  return(
    <footer className='bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between'>
    <div className="flex items-center gap-2">

      <Image src='/album.jpg' alt="Foto da Musica" width={70} height={70} />

      <div className="flex flex-col">
        <strong className="font-normal">Poesia Acustica 1</strong>
        <span className="text-xs text-zinc-400">Pineapple StormTv</span>
      </div>

    </div>


    <div className="flex flex-col items-center justify-center gap-2">
      <div className="flex items-center gap-6">
        
        <Shuffle size={24} className="text-zinc-200"/>
        <SkipBack size={24} className="text-zinc-200"/>
        <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
          <Play />
        </button>
        <SkipForward size={24} className="text-zinc-200"/>
        <Repeat size={24} className="text-zinc-200"/>

      </div>

      <div className="flex items-center gap-2">
     
      <span className="text-xs">1:37</span>
      <div className="h-1 rounded-full w-96 bg-zinc-600">
        <div className='bg-zinc-200 w-40 h-1'/>
      </div>
      <span className="text-xs">3:55</span>
      </div>

    </div>



    <div className="flex items-center gap-5">
    <Mic2 size={20} />
    <LayoutList size={20} />
    <Laptop2 size={20} />
    <div className="flex items-center gap-1">
      <Volume />
      <div className="h-1 w-20 bg-zinc-600 rounded-full">
        <div className="bg-zinc-200 w-16 h-1"/>

      </div>
    </div>
    <Maximize2 size={20}/>
    </div>
    
  </footer>
  )
}