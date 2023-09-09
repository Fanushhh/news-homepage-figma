import {useRef, useEffect} from 'react';
type Props = {
    open:boolean,
    setOpen:(val:boolean) => void;
}

export const Navbar:React.FC<Props> = ({open, setOpen}) => {
    const navRef = useRef(null)
    useEffect(() => {
        const handleClickOutside = (e: Event) => {
            if (navRef.current && !((navRef.current as unknown) as HTMLElement).contains(e.target as Node)) {
              setOpen(false);
            }
          };
          
        if (open) {
          document.addEventListener('click', handleClickOutside);
        } else {
          document.removeEventListener('click', handleClickOutside);
        }
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      }, [open]);


    return(
        <nav ref={navRef} className="flex py-[30px] lg:py-0 lg:px-0 justify-between items-center relative px-4 lg:col-span-full">
            <div>
                <img src="/images/logo.svg" alt="website logo" />
            </div>
            <div>
                <img className='lg:hidden' onClick={() => setOpen(true)} src="/images/icon-menu.svg" alt="hamburger icon" />
            </div>
            <div className={`${open ? 'translate-x-0': 'translate-x-[100%] lg:translate-x-0 lg:h-auto'} flex flex-col transition-transform ease-in-out duration-200 absolute right-0 top-0 w-2/3 h-screen lg:h-auto bg-off-white p-8 gap-14 z-10 lg:static lg:items-center lg:justify-center  lg:gap-0 lg:px-0`}>
                <div onClick={() => setOpen(false)} className="self-end">
                    <img className='lg:hidden' src="images/icon-menu-close.svg" alt="close button" />
                </div>
                <ul className="flex flex-col gap-6 justify-center lg:justify-end w-full lg:flex-row lg:gap-10 ">
                    <li><a href="">Home</a></li>
                    <li><a href="">New</a></li>
                    <li><a href="">Popular</a></li>
                    <li><a href="">Trending</a></li>
                    <li><a href="">Categories</a></li>
                </ul>
            </div>
        </nav>
    )
}