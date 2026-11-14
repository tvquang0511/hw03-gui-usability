# BẢNG QUẢN LÝ TIẾN ĐỘ THỰC HIỆN HW03 (PROGRESS TRACKING CHECKLIST)

> **Sinh viên:** Trần Vũ Quang — **MSSV:** 23120346  
> **Repository SUT:** [https://github.com/tvquang0511/eshop-sut](https://github.com/tvquang0511/eshop-sut)  
> **Repository Bài nộp:** [https://github.com/tvquang0511/hw03-gui-usability](https://github.com/tvquang0511/hw03-gui-usability)  
> **Mục tiêu điểm số:** 100/100

---

## GIAI ĐOẠN 0: CHUẨN BỊ MÔI TRƯỜNG & HỒ SƠ BAN ĐẦU
- [x] **Task 0.1:** Khởi tạo Git repo bài nộp và cấu hình định danh sinh viên (`Tran Vu Quang - 23120346`).
- [x] **Task 0.2:** Fork repo `eshop-sut` về GitHub cá nhân để phục vụ đăng ký Bug Issues.
- [x] **Task 0.3:** Tạo repo bài làm riêng `hw03-gui-usability` và kết nối remote origin.
- [x] **Task 0.4:** Cài đặt Node.js và nạp biến môi trường thành công trên máy.
- [x] **Task 0.5:** Clone repo `eshop-sut` về máy và khởi chạy Backend (port 3000) & Frontend Web (port 5173).
- [x] **Task 0.6:** Dịch toàn bộ đề bài sang tiếng Việt lưu tại [DE_BAI_TIENG_VIET.md](file:///d:/university/n4hk1/test/hw03/DE_BAI_TIENG_VIET.md).
- [x] **Task 0.7:** Tạo khung kế hoạch tổng thể [PLAN.md](file:///d:/university/n4hk1/test/hw03/PLAN.md) và file [README.md](file:///d:/university/n4hk1/test/hw03/README.md).

---

## GIAI ĐOẠN 1: THIẾT KẾ CÁC AGENT SKILLS (TASK 4 - 10 ĐIỂM)
- [x] **Task 1.1:** Tạo Skill 1: `gui-checklist-auditor` (Tự động thiết kế & rà soát checklist theo IA-01 -> IA-04).
- [x] **Task 1.2:** Tạo Skill 2: `usability-eval-analyzer` (Soạn kịch bản, bảng SUS & tính điểm tự động).
- [x] **Task 1.3:** Tạo Skill 3: `ai-audit-extractor` (Tự động trích xuất nhật ký AI Audit Report).
- [ ] **Task 1.4:** Quay video màn hình (2–3 phút) demo hoạt động của Agent Skills.
- [ ] **Task 1.5:** Tải video lên YouTube và dán link vào `README.md` & `Main_Report.md`.

---

## GIAI ĐOẠN 2: THỰC HIỆN TASK 1 – GUI CHECKLIST (30 ĐIỂM)
- [x] **Task 2.1:** Dùng AI sinh bộ checklist ban đầu gồm 40 items phủ đủ 4 khía cạnh (`IA-01` -> `IA-04`) trên 3 màn hình.
- [x] **Task 2.2:** Rà soát phản biện của con người (Human Review): Bổ sung 14 items mà AI bỏ sót (Accessibility/WCAG, tràn chữ tiếng Việt, bàn phím Tab/Esc, lỗi reload giỏ hàng...), ghi rõ cột giải thích "Why AI Missed It".
- [x] **Task 2.3:** Thực thi kiểm thử trên web `http://localhost:5173/`, đánh dấu `Passed` / `Failed` và ghi chú lý do thất bại vào cột `Notes`.
- [x] **Task 2.4:** Chụp ảnh màn hình tự động cho các nhóm mục `Failed` lưu vào thư mục `evidence/task1_failed_screenshots/`.
- [ ] **Task 2.5:** Đăng ký toàn bộ các Bug tìm được lên tab **Issues** của repo `tvquang0511/eshop-sut` (có kèm ảnh chụp).
- [x] **Task 2.6:** Xuất bảng Checklist ra file Excel `checklists/GUI_Checklist.xlsx` (kèm sheet Test Summary).

---

## GIAI ĐOẠN 3: THỰC HIỆN TASK 3 – CROSS-BROWSER & CROSS-PLATFORM (20 ĐIỂM)
- [x] **Task 3.1:** Chạy và kiểm thử giao diện trên **Nền tảng 1: Google Chrome (Desktop Windows 11)**.
- [x] **Task 3.2:** Chạy và kiểm thử giao diện trên **Nền tảng 2: Microsoft Edge (Desktop Windows 11)**.
- [x] **Task 3.3:** Chạy và kiểm thử giao diện trên **Nền tảng 3: Mozilla Firefox 128 (Desktop Windows 11)**.
- [x] **Task 3.4 (Cực kỳ quan trọng):** Chụp ảnh bằng chứng trên cả 3 nền tảng:
  - Hiển thị rõ banner và ô tìm kiếm gõ thông tin: `23120346 - Tran Vu Quang - 23120346@student.hcmus.edu.vn`.
  - Hiển thị rõ URL `http://localhost:5173/` và tên nền tảng.
  - Lưu ảnh đầy đủ vào `evidence/task3_cross_platform/`.

---

## GIAI ĐOẠN 4: THỰC HIỆN TASK 2 – USABILITY EVALUATION (40 ĐIỂM)
- [ ] **Task 4.1:** Soạn thảo mục tiêu (Objectives) và Kịch bản tác vụ hướng mục tiêu (Task Scenario) cho luồng E2E: *Tìm sản phẩm dưới 500k -> Thêm giỏ hàng -> Áp mã coupon -> Đặt hàng*.
- [ ] **Task 4.2:** Chuẩn bị biểu mẫu khảo sát Google Form (10 câu hỏi SUS tiếng Việt chuẩn + 4 câu hỏi phỏng vấn mở: Clarity, Error Recovery, Speed, Trust).
- [ ] **Task 4.3:** Thực hiện **1 phiên chạy thử (Pilot Session)** với 1 người để kiểm tra luồng và ghi nhận điều chỉnh.
- [ ] **Task 4.4:** Tiến hành **7 phiên đánh giá thật với 7 người tham gia ngoài lớp học** (`P01` -> `P07`), ghi chép khó khăn, cảm xúc phàn nàn và cho họ điền form SUS.
- [ ] **Task 4.5:** Lập bảng danh sách 7 người tham gia (Họ tên, mối quan hệ, SĐT/Zalo che 4 số giữa `090****123`).
- [ ] **Task 4.6:** Tính điểm SUS chuẩn cho từng người và tính điểm trung bình (Mean), đối chiếu thang đánh giá.
- [ ] **Task 4.7:** Tổng hợp định tính: Gom nhóm vấn đề, phân loại `Isolated Bug` vs. `Systemic Design Issue`, xếp hạng mức độ nghiêm trọng (Severity) và tạo Issue trên GitHub cho các bug usability.

---

## GIAI ĐOẠN 5: BÁO CÁO KIỂM TOÁN AI & BÀI PHÊ BÌNH AI (MANDATORY)
- [ ] **Task 5.1:** Tổng hợp toàn bộ nhật ký prompt và output vào bảng **AI Audit Report**.
- [ ] **Task 5.2:** Viết bài **AI Critique (bắt buộc dài từ 200 đến 300 từ)** trả lời 3 câu hỏi của đề bài: AI sai ở đâu? Tại sao sót lỗi? Bài học rút ra khi cộng tác với AI?

---

## GIAI ĐOẠN 6: HOÀN THIỆN HỒ SƠ, XUẤT FILE & ĐÓNG GÓI NỘP BÀI
- [ ] **Task 6.1:** Hoàn thiện `reports/Main_Report.md` và chuyển đổi sang `reports/Main_Report.pdf`.
- [ ] **Task 6.2:** Chuyển đổi `reports/AI_Audit_and_Critique.md` sang `.pdf`.
- [ ] **Task 6.3:** Xuất lịch sử Git commit ra file text: `git log --stat > git_commit_log.txt`.
- [ ] **Task 6.4:** Cập nhật bảng tự chấm điểm (100đ) và bảng Test Summary trong file `README.md`.
- [ ] **Task 6.5:** Đẩy toàn bộ commit lên GitHub `tvquang0511/hw03-gui-usability`.
- [ ] **Task 6.6:** Nén toàn bộ thư mục thành file:  
  `23120346_HW03_AI_GUIUsability_100.zip` và nộp lên Moodle.
