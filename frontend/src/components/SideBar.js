import React from "react";

function SideBar() {
  return (
    <div className="w-1/6 py-10 flex flex-col items-center justify-between bg-[#1966ff] border-2 border-black rounded-xl ">
      <div>
        <img className="rounded-full" src="https://placehold.co/50x50" alt="" />
      </div>
      <div className="flex flex-col gap-5 text-white text-4xl">
        <ion-icon name="chatbubble-ellipses"></ion-icon>
        <ion-icon name="notifications-outline"></ion-icon>
        <ion-icon name="call-outline"></ion-icon>
        <ion-icon name="settings-outline"></ion-icon>
      </div>
      <div className="text-white text-4xl">
        <ion-icon name="log-out-outline"></ion-icon>{" "}
      </div>
    </div>
  );
}

export default SideBar;
