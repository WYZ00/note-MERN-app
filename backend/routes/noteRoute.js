const express = require("express");
const {
  getAllNotes,
  createNewNote,
  updateNote,
  deleteNote,
} = require("../controllers/notesController");
const router = express.Router();

router.get("/", getAllNotes);
router.post("/", createNewNote);
router.patch("/", updateNote);
router.delete("/", deleteNote);

module.exports = router;
