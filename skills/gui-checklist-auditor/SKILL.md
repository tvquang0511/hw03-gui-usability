---
name: gui-checklist-auditor
description: Tự động hóa thiết kế, rà soát phản biện khía cạnh AI bỏ sót và đánh giá GUI Checklist trên 4 khía cạnh IA-01 đến IA-04 cho hệ thống EShop SUT.
---

# GUI Checklist Auditor Skill

Skill này đóng vai trò như một chuyên gia QA/QC tự động hóa quy trình thiết kế và thực thi GUI Checklist theo tiêu chuẩn HW03.

## Chức năng chính:
1. **Phân tích giao diện SUT theo 4 khía cạnh:**
   - `IA-01: General UI Standards` (Visual hierarchy, spacing, alignment, typography, Vietnamese currency formatting, responsiveness).
   - `IA-02: Forms` (Validation, mandatory indicators, inline errors, state retention, disabled submit button).
   - `IA-03: Navigation` (Navbar, breadcrumb, browser back/forward, keyboard accessibility Tab/Shift+Tab/Esc).
   - `IA-04: Feedback / State` (Loading skeletons, empty states, toasts, error messages, action confirmation).
2. **Đối chiếu các góc khuất thường bị AI bỏ sót (Human Critical Review):**
   - Tiêu chuẩn tiếp cận WCAG 2.1 (Tương phản màu sắc, ARIA labels).
   - Bố cục tràn viền khi zoom 200% và trên màn hình nhỏ.
   - Tràn chữ tiếng Việt có dấu.
   - Bẫy tiêu điểm bàn phím (Keyboard focus trap) trong Modal/Popup.
3. **Định dạng dữ liệu đầu ra:**
   - Xuất bảng Markdown và chuẩn bị dữ liệu xuất sang file Excel `.xlsx` gồm cột: `ID`, `Aspect`, `Screen`, `Checkpoint Description`, `Expected Result`, `Status (Passed/Failed)`, `Notes (Why Failed)`, `Source (AI/Human)`, `Why AI Missed It`.
