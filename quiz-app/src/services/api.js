import axios from "axios";

export const fetchQuestions = async (amount = 10, category='', difficulty='') => {
    const response = await axios.get(
        `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
    );
    if (response.data.response_code === 0) {
        return response.data.results;
    }else {
        throw new Error("Không tìm thấy câu hỏi");
    }
}