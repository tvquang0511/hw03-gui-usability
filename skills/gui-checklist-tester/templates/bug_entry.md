# Template — bug entry (1 bug = 1 checklist item Failed = 1 GitHub Issue)

```markdown
## GUI-BUG-NN — <title ngắn, nêu hiện tượng>

| Field | Value |
| :--- | :--- |
| Checklist item | IA-0X-0Y |
| Screen / URL | /checkout |
| Severity | Blocker / Major / Minor / Cosmetic |
| Spec reference | FR-22 |
| Detected by | Checklist execution (automated/manual) |

**Steps to reproduce**
1. …
2. …

**Expected** — theo FR-…
**Actual** — …

**Impact** — người dùng bị gì (mất dữ liệu, không hoàn thành được, hiểu sai…).

**Evidence:** `screenshots/bugs/GUI-BUG-NN.png`
**GitHub Issue:** #<number>
```

Severity rubric:

| Mức | Tiêu chí |
| :--- | :--- |
| Blocker | Không thể hoàn thành tác vụ chính (thanh toán, đăng nhập, xem đơn) |
| Major | Hoàn thành được nhưng sai kết quả hoặc phải workaround rõ ràng |
| Minor | Ảnh hưởng trải nghiệm, dễ bỏ qua, không chặn tác vụ |
| Cosmetic | Thuần thẩm mỹ/nhất quán |
