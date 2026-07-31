import express from "express";

const app = express();

// Permitir receber JSON
app.use(express.json());

// Página inicial
app.get("/", (req, res) => {
  res.json({
    projeto: "ConnectMoz258",
    sistema: "ConnectVendas + MotoExpress",
    status: "Online",
    versao: "1.0.0"
  });
});

export default app;
