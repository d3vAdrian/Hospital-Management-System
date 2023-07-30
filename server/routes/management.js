import express from "express";
import {getBeds, getWard, getAdmins, getUserPerformance, getDoctors,getPatients ,getAppt} from "../controllers/management.js";

const router = express.Router();

router.get("/admins", getAdmins);
router.get("/appt", getAppt);
router.get("/bed", getBeds);
router.get("/ward", getWard);
router.get("/doctors", getDoctors);
router.get("/patients", getPatients);
router.get("/performance/:id", getUserPerformance);

export default router;
