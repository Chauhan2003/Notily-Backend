import express from "express";
import { verifyToken } from "../middlewares/verifyUser.js";
import {
  addNote,
  deleteNote,
  editNote,
  getAllNotes,
  searchNote,
  updateNotePinned,
} from "../controllers/note.controller.js";

const router = express.Router();

router.post("/add", verifyToken, addNote);
router.post("/edit/:noteId", verifyToken, editNote);
router.get("/all", verifyToken, getAllNotes);
router.delete("/delete/:noteId", verifyToken, deleteNote);
router.put("/pin/:noteId", verifyToken, updateNotePinned);
router.get("/search", verifyToken, searchNote);

export default router;
