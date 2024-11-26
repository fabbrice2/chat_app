import React from "react";
import SearchBar from "./SearchBar";

function DiscussionsBox() {
  return (
    <div className="w-2/6 h-full flex flex-col items-start  gap-6">
      <SearchBar />
      <div className="p-3 flex-1 w-full text-white border border-gray-500 rounded-xl">
        <h1 className="text-lg font-bold">Discussions</h1>
        <div>
          <div className="flex justify-between border-b cursor-pointer border-gray-500 py-3">
            <img
              className="rounded-full"
              src="https://placehold.co/50x50"
              alt=""
            />
            <div>
              <h2 className="font-medium">Friends Forever</h2>
              <p className="text-xs text-gray-500">Good to see you.</p>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-xs text-gray-500">Yesterday, 2:55pm</span>
              <span className="h-6 w-6 grid place-items-center bg-green-600 rounded-full">
                1
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscussionsBox;
