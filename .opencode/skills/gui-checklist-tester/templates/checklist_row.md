# Template — checklist row

```markdown
| ID | Aspect | Screen | Checklist item | Expected | Spec ref | Method | Priority | Origin |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| IA-01-01 | IA-01 | Home | Trang có đúng một thẻ `<h1>` mô tả nội dung | `document.querySelectorAll('h1').length === 1` | FR-21 | automated | High | AI |
```

Ghi chú:

- `Origin` ∈ `AI` | `Human (gap-fill)`.
- `Method` ∈ `automated` | `manual`.
- `Priority` ∈ `High` | `Medium` | `Low` (High = ảnh hưởng hoàn thành tác vụ).
