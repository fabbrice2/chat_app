import React, { useState } from "react";
import SideBar from "../components/SideBar";
import DiscussionsBox from "../components/DiscussionsBox";
import ChatBox from "../components/ChatBox";


function Dashboard() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="h-screen w-full flex">
      <SideBar />
      <div className="flex-1 w-full flex">
      <DiscussionsBox setSelectedUser={setSelectedUser} />
        <ChatBox selectedUser={selectedUser} />
        </div>
    </div>
  );
}

export default Dashboard;
