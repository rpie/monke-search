/**
 * @author Conner
 * @since 22/06/21
 */

// Dependencies
import env from "dotenv";

// Utils
import Web from "./src/web/web";
import Database from "./src/utils/database";
import Logger from "./src/utils/logger";

// Variables
env.config();

Web.init(process.env.PORT).then(async () => {
  if(!await Database.init(process.env.MONGO_URL)) Logger.error("database", "Unable to intialise connection to the MongoDB server!");
  else Logger.log("database", "Succesfully initalised connection to the MongoDB server!"); 

  Logger.log("web", `Listening on port: ${process.env.PORT}`);
}).catch(() => Logger.error("web", "Unable to bind!"));