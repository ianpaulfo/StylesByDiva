// server/indes.js

const path = require('path');
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(_dirname, '../Styles by Diva app/client/build')));

app.get("/api", (req, res) => {
    res.json({ message: "Styles By Diva"});
});


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
   
});