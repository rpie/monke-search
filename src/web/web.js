/**
 * @author Conner
 * @since 22/06/21
 */

// Dependencies
import express from "express";

// Variables
const app = express();

// Routers
import {
  RootRouter,
  APIRouter
} from "./routes";

// Web Class
class Web {
  /**
   * @param {Number|String} port
   * @returns {Promise} 
   */
  static init(port) {
    return new Promise((resolve, reject) => {
      app.use("/", RootRouter);
      app.use("/api", APIRouter);

      app.listen(port, resolve).once("error", reject);
    });
  }
}

export default Web;