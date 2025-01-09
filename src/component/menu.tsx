
import Image from "next/image";
import { useEffect, useState } from 'react';
import Link from "next/link";
export const NavMenuBar = () =>{

  const [active,setActive] = useState('/')

  useEffect(() => {  if (typeof window !== 'undefined') { 
    const currentPath = window.location.pathname; 
    console.log("currentPath",currentPath) 
    setActive(currentPath)
  } }, []);
  return (
<div className="menu_bar">
  <div className="logo_container">
    <Image
      src="/assets/svg/Lumyn Logo White.svg"
      alt="logo"
      width={280}
      height={60}
      priority
    />
  </div>
  <div className="menu_content">
    <div className="menu_nav">
      <Link href={'/'}  className={`${active == '/' ? 'active':''}`}> Home</Link>
      <Link href={'/podcast'}  className={`${active ==  '/podcast' ? 'active':''}`}> Podcast</Link>
      <Link href={'/contact-us'}  className={`${active ==  '/contact-us' ? 'active':''}`}> Contact Us </Link>
      <Link href={'/blogs'}  className={`${active ==  '/blogs' ? 'active':''}`}> Blog </Link>
    </div>
    <div className="menu_icon">
      
    <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2865 20.9963H3.26984C1.95317 20.9963 0.911507 19.9021 1.00595 18.6162L2.0254 6.46289C2.07262 5.888 2.55595 5.44363 3.13373 5.44363H14.4226C15.0004 5.44363 15.481 5.88522 15.531 6.46289L16.5504 18.6162C16.6448 19.9021 15.6032 20.9963 14.2865 20.9963Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.44482 8.77636V3.22182C5.44482 1.99426 6.43927 1 7.66705 1H9.88927C11.117 1 12.1115 1.99426 12.1115 3.22182V8.77636" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 18.3333C10 17.8913 10.1756 17.4674 10.4882 17.1548C10.8007 16.8423 11.2246 16.6667 11.6667 16.6667H21.6667C22.1087 16.6667 22.5326 16.8423 22.8452 17.1548C23.1577 17.4674 23.3333 17.8913 23.3333 18.3333C23.3333 18.7754 23.1577 19.1993 22.8452 19.5118C22.5326 19.8244 22.1087 20 21.6667 20H11.6667C11.2246 20 10.8007 19.8244 10.4882 19.5118C10.1756 19.1993 10 18.7754 10 18.3333ZM0 1.66667C0 1.22464 0.175595 0.800716 0.488155 0.488156C0.800716 0.175595 1.22464 0 1.66667 0H21.6667C22.1087 0 22.5326 0.175595 22.8452 0.488156C23.1577 0.800716 23.3333 1.22464 23.3333 1.66667C23.3333 2.10869 23.1577 2.53262 22.8452 2.84518C22.5326 3.15774 22.1087 3.33333 21.6667 3.33333H1.66667C1.22464 3.33333 0.800716 3.15774 0.488155 2.84518C0.175595 2.53262 0 2.10869 0 1.66667ZM0 10C0 9.55797 0.175595 9.13405 0.488155 8.82149C0.800716 8.50893 1.22464 8.33333 1.66667 8.33333H21.6667C22.1087 8.33333 22.5326 8.50893 22.8452 8.82149C23.1577 9.13405 23.3333 9.55797 23.3333 10C23.3333 10.442 23.1577 10.8659 22.8452 11.1785C22.5326 11.4911 22.1087 11.6667 21.6667 11.6667H1.66667C1.22464 11.6667 0.800716 11.4911 0.488155 11.1785C0.175595 10.8659 0 10.442 0 10Z" fill="white"/>
</svg>

    </div>
  </div>
</div>

)
}

export default NavMenuBar;