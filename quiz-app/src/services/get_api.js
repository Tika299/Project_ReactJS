const express = require('express');
const cors = require('cors'); // Thêm cors
const app = express();
const port = 3000;

app.use(cors()); // Cho phép tất cả origin gọi API

// Dữ liệu tĩnh và logic API (giữ nguyên như trước)
const easyQuestions = {
  "response_code": 0,
  "results": [
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "History",
      "question": "Ai là vị vua đã đánh bại quân Nguyên-Mông ba lần trong thế kỷ 13?",
      "correct_answer": "Trần Hưng Đạo",
      "incorrect_answers": [
        "Lý Thường Kiệt",
        "Ngô Quyền",
        "Lê Lợi"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "History",
      "question": "Trận chiến nào vào năm 938 đã chấm dứt ách đô hộ của Trung Quốc tại Việt Nam?",
      "correct_answer": "Trận Bạch Đằng",
      "incorrect_answers": [
        "Trận Như Nguyệt",
        "Trận Đông Bộ Đầu",
        "Trận Chi Lăng"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "History",
      "question": "Triều đại nào đã xây dựng kinh đô Thăng Long (Hà Nội ngày nay)?",
      "correct_answer": "Nhà Lý",
      "incorrect_answers": [
        "Nhà Trần",
        "Nhà Nguyễn",
        "Nhà Hồ"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "History",
      "question": "Ai là người lãnh đạo cuộc khởi nghĩa đánh bại quân Minh vào năm 1427?",
      "correct_answer": "Lê Lợi",
      "incorrect_answers": [
        "Trần Thủ Độ",
        "Nguyễn Trãi",
        "Lý Bí"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "History",
      "question": "Văn Miếu - Quốc Tử Giám, trường đại học đầu tiên của Việt Nam, được xây dựng dưới triều đại nào?",
      "correct_answer": "Nhà Lý",
      "incorrect_answers": [
        "Nhà Trần",
        "Nhà Lê",
        "Nhà Tây Sơn"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "History",
      "question": "Năm nào Ngô Quyền đánh bại quân Nam Hán trên sông Bạch Đằng?",
      "correct_answer": "938",
      "incorrect_answers": [
        "981",
        "1077",
        "1288"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "History",
      "question": "Ai là nữ tướng nổi tiếng đã lãnh đạo cuộc khởi nghĩa chống quân Đông Hán vào năm 40?",
      "correct_answer": "Hai Bà Trưng",
      "incorrect_answers": [
        "Bà Triệu",
        "Nguyễn Thị Định",
        "Lê Chân"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "History",
      "question": "Triều đại nào đã cho ra đời bộ luật Hồng Đức nổi tiếng?",
      "correct_answer": "Nhà Lê",
      "incorrect_answers": [
        "Nhà Lý",
        "Nhà Trần",
        "Nhà Nguyễn"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "History",
      "question": "Trận chiến nào vào năm 1288 đã kết thúc cuộc xâm lược lần thứ ba của quân Nguyên-Mông?",
      "correct_answer": "Trận Bạch Đằng",
      "incorrect_answers": [
        "Trận Chương Dương",
        "Trận Hàm Tử",
        "Trận Tây Kết"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "History",
      "question": "Ai là vị vua sáng lập triều đại nhà Nguyễn vào năm 1802?",
      "correct_answer": "Nguyễn Ánh (Gia Long)",
      "incorrect_answers": [
        "Nguyễn Huệ",
        "Nguyễn Phúc Chu",
        "Nguyễn Thế Tổ"
      ]
    }
  ]
};
const mediumQuestions = {
  "response_code": 0,
  "results": [
    {
      "type": "multiple",
      "difficulty": "medium",
      "category": "History",
      "question": "Ai là người soạn bài 'Bình Ngô đại cáo' tuyên bố độc lập sau chiến thắng quân Minh?",
      "correct_answer": "Nguyễn Trãi",
      "incorrect_answers": [
        "Trần Hưng Đạo",
        "Lê Lợi",
        "Lý Công Uẩn"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "medium",
      "category": "History",
      "question": "Trận chiến nào vào năm 1077 đã đánh bại quân Tống dưới triều nhà Lý?",
      "correct_answer": "Trận Như Nguyệt",
      "incorrect_answers": [
        "Trận Bạch Đằng",
        "Trận Đông Bộ Đầu",
        "Trận Chi Lăng"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "medium",
      "category": "History",
      "question": "Triều đại nào đã tổ chức kỳ thi Đình đầu tiên ở Việt Nam vào năm 1075?",
      "correct_answer": "Nhà Lý",
      "incorrect_answers": [
        "Nhà Trần",
        "Nhà Lê",
        "Nhà Hồ"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "medium",
      "category": "History",
      "question": "Ai là vị tướng đã chỉ huy trận Chương Dương đánh bại quân Nguyên-Mông năm 1285?",
      "correct_answer": "Trần Quang Khải",
      "incorrect_answers": [
        "Trần Thủ Độ",
        "Trần Nhật Duật",
        "Lê Hoàn"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "medium",
      "category": "History",
      "question": "Dưới triều đại nào, Việt Nam lần đầu tiên sử dụng tiền giấy vào thế kỷ 14?",
      "correct_answer": "Nhà Hồ",
      "incorrect_answers": [
        "Nhà Trần",
        "Nhà Lê",
        "Nhà Lý"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "medium",
      "category": "History",
      "question": "Hội nghị nào vào năm 1427 đã phong Lê Lợi làm vua sau chiến thắng quân Minh?",
      "correct_answer": "Hội nghị Lam Sơn",
      "incorrect_answers": [
        "Hội nghị Diên Hồng",
        "Hội nghị Bình Than",
        "Hội nghị Đông Quan"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "medium",
      "category": "History",
      "question": "Ai là vị vua nhà Trần đã nhường ngôi để lãnh đạo kháng chiến chống quân Nguyên-Mông?",
      "correct_answer": "Trần Nhân Tông",
      "incorrect_answers": [
        "Trần Thái Tông",
        "Trần Anh Tông",
        "Trần Minh Tông"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "medium",
      "category": "History",
      "question": "Tác phẩm lịch sử 'Đại Việt sử ký' được bắt đầu biên soạn dưới triều đại nào?",
      "correct_answer": "Nhà Trần",
      "incorrect_answers": [
        "Nhà Lý",
        "Nhà Lê",
        "Nhà Nguyễn"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "medium",
      "category": "History",
      "question": "Ai là người lãnh đạo cuộc khởi nghĩa chống nhà Minh vào đầu thế kỷ 15 trước Lê Lợi?",
      "correct_answer": "Trần Ngỗi",
      "incorrect_answers": [
        "Hồ Quý Ly",
        "Nguyễn Huệ",
        "Lý Nam Đế"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "medium",
      "category": "History",
      "question": "Thành nhà Hồ được xây dựng vào năm nào dưới triều đại nhà Hồ?",
      "correct_answer": "1400",
      "incorrect_answers": [
        "1388",
        "1427",
        "1350"
      ]
    }
  ]
};
const hardQuestions = {
  "response_code": 0,
  "results": [
    {
      "type": "multiple",
      "difficulty": "hard",
      "category": "History",
      "question": "Ai là vị tướng nhà Trần đã dùng chiến thuật 'vườn không nhà trống' trong cuộc kháng chiến chống quân Nguyên-Mông lần thứ hai?",
      "correct_answer": "Trần Khánh Dư",
      "incorrect_answers": [
        "Trần Hưng Đạo",
        "Trần Quang Khải",
        "Trần Quốc Toản"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "hard",
      "category": "History",
      "question": "Dưới triều đại nào, Việt Nam lần đầu tiên đổi tên nước thành 'Đại Ngu'?",
      "correct_answer": "Nhà Hồ",
      "incorrect_answers": [
        "Nhà Lý",
        "Nhà Trần",
        "Nhà Lê"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "hard",
      "category": "History",
      "question": "Trận đánh nào vào năm 981 đã giúp Lê Hoàn củng cố quyền lực trước khi lên ngôi vua?",
      "correct_answer": "Trận Bạch Đằng",
      "incorrect_answers": [
        "Trận Như Nguyệt",
        "Trận Đông Bộ Đầu",
        "Trận Chi Lăng"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "hard",
      "category": "History",
      "question": "Ai là vị quan nhà Lê đã soạn 'Lam Sơn thực lục' ghi lại cuộc khởi nghĩa của Lê Lợi?",
      "correct_answer": "Nguyễn Trãi",
      "incorrect_answers": [
        "Trần Nguyên Hãn",
        "Lê Văn Linh",
        "Ngô Sĩ Liên"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "hard",
      "category": "History",
      "question": "Hội nghị Diên Hồng được tổ chức vào năm nào để bàn kế hoạch chống quân Nguyên-Mông?",
      "correct_answer": "1285",
      "incorrect_answers": [
        "1258",
        "1288",
        "1301"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "hard",
      "category": "History",
      "question": "Ai là vị vua nhà Lý đã ra lệnh dời đô từ Hoa Lư về Đại La vào năm 1010?",
      "correct_answer": "Lý Thái Tổ",
      "incorrect_answers": [
        "Lý Thái Tông",
        "Lý Nhân Tông",
        "Lý Thần Tông"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "hard",
      "category": "History",
      "question": "Tác phẩm 'Nam quốc sơn hà' được Lý Thường Kiệt đọc tại đâu để khích lệ quân sĩ?",
      "correct_answer": "Sông Như Nguyệt",
      "incorrect_answers": [
        "Sông Bạch Đằng",
        "Đồi Đông Bộ Đầu",
        "Thành Thăng Long"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "hard",
      "category": "History",
      "question": "Ai là vị tướng trẻ tuổi đã giương cờ thêu chữ 'Phá cường địch, báo hoàng ân' trong kháng chiến chống quân Nguyên?",
      "correct_answer": "Trần Quốc Toản",
      "incorrect_answers": [
        "Trần Nhật Duật",
        "Trần Quang Khải",
        "Trần Khánh Dư"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "hard",
      "category": "History",
      "question": "Triều đại nào đã thất bại trong việc chống quân Minh, dẫn đến 20 năm đô hộ từ 1407-1427?",
      "correct_answer": "Nhà Hồ",
      "incorrect_answers": [
        "Nhà Trần",
        "Nhà Lý",
        "Nhà Lê sơ"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "hard",
      "category": "History",
      "question": "Ai là người đã viết 'Hịch tướng sĩ' để khích lệ quân đội chống quân Nguyên-Mông năm 1285?",
      "correct_answer": "Trần Hưng Đạo",
      "incorrect_answers": [
        "Nguyễn Trãi",
        "Trần Thủ Độ",
        "Lý Thường Kiệt"
      ]
    }
  ]
};

const getRandomQuestions = (questions, amount) => {
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, amount);
};

app.get('/api/questions', (req, res) => {
  const { amount = 10, category = '', difficulty = '' } = req.query;
  let questionPool = [];
  if (difficulty === 'easy') {
    questionPool = easyQuestions.results;
  } else if (difficulty === 'medium') {
    questionPool = mediumQuestions.results;
  } else if (difficulty === 'hard') {
    questionPool = hardQuestions.results;
  } else {
    questionPool = [
      ...easyQuestions.results,
      ...mediumQuestions.results,
      ...hardQuestions.results
    ];
  }
  if (category && category !== 'History') {
    return res.status(400).json({ response_code: 1, message: "Không tìm thấy danh mục" });
  }
  const selectedQuestions = getRandomQuestions(questionPool, Math.min(amount, questionPool.length));
  res.json({ response_code: 0, results: selectedQuestions });
});

app.listen(port, () => {
  console.log(`API chạy tại http://localhost:${port}`);
});