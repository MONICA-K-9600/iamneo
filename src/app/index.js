const { appendFile } = require("fs")
const app = fs();
app.get('/', function(req, res) {
    res.send("working");
})
app.listen(process.env.port || 5000);