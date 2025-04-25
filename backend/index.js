const express = require("express");
const cors=require("cors");

app.use(cors());
app.use(express.json());

const mainRouter=require("./routes/index");

const app=express()


app.use("/api/v1",mainRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});