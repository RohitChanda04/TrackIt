import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";

// Loading .env file from the project root
dotenv.config({ path: "../.env" });

// const user = process.env.DB_USER as string;
// const password = process.env.DB_PASSWORD as string;

// Database configuration
// const sequelize = new Sequelize("job_tracker_app_db", user, password, {
//   host: "localhost",
//   dialect: "postgres",
//   logging: false,
// });

const database_url = process.env.DATABASE_URL as string;

// Use the External Database URL from Render
const sequelize = new Sequelize(database_url, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true, // Ensure SSL connection (Render requires SSL)
      rejectUnauthorized: false, // To handle self-signed certificates from Render
    },
  },
  logging: false, // Optional: Turn off logging if not needed
});

// Testing the connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection to the database established successfully...");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

testConnection();

export default sequelize;
