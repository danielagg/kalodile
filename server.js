const express = require("express");

const app = express();

app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

// Define routes
app.use(require("./routes"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

app.listen(PORT, () => console.log(`The server has started on port ${PORT}`));
