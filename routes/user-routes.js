import express from "express";
import  {home , authreg}  from "../controllers/user-controller.js";
const router = express.Router();

router.get("/" , home)
router.get("/authreg" , authreg)


export default router