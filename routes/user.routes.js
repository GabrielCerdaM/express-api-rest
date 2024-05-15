import React from "react";
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json("products");
});

export default router;
