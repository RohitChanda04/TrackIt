import { where } from "sequelize";

const jobApplicationRepo = require("../repositories/JobApplicationRepo");

// Fetches all the job applications from the Repository layer
const getAllJobApplications = async () => {
  return await jobApplicationRepo.findAllJobApplications();
};

// Fetches all the job applications matching the specified parameter from the Repository layer
const getAllJobApplicationsByParameter = async (
  searchField: string,
  searchValue: string,
  from: string,
  to: string
) => {
  return await jobApplicationRepo.findAllJobApplicationsByParameter(
    searchField,
    searchValue,
    from,
    to
  );
};

// Sends arguments for a new job application to the Repository layer
const addJobApplication = async (
  company: string,
  role: string,
  location: string,
  source: string,
  date: Date,
  pay_range?: string | null,
  call?: string | null,
  progress?: string | null
) => {
  return await jobApplicationRepo.createJobApplication(
    company,
    role,
    location,
    source,
    date,
    pay_range,
    call,
    progress
  );
};

// Sends updated arguments for an existing job application to the Repository layer
const editJobApplication = async (id: number, updatedFields: object) => {
  return await jobApplicationRepo.updateJobApplication(id, updatedFields);
};

// Sends delete order for the specific job application to the Repository layer
const removeJobApplication = async (id: number) => {
  return await jobApplicationRepo.deleteJobApplication(id);
};

module.exports = {
  getAllJobApplications,
  getAllJobApplicationsByParameter,
  addJobApplication,
  editJobApplication,
  removeJobApplication,
};
