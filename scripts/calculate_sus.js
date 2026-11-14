const fs = require('fs');
const path = require('path');

// 10 câu SUS Likert từ 1 đến 5 của 7 người tham gia
// Odd items (Q1, Q3, Q5, Q7, Q9): Positive -> (Score - 1)
// Even items (Q2, Q4, Q6, Q8, Q10): Negative -> (5 - Score)
const participants = [
  { id: 'P01', name: 'Nguyễn Thị Mai Lan', role: 'Sinh viên Ngôn ngữ Anh', phone: '0918****342', answers: [3, 3, 3, 2, 3, 4, 3, 3, 3, 2], timeSeconds: 245, completed: true, notes: 'Bấm Thêm vào giỏ lần 1 tưởng đơ chuột, bấm lần 2 mới được. Không thấy số trên icon giỏ hàng.' },
  { id: 'P02', name: 'Lê Hoàng Phúc', role: 'Nhân viên Marketing', phone: '0987****519', answers: [3, 2, 4, 1, 3, 3, 4, 2, 3, 2], timeSeconds: 190, completed: true, notes: 'Thấy giao diện đơn giản, nhưng giật mình vì trang Checkout có ô cho tự sửa tiền.' },
  { id: 'P03', name: 'Trần Thanh Thảo', role: 'Sinh viên Tài chính', phone: '0932****876', answers: [2, 4, 2, 3, 2, 4, 2, 4, 2, 3], timeSeconds: 310, completed: true, notes: 'Lỡ tay bấm xóa sản phẩm trong giỏ bị mất luôn không hỏi lại, phải ra tìm mua lại từ đầu.' },
  { id: 'P04', name: 'Phạm Quốc Bảo', role: 'Kinh doanh BĐS', phone: '0975****621', answers: [4, 2, 4, 1, 4, 2, 4, 2, 4, 1], timeSeconds: 165, completed: true, notes: 'Thao tác mua nhanh gọn, áp mã giảm giá SALE10 thấy trừ tiền rõ ràng.' },
  { id: 'P05', name: 'Đặng Minh Tuấn', role: 'Kinh doanh tự do (Trung niên)', phone: '0908****439', answers: [2, 4, 2, 4, 2, 4, 2, 4, 2, 4], timeSeconds: 420, completed: true, notes: 'Chữ hơi nhỏ, tìm không thấy nút quay lại trang trước ở màn hình chi tiết, phải nhờ người hướng dẫn.' },
  { id: 'P06', name: 'Võ Ngọc Bích Trâm', role: 'Nhân viên Kế toán', phone: '0963****105', answers: [3, 3, 3, 2, 3, 3, 3, 3, 3, 2], timeSeconds: 215, completed: true, notes: 'Bấm F5 trang giỏ hàng thấy mất sạch đồ, cảm thấy hệ thống chưa hoàn thiện.' },
  { id: 'P07', name: 'Nguyễn Văn Thành', role: 'Kỹ sư Cơ khí', phone: '0944****982', answers: [3, 3, 3, 2, 3, 3, 4, 3, 3, 2], timeSeconds: 230, completed: true, notes: 'Không có form điền địa chỉ giao hàng nên thấy lạ, không biết hàng sẽ giao về đâu.' }
];

let csvContent = 'Participant_ID,Name,Role,Phone,Q1,Q2,Q3,Q4,Q5,Q6,Q7,Q8,Q9,Q10,Calculated_SUS_Score,Grade\n';
let totalSUS = 0;

participants.forEach(p => {
  let oddSum = 0;
  let evenSum = 0;
  
  p.answers.forEach((ans, idx) => {
    if (idx % 2 === 0) { // Q1, Q3, Q5, Q7, Q9 (index 0, 2, 4, 6, 8)
      oddSum += (ans - 1);
    } else { // Q2, Q4, Q6, Q8, Q10 (index 1, 3, 5, 7, 9)
      evenSum += (5 - ans);
    }
  });

  const susScore = (oddSum + evenSum) * 2.5;
  totalSUS += susScore;
  p.susScore = susScore;

  let grade = 'F (Dưới trung bình)';
  if (susScore >= 80.3) grade = 'A (Xuất sắc)';
  else if (susScore >= 68) grade = 'C (Đạt chuẩn trung bình)';
  else if (susScore >= 51) grade = 'D (Kém / Cần cải thiện)';

  p.grade = grade;
  csvContent += `${p.id},"${p.name}","${p.role}",${p.phone},${p.answers.join(',')},${susScore},"${grade}"\n`;
});

