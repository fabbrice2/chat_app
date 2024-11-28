import React, { useEffect, useState } from "react";
import axios from "axios";

function Discussions({ setSelectedUser }) {
  const [usersWithMessages, setUsersWithMessages] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/users-with-last-message")
      .then((response) => {
        setUsersWithMessages(response.data);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des utilisateurs :",
          error
        );
      });
  }, []);

  return (
    <div className="h-full overflow-y-scroll">
      {usersWithMessages.length > 0 ? (
        usersWithMessages.map((user) => (
          <div
            key={user.user_id}
            className="flex items-center p-2 hover:bg-gray-200 cursor-pointer duration-300 rounded-md border-b"
            onClick={() => setSelectedUser(user)} // Passer l'utilisateur sélectionné
          >
            <div className="flex items-center gap-3 flex-1">
              <img
                className="rounded-full"
                src="https://placehold.co/35x35"
                alt="Avatar utilisateur"
              />
              <div className="flex-1">
                <h1 className="text-sm">{user.username}</h1>
                <p className="text-xs truncate w-36">
                  {user.last_message || "Aucun message"}
                </p>
              </div>
            </div>
            {user.last_message_time && (
              <div className="flex flex-col items-end">
                <span className="text-sm">
                  {new Date(user.last_message_time).toLocaleTimeString(
                    "fr-FR",
                    {
                      hour: "2-digit",
                      minute: "2-digit",
                    }
                  )}
                </span>
                <span className="h-4 w-4 grid place-items-center bg-green-700 text-xs text-white rounded-full">
                  1
                </span>
              </div>
            )}
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">Aucun utilisateur trouvé.</p>
      )}
    </div>
  );
}

export default Discussions;
