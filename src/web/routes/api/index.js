/**
 * @author Conner
 * @since 22/06/21
 */

// Dependencies
import express from "express";

// Utils
import Database from "../../../utils/database";

// Schemas
import User from "../../../schemas/User";

// Variables
const router = express.Router();

router.get("/", (req, res) => {
  return res.status(200).json({
    error: false,
    message: "Welcome to monke-search API!"
  });
});

router.get("/query", async (req, res) => {
  const { type, identifier } = req.query;

  if(!type || !identifier) 
    return res.status(400).json({
      error: true,
      message: "Please provide a TYPE paramater and an IDENTIFIER parameter!",
      query: req.query
    });

  const user = await User.findOne({ id: identifier }, { _id: 0 });
    
  if(!user) 
    return res.status(404).json({
      error: true,
      message: `Database returned no results for: ${identifier}`
    });

  return res.status(200).json({
    error: false,
    user
  });
});

export default router;