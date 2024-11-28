const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(cors());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "chat_app",
});

connection.connect((error) => {
  if (error) {
    console.error("Error connecting to MySQL database:", error);
  } else {
    console.log("Connected to MySQL database!");
  }
});

app.post("/login", (req, res) => {
  const { username } = req.body;

  // Vérifier si l'utilisateur existe déjà dans la base de données
  const query = "SELECT * FROM users WHERE username = ?";
  connection.query(query, [username], (err, results) => {
    // Remplacer db.query par connection.query
    if (err) {
      return res.status(500).send({ message: "Erreur serveur", error: err });
    }

    if (results.length > 0) {
      // Si l'utilisateur existe, on le connecte
      const existingUser = results[0]; // Récupère l'utilisateur
      res
        .status(200)
        .send({ message: "Connexion réussie", user: existingUser });
    } else {
      // Si l'utilisateur n'existe pas, on le crée
      const queryInsert = "INSERT INTO users (username) VALUES (?)";
      connection.query(queryInsert, [username], (err, result) => {
        // Remplacer db.query par connection.query
        if (err) {
          return res.status(500).send({
            message: "Erreur lors de la création de l'utilisateur",
            error: err,
          });
        }

        // Créer un nouvel utilisateur
        const newUser = { username, id: result.insertId };
        res
          .status(201)
          .send({ message: "Utilisateur créé et connecté", user: newUser });
      });
    }
  });
});

app.get("/users-with-last-message", (req, res) => {
  const query = `
    SELECT 
      u.id AS user_id, 
      u.username, 
      u.bio, 
      m.content AS last_message, 
      m.sent_at AS last_message_time
    FROM users u
    LEFT JOIN participants p ON u.id = p.user_id
    LEFT JOIN (
      SELECT conversation_id, content, sent_at
      FROM messages
      WHERE id IN (
        SELECT MAX(id)
        FROM messages
        GROUP BY conversation_id
      )
    ) m ON p.conversation_id = m.conversation_id
    GROUP BY u.id
    ORDER BY m.sent_at IS NULL, m.sent_at DESC; -- NULLS LAST
  `;

  connection.query(query, (err, results) => {
    if (err) {
      console.error("Erreur lors de l'exécution de la requête :", err);
      return res.status(500).send({ message: "Erreur serveur", error: err });
    }
    console.log("Résultats retournés :", results);
    res.status(200).send(results);
  });
});

app.get("/messages/:userId", (req, res) => {
  const { userId } = req.params;

  const query = `
    SELECT m.content, m.type, m.sent_at AS time, 
           CASE WHEN m.sender_id = ? THEN 1 ELSE 0 END AS isSent
    FROM messages m
    WHERE m.conversation_id IN (
      SELECT conversation_id
      FROM participants
      WHERE user_id = ?
    )
    ORDER BY m.sent_at ASC;
  `;

  connection.query(query, [userId, userId], (err, results) => {
    if (err) {
      return res
        .status(500)
        .send({
          message: "Erreur lors de la récupération des messages",
          error: err,
        });
    }
    res.status(200).send(results);
  });
});



app.get("/search-users/:query", (req, res) => {
  const { query } = req.params;

  const searchQuery = `
    SELECT id, username
    FROM users
    WHERE username LIKE ?
  `;

  connection.query(searchQuery, [`%${query}%`], (err, results) => {
    if (err) {
      return res.status(500).send({ message: "Erreur serveur", error: err });
    }

    res.status(200).send({ users: results });
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
