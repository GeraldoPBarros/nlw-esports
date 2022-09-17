import express from "express";

const app = express();

app.get("/ads", (request, response) => {
  return response.json([{ id: 1, name: "Teste" }, { id: 2, name: "Teste2" }]);
});

app.listen(3333);
