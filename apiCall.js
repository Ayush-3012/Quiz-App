import axios from "axios";

export async function apiReq(category, type = "multiple") {
  const url = `https://opentdb.com/api.php?amount=20&category=${category}&type=${type}`;
  try {
    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    return error.message;
  }
}
