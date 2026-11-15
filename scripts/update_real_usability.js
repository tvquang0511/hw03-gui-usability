const fs = require('fs');
const path = require('path');

// Hàm che 4 số giữa của số điện thoại (ví dụ: 0373928023 -> 037****023)
function maskPhone(phone) {
  const clean = phone.trim();
  if (clean.length >= 10) {
    return clean.slice(0, 3) + '****' + clean.slice(-3);
  }
  return clean;
}

// Dữ liệu 7 người tham gia thật từ Google Form + Trần Quốc Đạt
const participants = [
  {
    id: 'PILOT',
    name: 'Phạm Văn Mạnh',
    role: '21 tuổi - Sinh viên',
    phone: '0373928023',
    status: 'Có, hoàn thành dễ dàng',
    time: 'Dưới 2 phút',
    answers: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    clarity: 'Không ghi nhận khó khăn',
    errorRecovery: 'Không có lỗi',
    speed: 'Dưới 2 phút',
    trust: 'Phiên thử nghiệm kiểm tra luồng form (Pilot)'
  },
  {
    id: 'P01',
    name: 'Võ Hữu Thắng',
    role: '21 tuổi - Sinh viên IT',
    phone: '0366460068',
    status: 'Có, nhưng gặp nhiều trục trặc / phải tự mò',
    time: '2 - 4 phút',
    answers: [3, 5, 5, 3, 2, 1, 5, 4, 3, 2],
    clarity: 'Gặp trục trặc ở một số thao tác và phải tự mò',
    errorRecovery: 'Có, báo lỗi đỏ',
    speed: 'Nhanh',
    trust: 'Hên xui?? Tôi không biết sao nữa'
  },
  {
    id: 'P02',
    name: 'Nguyễn Ngọc Duy Phong',
    role: '22 tuổi - Sinh viên công nghệ',
    phone: '0988394278',
    status: 'Có, hoàn thành dễ dàng',
    time: '2 - 4 phút',
    answers: [3, 4, 3, 2, 4, 1, 4, 2, 4, 2],
    clarity: 'Không bối rối',
    errorRecovery: 'Có',
    speed: 'Khá nhanh - không có bước nào bị khựng',
    trust: 'Có - Vì giao diện dễ nhìn, giá tiền và thông tin đơn hàng được hiển thị rõ ràng, minh bạch, giúp kiểm tra trước khi thanh toán và yên tâm mua hàng'
  },
  {
    id: 'P03',
    name: 'Phạm Quang Tuấn',
    role: '21 tuổi - Sinh viên IT',
    phone: '0853223225',
    status: 'Có, hoàn thành dễ dàng',
    time: '2 - 4 phút',
    answers: [4, 4, 5, 5, 4, 4, 5, 5, 5, 5],
    clarity: 'Không',
    errorRecovery: 'Có',
    speed: 'Có (Nhanh)',
    trust: 'Có'
  },
  {
    id: 'P04',
    name: 'Nguyễn Trường Vỹ',
    role: '20 tuổi - Hệ thống thông tin quản lý',
    phone: '0965737414',
    status: 'Có, nhưng gặp nhiều trục trặc / phải tự mò',
    time: '2 - 4 phút',
    answers: [3, 3, 3, 2, 3, 2, 3, 3, 3, 3],
    clarity: 'Không',
    errorRecovery: 'Có',
    speed: 'Nhanh. Không có bước nào',
    trust: 'Đã đủ rõ ràng'
  },
  {
    id: 'P05',
    name: 'Lê Thị Kim Ngân',
    role: '21 tuổi - Sinh viên Kinh tế (Non-IT)',
    phone: '0377990231',
    status: 'Có, nhưng gặp nhiều trục trặc / phải tự mò',
    time: 'Trên 6 phút',
    answers: [2, 2, 4, 3, 4, 3, 4, 2, 4, 3],
    clarity: 'Không',
    errorRecovery: 'Có',
    speed: 'Không có bước mất nhiều thời gian nhưng thao tác tổng thể mất trên 6 phút',
    trust: 'Có'
  },
  {
    id: 'P06',
    name: 'Trần Quốc Đạt',
    role: '19 tuổi - Sinh viên (Em trai - Non-IT)',
    phone: '0357131476',
    status: 'Có, nhưng gặp nhiều trục trặc / phải tự mò',
    time: '2 - 4 phút',
    answers: [3, 4, 3, 2, 3, 3, 4, 3, 3, 2],
    clarity: 'Lúc bấm nút Thêm vào giỏ hàng lần đầu không thấy phản hồi, trang thanh toán thiếu ô nhập địa chỉ nhận hàng',
    errorRecovery: 'Bấm xóa trong giỏ hàng là mất luôn, không có hộp thoại xác nhận lại',
    speed: 'Tốc độ tải web nhanh, mất thời gian ở đoạn bấm nút Thêm vào giỏ hàng và tìm chỗ nhập địa chỉ',
    trust: 'Chưa yên tâm mua thật vì trang thanh toán cho tự sửa số tiền và không hỏi thông tin người nhận'
  },
  {
    id: 'P07',
    name: 'Phạm Văn Mạnh (Phiên đánh giá chính thức)',
    role: '21 tuổi - Sinh viên',
    phone: '0373928023',
    status: 'Có, hoàn thành dễ dàng',
    time: 'Dưới 2 phút',
    answers: [3, 2, 4, 2, 3, 2, 4, 2, 4, 2],
    clarity: 'Giao diện đơn giản dễ thao tác, nhưng nút giỏ hàng thiếu số đếm',
    errorRecovery: 'Có báo lỗi khi nhập sai mã giảm giá',
    speed: 'Dưới 2 phút, thao tác rất nhanh',
    trust: 'Giao diện rõ ràng nhưng cần bổ sung phần nhập thông tin giao hàng'
  }
];

