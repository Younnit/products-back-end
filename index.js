require("dotenv").config();
const express = require("express");
const massive = require("massive");

const app = express();

const {SERVER_PORT, CONNECTION_STRING} = process.env;

app.use(express.json());

massive({
    connection_string: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then((db) => {
    app.set("db", db)
}).catch(err => console.log(err))

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}.`);
});

