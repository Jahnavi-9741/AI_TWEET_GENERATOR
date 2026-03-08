import axios from "axios";

export const generateTweetsAPI = async (payload) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/generate-tweets",
      payload
    );

    return response.data;

  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to connect to server"
    );
  }
};