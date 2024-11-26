import React from "react";
import SideBar from "./components/SideBar";
import DiscussionsBox from "./components/DiscussionsBox";
import ChatBox from "./components/ChatBox";
import 'remixicon/fonts/remixicon.css'

function App() {
  return (
    <div className="flex gap-10 p-10 h-screen w-full bg-black">
      <SideBar />
      <DiscussionsBox />
      <ChatBox />
    </div>
  );
}

export default App;
