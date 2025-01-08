
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
      <a></a>
    </div>
    <div className="menu_icon">
      <Image
        src="/assets/svg/shop.svg"
        alt="shop icon"
        width={20}
        height={20}
      />
    </div>
  </div>
</div>

)
}

export default NavMenuBar;