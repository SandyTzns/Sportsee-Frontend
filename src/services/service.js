import axios from "axios";

export const getUser = async (id) => {
  const baseUrl = `http://localhost:3000/user/${id}`;
  try {
    const response = await axios.get(baseUrl);
    console.log(response.data); // Data returned by the server after successful POST
  } catch (error) {
    console.error(error);
  }
};
