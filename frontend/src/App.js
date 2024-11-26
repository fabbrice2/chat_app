import React from "react";
import DiscussionsBox from "./components/DiscussionsBox";
import SideBar from "./components/SideBar";
import ChatBox from "./components/ChatBox";

function App() {
  return (
    <div className="h-screen w-full flex">
      <SideBar />
      <div className="flex-1 w-full flex">
        <DiscussionsBox />
        <ChatBox />
      </div>
    </div>
  );
}

export default App;
