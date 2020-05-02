const express = require("express")
let app = express();



let port = process.env.PORT;
if (port == null || port == "") {

    port = 8000;

}

app.listen(port);

