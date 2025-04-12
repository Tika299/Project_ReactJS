import axios from "axios";


// Địa chỉ API Node.js
const API_URL = "http://localhost:8081/api/questions";

export const fetchQuestions = async (amount = 10, category = '', difficulty = '') => {
  try {
    const response = await axios.get(
      `${API_URL}?amount=${amount}&category=${category}&difficulty=${difficulty}`
    );
    if (response.data.response_code === 0) {
      return response.data.results;
    } else {
      throw new Error("Không tìm thấy câu hỏi từ API");
    }
  } catch (error) {
    throw new Error(error.message || "Lỗi khi gọi API");
  }
};