const express = require("express");
var cors = require('cors');
const { readRouter } = require("./src/routers/readRouter");

const app = express();

const port = process.env.PORT || 3500;

app.use(express.json());
app.use(cors());
//app.use(taskRouter);
//app.use(userRouter);

app.use(readRouter);





app.listen(port, () => {
 console.log("Server is up on port :: " + port);
});