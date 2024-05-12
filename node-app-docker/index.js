const http = require("http");

http.createServer( (req,res) => {
    console.log("req receive");
    res.end("omg hi", "utf-8");
})
.listen(3000);

console.log("server started");

