/**
 * @author Conner
 * @since 22/06/21
 */

// Dependencies
import Web from "./src/web/web";

// Variables
import config from "./data/config.json";

Web.init(config.port).then(() => {
  console.log(`Bound: ${config.port}`)
}).catch(() => console.log(`Unable to bind: ${config.port}`));
