import express = require("express");
const cors = require("cors");
const router = require("./routes/JobApplicationRoutes");
import sequelize from "./config/db";

// Initializing the Express app
const app = express();

// Middleware to parse JSON requests
app.use(
  cors({
    origin: ["https://trackit-412l.onrender.com"],
  })
);
app.use(express.json());

// Routes
app.use("/applications", router);

// Starting the server on the port
const PORT = process.env.PORT || 4000;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected...");
    await sequelize.sync();

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

startServer();
