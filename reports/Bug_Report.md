# BÁO CÁO TỔNG HỢP LỖI GUI & USABILITY (BUG REPORT)

> **Mã bài tập:** HW03 - Task 1 & Task 2  
> **Sinh viên thực hiện:** Trần Vũ Quang – MSSV: **23120346**  
> **Hệ thống kiểm thử (SUT):** EShop Web (`http://localhost:5173/`)  
> **Repository GitHub Issues:** [https://github.com/tvquang0511/eshop-sut/issues](https://github.com/tvquang0511/eshop-sut/issues)

---

## BẢNG TỔNG HỢP CÁC BUGS PHÁT HIỆN TRÊN HỆ THỐNG ESHOP

| Bug ID | Tên lỗi (Bug Title) | Màn hình | Khía cạnh | Mức độ (Severity) | Trạng thái |
| :---: | :--- | :---: | :---: | :---: | :---: |
| **`BUG-01`** | Nút "Thêm vào giỏ hàng" ở trang Chi tiết không phản hồi ở lần click đầu tiên (Phải click 2 lần) | Product Detail | `IA-04` | **Major** | Confirmed |
| **`BUG-02`** | Biểu tượng Giỏ hàng trên Header thiếu Badge số lượng sản phẩm thời gian thực | Header / Navbar | `IA-03` | **Minor** | Confirmed |
| **`BUG-03`** | Trang Thanh toán (Checkout) hiển thị ô input cho phép người dùng tự sửa đổi Tổng tiền thanh toán | Checkout | `IA-02` | **Critical (Security/Business)** | Confirmed |
| **`BUG-04`** | Xóa sản phẩm trong Giỏ hàng không có hộp thoại/modal xác nhận (Bị xóa ngay lập tức) | Cart | `IA-04` | **Major** | Confirmed |
| **`BUG-05`** | Toàn bộ dữ liệu Giỏ hàng bị mất trắng khi người dùng bấm F5 / Refresh trình duyệt | Cart Context | `IA-04` | **Critical** | Confirmed |
| **`BUG-06`** | Trang Thanh toán (Checkout) thiếu hoàn toàn Form nhập Họ tên, SĐT, Địa chỉ giao hàng và Phương thức thanh toán | Checkout | `IA-02` | **Critical** | Confirmed |
| **`BUG-07`** | Trang Chi tiết sản phẩm thiếu Breadcrumb (Thanh điều hướng phân cấp) để quay lại danh mục | Product Detail | `IA-03` | **Minor** | Confirmed |
| **`BUG-08`** | Không có nút hủy/gỡ mã giảm giá (Remove Coupon) sau khi đã áp dụng thành công | Checkout | `IA-04` | **Minor** | Confirmed |
| **`BUG-09`** | Ô nhập số lượng ở trang Chi tiết cho phép nhập số âm, số 0 hoặc chữ 'e' | Product Detail | `IA-02` | **Minor** | Confirmed |
| **`BUG-10`** | Giao diện nút bấm Thêm vào giỏ trên Mobile có class `bug-mobile-hidden` gây ẩn/mất nút | Product Detail | `IA-01` | **Major** | Confirmed |

---

## CHI TIẾT TỪNG BUG ĐỂ TẠO ISSUE TRÊN GITHUB

### `BUG-01`: Nút "Thêm vào giỏ hàng" phải bấm 2 lần mới hoạt động
- **Màn hình:** `ProductDetail.jsx`
- **Mức độ:** Major
- **Mô tả:** Khi người dùng vào xem sản phẩm và bấm nút "Thêm vào giỏ hàng", lần bấm đầu tiên hoàn toàn không có phản ứng gì (số lượng giỏ hàng không tăng, không có thông báo). Người dùng phải bấm lần thứ hai mới thêm được vào giỏ.
- **Nguyên nhân kỹ thuật:** Trong mã nguồn `ProductDetail.jsx` dòng 22-25 có đoạn code cố tình bẫy:
  ```javascript
  if (clickCount === 0) {
    setClickCount(1);
    return; // Không làm gì cả ở lần đầu tiên
  }
  ```
- **Kết quả kỳ vọng:** Bấm 1 lần duy nhất phải thêm ngay sản phẩm vào giỏ hàng và hiển thị phản hồi tức thì.

---

### `BUG-02`: Header thiếu Badge hiển thị số lượng giỏ hàng
- **Màn hình:** `App.jsx` (Header component)
- **Mức độ:** Minor (Usability)
- **Mô tả:** Trên thanh Header, chữ "Giỏ hàng" chỉ là một thẻ link tĩnh thông thường (`<Link to="/cart">Giỏ hàng</Link>`). Người dùng sau khi thêm hàng vào giỏ không thể biết hiện giỏ hàng đang có bao nhiêu món nếu không bấm thẳng vào trang giỏ hàng.
- **Kết quả kỳ vọng:** Phải có một huy hiệu đỏ (Badge số lượng) hiển thị tổng số món hàng (ví dụ: `Giỏ hàng (3)`) và tự động cập nhật thời gian thực khi thêm sản phẩm.

---

### `BUG-03`: Lỗ hổng nghiêm trọng: Người dùng tự nhập được Tổng tiền thanh toán
- **Màn hình:** `Checkout.jsx` (Dòng 93-102)
- **Mức độ:** Critical (Nghiêm trọng về Logic & UI)
- **Mô tả:** Trên trang Xác nhận đơn hàng, ô "Tổng tiền thanh toán (VND)" được thiết kế dưới dạng thẻ `<input type="number">` có thể chỉnh sửa tự do (`onChange={(e) => setEditableTotal(Number(e.target.value))}`). Người dùng có thể xóa đi và gõ số `1000` để mua một đơn hàng giá trị hàng triệu đồng.
- **Kết quả kỳ vọng:** Tổng tiền thanh toán phải là văn bản chỉ đọc (Read-only / Text hiển thị), tuyệt đối không được cho người dùng nhập liệu vào trường này.

---

### `BUG-04`: Xóa sản phẩm khỏi giỏ hàng không có bước xác nhận (Confirm)
- **Màn hình:** `Cart.jsx` (Dòng 50-56)
- **Mức độ:** Major (UX Flaw)
- **Mô tả:** Trong bảng giỏ hàng, khi người dùng bấm vào chữ "Xóa", sản phẩm lập tức biến mất khỏi giỏ mà không hề có popup `window.confirm` hay modal xác nhận hỏi: *"Bạn có chắc chắn muốn xóa sản phẩm này không?"*. Người dùng rất dễ bấm nhầm khi dùng chuột hoặc màn hình cảm ứng.
- **Kết quả kỳ vọng:** Phải có hộp thoại xác nhận trước khi thực hiện hành động xóa.

---

### `BUG-05`: Mất sạch giỏ hàng khi người dùng F5 / Reload trang web
- **Màn hình:** `CartContext.jsx` (Dòng 6)
- **Mức độ:** Critical
- **Mô tả:** Giỏ hàng chỉ được lưu trong React State tạm thời: `const [cart, setCart] = useState([])`. Khi người dùng thêm sản phẩm vào giỏ, sau đó lỡ tay bấm F5 (Reload) hoặc tải lại trang thì toàn bộ giỏ hàng bị reset về `[]` (rỗng).
- **Kết quả kỳ vọng:** Giỏ hàng phải được đồng bộ lưu trữ vào `localStorage` của trình duyệt để khi F5 hoặc mở lại tab vẫn giữ nguyên sản phẩm.

---

### `BUG-06`: Trang Checkout thiếu hoàn toàn biểu mẫu nhập thông tin giao hàng
- **Màn hình:** `Checkout.jsx`
- **Mức độ:** Critical
- **Mô tả:** Trang Checkout chỉ hiển thị tóm tắt sản phẩm và ô áp mã giảm giá, hoàn toàn không có các trường nhập liệu cơ bản: *Họ tên người nhận, Số điện thoại liên hệ, Địa chỉ giao hàng, Ghi chú đơn hàng, và Lựa chọn phương thức thanh toán (COD / Chuyển khoản)*.
- **Kết quả kỳ vọng:** Phải có Form thông tin giao hàng đầy đủ kèm kiểm tra tính hợp lệ (Validation).

---

### `BUG-07`: Trang Chi tiết sản phẩm thiếu thanh điều hướng phân cấp (Breadcrumb)
- **Màn hình:** `ProductDetail.jsx`
- **Mức độ:** Minor
- **Mô tả:** Khi vào xem chi tiết một sản phẩm, không có đường dẫn điều hướng phân cấp (ví dụ: `Trang chủ > Thời trang > Áo khoác mùa đông`). Người dùng muốn quay lại trang danh sách sản phẩm buộc phải bấm nút Back của trình duyệt hoặc bấm vào Logo trên Header.
- **Kết quả kỳ vọng:** Hiển thị Breadcrumb rõ ràng ở đầu trang chi tiết.

---

### `BUG-08`: Thiếu tính năng hủy áp dụng mã giảm giá (Remove Coupon)
- **Màn hình:** `Checkout.jsx` (Dòng 106-134)
- **Mức độ:** Minor
- **Mô tả:** Khi người dùng đã áp dụng mã coupon thành công, giao diện chỉ hiển thị thông báo đã giảm tiền, không có nút `[X]` hoặc nút "Hủy mã" để người dùng gỡ bỏ mã đó nếu muốn đổi sang mã khuyến mãi khác.
- **Kết quả kỳ vọng:** Có nút "Hủy" hoặc "Thay đổi mã" khi mã đang được áp dụng.
