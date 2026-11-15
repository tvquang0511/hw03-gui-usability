---
name: gui-checklist-tester
description: Thiết kế và thực thi GUI checklist (>40 item) phủ 4 interface aspect IA-01 general standards, IA-02 forms, IA-03 navigation, IA-04 feedback/state, có traceability về yêu cầu GUI của SUT, chạy Pass/Fail, chụp evidence cho item Failed và xuất bug report. Dùng khi cần kiểm thử GUI một website/app theo hướng checklist + evidence, đặc biệt cho bài HW03.
---

# GUI Checklist Tester

Skill biến một màn hình/flow thành một bộ checklist có căn cứ, thực thi được, và bằng chứng kiểm thử. Không sinh "checklist chung chung": mỗi item phải gắn với (screen, aspect, expected behaviour, cách kiểm chứng).

## Khi nào dùng

- Cần >40 checklist item phủ IA-01…IA-04 cho một SUT web/mobile.
- Cần chạy checklist và ghi Pass/Fail + Notes + screenshot cho item Failed.
- Cần bug report có thể đưa lên GitHub Issues.

## Input bắt buộc

| Input | Ví dụ |
| :--- | :--- |
| SUT base URL | `http://localhost:5173` |
| Screen/flow scope | `Cart, Checkout, Login, Register, Home, Product Detail` |
| Requirement baseline | SRS §8 (FR-21…FR-24) hoặc design system |
| Test accounts | `test@eshop.com / Test1234!` |
| Evidence rule | Chỉ chụp screenshot cho item **Failed**; overlay email sinh viên |
| Target count | ≥ 40 (khuyến nghị 55–70) |

## Quy trình 4 bước (không được nhảy bước)

### Bước 1 — Interface inventory (AI + người)

Với mỗi screen, liệt kê:

1. URL/route, entry point, exit point.
2. Thành phần: heading, form field, button, bảng, link, image, modal/toast.
3. State: `default / loading / empty / error / success / disabled / partial`.
4. Ràng buộc từ spec (FR-21…24) áp lên screen đó.

Output: bảng `screen × component × state × spec-ref`. **Không sinh item trước khi có bảng này.**

### Bước 2 — Generate item theo aspect

Sinh item theo 4 nhóm, mỗi item có cấu trúc cố định:

```text
ID | Aspect | Screen | Checklist item | Expected | Spec ref | Method | Priority
```

Quy tắc sinh:

- Mỗi item phải **quan sát được** (nhìn/đo được), không dùng từ mơ hồ ("thân thiện", "đẹp").
- Mỗi item phải **có thể Fail** — item luôn Pass là item vô nghĩa.
- Không trùng ý: nếu hai item cùng kiểm tra một thứ, gộp.
- Trải đều 4 aspect, không dồn 60% vào IA-01.
- Method ∈ `automated` (Playwright/axe) | `manual` (visual/interaction).

### Bước 3 — Human review (bắt buộc)

Đánh dấu từng item: `keep` / `merge` / `drop` / `rewrite`. Lý do phải ghi lại:
sai spec, không test được, trùng, quá chung, phụ thuộc dữ liệu không kiểm soát được.

### Bước 4 — Gap-fill

Bổ sung item AI thường bỏ sót. Tối thiểu kiểm tra 8 nhóm sau:

| Nhóm | Ví dụ item |
| :--- | :--- |
| Accessibility | alt ảnh, label↔input, focus visible, contrast ≥ 4.5:1, keyboard-only, ARIA cho icon-only button, zoom 200% |
| RTL | `dir="rtl"` không tràn layout, icon/back arrow đúng chiều |
| Dark mode | `prefers-color-scheme: dark` không mất contrast, không trắng chữ trên nền trắng |
| Locale VN | dấu tiếng Việt, `1.000.000 ₫`, ngày `dd/mm/yyyy`, không lẫn EN ở nhãn chính |
| State biên | loading, empty, error API, slow 3G/offline, submit 2 lần, back sau success |
| Persistence | reload giữ giỏ hàng/đăng nhập; mở tab mới |
| Security-adjacent UI | input người dùng không render thành HTML; lỗi không lộ stack trace |
| Mobile | touch target ≥ 44×44, safe area notch, bàn phím số cho trường số |

Với **mỗi item tự thêm**, ghi `Why AI missed` theo 1 trong 4 lý do: prompt thiếu ngữ cảnh / model thiên về visual cơ bản / đặc thù SUT (spec riêng) / AI không nghĩ tới nhóm người dùng biên.

## Định dạng output

1. `checklist_design.md` — inventory, prompt đã dùng, bộ AI sinh, review log, gap-fill + lý do.
2. `GUI_Checklist.xlsx` — sheet `Checklist` (đủ cột trên) + sheet `Summary` (đếm item/aspect, Pass/Fail, bug).
3. `execution_log.md` — bảng item × kết quả × evidence × notes.
4. Bug entry theo template `templates/bug_entry.md` (1 bug = 1 issue + 1 screenshot).

## Guardrail

- **Không bịa kết quả.** Item chưa chạy ghi `Not executed`, không ghi Pass/Fail.
- Không chụp screenshot cho item Pass (đề chỉ yêu cầu Failed).
- Notes của item Failed phải nêu **nguyên nhân quan sát được**, không lặp lại expected.
- Nếu một item phụ thuộc dữ liệu (ví dụ coupon hết hạn), ghi rõ điều kiện dữ liệu trong Notes.
- Không sửa source code SUT để "làm pass" checklist.

## Templates

- `templates/checklist_row.md`
- `templates/execution_row.md`
- `templates/bug_entry.md`
- `references/ia-taxonomy.md` — định nghĩa IA-01…IA-04 + ví dụ item.

## Mapping sang HW03

| Deliverable đề bài | File |
| :--- | :--- |
| Checklist > 40 item | `GUI_Checklist.xlsx` |
| Test summary | sheet `Summary` + README |
| Bug + screenshot + GitHub Issues | `Bug_Reports.md` + issue |
| AI Audit | mỗi bước 1 artifact trong `AI_Audit_Report.md` |
