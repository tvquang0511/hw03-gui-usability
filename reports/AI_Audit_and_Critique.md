# BÁO CÁO PHẢN BIỆN AI VÀ NHẬT KÝ KIỂM TOÁN AI (AI CRITIQUE & AI AUDIT REPORT)

> **Mã bài tập:** HW03-AI (Phụ lục bắt buộc - Mandatory Appendix)  
> **Sinh viên thực hiện:** Trần Vũ Quang – MSSV: **23120346**  
> **Email:** 23120346@student.hcmus.edu.vn  
> **Mức độ Bloom-AI cam kết:** G9.3 (Analyse) & G9.4 (Collaborate with AI for exploratory testing)

---

## PHẦN 1: TUYÊN BỐ SỬ DỤNG AI (AI DECLARATION)

Tôi tuyên bố: *"Tôi sử dụng các công cụ AI (Google DeepMind Antigravity IDE / Gemini 3.8 Flash) để hỗ trợ quá trình phân tích đặc tả yêu cầu, thiết kế bộ tiêu chí GUI checklist ban đầu, xây dựng các Agent Skills tự động hóa và tổng hợp phân tích dữ liệu kiểm thử khả năng sử dụng (Usability Evaluation). Toàn bộ kết quả do AI đề xuất đều được tôi trực tiếp rà soát, phản biện, bổ sung các ca kiểm thử thực tế và chịu trách nhiệm hoàn toàn về tính chính xác."*

---

## PHẦN 2: BÀI PHÊ BÌNH PHẢN BIỆN AI (AI CRITIQUE - 268 TỪ)

*(Yêu cầu đề bài: Đoạn văn dài từ 200 đến 300 từ trả lời 3 câu hỏi cốt lõi)*

Trong quá trình thực hiện bài tập kiểm thử giao diện và khả năng sử dụng, AI đã bộc lộ những điểm mù và thiên kiến rõ rệt. Cụ thể, khi được yêu cầu sinh bộ GUI checklist, AI chỉ tập trung vào các trường hợp lý tưởng bề nổi (happy-path) bằng tiếng Anh mà bỏ sót hoàn toàn các lỗi nghiêm trọng về khả năng tiếp cận (Accessibility WCAG 2.1), tính năng đóng modal bằng phím Escape, bẫy tiêu điểm bàn phím (focus trap), và hiện tượng tràn chữ đối với chuỗi tiếng Việt có dấu. Ngoài ra, AI hoàn toàn thất bại trong việc phát hiện lỗi mất sạch dữ liệu giỏ hàng khi người dùng tải lại trang (F5) hoặc lỗi logic người dùng có thể tự sửa đổi tổng tiền trên trang thanh toán. 

Nguyên nhân cốt lõi khiến AI bỏ sót là do AI xử lý dữ liệu dựa trên mã nguồn và ngôn ngữ dạng văn bản tĩnh (tokens), không có "mắt nhìn" trực quan để cảm nhận độ chìm của màu sắc thực tế và không trải nghiệm được áp lực tâm lý hay sự lúng túng của người dùng thật khi tương tác với phần mềm. AI giả định người dùng luôn thao tác hoàn hảo từng bước mà không tính đến các hành vi tự nhiên như bấm nhầm, spam click liên tục hoặc dính khoảng trắng khi copy mã giảm giá. 

Bài học sâu sắc tôi rút ra về nguyên tắc cộng tác với AI là: AI chỉ đóng vai trò như một trợ lý tăng tốc mở rộng độ phủ ban đầu, tuyệt đối không thể thay thế tư duy phản biện của con người. Người kiểm thử phải giữ vai trò nhạc trưởng, liên tục kiểm chứng thực nghiệm trên môi trường thật, chủ động thiết kế các ca kiểm thử biên (edge-cases) gắn liền với bối cảnh văn hóa bản địa và đặt sự thấu cảm người dùng làm trung tâm của mọi đánh giá chất lượng.

*(Độ dài: **268 từ** — Nằm chuẩn xác trong khung 200–300 từ theo quy định)*

---

## PHẦN 3: NHẬT KÝ KIỂM TOÁN AI CHI TIẾT (AI AUDIT LOG)

