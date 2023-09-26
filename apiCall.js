import axios from "axios";

async function apiReq(category, type) {
  const url = `https://opentdb.com/api.php?amount=10&category=${category}&type=${type}`;
  try {
    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    return error.message;
  }
}
const categoryObject = {
  space: 17,
  sport: 21,
  history: 23,
};
let category = 21;
let type = "multiple";
export default apiReq(category, type);
