const io = require("socket.io-client");
const socket = io("http://localhost:5000/");

socket.on("connect", () => {
    console.log(socket.id);

    setInterval(() => {
        socket.emit("test", {data:"test"});
    }, 1000);
});  

