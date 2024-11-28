import React, { useState } from "react";

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username }),
      });
      const data = await response.json();

      if (response.ok) {
        if (onLogin) onLogin(data.user);
      } else {
        setErrorMessage(data.message || "Erreur lors de la connexion.");
      }
    } catch (error) {
      setErrorMessage("Impossible de se connecter. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-4">
          Saisissez votre nom d'utilisateur
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Veuillez entrer votre nom d'utilisateur pour continuer.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-gray-700 font-medium"
            >
              Nom d'utilisateur
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Entrez votre nom d'utilisateur"
              required
            />
          </div>
          {errorMessage && (
            <div className="text-red-500 text-sm">{errorMessage}</div>
          )}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 rounded-lg ${
              loading
                ? "bg-gray-400"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
          >
            {loading ? "Chargement..." : "Suivant"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
