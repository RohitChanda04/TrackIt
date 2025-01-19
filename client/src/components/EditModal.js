import React, { useEffect, useState } from "react";
import { editApplication } from "../services/jobApplicationService";

const EditModal = ({ application, onClose }) => {
  console.log("INSIDE EDIT MODAL");
  // Initializing state with the existing data
  const [data, setData] = useState({
    id: "",
    company: "",
    role: "",
    location: "",
    pay_range: "",
    source: "",
    date: "",
    call: "",
    progress: "",
  });

  useEffect(() => {
    if (application) {
      setData({
        id: application.id,
        company: application.company,
        role: application.role,
        location: application.location,
        pay_range:
          application.pay_range !== "null" ? application.pay_range : "",
        source: application.source,
        date: application.date
          ? new Date(application.date).toISOString().split("T")[0]
          : "",
        call: application.call !== "null" ? application.call : "",
        progress: application.progress !== "null" ? application.progress : "",
      });
    }
  }, [application]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSumbit = async (e) => {
    e.preventDefault();

    try {
      const updatedApplication = await editApplication(data.id, data);

      setData({
        id: updatedApplication.id,
        company: updatedApplication.company,
        role: updatedApplication.role,
        location: updatedApplication.location,
        pay_range: updatedApplication.pay_range || "",
        source: updatedApplication.source,
        date: updatedApplication.date,
        call: updatedApplication.call || "",
        progress: updatedApplication.progress || "",
      });

      onClose(updatedApplication);
      window.location = "/";
    } catch (error) {
      console.log("Failed to update - frontend error: ", error);
    }
  };

  if (!application) return null;

  console.log(application.company);
  console.log(application.id);

  return (
    <>
      <div class="modal" id={`edit-id${application.id}`}>
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">
                <b>Edit Application</b>
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
                    pay_range:
                      application.pay_range !== "null"
                        ? application.pay_range
                        : "",
                    source: application.source,
                    date: application.date,
                    call: application.call !== "null" ? application.call : "",
                    progress:
                      application.progress !== "null"
                        ? application.progress
                        : "",
                  })
                }
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
              <form onSubmit={handleSumbit}>
                <div className="form-group">
                  <label>
                    <b>Company</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="company"
                    value={data.company}
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>
                    <b>Date</b>
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    name="date"
                    value={data.date}
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
                  />
                </div>
              </form>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-info"
                data-dismiss="modal"
                onClick={handleSumbit}
              >
                Edit
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

export default EditModal;
