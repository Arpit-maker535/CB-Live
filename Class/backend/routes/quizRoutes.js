const express = require("express");

const Quiz = require("../models/Quiz");

const router = express.Router();

// Get all quizzes
router.get("/", async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.json(quizzes);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch Quizzes" });
  }
});

// Get quiz by id
router.get("/:id", async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      return res.status(404).json({ error: "Quiz not found" });
    }
    res.json(quiz);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch Quiz" });
  }
});

//Add a new quiz
router.post("/", async (req, res) => {
  try {
    const newQuiz = new Quiz(req.body);
    await newQuiz.save();
    return res.status(201).json(newQuiz);
  } catch (error) {
    res.status(500).json({ error: "Failed to create Quiz" });
  }
});

module.exports = router;
