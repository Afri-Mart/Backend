require("dotenv").config();

const server = require("./server.js");

const port = process.env.PORT || 3000;

server.listen(port, () => console.log(`\nAPI running on port ${port}\n`));
