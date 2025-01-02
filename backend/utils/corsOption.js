const cors = require("cors"); 

const corsOption = {
    origin: "http://localhost:5000",
    methods: "GET, HEAD, PUT, POST, DELETE, PATCH",
    credentials: true,
}

module.exports = corsOption; 