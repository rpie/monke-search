/**
 * @author Conner
 * @since 22/06/21
 */

// Dependencies
import express from "express";

// Variables
const router = express.Router();

router.get("/", (req, res) => {
  return res.status(200).json({
    error: false,
    message: "Welcome to monke-search API!"
  });
});

export default router;