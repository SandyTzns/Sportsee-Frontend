import axios from "axios";

const baseURL = "http://localhost:3000";

export default class apiCall {
  static getUser = async (id) => {
    try {
      const res = await axios.get(`${baseURL}/user/${id}`);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  static getActivity = async (id) => {
    try {
      const res = await axios.get(`${baseURL}/user/${id}/activity`);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  static getPerformance = async (id) => {
    try {
      const res = await axios.get(`${baseURL}/user/${id}/performance`);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  static getAverageSessions = async (id) => {
    try {
      const res = await axios.get(`${baseURL}/user/${id}/average-sessions`);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
}
