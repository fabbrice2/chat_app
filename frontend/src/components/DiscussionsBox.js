import React from "react";
import SearchBar from "./SearchBar";
import Discussions from "./Discussions";

function DiscussionsBox({ setSelectedUser }) {
  return (
    <div className="w-3/12 p-5 bg-white border border-gray-200 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-xl">Discussions</h1>
        <ul className="flex items-center gap-3">
          <li className="p-1 hover:bg-gray-200 duration-150 rounded-md grid place-items-center">
            <ion-icon name="create-outline"></ion-icon>
          </li>
          <li className="p-1 hover:bg-gray-200 duration-150 rounded-md grid place-items-center">
            <ion-icon name="filter-outline"></ion-icon>
          </li>
        </ul>
      </div>
      <SearchBar />
      {/* Passer setSelectedUser ici */}
      <Discussions setSelectedUser={setSelectedUser} />
    </div>
  );
}

export default DiscussionsBox;
