import React, { useEffect, useState } from "react";
import { Button } from "../components/ui/Button";
import { Plusicon } from "../icons/Plusicon";
import { Shareicon } from "../icons/Shareicon";
import Card from "../components/ui/Card";
import CreateContentModal from "../components/ui/CreateContentModal";
import Sidebar from "../components/ui/Sidebar";
import { useContent } from "../hooks/useContent";
import axios from "axios";
import { BACKEND_URL } from "../config";

export default function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const {contents,refresh} = useContent();

  useEffect(()=>{
    refresh();
  },[modalOpen])
  return (
    <div className="min-h-screen bg-black text-white flex">
      <Sidebar/>

      

      <main className="flex-1">
        <header className="h-16 border-b border-white/10 flex items-center justify-between px-6">
          <div className="flex items-center gap-3 text-lg font-semibold">
            <span className="text-xl">☰</span>
            My Brain
          </div>
           <CreateContentModal
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
          }}
        />
          <div className="flex items-center gap-3">
            <Button onClick={async ()=>{
         const response= await axios.post(BACKEND_URL + "/api/v1/brain/share",{
              share:true
            },{
              headers:{
                "Authorization":localStorage.getItem("token")
              }
            });
            const shareUrl=`http://localhost:5173/share/${response.data.hash}`;
            alert(shareUrl);
          }} variant="secondary" size="sm" text="Share" startIcon={<Shareicon size="sm"/>} />
            <Button   onClick={() => {
              setModalOpen(true);
            }} variant="primary" size="sm" text="Add Content" endIcon={<Plusicon size="sm"/>}/>
          </div>
        </header>
        <section className="p-6 grid md:grid-cols-2 gap-6">
           {contents.map(({ type, link, title,_id }) => (
            <Card _id={_id} type={type} link={link} title={title} />
          ))}
        </section>
      </main>
    </div>
  );
}


