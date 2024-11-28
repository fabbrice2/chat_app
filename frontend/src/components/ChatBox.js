import React, { useEffect, useState } from "react";
import axios from "axios";

function ChatBox({ selectedUser }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (selectedUser) {
      axios
        .get(`http://localhost:3001/messages/${selectedUser.user_id}`)
        .then((response) => setMessages(response.data))
        .catch((error) =>
          console.error("Erreur lors de la récupération des messages :", error)
        );
    }
  }, [selectedUser]);

  return (
    <div className="w-9/12">
      {/* // quand l'user n'as pas encore emtamer de discussions // */}
      {!selectedUser ? (
        <div className="grid place-items-center text-center h-full w-full">
          <div>
            <div className="text-6xl text-gray-300">
              <ion-icon name="logo-whatsapp"></ion-icon>
            </div>
            <h1 className="text-xl">
              Sélectionnez un chat pour commencer à discuter
            </h1>
            <p className="text-gray-400">
              Envoyez et recevez des messages sans avoir à garder votre
              télephone connecté. <br></br>
              Utilisez WhatsApp sur un maximum de 4 appareils et 1 télephone,
              simultanement.
            </p>
          </div>
        </div>
      ) : (
        <div className="w-full h-full border flex flex-col">
          <div className="w-full flex items-center justify-between p-5 border-b">
            <div className="flex gap-3">
              <img
                className="rounded-full"
                src="https://placehold.co/40x40"
                alt="User"
              />
              <h1 className="font-bold text-md">{selectedUser?.username}</h1>
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

          <div className="flex-1 bg-[#E0E0E0] p-4 space-y-4 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.isSent ? "justify-end" : "justify-start"
                }`}
              >
                {msg.type === "text" && (
                  <div
                    className={`rounded-lg shadow-md p-3 max-w-xs ${
                      msg.isSent ? "bg-[#DCF8C6]" : "bg-white"
                    }`}
                  >
                    <p className="text-gray-800">{msg.content}</p>
                    <span className="text-gray-500 text-xs block text-right mt-1">
                      {msg.time}
                    </span>
                  </div>
                )}
                {msg.type === "image" && (
                  <div className="rounded-lg shadow-md p-2 max-w-xs bg-white">
                    <img
                      src={msg.content}
                      alt="Image"
                      className="rounded-lg object-cover w-full h-auto"
                    />
                    <span className="text-gray-500 text-xs block text-right mt-1">
                      {msg.time}
                    </span>
                  </div>
                )}
                {msg.type === "file" && (
                  <div
                    className={`rounded-lg shadow-md p-3 max-w-xs ${
                      msg.isSent ? "bg-[#DCF8C6]" : "bg-white"
                    }`}
                  >
                    <a href="#" className="text-blue-500 underline" download>
                      {msg.content}
                    </a>
                    <span className="text-gray-500 text-xs block text-right mt-1">
                      {msg.time}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

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
              <ion-icon name="send-outline"></ion-icon>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatBox;
