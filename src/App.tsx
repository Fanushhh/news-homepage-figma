import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar"
import {useState} from 'react';
import { News } from "./components/News";
import { Posts } from "./components/Posts";

function App() {
  const [open, setOpen] = useState(false);
  const body = document.querySelector('body')!;
  if(open){
    
    body.style.overflow = 'hidden';
  }else{
    body.style.overflow = 'auto'
  }
  return (
  <main className={`overflow-x-hidden ${open ? 'after:opacity-1 after:visible' : 'after:opacity-0 after:invisible '} after:content-[''] after:h-full after:z-0 relative after:w-full after:bg-black/60 after:absolute after:top-0 after:left-0 lg:grid max-w-[1110px] lg:after:content-none lg:grid-cols-6 lg:gap-x-[30px] `}>
    <Navbar  open={open} setOpen={setOpen}/>
    <Hero />
    <News />
    <Posts />
  </main>
     
  )
}

export default App
