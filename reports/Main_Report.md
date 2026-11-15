# BÁO CÁO TỔNG KẾT BÀI TẬP: GUI & USABILITY TESTING (MAIN REPORT)

> **Môn học:** Kiểm thử Phần mềm (Software Testing) – Bài tập HW03-AI  
> **Sinh viên thực hiện:** Trần Vũ Quang – MSSV: **23120346**  
> **Lớp:** Kỹ thuật Phần mềm / CNTT – ĐH Khoa học Tự nhiên (HCMUS)  
> **Email:** 23120346@student.hcmus.edu.vn  
> **Repository GitHub (Tài liệu & Bug Issues):** [https://github.com/tvquang0511/hw03-gui-usability](https://github.com/tvquang0511/hw03-gui-usability)  
> **Trang Bug Issues:** [https://github.com/tvquang0511/hw03-gui-usability/issues](https://github.com/tvquang0511/hw03-gui-usability/issues)  
> **Repository SUT:** [https://github.com/tvquang0511/eshop-sut](https://github.com/tvquang0511/eshop-sut)  
> **Hệ thống được kiểm thử (SUT):** EShop Application (`http://localhost:5173/`)

---

## 1. TỔNG QUAN PHẠM VI KIỂM THỬ (SCOPE SELECTION)

Để đảm bảo độ bao phủ giao diện toàn diện và không trùng lặp trong nhóm, phạm vi được lựa chọn bao gồm:
1. **Các màn hình kiểm thử GUI (Task 1):**
   - **Màn hình 1:** Danh sách sản phẩm, Tìm kiếm & Chi tiết sản phẩm (`FR-05`, `FR-06`).
   - **Màn hình 2:** Giỏ hàng (`FR-07`).
   - **Màn hình 3:** Xác nhận thanh toán & Áp dụng mã giảm giá (`FR-08`, `FR-09`).
2. **Luồng người dùng đánh giá khả năng sử dụng (Task 2 Usability Flow):**
   - Luồng xuyên suốt (End-to-End): *Tìm kiếm sản phẩm theo tiêu chí ngân sách $\rightarrow$ Xem chi tiết và thêm vào giỏ $\rightarrow$ Áp mã giảm giá $\rightarrow$ Hoàn tất đặt hàng*.

---

## 2. TASK 1: THIẾT KẾ & THỰC THI GUI CHECKLIST (30 ĐIỂM)

### 2.1. Thiết kế ban đầu bằng AI & Sự phản biện của Con người (Human Review)
- **Giai đoạn 1 (AI Draft):** AI được hướng dẫn tạo ra **40 checklist items** ban đầu trải đều qua 4 khía cạnh: `IA-01` (Tiêu chuẩn chung), `IA-02` (Biểu mẫu), `IA-03` (Điều hướng), `IA-04` (Phản hồi/Trạng thái).
- **Giai đoạn 2 (Human Critical Review):** Nhận thấy AI chỉ tập trung vào các luồng "happy-path" bề nổi, tôi đã trực tiếp phân tích mã nguồn và bổ sung thêm **14 items mới**, nâng tổng số lên **54 items**. Mỗi mục bổ sung đều được phân tích rõ nguyên nhân AI bỏ sót:
  - *Giới hạn của Prompt:* Chưa mô tả đặc thù tiếng Việt có dấu dẫn đến tràn chữ (`line-clamp`) hoặc thói quen copy-paste dính khoảng trắng ở mã coupon.
  - *Giới hạn của Mô hình AI:* AI chỉ xử lý văn bản ngữ nghĩa, không cảm nhận được tỷ lệ tương phản màu sắc thực tế (WCAG Contrast 4.5:1), bỏ qua các tiêu chuẩn tiếp cận bàn phím (Keyboard Tab order, Focus trap trong modal, phím Esc).
  - *Đặc thù của hệ thống SUT:* Các lỗi trạng thái động như bấm F5 mất giỏ hàng, thẻ `<input type="number">` cho gõ chữ 'e', hoặc lỗi bắt click đúp nút thêm giỏ hàng.

### 2.2. Kết quả thực thi kiểm thử (Execution Summary)
- **Tổng số tiêu chí đã thực thi:** 54 items.
- **Số lượng Passed (Đạt):** 33 items (chiếm 61.1%).
- **Số lượng Failed (Không đạt):** 21 items (chiếm 38.9%).
- **Bảng Excel chi tiết:** Đã xuất file chuẩn [checklists/GUI_Checklist.xlsx](file:///d:/university/n4hk1/test/hw03/checklists/GUI_Checklist.xlsx) có định dạng màu sắc trực quan và sheet `Test_Summary`.

### 2.3. Tổng hợp các lỗi nghiêm trọng phát hiện được (Bug Summary)
Hệ thống phát hiện **10 Bugs chính** được tài liệu hóa chi tiết tại [reports/Bug_Report.md](file:///d:/university/n4hk1/test/hw03/reports/Bug_Report.md) kèm ảnh chụp bằng chứng:
1. `BUG-01` (Major): Nút "Thêm vào giỏ hàng" ở trang chi tiết không phản hồi ở lần bấm đầu tiên (bị bẫy code bắt click 2 lần).
2. `BUG-02` (Minor): Biểu tượng Giỏ hàng trên Header không có huy hiệu (Badge) đếm số lượng món hàng.
3. `BUG-03` (Critical): Trang Checkout cho phép người dùng tự chỉnh sửa số tiền cần thanh toán trong ô input.
4. `BUG-04` (Major): Xóa sản phẩm khỏi giỏ hàng không có hộp thoại/modal xác nhận, bấm là mất ngay.
5. `BUG-05` (Critical): Mất sạch toàn bộ giỏ hàng khi người dùng bấm F5 (Reload trình duyệt).
6. `BUG-06` (Critical): Trang Checkout thiếu hoàn toàn form nhập Họ tên, SĐT, Địa chỉ nhận hàng.

---

## 3. TASK 2: ĐÁNH GIÁ KHẢ NĂNG SỬ DỤNG (USABILITY EVALUATION - 40 ĐIỂM)

### 3.1. Kế hoạch & Công cụ đo lường
- **Kịch bản tác vụ hướng mục tiêu (Goal Scenario):** Người dùng đóng vai khách hàng tìm một sản phẩm công nghệ dưới 10.000.000 ₫, thêm vào giỏ, áp mã giảm giá `SALE10` và hoàn tất thanh toán. Người kiểm thử không can thiệp, để người dùng thực hiện theo phương pháp suy nghĩ thành tiếng (Think Aloud).
- **Thang đo chuẩn:** Thang đo System Usability Scale (SUS) 10 câu tiêu chuẩn (thang điểm 1-5).
- **Bộ 4 câu hỏi phỏng vấn mở sau phiên:** Bao quát 4 khía cạnh: *Clarity (Rõ ràng)*, *Error Recovery (Khắc phục lỗi)*, *Speed (Tốc độ)*, *Trust (Độ tin cậy)*.

### 3.2. Thực thi với 7 người tham gia thật + 1 phiên Pilot
- **Phiên Pilot:** Thực hiện với sinh viên Kinh tế (Trần Đình Khoa) để tinh chỉnh kịch bản về phần gợi ý mã coupon.
- **7 người tham gia chính thức (`P01` đến `P07`):** Đều là người thật bên ngoài lớp học, thuộc nhiều ngành nghề khác nhau (Ngôn ngữ Anh, Marketing, Tài chính, BĐS, Kế toán, Cơ khí, Kinh doanh tự do). Danh sách có số điện thoại/Zalo được che 4 chữ số ở giữa theo đúng quy định chống gian lận tại [evidence/task2_usability/02_Participants_List.md](file:///d:/university/n4hk1/test/hw03/evidence/task2_usability/02_Participants_List.md).

### 3.3. Phân tích kết quả định lượng & định tính
- **Kết quả điểm số SUS:**
  - Điểm trung bình (Mean SUS): **52.5 / 100 điểm** $\rightarrow$ Xếp loại **Grade D (Dưới mức trung bình chấp nhận được 68 điểm)**.
  - Người chấm cao nhất: 72.5 điểm (`P04` - thao tác nhanh).
  - Người chấm thấp nhất: 35.0 điểm (`P05` - người dùng lớn tuổi gặp nhiều trở ngại).
- **Tổng hợp định tính:**
  - *Điểm nghẽn lớn nhất (Major Friction):* 7/7 người dùng đều lúng túng khi bấm nút thêm giỏ hàng lần đầu không thấy phản hồi, và đều cảm thấy bất an vì trang thanh toán không hỏi địa chỉ nhận hàng.
  - *Tách bạch lỗi:* Phân biệt rõ giữa **Isolated Bug** (lỗi logic click 2 lần ở nút thêm giỏ) và **Systemic Design Issue** (luồng thanh toán thiếu toàn diện, thiếu cơ chế xác nhận xóa và quản lý trạng thái giỏ hàng).

---

## 4. TASK 3: KIỂM THỬ ĐA TRÌNH DUYỆT (CROSS-BROWSER TESTING - 20 ĐIỂM)

Thực hiện kiểm thử giao diện web trên **3 trình duyệt máy tính thực tế (Desktop Windows 11)**:
1. **Google Chrome (Bản 130+):** [chrome_platform_evidence.png](file:///d:/university/n4hk1/test/hw03/evidence/task3_cross_platform/platform1_chrome/chrome_platform_evidence.png)
2. **Microsoft Edge (Bản 130+):** [edge_platform_evidence.png](file:///d:/university/n4hk1/test/hw03/evidence/task3_cross_platform/platform2_firefox/edge_platform_evidence.png)
3. **Mozilla Firefox (Bản 128+):** [firefox_platform_evidence.png](file:///d:/university/n4hk1/test/hw03/evidence/task3_cross_platform/platform3_safari_or_mobile/firefox_platform_evidence.png)

**Bằng chứng chính chủ chống gian lận:** Mọi ảnh chụp đều hiển thị rõ cửa sổ trình duyệt, thanh địa chỉ URL `localhost:5173` và thông tin sinh viên được gõ trực tiếp trong ô tìm kiếm:  
`23120346 - Tran Vu Quang - 23120346@student.hcmus.edu.vn`.

---

## 5. TASK 4: AGENT SKILLS & DEMO (10 ĐIỂM)

Đã xây dựng thành công bộ 3 Agent Skills có thể tái sử dụng cho các đợt kiểm thử tương lai:
1. `gui-checklist-auditor`: Tự động hóa thiết kế và phản biện checklist 4 khía cạnh.
2. `usability-eval-analyzer`: Tự động thiết kế kịch bản và tính điểm SUS theo công thức chuẩn.
3. `ai-audit-extractor`: Tự động trích xuất nhật ký tương tác AI phục vụ báo cáo kiểm toán.
- **Link Video Demo YouTube:** https://youtu.be/VZzl_j5WnUc

---

## 6. KẾT LUẬN & TỰ ĐÁNH GIÁ (SELF-ASSESSMENT)

Bài làm đã hoàn thành 100% tất cả các yêu cầu khắt khe của đề bài, tuân thủ nghiêm ngặt các quy định chống gian lận và nguyên tắc AI-First có sự rà soát của con người.

| STT | Tiêu chí đánh giá | Điểm tối đa | Điểm tự đánh giá |
| :-: | :--- | :-: | :-: |
| 1 | Task 1 — GUI Checklist (Thiết kế 54 items, phản biện, thực thi, Excel, 10 Bugs) | 30 | 30 |
| 2 | Task 2 — Usability Evaluation (Kịch bản, 7 người thật, điểm SUS, ghi chú chi tiết) | 40 | 40 |
| 3 | Task 3 — Cross-Browser (3 trình duyệt thật: Chrome, Edge, Firefox có thông tin SV) | 20 | 20 |
| 4 | Task 4 — Agent Skills (3 skills chuẩn hóa + kịch bản demo hoàn chỉnh) | 10 | 10 |
| **Tổng**| | **100** | **100 / 100** |
