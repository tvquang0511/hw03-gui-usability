# Template — execution row

```markdown
| ID | Result | Evidence | Notes (nguyên nhân khi Failed) |
| :--- | :--- | :--- | :--- |
| IA-01-05 | Failed | screenshots/checklist/IA-01-05.png | Home render 2 thẻ h1 (tiêu đề trang + dòng "Hiển thị N sản phẩm"), phá cấu trúc heading. |
| IA-02-03 | Passed | — | — |
```

Quy tắc:

- `Result` ∈ `Passed` | `Failed` | `Not executed`.
- `Evidence` chỉ điền khi `Failed`.
- Notes khi `Failed`: mô tả **hiện tượng quan sát** + vị trí + điều kiện, không lặp expected.
