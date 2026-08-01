import express from "express";

const router = express.Router();

// Página inicial da API
router.get("/", (req, res) => {
  res.json({
    mensagem: "API ConnectMoz258 funcionando!",
    sistema: "ConnectVendas + MotoExpress"
  });
});

export default router;
