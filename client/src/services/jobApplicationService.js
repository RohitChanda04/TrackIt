import axios from "axios";

const API_URL = "http://localhost:3002/applications";

export const getAllApplications = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.log("Error fetching applications: ", error);
  }
};

export const getAllApplicationsByParameter = async (
  searchField,
  searchValue
) => {
  try {
    const response = await axios.get(`${API_URL}/search`, {
      params: { searchField, searchValue },
    });
    return response.data;
  } catch (error) {
    console.log("Error fetching applications: ", error);
  }
};

export const addApplication = async (applicationData) => {
  try {
    const response = await axios.post(
      `${API_URL}/add-application`,
      applicationData
    );
    return response.data;
  } catch (error) {
    console.log("Error adding application: ", error);
  }
};

export const editApplication = async (id, updatedFields) => {
  try {
    const response = await axios.put(
      `${API_URL}/edit-application/${id}`,
      updatedFields
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("Error updating application: ", error);
  }
};

export const deleteApplication = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/delete-application/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error deleting application: ", error);
  }
};
