import React, { useState } from "react";
import { deleteApplication } from "../services/jobApplicationService";

const DeleteModal = ({ application, onClose }) => {
  console.log("INSIDE DELETE MODAL");
  const [applications, setApplications] = useState([]);

  // Initializing state with the existing data
  const [data, setData] = useState({
    id: application.id,
    company: application.company,
    role: application.role,
    location: application.location,
    pay_range: application.pay_range !== "null" ? application.pay_range : "",
    source: application.source,
    date: application.date,
    call: application.call !== "null" ? application.call : "",
    progress: application.progress !== "null" ? application.progress : "",
  });

  const handleDelete = async (id) => {
    try {
      console.log("XXXXXXXXX: ", data.id);
      const deletedApplication = await deleteApplication(data.id);
      console.log(deletedApplication.company);

      setApplications(
        applications.filter((application) => application.id !== id)
      );
      onClose(deleteApplication);
      window.location = "/";
    } catch (error) {
      console.log("Failed to delete - frontend error: ", error);
    }
  };

  if (!application) return null;

  return (
    <>
      {/* <button
                type="button"class="btn btn-info"
                data-toggle="modal"
                data-target={`#edit-id${application.id}`}
            >
                    Edit
            </button> */}

      <div class="modal" id={`delete-id${application.id}`}>
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">
                <b>Delete Application</b>
              </h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() =>
                  setData({
                    id: application.id,
                    company: application.company,
                    role: application.role,
                    location: application.location,
                    pay_range: application.pay_range || "",
                    source: application.source,
                    date: application.date,
                    call: application.call || "",
                    progress: application.progress || "",
                  })
                }
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
              <form>
                <div className="form-group">
                  <label>
                    <b>Company</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="company"
                    value={data.company}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label>
                    <b>Role</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="role"
                    value={data.role}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label>
                    <b>Location</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="location"
                    value={data.location}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label>
                    <b>Pay Range</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="pay_range"
                    value={data.pay_range || ""}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label>
                    <b>Source</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="source"
                    value={data.source}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label>
                    <b>Date</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="date"
                    value={data.date}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label>
                    <b>Call</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="call"
                    value={data.call || ""}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label>
                    <b>Progress</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="progress"
                    value={data.progress || ""}
                    readOnly
                  />
                </div>
              </form>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-info"
                data-dismiss="modal"
                onClick={(e) => handleDelete(application.id)}
              >
                Delete
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() =>
                  setData({
                    id: application.id,
                    company: application.company,
                    role: application.role,
                    location: application.location,
                    pay_range: application.pay_range || "",
                    source: application.source,
                    date: application.date,
                    call: application.call || "",
                    progress: application.progress || "",
                  })
                }
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteModal;
