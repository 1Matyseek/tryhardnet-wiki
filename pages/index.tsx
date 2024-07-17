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
    <>
    <Head>
      <title>TryhardNET ‣ Wikipedie</title>
    </Head>
        <h1 className="text-center pt-[350px] text-[50px]">Soon..</h1>
    </>

  );
}

export default MainPage;

