import React from "react";

function ChatBox() {
  const messages = [
    { type: 'text', content: 'Salut tchale lema? Ta santé ?', time: '14:07', isSent: false },
    { type: 'text', content: 'Bonsoir Tchaley cdq Ça s’est pas amélioré mais trkl on taff stv', time: '17:16', isSent: true },
    { type: 'image', content: 'https://placehold.co/150x100', time: '17:30', isSent: false },
    { type: 'text', content: '😊🎉', time: '18:10', isSent: false },
    { type: 'file', content: 'Télécharger le document.pdf', time: '18:00', isSent: true },
  ];

  return (
    <div className="w-9/12 border flex flex-col">
      {/* Header */}
      <div className="w-full flex items-center justify-between p-5 border-b">
        <div className="flex gap-3">
          <img className="rounded-full" src="https://placehold.co/40x40" alt="User" />
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

      {/* Messages */}
      <div className="flex-1 bg-[#E0E0E0] p-4 space-y-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.isSent ? 'justify-end' : 'justify-start'}`}>
            {msg.type === 'text' && (
              <div className={`rounded-lg shadow-md p-3 max-w-xs ${msg.isSent ? 'bg-[#DCF8C6]' : 'bg-white'}`}>
                <p className="text-gray-800">{msg.content}</p>
                <span className="text-gray-500 text-xs block text-right mt-1">{msg.time}</span>
              </div>
            )}
            {msg.type === 'image' && (
              <div className="rounded-lg shadow-md p-2 max-w-xs bg-white">
                <img src={msg.content} alt="Image" className="rounded-lg object-cover w-full h-auto" />
                <span className="text-gray-500 text-xs block text-right mt-1">{msg.time}</span>
              </div>
            )}
            {msg.type === 'file' && (
              <div className={`rounded-lg shadow-md p-3 max-w-xs ${msg.isSent ? 'bg-[#DCF8C6]' : 'bg-white'}`}>
                <a href="#" className="text-blue-500 underline" download>{msg.content}</a>
                <span className="text-gray-500 text-xs block text-right mt-1">{msg.time}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Input Bar */}
      <div className="flex items-center gap-2 px-5 py-3 border-t">
        <div className="flex gap-3 cursor-pointer">
          <ion-icon name="happy-outline"></ion-icon>
          <ion-icon name="attach-outline"></ion-icon>
        </div>
        <div className="flex-1">
          <input className="w-full focus:outline-0" type="text" placeholder="Taper un message" />
        </div>
        <div className="cursor-pointer">
          <ion-icon name="mic-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
}

export default ChatBox;
