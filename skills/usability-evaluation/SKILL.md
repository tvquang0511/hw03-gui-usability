---
name: usability-evaluation
description: Thiết kế và phân tích một phiên usability evaluation nhỏ (moderated, think-aloud) cho một end-to-end flow của web/mobile app: mục tiêu, task scenario hướng mục tiêu, SUS/UEQ-S, câu hỏi probe (clarity, error recovery, speed, trust), phiên pilot, biên bản 7 phiên, tính điểm SUS, gom theme, xếp severity và khuyến nghị. Dùng khi cần chạy usability test với người dùng thật cho HW03.
---

# Usability Evaluation (small-sample, moderated)

## Khi nào dùng

- Có một end-to-end flow cần đánh giá với 7 người dùng thật.
- Cần bộ instrument đầy đủ: scenario, consent, SUS/UEQ-S, probe, notes template.
- Cần phân tích có cấu trúc: SUS score, theme, severity, recommendation.

## Input bắt buộc

| Input | Ghi chú |
| :--- | :--- |
| SUT + flow | ví dụ `register → search → cart → coupon → checkout → order history` |
| 7 participants | ngoài lớp, có liên hệ thật (che 4 số giữa) |
| 1 pilot participant | không tính vào 7 |
| Recording consent | video màn hình + audio (tuỳ chọn) |
| Scale | SUS 10 câu (mặc định) hoặc UEQ-S |
| Thời lượng | 25–30 phút/phiên |

## Quy trình 6 bước

### Bước 1 — Objectives (3–4 mục tiêu đo được)

Mỗi objective phải trả lời được bằng dữ liệu thu thập:

- `O1` Điểm nghẽn điều hướng ở bước nào (đếm số lần lạc/back).
- `O2` Khả năng phục hồi lỗi (khi coupon sai/hết hạn người dùng làm gì).
- `O3` Thời gian hoàn thành + số lần cần trợ giúp.
- `O4` Mức độ tin cậy (trust) — có tin đơn đã đặt / giá đúng không.

### Bước 2 — Task scenario (goal, không phải các bước)

Viết theo mẫu:

```text
Bối cảnh: <tình huống đời thường>
Mục tiêu: <kết quả cần đạt, có ràng buộc cụ thể>
Điều kiện: <ngân sách, mã giảm giá, số lượng…>
```

Không được liệt kê "bấm vào X rồi nhập Y". Không dùng từ của UI (tránh dẫn dắt).

### Bước 3 — Instruments

1. **Consent form** — mục đích, dữ liệu thu, quyền rút, liên hệ.
2. **SUS 10 câu** (5 điểm), bản dịch tiếng Việt, xen kẽ câu tích cực/phủ định.
3. **Probe questions** tối thiểu 4 nhóm:

| Nhóm | Câu hỏi mẫu |
| :--- | :--- |
| Clarity | "Bước nào bạn thấy rõ nhất / rối nhất? Vì sao?" |
| Error recovery | "Khi mã giảm giá báo lỗi, bạn nghĩ nguyên nhân là gì và đã làm gì tiếp?" |
| Speed | "Bước nào mất thời gian hơn bạn mong đợi?" |
| Trust | "Bạn có tin đơn hàng đã được ghi nhận đúng? Điều gì khiến bạn tin/không tin?" |

4. **Note template**: timestamp | hành động | friction | quote | severity.
5. **Severity scale**: 1 Cosmetic · 2 Minor · 3 Major · 4 Blocker.

### Bước 4 — Pilot (bắt buộc)

Chạy 1 người ngoài 7 người chính. Ghi lại: scenario có rõ không, thời lượng, bước gây confusion do **scenario** (không phải do app), lỗi công cụ. Sửa scenario/instruments và ghi diff.

### Bước 5 — Conduct (7 phiên)

Trình tự cố định:

1. Set the stage: "test sản phẩm, không test bạn"; think-aloud; không có câu trả lời đúng/sai.
2. Consent + bật quay màn hình.
3. Đọc scenario, không giải thích thêm.
4. Quan sát trung lập: chỉ can thiệp khi bí > 60 giây; ghi lại mọi lần trợ giúp.
5. SUS.
6. Probe.
7. Debrief + cảm ơn.

Ghi evidence mỗi phiên: `notes.md`, `sus.md`, recording/link, thời gian, task success.

### Bước 6 — Analyse

1. **SUS**: điểm từng câu → tổng từng người → mean. Diễn giải: < 51 poor, 51–67 OK, 68–80 good, > 80 excellent.
2. **Theme**: gom friction point tương tự (affinity), đặt tên theme, đếm số người gặp.
3. **Bug vs design issue**: bug = sai chức năng, có repro; design issue = đúng chức năng nhưng gây khó.
4. **Severity ranking**: impact × tần suất.
5. **Recommendation**: mỗi theme 1 khuyến nghị kiểm chứng được.
6. **Triangulation**: đối chiếu với checklist Task 1 (cùng lỗi xuất hiện ở cả 2 nguồn = bằng chứng mạnh).

## Guardrail

- Không viết lại lời người tham gia; quote phải nguyên văn (đã ẩn danh).
- Không gộp phiên không hợp lệ vào 7 phiên; phiên hỏng phải chạy lại.
- Không dẫn dắt ("Bạn có thấy nút này khó không?") — chỉ hỏi mở.
- Không tự tạo participant hoặc contact.
- Người tham gia phải ngoài lớp HW03; lưu liên hệ thật, che 4 số giữa khi báo cáo.

## Templates

- `templates/plan.md`
- `templates/scenario.md`
- `templates/sus_vi.md`
- `templates/probe_questions.md`
- `templates/session_notes.md`
- `templates/participants.csv`
