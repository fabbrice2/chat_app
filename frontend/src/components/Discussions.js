import React from "react";

function Discussions() {
  return (
    <div className="h-full overflow-y-scroll">
      {Array.from({ length: 25 }).map((_, index) => (
        <div
          key={index}
          className="flex items-center p-2 hover:bg-gray-200 cursor-pointer duration-300 rounded-md"
        >
          <div className="flex items-center gap-3 flex-1">
            <img
              className="rounded-full"
              src="https://placehold.co/35x35"
              alt=""
            />
            <div className="flex-1">
              <h1 className="text-sm">Chardery</h1>
              <p className="text-xs truncate w-36">
                Ok, Courage et bonne chance
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-sm">07:36</span>
            <span className="h-4 w-4 grid place-items-center bg-green-700 text-xs text-white rounded-full">
              1
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Discussions;
