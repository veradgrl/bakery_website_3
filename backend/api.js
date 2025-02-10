const client = require("./connection.js");
const express = require("express");
const cors = require('cors');
const app = express();

app.use(cors());
// Bağlantı sağlanmadan API'yi başlatma

app.use(cors({
  origin: 'http://localhost:3000', // Sadece bu kaynaktan gelen isteklere izin ver
}));

client
  .connect()
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err.stack);
    process.exit(1); // Veritabanı bağlantısı sağlanamazsa uygulama sonlandırılır.
  });

app.listen(3300, () => {
  console.log('Backend running on http://localhost:3300');
});

// get all cakes
app.get("/cakes", (req, res) => {
  client.query(`SELECT * FROM cakes`, (err, result) => {
    if (err) {
      // Daha ayrıntılı hata mesajı
      console.error("Error executing query", err.stack);
      res.status(500).send(`Error retrieving data: ${err.message}`);
    } else {
      res.send(result.rows);
    }
  });
});

// get cakes by id
app.get("/cakes/:id", (req, res) => {
  client.query(
    `SELECT * FROM cakes where id=${req.params.id}`,
    (err, result) => {
      if (err) {
        // Daha ayrıntılı hata mesajı
        console.error("Error executing query", err.stack);
        res.status(500).send(`Error retrieving data: ${err.message}`);
      } else {
        res.send(result.rows);
      }
    }
  );
});



app.use(express.json()); // JSON verisini parse etmek için

// Post cakes
app.post("/cakes", (req, res) => {
  const { id, category, title, price, intro, ingredients } = req.body;

  const insertQuery = `
    INSERT INTO cakes(id, category, title, price, intro, ingredients)
    VALUES($1, $2, $3, $4, $5, $6)
  `;

  const values = [id, category, title, price, intro, ingredients];

  client.query(insertQuery, values, (err, result) => {
    if (!err) {
      res.send("Insertion was successful");
    } else {
      console.error("Error inserting data:", err.message);
      res.status(500).send("Error inserting data");
    }
  });
});

// update cakes
app.put("/cakes/:id", (req, res) => {
  const cake = req.body;
  const updateQuery = `UPDATE cakes 
                        SET category = $1, title = $2, price = $3, intro = $4, ingredients = $5 
                        WHERE id = $6`;

  const values = [
    cake.category,
    cake.title,
    cake.price,
    cake.intro,
    cake.ingredients,
    req.params.id,
  ];

  client.query(updateQuery, values, (err, result) => {
    if (!err) {
      res.send("Update was successful");
    } else {
      console.error("Error updating data:", err.message);
      res.status(500).send(`Error updating data: ${err.message}`);
    }
  });
});

// delete cakes
app.delete('/cakes/:id', (req, res) => {
  const deleteQuery = 'DELETE FROM cakes WHERE id = $1';
  const values = [req.params.id];

  client.query(deleteQuery, values, (err, result) => {
    if (!err) {
      if (result.rowCount === 0) {
        res.status(404).send('No cake found with the given ID');
      } else {
        res.send('Deletion was successful');
      }
    } else {
      console.error('Error deleting data:', err.message);
      res.status(500).send(`Error deleting data: ${err.message}`);
    }
  });
});

