---
name: usability-eval-analyzer
description: Thiết kế kịch bản Usability hướng mục tiêu, hỗ trợ bảng câu hỏi SUS / UEQ-S và phân tích dữ liệu định lượng, định tính cho 7 người tham gia.
---

# Usability Evaluation Analyzer Skill

Skill này đóng vai trò trợ lý nghiên cứu trải nghiệm người dùng (UX Researcher) phục vụ Task 2 HW03.

## Chức năng chính:
1. **Thiết kế Task Scenario phi định hướng (Non-leading Goal Scenario):**
   - Đặt người dùng vào ngữ cảnh thực tế với mục tiêu cụ thể, không mớm thao tác chi tiết từng nút.
2. **Cung cấp bộ công cụ khảo sát chuẩn:**
   - 10 câu hỏi System Usability Scale (SUS) song ngữ Anh - Việt.
   - 4 câu hỏi phỏng vấn mở (Probe Questions): Clarity (Độ rõ ràng), Error Recovery (Khắc phục lỗi), Speed (Tốc độ), Trust (Độ tin cậy).
3. **Phân tích định lượng tự động:**
   - Tính điểm SUS chuẩn theo công thức:
     - Câu lẻ (1, 3, 5, 7, 9): `Điểm - 1`
     - Câu chẵn (2, 4, 6, 8, 10): `5 - Điểm`
     - Tổng nhân với 2.5 ra thang điểm 0 - 100.
   - Tính điểm Trung bình (Mean), Trung vị (Median), Độ lệch chuẩn (SD).
4. **Tổng hợp định tính (Qualitative Synthesis):**
   - Phân loại rõ ràng giữa `Isolated Bug` (lỗi chức năng riêng lẻ) và `Systemic Design Issue` (vấn đề thiết kế trải nghiệm hệ thống).
   - Xếp hạng mức độ nghiêm trọng: `Critical (Blocker)`, `Major`, `Minor`, `Cosmetic`.
