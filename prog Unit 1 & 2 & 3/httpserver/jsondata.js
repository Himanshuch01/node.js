const http = require("http");

const server = http.createServer ((req,res)=> {
    res.writeHead(200,{"content-type": "application/json"});

    if (req.url === "/student") {
        const student = {
            name: "amit",
            age: 20,
            course: "mca"
        };
        res.end(json.stringify(student));
        }
    }
})