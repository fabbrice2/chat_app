import React from "react";

function SideBar() {
  return (
    <div className="flex flex-col items-center justify-between py-5 px-2 bg-gray-100">
      <div className="flex flex-col items-center gap-5 w-full">
        <span className="cursor-pointer hover:bg-gray-200 duration-200 w-full grid place-items-center p-1 rounded-md">
          <ion-icon name="menu-outline"></ion-icon>
        </span>
        <ul className="flex flex-col items-center gap-4  w-full">
          <li className="cursor-pointer hover:bg-gray-200 duration-200 w-full grid place-items-center p-1 rounded-md">
            <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
          </li>
          <li className="cursor-pointer hover:bg-gray-200 duration-200 w-full grid place-items-center p-1 rounded-md">
            <ion-icon name="call-outline"></ion-icon>
          </li>
          <li className="cursor-pointer hover:bg-gray-200 duration-200 w-full grid place-items-center p-1 rounded-md">
            <ion-icon name="radio-button-on-outline"></ion-icon>
          </li>
        </ul>
      </div>
      <div className="flex flex-col">
        <ul className="flex flex-col items-center gap-4 border-b mb-3 pb-3">
          <li className="cursor-pointer hover:bg-gray-200 duration-200 w-full grid place-items-center p-1 rounded-md">
            <ion-icon name="star-outline"></ion-icon>
          </li>
          <li className="cursor-pointer hover:bg-gray-200 duration-200 w-full grid place-items-center p-1 rounded-md">
            <ion-icon name="archive-outline"></ion-icon>
          </li>
        </ul>
        <div className="flex flex-col items-center gap-4">
          <span className="cursor-pointer hover:bg-gray-200 duration-200 w-full grid place-items-center p-1 rounded-md">
            <ion-icon name="settings-outline"></ion-icon>
          </span>
          <img
            className="rounded-full"
            src="https://placehold.co/35x35"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
