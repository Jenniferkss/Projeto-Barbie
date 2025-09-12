import express from "express";
import {getAllBarbies, getBarbiesById} from "./../controllers/barbieController.js"

const router = express.Router();
router.get("/",getAllBarbies);
router.get("/:id",getBarbiesById);






export default router;