import React, { useState, useEffect } from "react";
import Dashboard from "./Pages/Dashboard";
import LoginPage from "./Pages/LoginPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setCurrentUser(savedUser);
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (user) => {
    setCurrentUser(user);
    setIsLoggedIn(true);
    localStorage.setItem("user", JSON.stringify(user));
  };

  return (
    <div>
      {!isLoggedIn ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <Dashboard currentUser={currentUser} />
      )}
    </div>
  );
}

export default App;
