import { HomeIcon, Library, Search } from "lucide-react";

export function SideBar(){
  return(
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
  )
}