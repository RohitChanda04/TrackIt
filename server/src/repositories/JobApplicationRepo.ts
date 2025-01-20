import { Op } from "sequelize";
import JobApplication from "../models/JobApplication";

// Fetches all the job applications
const findAllJobApplications = async () => {
  return await JobApplication.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"] },
    order: [["date", "DESC"]],
  });
};

// Fetches job applications with the specified parameter
const findAllJobApplicationsByParameter = async (
  searchField: string,
  searchValue: string,
  from: string,
  to: string
) => {
  let whereClause: Record<string, any> = {};

  // Handling date range queries
  if (from && to) {
    whereClause.date = { [Op.between]: [from, to] }; // Range query between 'from' and 'to'
  } else if (from) {
    whereClause.date = { [Op.gte]: from }; // Greater than or equal to 'from'
  } else if (to) {
    whereClause.date = { [Op.lte]: to }; // Less than or equal to 'to'
  } else if (searchField !== "date") {
    whereClause = {
      [searchField]: { [Op.like]: `%${searchValue}%` }, // Partial match for the selected field
    };
  } else whereClause = { [searchField]: `${searchValue}` };

  console.log("whereClause: " + whereClause);

  return await JobApplication.findAll({
    where: whereClause,
    attributes: { exclude: ["createdAt", "updatedAt"] },
  });
};

// Creates a new job application entry into the DB
const createJobApplication = async (
  company: string,
  role: string,
  location: string,
  source: string,
  date: Date,
  pay_range?: string | null,
  call?: string | null,
  progress?: string | null
) => {
  return await JobApplication.create({
    company,
    role,
    location,
    source,
    date,
    pay_range,
    call,
    progress,
  });
};

// Edits an existing job application
const updateJobApplication = async (id: number, updatedFields: object) => {
  const application = await JobApplication.findByPk(id);

  if (!application) return null;

  return await application.update(updatedFields);
};

// Deletes an existing job applicaiton from the DB
const deleteJobApplication = async (id: number) => {
  return await JobApplication.destroy({ where: { id: id } });
};

module.exports = {
  findAllJobApplications,
  findAllJobApplicationsByParameter,
  createJobApplication,
  updateJobApplication,
  deleteJobApplication,
};
