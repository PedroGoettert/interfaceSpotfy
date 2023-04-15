
import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2} from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (

    <div className='h-screen flex flex-col'>
      <div className='flex flex-1'>
        <aside className='w-72 bg-zinc-900 p-6'>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>
          <nav className="space-y-5 mt-5">
            <a href="" className="flex items-center gap-3 text-sm text-zinc-200">
              <HomeIcon />
              Home
            </a>
            <a href="" className="flex items-center gap-3 text-sm text-zinc-200 space-y-4">
              <Search />
              Search
            </a>
            <a href="" className="flex items-center gap-3 text-sm text-zinc-200 space-y-4">
              <Library />
              Your libery
            </a>
          </nav>

          <nav className="mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className="text-zinc-400 text-sm hover:text-zinc-100">Melhores do Ano</a>
            <a href="" className="text-zinc-400 text-sm hover:text-zinc-100">TOP 100 Funk Brasil</a>
            <a href="" className="text-zinc-400 text-sm hover:text-zinc-100">Xis Tudo</a>
            <a href="" className="text-zinc-400 text-sm hover:text-zinc-100">Poesia Acustica</a>
            <a href="" className="text-zinc-400 text-sm hover:text-zinc-100">Trap dos Guri</a>
            <a href="" className="text-zinc-400 text-sm hover:text-zinc-100">Só as TOP</a>
            <a href="" className="text-zinc-400 text-sm hover:text-zinc-100">This is Haikaiss</a>
            <a href="" className="text-zinc-400 text-sm hover:text-zinc-100">Post Malone</a>
            <a href="" className="text-zinc-400 text-sm hover:text-zinc-100">Imagine Dragon</a>
          </nav>

        </aside>
        <main className='flex-1 p-6'>
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1 hover:bg-black/20">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1 hover:bg-black/20">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4">
            <a href="#" className="bg-white/5 group flex  hover:bg-white/10items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors">
              <Image src='/album.jpg' width={104} height={104} alt='Foto do Album' />
              <strong>Poesia Acustica</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 ml-auto mr-4 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors">
              <Image src='/album.jpg' width={104} height={104} alt='Foto do Album' />
              <strong>Poesia Acustica</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 ml-auto mr-4 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors">
              <Image src='/album.jpg' width={104} height={104} alt='Foto do Album' />
              <strong>Poesia Acustica</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 ml-auto mr-4 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors">
              <Image src='/album.jpg' width={104} height={104} alt='Foto do Album' />
              <strong>Poesia Acustica</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 ml-auto mr-4 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors">
              <Image src='/album.jpg' width={104} height={104} alt='Foto do Album' />
              <strong>Poesia Acustica</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 ml-auto mr-4 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors">
              <Image src='/album.jpg' width={104} height={104} alt='Foto do Album' />
              <strong>Poesia Acustica</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 ml-auto mr-4 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>

          <h1 className='font-semibold text-2xl mt-10'>Made for Pedro de Souza Goettert</h1>

          <div className="grid grid-cols-6 gap-4 mt-4">
            <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col hover:bg-white/10">
              <Image src='/album.jpg' className='w-full' width={104} height={104} alt='Foto do Album' />
              <strong className="font-semibold">Poesia Acustica 1</strong>
              <span className="text-sm text-zinc-500 ">Wallows, COIN, girl in red and more</span>
            </a>
            <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col hover:bg-white/10">
              <Image src='/album.jpg' className='w-full' width={104} height={104} alt='Foto do Album' />
              <strong className="font-semibold">Poesia Acustica 1</strong>
              <span className="text-sm text-zinc-500 ">Wallows, COIN, girl in red and more</span>
            </a>
            <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col hover:bg-white/10">
              <Image src='/album.jpg' className='w-full' width={104} height={104} alt='Foto do Album' />
              <strong className="font-semibold">Poesia Acustica 1</strong>
              <span className="text-sm text-zinc-500 ">Wallows, COIN, girl in red and more</span>
            </a>
            <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col hover:bg-white/10">
              <Image src='/album.jpg' className='w-full' width={104} height={104} alt='Foto do Album' />
              <strong className="font-semibold">Poesia Acustica 1</strong>
              <span className="text-sm text-zinc-500 ">Wallows, COIN, girl in red and more</span>
            </a>
            <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col hover:bg-white/10">
              <Image src='/album.jpg' className='w-full' width={104} height={104} alt='Foto do Album' />
              <strong className="font-semibold">Poesia Acustica 1</strong>
              <span className="text-sm text-zinc-500 ">Wallows, COIN, girl in red and more</span>
            </a>
          </div>
        </main>
      </div>


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
    </div>

  )
}
