import { useEffect, useState } from "react";
import Layout from "@/components/layout";
import Head from "next/head";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
"use-client"
import AOS from 'aos';
import "aos/dist/aos";



const MainPage = () => {  


  useEffect(() => {
    AOS.init({})
  }, [])

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

// online discord
const [presenceCount, setPresenceCount] = useState(0);

useEffect(() => {
  const serverId = '1143592184407404625';
  const apiUrl = `https://discord.com/api/guilds/${serverId}/widget.json`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      setPresenceCount(data.presence_count);
    })
    .catch(error => {
      console.error('Error fetching presence count:', error);
      setPresenceCount(0);
    });
}, []);
//online discord

  return (
    <Layout>
      <Head>
        <title>TryhardNET ‣ Homepage</title>
      </Head>
      <>
  <header className="">
    <br /><br /><br /><br /><br /><br />
    <div className="container mx-auto">
      <div className="container mx-auto px-9 max-[900px]:px-3">
        <div className="grid grid-cols-2 gap-[50px] max-[1045px]:grid-cols-1">
          <div className="flex-col my-auto">
            <div className="hidden md:block">
              <img alt="Logo" loading="lazy" width={410} height={410} decoding="async" data-nimg={1} className="block mx-auto" style={{ color: "transparent" }} src="/render1.png" />
            </div>
          </div>
          <div className="flex-col my-auto animation_fade-right">
            <h1 className="text-center text-[35px] font-bold text-[#f8fafb]">TryhardNET</h1>
            <p className="text-center text-[#f8fafb] text-[18px]">
              Ahoj, vítej na našem webu! Jsme minecraft server zaměřený
              na Survival, PVP, 1V1 (Gulag). Chceme aby zde hráči svůj volný čas s kamarády. A proč?
              Protože jsme propracovaný server a máme A-team který je ochotný vbám kdykoliv pomoci! 😀 Neváhej a připoj se!
            </p>
            <div className="flex justify-center">
              <button className="button transition duration-200 active:scale-[.95] py-[8px] px-[25px] rounded-full p-3 border-2 border-white/5 bg-white/5" onClick={handleCopyIp}>Zkopírovat IP</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="tsparticles">
      <canvas style={{ width: "100%", height: "100%" }} />
    </div>
  </header>

    <div className="container mx-auto px-[250px] max-[800px]:px-[20px]">
      <div className="flex">
        <div className="">
        <br /><br /><br /><br />
          <h1 className="text-[30px] font-bold text-center">Kdo jsme?</h1>
          <p className="text-center">
            Jsme projekt play.tryhardnet.eu je přátelský český a slovenský Minecraft server zaměřený na poskytování vysoce kvalitního a autentického zážitku <br />
            pro přežití. Máme celou řadu jedinečného obsahu a funkcí, které můžete prozkoumat. Naše cesta právě začíná.
          </p>
        </div>
        <div className="hidden md:block">
          <br /><br />
              <img alt="Logo" loading="lazy" width={350} height={350} decoding="async" data-nimg={1} className="block mx-auto" style={{ color: "transparent" }} src="/questionMark.png" />
        </div>
      </div>
    </div>

    <div className="container mx-auto px-[250px] max-[800px]:px-[20px]">
      <div className="flex">
        <div className="hidden md:block">
              <img alt="Logo" loading="lazy" width={350} height={350} decoding="async" data-nimg={1} className="block mx-auto" style={{ color: "transparent" }} src="/wumpus.gif" />
        </div>
        <div className="">
          <br /><br /><br /><br /><br />
          <h1 className="text-[30px] font-bold text-center">Náš discord!</h1>
          <p className="m-0 text-center">Nyní je online <b>{presenceCount}</b> členů na našem Discord Serveru.</p>
          <p className="text-center">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sed rem aut laudantium dicta veritatis fugiat similique unde<br /> id illum,
             nulla ex rerum officia repudiandae reiciendis quis sunt reprehenderit numquam?
          </p>
          <button className="block mx-auto mt-[25px] select-none transition duration-200 active:scale-[.95] py-[8px] px-[25px] rounded-full p-3 border-2 border-white/5 bg-white/5" onClick={() => window.open('https://discord.gg/pz9ukCjQSK', '_blank')}>Přijmout pozvánku</button>
        </div>
      </div>
    </div>

    <br /><br />

    <div className="container mx-auto px-[250px] max-[800px]:px-[20px]">
      <div className="flex">
        <div className="">
          <h1 className="text-[30px] font-bold text-center">Hlasování</h1>
          <p className="text-center">
             Hlasováním pro náš server získáš <b>Hlasovací Klíč</b>, díky kterému můžeš získat spoustu zajímavých věcí!
          </p>
          <button className="block mx-auto mt-[25px] select-none transition duration-200 active:scale-[.95] py-[8px] px-[25px] rounded-full p-3 border-2 border-white/5 bg-white/5" onClick={() => window.open('https://czech-craft.eu/server/tryhardnet/', '_blank')}>Hlasovácí stránka</button>
        </div>
        <div className="hidden md:block">
              <img alt="Logo" loading="lazy" width={200} height={200} decoding="async" data-nimg={1} className="block mx-auto" style={{ color: "transparent" }} src="/key.png" />
        </div>
      </div>
    </div>

    <br /><br /><br />
    
</>
<ToastContainer />
    </Layout>
  );
}

export default MainPage;

