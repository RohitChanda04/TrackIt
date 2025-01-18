import React, { useState } from "react";
import { addApplication } from "../services/jobApplicationService";

const AddModal = () => {
  const [data, setData] = useState({
    company: "",
    role: "",
    location: "",
    pay_range: "",
    source: "",
    date: "",
    call: "",
    progress: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const newApplication = await addApplication(data);
      window.location = "/";
    } catch (error) {
      console.log(error.message);
    }
  };

  const resetForm = () => {
    setData({
      company: "",
      role: "",
      location: "",
      pay_range: "",
      source: "",
      date: "",
      call: "",
      progress: "",
    });
  };

  return (
    <>
      <button
        type="button"
        class="btn btn-success"
        data-toggle="modal"
        data-target="#newApplicationModal"
      >
        New Application
      </button>

      <div class="modal" id="newApplicationModal" style={{ zIndex: "2000" }}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Add Application</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={resetForm}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="company"
                    value={data.company}
                    onChange={handleInputChange}
                    placeholder="Enter company name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="role"
                    value={data.role}
                    onChange={handleInputChange}
                    placeholder="Enter role"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="location"
                    value={data.location}
                    onChange={handleInputChange}
                    placeholder="Enter location"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="pay_range"
                    value={data.pay_range}
                    onChange={handleInputChange}
                    placeholder="Enter pay range"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="source"
                    value={data.source}
                    onChange={handleInputChange}
                    placeholder="Enter source"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control"
                    name="date"
                    value={data.date}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="call"
                    value={data.call}
                    onChange={handleInputChange}
                    placeholder="Enter call details"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="progress"
                    value={data.progress}
                    onChange={handleInputChange}
                    placeholder="Enter progress"
                  />
                </div>
              </form>
            </div>

            <div class="modal-footer">
              <button
                className="btn btn-success ml-1"
                onClick={(e) => onSubmitForm(e)}
              >
                Add
              </button>
              <button
                type="button"
                class="btn btn-danger ml-2"
                data-dismiss="modal"
                onClick={resetForm}
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

export default AddModal;