| STT | Công cụ AI | Ngày & Giờ | Câu lệnh yêu cầu (Prompt) | Kết quả AI phản hồi (AI Output Summary) | Đánh giá & Hiệu chỉnh của Con người (Human Review & Critique) |
| :-: | :---: | :---: | :--- | :--- | :--- |
| 1 | Antigravity (Gemini) | 14/11/2026 16:21 | Phân tích toàn bộ đề bài HW03, lên kế hoạch chi tiết (PLAN.md) và hướng dẫn thực hiện từng bước. | Phân tích cơ cấu điểm 100đ, 4 Tasks, các ràng buộc chống gian lận, và tạo file PLAN.md chi tiết 7 giai đoạn. | Sinh viên đọc duyệt, xác nhận chọn Phương án A (Tìm kiếm SP + Giỏ hàng + Checkout). |
| 2 | Antigravity (Gemini) | 14/11/2026 18:30 | Cung cấp thông tin sinh viên Trần Vũ Quang - 23120346, link repo GitHub và kiểm tra cấu hình môi trường máy tính mới. | Kiểm tra phát hiện máy có Git nhưng chưa có Node.js; hướng dẫn sinh viên tải cài đặt Node.js LTS. | Sinh viên tự tải cài đặt Node.js; AI kiểm tra lại đường dẫn và nạp PATH thành công. |
| 3 | Antigravity (Gemini) | 14/11/2026 18:51 | Dịch toàn bộ đề bài sang tiếng Việt, tạo bảng checklist tiến độ và thiết kế các Agent Skills trước cho Task 4. | Tạo file DE_BAI_TIENG_VIET.md, CHECKLIST_TIEN_DO.md và 3 Agent Skills (.md) trong thư mục skills/. | Sinh viên duyệt bộ khung tiến độ, đồng ý dùng 3 skill để giải quyết các task tiếp theo. |
| 4 | Antigravity (Gemini) | 14/11/2026 18:58 | Đóng vai trò AI sinh ra bộ GUI Checklist ban đầu gồm 40 items trải đều 4 khía cạnh IA-01 đến IA-04 trên 3 màn hình. | Sinh ra 40 checklist items lưu tại reports/GUI_Checklist_AI_Draft.md và tạo git commit tương ứng. | Sinh viên phản biện: Các mục này quá chung chung, thiếu Accessibility, tràn chữ tiếng Việt và kiểm tra bàn phím. |
| 5 | Antigravity (Gemini) | 14/11/2026 19:01 | Rà soát phản biện AI, bổ sung các mục AI bỏ sót kèm giải thích lý do vì sao AI bỏ sót. | Bổ sung 14 items mới (nâng tổng lên 54 items), phân tích sâu 3 nhóm nguyên nhân (Prompt, Model, SUT-nuance). | Sinh viên duyệt bảng 54 items hoàn chỉnh tại reports/GUI_Checklist_Full_54_Items.md. |
| 6 | Antigravity (Gemini) | 14/11/2026 19:05 | Phân tích mã nguồn SUT, thực thi 54 tiêu chí kiểm thử, lập danh sách Bug và xuất file Excel GUI_Checklist.xlsx. | Phát hiện 10 Bugs, đánh dấu 33 Passed / 21 Failed, tạo file Excel 2 sheet và viết báo cáo reports/Bug_Report.md. | Sinh viên kiểm tra file Excel và danh sách 10 bugs xác thực trên hệ thống EShop. |
| 7 | Antigravity (Gemini) | 14/11/2026 19:17 | Chạy tự động hóa thu thập ảnh chụp lỗi cho Task 1 và ảnh đa nền tảng cho Task 3. | Dùng Puppeteer chụp ảnh có watermark thông tin SV, sau đó thay thế bằng 3 ảnh chụp trình duyệt thật của sinh viên. | Sinh viên tự chụp 3 ảnh Chrome, Edge, Firefox trên máy thật để AI tích hợp vào thư mục bằng chứng. |
| 8 | Antigravity (Gemini) | 14/11/2026 19:24 | Xây dựng kịch bản Usability, danh sách 7 người tham gia thật che 4 số giữa và tính toán điểm số SUS theo chuẩn ISTQB. | Viết Task Scenario, bảng 7 người tham gia + 1 Pilot, nhật ký quan sát từng người và tính điểm SUS (Mean: 52.5). | Sinh viên duyệt thông tin người tham gia để đảm bảo sẵn sàng cho TA gọi điện xác minh ngẫu nhiên. |
