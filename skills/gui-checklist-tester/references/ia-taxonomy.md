# IA taxonomy — 4 interface aspect (HW03)

| IA | Tên | Câu hỏi kiểm thử | Ví dụ item |
| :--- | :--- | :--- | :--- |
| IA-01 | General UI standards | Giao diện có nhất quán và dễ đọc ở mọi trạng thái? | 1 `<h1>`/trang; ngôn ngữ nhất quán; định dạng tiền VN; contrast AA; responsive; dark mode; RTL; zoom 200% |
| IA-02 | Forms | Form có hướng dẫn, validate và phục hồi lỗi đúng? | dấu `*`; `type=email/password`; label↔input; lỗi trên nút submit; giữ dữ liệu sau lỗi; disable khi submit; step indicator |
| IA-03 | Navigation | Người dùng có biết mình đang ở đâu và đi đâu tiếp? | navbar highlight; badge giỏ; breadcrumb; back; link không 404; route guard; giữ state khi điều hướng |
| IA-04 | Feedback / state | Hệ thống có phản hồi rõ cho mọi hành động và trạng thái? | toast sau add-to-cart; dialog xác nhận xóa; empty state; loading; error state; success + clear cart; nhãn trạng thái đơn |

## Cách phân loại item nhập nhằng

- "Ảnh sản phẩm có alt" → **IA-01** (chuẩn chung/accessibility), dù FR-24 cũng nhắc.
- "Thông báo lỗi nằm trên nút submit" → **IA-02** (form), không phải IA-04.
- "Toast sau khi thêm giỏ" → **IA-04** (feedback), không phải IA-03.
- "Breadcrumb" → **IA-03**; "badge số lượng" → **IA-03** (nav) dù bản chất là state.
- Nếu một item chạm 2 IA, chọn IA của **hành vi chính** và ghi IA phụ vào Notes.
