import express from "express";
import { getUwConfig } from "../controllers/env.controller.js";

const router = express.Router();

router.get("/", getUwConfig);

export default router;


