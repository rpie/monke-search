/**
 * @author Conner
 * @since 22/06/21
 */

// Dependencies
import express from "express";

// Schemas
import User from "../../../schemas/User";

// Variables
const router = express.Router();
const types = [ "id", "username", "discriminator" ]; 

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

  if(types.indexOf(type.toLowerCase()) === -1)
    return res.status(400).json({
      error: true,
      message: `Invalid TYPE parameter value\nValid: ${types.join(", ")}`
    });
    
  try {
    const users = await User.find({ [ type ]: identifier }, { _id: 0 });

    if(!users) 
      return res.status(404).json({
        error: true,
        message: `Database returned no results for: ${identifier}`
      });

    return res.status(200).json({
      error: false,
      users: users
    });  
  } catch {
    return res.status(500).json({
      error: true,
      message: "Internal server error, please try again later?"
    });
  }
});

export default router;