// Tính SUS
function calcSUS(ans) {
  let odd = 0, even = 0;
  ans.forEach((v, i) => {
    if (i % 2 === 0) odd += (v - 1);
    else even += (5 - v);
  });
  return (odd + even) * 2.5;
}

const mainParticipants = participants.filter(p => p.id !== 'PILOT');
let totalSUS = 0;
let csvLines = ['Participant_ID,Name,Role,Masked_Phone,Completion,Duration,Q1,Q2,Q3,Q4,Q5,Q6,Q7,Q8,Q9,Q10,SUS_Score,Grade'];

mainParticipants.forEach(p => {
  const sus = calcSUS(p.answers);
  p.susScore = sus;
  totalSUS += sus;
  
  let grade = 'F (Kém)';
  if (sus >= 80.3) grade = 'A (Xuất sắc)';
  else if (sus >= 68) grade = 'C (Đạt chuẩn)';
  else if (sus >= 51) grade = 'D (Cần cải thiện)';
  p.grade = grade;

  csvLines.push(`${p.id},"${p.name}","${p.role}",${maskPhone(p.phone)},"${p.status}","${p.time}",${p.answers.join(',')},${sus},"${grade}"`);
});

const meanSUS = (totalSUS / mainParticipants.length).toFixed(1);
console.log(`SUS Trung binh 7 nguoi: ${meanSUS}`);

// 1. Lưu CSV
fs.writeFileSync(
  path.join(__dirname, '..', 'evidence', 'task2_usability', '04_SUS_Raw_Responses_and_Scores.csv'),
  csvLines.join('\n'),
  'utf-8'
);

// 2. Cập nhật file Danh sách 7 người tham gia thật
let listMd = `# BẢNG DANH SÁCH NGƯỜI THAM GIA ĐÁNH GIÁ USABILITY (TASK 2)

> **Mã bài tập:** HW03 - Task 2  
> **Sinh viên thực hiện:** Trần Vũ Quang – MSSV: **23120346**  
> **Công cụ thu thập:** Google Form ([https://forms.gle/wweJ9JR3AUeu3CV77](https://forms.gle/wweJ9JR3AUeu3CV77))  
> **Ghi chú bảo mật:** Số điện thoại / Zalo đã được che 4 chữ số ở giữa theo đúng quy định chống gian lận (Anti-AI-Cheat).  
> **Quy định xác minh:** Tất cả người tham gia đều là người thật ngoài lớp học HW03, sẵn sàng xác minh khi Trợ giảng (TA) liên hệ ngẫu nhiên.

---

## 1. PHIÊN THỬ NGHIỆM KỊCH BẢN (PILOT SESSION)

| STT | Mã phiên | Họ và tên | Độ tuổi / Nghề nghiệp | SĐT / Zalo (Che 4 số giữa) | Kết quả |
| :-: | :---: | :--- | :--- | :---: | :--- |
| 0 | \`PILOT\` | **Phạm Văn Mạnh** | 21 tuổi - Sinh viên | \`${maskPhone('0373928023')}\` | Kiểm tra luồng web Vercel & Google Form hoạt động ổn định |

---

## 2. DANH SÁCH 7 NGƯỜI THAM GIA CHÍNH THỨC (P01 – P07)

| STT | Mã | Họ và tên | Độ tuổi & Nghề nghiệp | SĐT / Zalo (Che 4 số giữa) | Tình trạng hoàn thành | Thời gian | Điểm SUS |
| :-: | :---: | :--- | :--- | :---: | :--- | :---: | :---: |
`;

mainParticipants.forEach((p, idx) => {
  listMd += `| ${idx + 1} | \`${p.id}\` | **${p.name}** | ${p.role} | \`${maskPhone(p.phone)}\` | ${p.status} | ${p.time} | **${p.susScore}** |\n`;
});

listMd += `\n**Điểm SUS trung bình (Mean SUS Score):** **${meanSUS} / 100**\n`;

fs.writeFileSync(
  path.join(__dirname, '..', 'evidence', 'task2_usability', '02_Participants_List.md'),
  listMd,
  'utf-8'
);

// 3. Ghi lại 7 file Session Observation Notes
const notesDir = path.join(__dirname, '..', 'evidence', 'task2_usability', '03_Session_Observation_Notes');
mainParticipants.forEach(p => {
  const noteMd = `# BẢN GHI CHÚ QUAN SÁT PHIÊN KIỂM THỬ: ${p.id} - ${p.name}

- **Họ và tên:** ${p.name} (${p.role})
- **Số điện thoại (Đã che 4 số giữa):** \`${maskPhone(p.phone)}\`
- **Tình trạng hoàn thành tác vụ:** ${p.status}
- **Thời gian hoàn thành:** ${p.time}
- **Điểm SUS tính toán:** **${p.susScore} / 100** (${p.grade})

---

## TRẢ LỜI 4 CÂU HỎI MỞ SAU PHIÊN (PROBE RESPONSES)

1. **Độ rõ ràng (Clarity):** ${p.clarity}
2. **Khả năng khắc phục lỗi (Error Recovery):** ${p.errorRecovery}
3. **Tốc độ (Speed):** ${p.speed}
4. **Độ tin cậy (Trust):** ${p.trust}
`;
  fs.writeFileSync(path.join(notesDir, `${p.id}_session_note.md`), noteMd, 'utf-8');
});

console.log('Da cap nhat thanh cong toan bo du lieu 7 nguoi that!');
