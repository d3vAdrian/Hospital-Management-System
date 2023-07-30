import express from "express";
import { login,regPatient,regEmployee } from "../controllers/auth.js";

const router = express.Router();

router.post("/", login);
router.post("/regPatient", regPatient);
router.post("/regEmployee", regEmployee);

export default router;