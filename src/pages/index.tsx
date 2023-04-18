
import { SideBar } from "@/components/SideBar"
import { Footer } from '@/components/Footer'
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (

    <div className='h-screen flex flex-col'>
      <div className='flex flex-1'>

        <SideBar />

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
            <a href="#" className="bg-white/5 group flex items-center hover:bg-white/10items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors">
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

      <Footer />

    </div>

  )
}
