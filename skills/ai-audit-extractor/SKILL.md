---
name: ai-audit-extractor
description: Tự động trích xuất và định dạng nhật ký tương tác AI thành Báo cáo Kiểm toán AI (AI Audit Report) chuẩn theo yêu cầu của môn học.
---

# AI Audit Extractor Skill

Skill này tự động ghi nhận và trích xuất mọi tương tác giữa sinh viên và AI để tạo bảng AI Audit Report bắt buộc.

## Cấu trúc ghi nhận bắt buộc:
1. **Tên công cụ AI:** (Ví dụ: Antigravity / Gemini 3.8 Flash / Claude / ChatGPT).
2. **Thời gian tương tác:** Ngày và giờ thực hiện.
3. **Nội dung Prompt:** Lời nhắc, câu hỏi chi tiết của sinh viên.
4. **Kết quả Output:** Tóm tắt giải pháp và kết quả AI sinh ra.
5. **Đánh giá phản biện (Critique note):** Điểm con người phát hiện thiếu sót hoặc chỉnh sửa lại từ output thô của AI.
