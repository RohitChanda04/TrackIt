import { Request, Response } from "express";
import { Op } from "sequelize";

const jobApplicationService = require("../services/JobApplicationService");

// Forwards request to the Service layer to fetch all job applications
const getApplications = async (req: Request, res: Response) => {
  try {
    console.log("CONTROLLER get all...............");
    const applications = await jobApplicationService.getAllJobApplications();
    res.status(200).json(applications);
  } catch (error) {
    console.error("Error fetching job applications:", error);
    res.status(500).json({ message: "Failed to fetch job applications" });
  }
};

// Forwards request to the Service layer to fetch all job applications matching specified parameter
const getApplicationsByParameter = async (req: Request, res: Response) => {
  const { searchField, searchValue } = req.query;

  try {
    if (!searchField || !searchValue) {
      return res
        .status(400)
        .json({ error: "Missing searchField or searchValue" });
    }

    const applications =
      await jobApplicationService.getAllJobApplicationsByParameter(
        searchField,
        searchValue
      );
    res.status(200).json(applications);
  } catch (error) {
    console.error("Error fetching job applications:", error);
    res.status(500).json({ message: "Failed to fetch job applications" });
  }
};

// Forwards request to the Service layer to add a new job application
const addApplication = async (req: Request, res: Response) => {
  const { company, role, location, source, date, pay_range, call, progress } =
    req.body;

  try {
    const newApplication = await jobApplicationService.addJobApplication(
      company,
      role,
      location,
      source,
      new Date(date),
      pay_range,
      call,
      progress
    );
    res.status(201).json(newApplication);
  } catch (error) {
    console.error("Error adding job application:", error);
    res.status(500).json({ message: "Failed to add job application" });
  }
};

// Forwards request to the Service layer to edit an existing job application
const editApplication = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedFields = req.body;

  try {
    if (!updatedFields || Object.keys(updatedFields).length === 0) {
      return res.status(400).json({
        error:
          "Invalid request. Please provide an ID and at least one field to update.",
      });
    }

    const updatedApplication = await jobApplicationService.editJobApplication(
      id,
      updatedFields
    );

    if (updatedApplication) {
      res.status(200).json({
        message: "Job application updated successfully",
        updatedApplication,
      });
    } else {
      res.status(404).json({ message: "Job application not found" });
    }
  } catch (error) {
    console.error("Error updating job application:", error);
    res.status(500).json({ message: "Failed to update job application" });
  }
};

// Forwards request to the Service layer to delete the specific job application
const removeApplication = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deleted = await jobApplicationService.removeJobApplication(id);

    if (deleted) res.status(200).json("Job application deleted successfully!");
    else res.status(404).json("Job application not found!");
  } catch (error) {
    console.error("Error deleting job application:", error);
    res.status(500).json({ message: "Failed to delete job application" });
  }
};

module.exports = {
  getApplications,
  getApplicationsByParameter,
  addApplication,
  editApplication,
  removeApplication,
};
