const express = require("express")
let app = express();

app.listen(process.env.PORT);

let port = process.env.PORT;
if (port == null || port == "") {

    port = 8000;

}

app.listen(port);

