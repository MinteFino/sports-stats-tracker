/**
 * Database Configuration
 * Establishes connection to MySQL database using Sequelize ORM
 * Credentials are read from environment variables in .env file
 */

const {Sequelize} = require("sequelize");
require("dotenv").config();

// Initialize Sequelize with database connection details
// Takes: database name, username, password, and host/dialect options
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: "mysql",
        logging: false
    }
);

// Export the sequelize instance for use in models and server intiialization
module.exports = sequelize;