import { Console } from "console";

const express = require("express");

const {
  getApplications,
  getApplicationsByParameter,
  addApplication,
  editApplication,
  removeApplication,
} = require("../controllers/JobApplicationController");

const router = express.Router();

router.put("/edit-application/:id", editApplication);
router.get("/search", getApplicationsByParameter);
router.get("/", getApplications);
router.post("/add-application", addApplication);
router.delete("/delete-application/:id", removeApplication);

module.exports = router;
