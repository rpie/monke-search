/**
 * @author Conner
 * @since 22/06/21
 */

// Dependencies
import mongoose from "mongoose";

// Database Class
class Database {
  /**
   * @param {String} url
   * @returns {Promise<Boolean>}  
   */
  static async init(url) {
    try {
      await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      });

      return true;
    } catch {
      return false;
    }
  }
}

export default Database;