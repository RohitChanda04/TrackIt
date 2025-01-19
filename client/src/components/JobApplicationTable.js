import React, { useEffect, useState } from "react";
import {
  getAllApplications,
  getAllApplicationsByParameter,
} from "../services/jobApplicationService";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";

const formatDate = (date) => {
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  return new Date(date).toLocaleDateString("en-US", options); // MM/DD/YYYY
};

const JobApplicationTable = ({ searchField, searchValue, from, to }) => {
  const [applications, setApplications] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState(null);
  // eslint-disable-next-line
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        let data;

        if (searchField && searchValue)
          data = await getAllApplicationsByParameter(
            searchField,
            searchValue,
            null,
            null
          );
        else if (from && to)
          data = await getAllApplicationsByParameter(null, null, from, to);
        else if (from)
          data = await getAllApplicationsByParameter(null, null, from, null);
        else if (to)
          data = await getAllApplicationsByParameter(null, null, null, to);
        else data = await getAllApplications();

        // Format date before sending to frontend
        const formattedApplications = data.map((application) => ({
          ...application,
          date: formatDate(application.date),
        }));

        // setApplications(data);
        setApplications(formattedApplications);
      } catch (error) {
        console.log(
          "Error fetching applications from React Service layer..",
          error
        );
      }
    };

    fetchApplications();
  }, [searchField, searchValue, from, to]);

  function handleEditClick(application) {
    setSelectedApplication(application);
    setIsModalOpen(true);

    console.log("Inside HANDLE EDIT");
  }

  const handleDeleteClick = (application) => {
    setSelectedApplication(application);
    setIsModalOpen(true);
  };

  const handleModalClose = (application) => {
    setSelectedApplication(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <div style={{ backgroundColor: "#106569" }}>
        {/* <h1 className='text-center mt-3' style={{color: "white"}}>Job Applications</h1> */}
        <div
          className="d-flex mt-3"
          style={{
            margin: "auto",
            borderRadius: "10px",
            maxHeight: "775px",
            maxWidth: "97%",
            overflowY: "auto",
          }}
        >
          <table class="table table-hover text-center">
            <thead className="thead-light">
              <tr class="table text-dark" style={{ background: "#0d5053" }}>
                <th
                  style={{
                    position: "sticky",
                    top: "0",
                    zIndex: "1",
                  }}
                >
                  <b>Company</b>
                </th>
                <th
                  style={{
                    position: "sticky",
                    top: "0",
                    zIndex: "1",
                  }}
                >
                  <b>Role</b>
                </th>
                <th
                  style={{
                    position: "sticky",
                    top: "0",
                    zIndex: "1",
                  }}
                >
                  <b>Location</b>
                </th>
                <th
                  style={{
                    position: "sticky",
                    top: "0",
                    zIndex: "1",
                  }}
                >
                  <b>Pay Range</b>
                </th>
                <th
                  style={{
                    position: "sticky",
                    top: "0",
                    zIndex: "1",
                  }}
                >
                  <b>Source</b>
                </th>
                <th
                  style={{
                    position: "sticky",
                    top: "0",
                    zIndex: "1",
                  }}
                >
                  <b>Date</b>
                </th>
                <th
                  style={{
                    position: "sticky",
                    top: "0",
                    zIndex: "1",
                  }}
                >
                  <b>Call</b>
                </th>
                <th
                  style={{
                    position: "sticky",
                    top: "0",
                    zIndex: "1",
                  }}
                >
                  <b>Progress</b>
                </th>
                <th
                  style={{
                    position: "sticky",
                    top: "0",
                    zIndex: "1",
                  }}
                >
                  <b>Edit</b>
                </th>
                <th
                  style={{
                    position: "sticky",
                    top: "0",
                    zIndex: "1",
                  }}
                >
                  <b>Delete</b>
                </th>
              </tr>
            </thead>
            <tbody>
              {applications.map((application) => (
                <tr key={application.id} class="table-info">
                  <td>{application.company}</td>
                  <td>{application.role}</td>
                  <td>{application.location}</td>
                  <td>
                    {application.pay_range !== "null"
                      ? application.pay_range
                      : ""}
                  </td>
                  <td>{application.source}</td>
                  <td>{application.date}</td>
                  <td>{application.call !== "null" ? application.call : ""}</td>
                  <td>
                    {application.progress !== "null"
                      ? application.progress
                      : ""}
                  </td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-info"
                      data-toggle="modal"
                      data-target={`#edit-id${application.id}`}
                      onClick={() => handleEditClick(application)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-danger"
                      data-toggle="modal"
                      data-target={`#delete-id${application.id}`}
                      onClick={() => handleDeleteClick(application)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {isModalOpen && selectedApplication && (
          <EditModal
            application={selectedApplication}
            onClose={handleModalClose}
          />
        )}

        {isModalOpen && selectedApplication && (
          <DeleteModal
            application={selectedApplication}
            onClose={handleModalClose}
          />
        )}
      </div>
    </>
  );
};

export default JobApplicationTable;