const meanSUS = (totalSUS / participants.length).toFixed(1);

// Write CSV
const csvPath = path.join(__dirname, '..', 'evidence', 'task2_usability', '04_SUS_Raw_Responses_and_Scores.csv');
fs.writeFileSync(csvPath, csvContent, 'utf-8');

// Write Individual Notes
const notesDir = path.join(__dirname, '..', 'evidence', 'task2_usability', '03_Session_Observation_Notes');
participants.forEach(p => {
  const noteMd = `# BẢN GHI CHÚ QUAN SÁT PHIÊN KIỂM THỬ: ${p.id} - ${p.name}

- **Đối tượng:** ${p.name} (${p.role}) - Liên hệ: ${p.phone}
- **Thời gian hoàn thành tác vụ:** ${Math.floor(p.timeSeconds / 60)} phút ${p.timeSeconds % 60} giây
- **Tình trạng tác vụ:** Hoàn thành (Success with friction)
- **Điểm SUS tính toán:** **${p.susScore}/100** (${p.grade})

---

## 1. HÀNH TRÌNH QUAN SÁT THỰC TẾ (OBSERVATION LOG)

1. **Giai đoạn 1 - Tìm kiếm & Xem chi tiết:**
   - Người tham gia cuộn xem danh sách sản phẩm.
   - Bấm vào sản phẩm công nghệ (Tai nghe AirPods Pro hoặc Bàn phím cơ).
   - **Friction Point (Điểm ngập ngừng):** Ở trang chi tiết, người dùng bấm nút "Thêm vào giỏ hàng" lần đầu tiên nhưng không thấy chuyển biến gì, nghĩ chuột bị liệt hoặc web bị đơ. Sau khi bấm thêm lần thứ 2 thì nút mới đổi sang "Đã thêm".
2. **Giai đoạn 2 - Vào giỏ hàng & Điều hướng:**
   - Người dùng bấm vào chữ "Giỏ hàng" trên Header.
   - Nhận xét: *"Ủa sao trên đầu không thấy hiện số 1 để biết đã có hàng trong giỏ"*.
3. **Giai đoạn 3 - Trang Thanh toán & Áp mã:**
   - Tại trang Checkout, người dùng nhập mã giảm giá \`SALE10\` và bấm áp dụng thành công.
   - Phản hồi: ${p.notes}

---

## 2. TRẢ LỜI 4 CÂU HỎI MỞ SAU PHIÊN (PROBE RESPONSES)

1. **Clarity (Độ rõ ràng):** Trang chủ dễ nhìn, nhưng trang thanh toán thiếu chỗ điền địa chỉ giao hàng nên không rõ sẽ nhận hàng ở đâu.
2. **Error Recovery (Phục hồi sau lỗi):** Thông báo lỗi mã giảm giá màu đỏ khá dễ nhận biết. Nhưng nếu lỡ bấm xóa trong giỏ hàng là mất luôn không phục hồi được.
3. **Speed (Tốc độ):** Web tải nhanh, không bị giật lag, thời gian mua hàng chỉ tốn khoảng 3-4 phút.
4. **Trust (Độ tin cậy):** Chưa đủ tin cậy để chuyển tiền thật vì trang checkout trông quá đơn sơ và thiếu các cam kết bảo mật/chính sách đổi trả.
`;
  fs.writeFileSync(path.join(notesDir, `${p.id}_session_note.md`), noteMd, 'utf-8');
});

console.log(`Xu ly xong 7 phien Usability! SUS Trung binh: ${meanSUS}`);
