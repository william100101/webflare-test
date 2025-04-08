const express = require("express");
const app = express();
const cos = require("cors");
const corsOptions = {
    origin: ["http://localhost:5173"] // update if you change client port
}

app.use(cors(corsOptions));

app.get("/api", (req, res) => {
 
    

})

app.listen(8080, () => {
    console.log("Server started on port 8080");
})