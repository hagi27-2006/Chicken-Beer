import express from "express";
const router = express.Router();

import { getMenu } from "../controller/menu_controller.js";

router.route("/").get(getMenu);

export default router;