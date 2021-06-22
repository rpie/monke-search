/**
 * @author Conner
 * @since 22/06/21
 */

// Dependencies
import Web from "./src/web/web";
import env from "dotenv";

// Variables
env.config();

Web.init(process.env.PORT).then(() => {
  console.log(`Bound: ${process.env.PORT}`)
}).catch(() => console.log(`Unable to bind: ${process.env.PORT}`));
