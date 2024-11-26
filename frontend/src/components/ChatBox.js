import React from "react";

function ChatBox() {
  return (
    <div className="w-9/12 border flex flex-col">
      {/* <div className="grid place-items-center text-center h-full w-full">
        <div>
          <div className="text-6xl text-gray-300">
              <ion-icon name="logo-whatsapp"></ion-icon>
          </div>
          <h1 className="text-xl">WhatsApp pour web</h1>
          <p className="text-gray-400">
            Envoyez et recevez des messages sans avoir à garder votre télephone
            connecté. <br></br>
            Utilisez WhatsApp sur un maximum de 4 appareils et 1 télephone,
            simultanement.
          </p>
        </div>
      </div> */}
      <div className="w-full flex items-center justify-between p-5 border-b">
        <div className="flex gap-3">
          <img
            className="rounded-full"
            src="https://placehold.co/40x40"
            alt=""
          />
          <h1 className="font-bold text-md">Chardey Koffi Carmel</h1>
        </div>
        <ul className="flex items-center">
          <li className="border py-1 px-2 flex gap-2 rounded-sm mr-2 cursor-pointer">
            <ion-icon name="videocam-outline"></ion-icon>
            <ion-icon name="call-outline"></ion-icon>
          </li>
          <li>
            <ion-icon name="search-outline"></ion-icon>
          </li>
        </ul>
      </div>
      <div className="flex-1 bg-cover bg-center bg-no-repeat bg-[url('https://media.istockphoto.com/id/1201667381/vector/customer-support-related-seamless-pattern-and-background-with-line-icons.jpg?s=612x612&w=0&k=20&c=Z1btZZJLEFG-Eg79Ty7sYIzzxLQx1Cp7Pqn4d-JwcH4=')]"></div>
      <div className="flex items-center gap-2 px-5 py-3 border-t">
        <div className="flex gap-3 cursor-pointer">
          <ion-icon name="happy-outline"></ion-icon>
          <ion-icon name="attach-outline"></ion-icon>
        </div>
        <div className="flex-1">
          <input
            className="w-full focus:outline-0"
            type="text"
            placeholder="Taper un message"
          />
        </div>
        <div className="cursor-pointer">
          <ion-icon name="mic-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
}

export default ChatBox;

//
