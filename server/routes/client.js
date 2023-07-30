import express from "express";
import {
  getProduct,
  getCustomers,
  getTransactions,
  getGeography,
  getDoctors,
  assign,
  addProduct,
  reserve
} from "../controllers/client.js";

const router = express.Router();

router.get("/products", getProduct);
router.post("/addProducts", addProduct);
router.post("/reserveBed", reserve);
router.get("/customers", getCustomers);
router.post("/assign", assign);
router.get("/customers/?role", getDoctors);
router.get("/transactions", getTransactions);
router.get("/geography", getGeography);

export default router;
