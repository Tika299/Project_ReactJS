const express = require('express');
const cors = require('cors'); // Thêm cors
const app = express();
const port = 8081;

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

const easyQuestionsVietnamVictory = {
  "response_code": 0,
  "results": [
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "War",
      "question": "Sự kiện nào vào ngày 30 tháng 4 năm 1975 đánh dấu chiến thắng hoàn toàn của Việt Nam trong cuộc kháng chiến chống Mỹ?",
      "correct_answer": "Giải phóng Sài Gòn",
      "incorrect_answers": [
        "Hiệp định Paris",
        "Chiến thắng Điện Biên Phủ",
        "Tổng tiến công Tết Mậu Thân"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "War",
      "question": "Ai là Chủ tịch nước Việt Nam Dân chủ Cộng hòa trong suốt cuộc kháng chiến chống Mỹ?",
      "correct_answer": "Hồ Chí Minh",
      "incorrect_answers": [
        "Võ Nguyên Giáp",
        "Ngô Đình Diệm",
        "Phạm Văn Đồng"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "War",
      "question": "Tên gọi của chiến dịch cuối cùng dẫn đến giải phóng miền Nam năm 1975 là gì?",
      "correct_answer": "Chiến dịch Hồ Chí Minh",
      "incorrect_answers": [
        "Chiến dịch Điện Biên Phủ",
        "Chiến dịch Tây Nguyên",
        "Chiến dịch Mậu Thân"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "War",
      "question": "Hiệp định nào được ký năm 1973 buộc Mỹ rút quân khỏi Việt Nam?",
      "correct_answer": "Hiệp định Paris",
      "incorrect_answers": [
        "Hiệp định Genève",
        "Hiệp định Potsdam",
        "Hiệp định Versailles"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "War",
      "question": "Tổ chức nào được thành lập năm 1960 để lãnh đạo phong trào cách mạng ở miền Nam?",
      "correct_answer": "Mặt trận Dân tộc Giải phóng miền Nam Việt Nam",
      "incorrect_answers": [
        "Đảng Cộng sản Việt Nam",
        "Quân đội Nhân dân Việt Nam",
        "Chính phủ Lâm thời miền Nam"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "War",
      "question": "Thành phố Sài Gòn được đổi tên thành gì sau ngày 30 tháng 4 năm 1975?",
      "correct_answer": "Thành phố Hồ Chí Minh",
      "incorrect_answers": [
        "Thành phố Hà Nội",
        "Thành phố Đà Nẵng",
        "Thành phố Cần Thơ"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "War",
      "question": "Quân Giải phóng miền Nam Việt Nam được thành lập chính thức vào năm nào?",
      "correct_answer": "1961",
      "incorrect_answers": [
        "1954",
        "1965",
        "1970"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "War",
      "question": "Ai là Tổng thống cuối cùng của Việt Nam Cộng hòa đầu hàng ngày 30 tháng 4 năm 1975?",
      "correct_answer": "Dương Văn Minh",
      "incorrect_answers": [
        "Ngô Đình Diệm",
        "Nguyễn Văn Thiệu",
        "Trần Văn Hương"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "War",
      "question": "Cuộc kháng chiến chống Mỹ kéo dài trong khoảng thời gian bao lâu?",
      "correct_answer": "21 năm (1954-1975)",
      "incorrect_answers": [
        "10 năm (1965-1975)",
        "15 năm (1960-1975)",
        "30 năm (1945-1975)"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "War",
      "question": "Tên gọi chính thức của Việt Nam sau khi thống nhất năm 1976 là gì?",
      "correct_answer": "Cộng hòa Xã hội Chủ nghĩa Việt Nam",
      "incorrect_answers": [
        "Việt Nam Dân chủ Cộng hòa",
        "Cộng hòa miền Nam Việt Nam",
        "Liên bang Việt Nam"
      ]
    }
  ]
};

const mediumQuestionsVietnamVictory = {
  "response_code": 0,
  "results": [
    {
      "type": "multiple",
      "difficulty": "medium",
      "category": "War",
      "question": "Chiến lược 'Chiến tranh đặc biệt' của Mỹ ở miền Nam Việt Nam được triển khai trong giai đoạn nào?",
      "correct_answer": "1961-1965",
      "incorrect_answers": [
        "1954-1960",
        "1965-1968",
        "1970-1973"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "medium",
      "category": "War",
      "question": "Cuộc Tổng tiến công và nổi dậy Tết Mậu Thân diễn ra vào năm nào?",
      "correct_answer": "1968",
      "incorrect_answers": [
        "1965",
        "1972",
        "1975"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "medium",
      "category": "War",
      "question": "Ai là vị tướng chỉ huy Chiến dịch Hồ Chí Minh năm 1975?",
      "correct_answer": "Văn Tiến Dũng",
      "incorrect_answers": [
        "Võ Nguyên Giáp",
        "Nguyễn Chí Thanh",
        "Trần Văn Trà"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "medium",
      "category": "War",
      "question": "Chiến thắng nào vào năm 1965 được coi là trận đánh mở đầu cao trào diệt Mỹ của Quân Giải phóng miền Nam?",
      "correct_answer": "Trận Núi Thành",
      "incorrect_answers": [
        "Trận Ấp Bắc",
        "Trận Bình Giã",
        "Trận Vạn Tường"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "medium",
      "category": "War",
      "question": "Hiệp định Genève năm 1954 quy định thời điểm nào để tổ chức tổng tuyển cử thống nhất Việt Nam?",
      "correct_answer": "Tháng 7 năm 1956",
      "incorrect_answers": [
        "Tháng 12 năm 1955",
        "Tháng 3 năm 1957",
        "Tháng 9 năm 1958"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "medium",
      "category": "War",
      "question": "Chiến dịch Tây Nguyên năm 1975 bắt đầu bằng trận đánh nào?",
      "correct_answer": "Trận Buôn Ma Thuột",
      "incorrect_answers": [
        "Trận Pleiku",
        "Trận Kon Tum",
        "Trận Đắk Tô"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "medium",
      "category": "War",
      "question": "Chính phủ Cách mạng Lâm thời Cộng hòa miền Nam Việt Nam được thành lập vào năm nào?",
      "correct_answer": "1969",
      "incorrect_answers": [
        "1960",
        "1965",
        "1973"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "medium",
      "category": "War",
      "question": "Chiến lược 'Việt Nam hóa chiến tranh' được Mỹ triển khai dưới thời Tổng thống nào?",
      "correct_answer": "Richard Nixon",
      "incorrect_answers": [
        "John F. Kennedy",
        "Lyndon B. Johnson",
        "Gerald Ford"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "medium",
      "category": "War",
      "question": "Trận đánh nào vào năm 1972 được gọi là 'Điện Biên Phủ trên không'?",
      "correct_answer": "Trận Hà Nội",
      "incorrect_answers": [
        "Trận Quảng Trị",
        "Trận Khe Sanh",
        "Trận Huế"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "medium",
      "category": "War",
      "question": "Phong trào phá 'ấp chiến lược' ở miền Tây Nam Bộ đạt thắng lợi lớn vào năm nào?",
      "correct_answer": "1964",
      "incorrect_answers": [
        "1960",
        "1967",
        "1970"
      ]
    }
  ]
};

const hardQuestionsVietnamVictory = {
  "response_code": 0,
  "results": [
    {
      "type": "multiple",
      "difficulty": "hard",
      "category": "War",
      "question": "Hội nghị nào của Đảng Cộng sản Việt Nam vào cuối năm 1965 đã quyết định 'kiên quyết đánh bại cuộc chiến tranh xâm lược của Mỹ trong bất kỳ tình huống nào'?",
      "correct_answer": "Hội nghị Trung ương lần thứ 12, khóa III",
      "incorrect_answers": [
        "Hội nghị Trung ương lần thứ 9, khóa III",
        "Hội nghị Trung ương lần thứ 15, khóa II",
        "Hội nghị Trung ương lần thứ 7, khóa IV"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "hard",
      "category": "War",
      "question": "Trong Chiến dịch Hồ Chí Minh, mũi tiến công chính vào Sài Gòn được giao cho quân đoàn nào?",
      "correct_answer": "Quân đoàn 2",
      "incorrect_answers": [
        "Quân đoàn 1",
        "Quân đoàn 3",
        "Quân đoàn 4"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "hard",
      "category": "War",
      "question": "Trận đánh nào vào năm 1963 được coi là bước ngoặt làm suy yếu chiến lược 'Chiến tranh đặc biệt' của Mỹ?",
      "correct_answer": "Trận Ấp Bắc",
      "incorrect_answers": [
        "Trận Ba Gia",
        "Trận Đồng Xoài",
        "Trận Vạn Tường"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "hard",
      "category": "War",
      "question": "Trong cuộc kháng chiến chống Mỹ, tổng lượng bom đạn Mỹ ném xuống Việt Nam ước tính khoảng bao nhiêu triệu tấn?",
      "correct_answer": "15,35 triệu tấn",
      "incorrect_answers": [
        "7,66 triệu tấn",
        "10,5 triệu tấn",
        "20 triệu tấn"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "hard",
      "category": "War",
      "question": "Ai là tác giả bài thơ 'Việt Nam máu và hoa' được sáng tác trong bối cảnh kháng chiến chống Mỹ?",
      "correct_answer": "Tố Hữu",
      "incorrect_answers": [
        "Chế Lan Viên",
        "Nguyễn Đình Thi",
        "Xuân Diệu"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "hard",
      "category": "War",
      "question": "Trong Chiến dịch Hồ Chí Minh, xe tăng mang số hiệu nào là chiếc đầu tiên húc đổ cổng Dinh Độc Lập?",
      "correct_answer": "843",
      "incorrect_answers": [
        "390",
        "705",
        "602"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "hard",
      "category": "War",
      "question": "Tên của kế hoạch mà Mỹ sử dụng để ném bom miền Bắc Việt Nam từ năm 1964 đến 1968 là gì?",
      "correct_answer": "Chiến dịch Sấm Rền",
      "incorrect_answers": [
        "Chiến dịch Cung tên",
        "Chiến dịch B52",
        "Chiến dịch Phượng Hoàng"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "hard",
      "category": "War",
      "question": "Trong cuộc Tổng tiến công Tết Mậu Thân 1968, thành phố nào bị Quân Giải phóng chiếm giữ lâu nhất?",
      "correct_answer": "Huế",
      "incorrect_answers": [
        "Sài Gòn",
        "Đà Nẵng",
        "Cần Thơ"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "hard",
      "category": "War",
      "question": "Theo thống kê, bao nhiêu máy bay B52 của Mỹ bị bắn rơi trong trận 'Điện Biên Phủ trên không' năm 1972?",
      "correct_answer": "34",
      "incorrect_answers": [
        "15",
        "50",
        "68"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "hard",
      "category": "War",
      "question": "Nghị quyết nào của Bộ Chính trị năm 1974 đã quyết định giải phóng miền Nam trong hai năm 1975-1976?",
      "correct_answer": "Nghị quyết ngày 18/12/1974",
      "incorrect_answers": [
        "Nghị quyết ngày 15/9/1973",
        "Nghị quyết ngày 20/3/1975",
        "Nghị quyết ngày 10/6/1972"
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
  if (category && category === 'History') {
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
  } else if (category && category === 'War') {
    if (difficulty === 'easy') {
      questionPool = easyQuestionsVietnamVictory.results;
    } else if (difficulty === 'medium') {
      questionPool = mediumQuestionsVietnamVictory.results;
    } else if (difficulty === 'hard') {
      questionPool = hardQuestionsVietnamVictory.results;
    } else {
      questionPool = [
        ...easyQuestionsVietnamVictory.results,
        ...mediumQuestionsVietnamVictory.results,
        ...hardQuestionsVietnamVictory.results
      ];
    }
  }
  else {
    return res.status(400).json({ response_code: 1, message: "Không tìm thấy danh mục" });
  }
  const selectedQuestions = getRandomQuestions(questionPool, Math.min(amount, questionPool.length));
  res.json({ response_code: 0, results: selectedQuestions });
});

app.listen(port, () => {
  console.log(`API chạy tại http://localhost:${port}`);
});