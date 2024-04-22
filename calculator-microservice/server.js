const express = require("express");
const app = express();
const { fnaddition, fnsubtraction, fndivision, fnmultiplication } = require("./calculator");

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.post("/api/add", fnaddition);
app.post("/api/substract", fnsubtraction);
app.post("/api/multipy", fnmultiplication);
app.post("/api/divide", fndivision);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
