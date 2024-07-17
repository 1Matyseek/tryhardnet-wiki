import {useEffect, useState} from "react";
import Link from "next/link";
import {ReactLenis} from 'lenis/react';
import {useRouter} from "next/router";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Layout = ({children}: {children: React.ReactNode}) => {
    let year = new Date().getFullYear();
    const router = useRouter();
    const [showNav, setNav] = useState(false);
    let Navbar = 'hidden';

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth >= 900) {
            setNav(false);
          }
        };
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    if (showNav) {
        Navbar = 'block';
    } else {
        Navbar = 'hidden';
    }

    const toggleNav = () => {
        setNav(!showNav);
    }

    //online mc
    const [playerCount, setPlayerCount] = useState(0);

    useEffect(() => {
      const getPlayerCount = () => {
        fetch('https://api.mcsrvstat.us/2/play.tryhardnet.eu')
          .then(response => response.json())
          .then(data => {
            setPlayerCount(data.players.online);
          })
          .catch(error => {
            setPlayerCount(0);
          });
      };
  
      getPlayerCount();
  
      const intervalId = setInterval(getPlayerCount, 500);
  
      return () => {
        clearInterval(intervalId);
      };
    }, []);
    //online mc

    // copy ip
    const [, setCopied] = useState(false);

    const handleCopyIp = () => {
        navigator.clipboard.writeText('play.tryhardnet.eu');
        toast.success("IP byla zkopírována!", { 
          theme: "colored", 
          style: { color: "white" }, 
          autoClose: 2000 // close the toast after 2 seconds
        });
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };
    // copy ip

    return (
        <>
            <nav className="p-[15px] bg-transparent sticky top-0" style={{ backdropFilter: 'blur(20px) brightness(0.75)' }}>
                <div className="container mx-auto px-8 justify-between flex">
                    <div className="brand">
                        <a href='#' className="text-white/85 font-bold uppercase text-[25px] text-white border-2 border-white/25 rounded-[15px] p-[10px] max-[900px]:border-sky-400/0 max-[900px]:text-[20px]" id="playerCount" onClick={handleCopyIp}>Online hráčů: {playerCount}</a>
                    </div>
                    <div className="open my-auto hidden max-[900px]:block" onClick={() => toggleNav()}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ffffff"} fill={"none"}>
                                <path d="M20 12L10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20 5L4 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20 19L4 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                    </div>
                    <div className="links flex gap-[15px] max-[800px]:hidden">
                        <Link href="/" className={`pt-[7px] pb-[5px] rounded-[10px] text-[18px] ${router.asPath === "/"? "underline decoration-white decoration-2 font-bold" : "" }`}>Homepage</Link>
                        <Link href="/team" className={`pt-[7px] pb-[5px] rounded-[10px] text-[18px] ${router.asPath === "/team"? "underline decoration-white decoration-2 font-bold" : "" }`}>Admin Team</Link>
                        <Link href="/rules" className={`pt-[7px] pb-[5px] rounded-[10px] text-[18px] ${router.asPath === "/rules"? "underline decoration-white decoration-2 font-bold" : "" }`}>Pravidla</Link>
                        <Link href="/nabory" className={`pt-[7px] pb-[5px] rounded-[10px] text-[18px] ${router.asPath === "/nabory"? "underline decoration-white decoration-2 font-bold" : "" }`}>Nábory</Link>
                        <Link href="/shop" className={`pt-[7px] pb-[5px] rounded-[10px] text-[18px] ${router.asPath === "/shop"? "underline decoration-white decoration-2 font-bold" : "" }`}>Obchod</Link>
                    </div>
                </div>

            <div className={`${Navbar} px-[30x]`}>   
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link href="/" className={`pt-[7px] pb-[5px] px-[18px] rounded-[10px] text-[18px] ${router.asPath === "/"? "" : "" }`}>Homepage</Link>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link href="/team" className={`pt-[7px] pb-[5px] px-[18px] rounded-[10px] text-[18px] ${router.asPath === "/team"? "" : "" }`}>Admin Team</Link>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link href="/rules" className={`pt-[7px] pb-[5px] px-[18px] rounded-[10px] text-[18px] ${router.asPath === "/rules"? "" : "" }`}>Pravidla</Link>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link href="/nabory" className={`pt-[7px] pb-[5px] px-[18px] rounded-[10px] text-[18px] ${router.asPath === "/nabory"? "" : "" }`}>Nábory</Link>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link href="/shop" className={`pt-[7px] pb-[5px] px-[18px] rounded-[10px] text-[18px] ${router.asPath === "/shop"? "" : "" }`}>Obchod</Link>
                </div>
            </nav>

            {children}

            <footer className="py-[20px] bg-[#131318] border-t border-[#1f2035]">
                <div className="container mx-auto px-9">
                    <p className="text-center pr-[130px] max-[1500px]:pr-[15px]">&copy; TryhardNET.eu {year}</p>
                    <p className="text-center pr-[115px] max-[1500px]:pr-[0px]">Vytvořil <a href="https://alexpoky2011.fun" target="_blank" className="font-bold text-sky-400">AlexPoky2011</a> s 💞</p>
                </div>

                <div className="footer bg-[#131318] border-t border-[#1f2035] m-[23px] pt-[25px] hidden md:block">
            <div className="footer-respon">
                <div className="odkazy flex space-evenly">
                    <div className="odkaz">
                        <h4>DŮLEŽITÉ ODKAZY</h4>
                        <p><a href="https://wiki.tryhardnet.eu/" target="_blank">Wikipedie</a></p>
                        <p><a href="shop">Obchod</a></p>
                        <p><a href="rules">Pravidla</a></p>
                    </div>
                    <hr />
                    <div className="odkaz">
                        <h4>UŽITEČNÉ ODKAZY</h4>
                        <p><a href="nabory">Nábory</a></p>
                        <p><a href="team" target="_blank">Admin Team</a></p>
                    </div>
                    <hr />
                    <div className="odkaz">
                        <h4>SOCÍÁLNÍ SÍTĚ</h4>
                        <p><a href="https://discord.com/invite/pz9ukCjQSK" target="_blank">Discord</a></p>
                        <p><a href="#" target="_blank">Instagram</a></p>
                        <p><a href="#" target="_blank">TikTok</a></p>
                    </div>
                    &nbsp;
                </div>
            </div>
        </div>
            </footer>
            <ToastContainer />
        </>
    );
}

export default Layout;