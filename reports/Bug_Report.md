# BÁO CÁO CHI TIẾT CÁC LỖI GIAO DIỆN & TRẢI NGHIỆM NGƯỜI DÙNG (BUG REPORT)

> **Môn học:** Kiểm thử Phần mềm (Software Testing) – Bài tập HW03-AI  
> **Sinh viên thực hiện:** Trần Vũ Quang – MSSV: **23120346**  
> **Email:** 23120346@student.hcmus.edu.vn  
> **Hệ thống kiểm thử (SUT):** EShop Web Application (`http://localhost:5173/`)  
> **Repository GitHub Issues:** [https://github.com/tvquang0511/hw03-gui-usability/issues](https://github.com/tvquang0511/hw03-gui-usability/issues)  
> **Phạm vi kiểm thử tập trung:** Luồng Mua hàng (Product List & Search -> Product Detail -> Shopping Cart -> Checkout & Coupon)

---

## 1. BẢNG TỔNG HỢP CÁC LỖI THỰC TẾ PHÁT HIỆN TRÊN ESHOP

| Bug ID | Tiêu đề lỗi (Bug Summary) | Màn hình | Khía cạnh | Mức độ (Severity) | Trạng thái trên GitHub |
| :---: | :--- | :---: | :---: | :---: | :---: |
| **`BUG-01`** | Nút "Thêm vào giỏ hàng" ở trang chi tiết không phản hồi ở lần click đầu tiên | Product Detail (`FR-06`) | `IA-04` (Feedback/State) | **Major** | [Issue #1](https://github.com/tvquang0511/hw03-gui-usability/issues/1) |
| **`BUG-02`** | Biểu tượng Giỏ hàng trên Header thiếu Badge hiển thị số lượng sản phẩm thời gian thực | Header / Navbar (`IA-03`) | `IA-03` (Navigation) | **Minor** | [Issue #2](https://github.com/tvquang0511/hw03-gui-usability/issues/2) |
| **`BUG-03`** | Lỗ hổng nghiêm trọng: Trang Checkout cho phép khách hàng tự sửa đổi Tổng tiền thanh toán | Checkout (`FR-08`) | `IA-02` (Forms) | **Critical** | [Issue #3](https://github.com/tvquang0511/hw03-gui-usability/issues/3) |
| **`BUG-04`** | Xóa sản phẩm khỏi giỏ hàng không có hộp thoại/Modal xác nhận lại với người dùng | Shopping Cart (`FR-07`) | `IA-04` (Feedback/State) | **Major** | [Issue #4](https://github.com/tvquang0511/hw03-gui-usability/issues/4) |
| **`BUG-05`** | Mất sạch toàn bộ dữ liệu giỏ hàng khi người dùng bấm F5 (Reload trình duyệt) | Cart Context / Global | `IA-04` (State Persistence) | **Critical** | [Issue #5](https://github.com/tvquang0511/hw03-gui-usability/issues/5) |
| **`BUG-06`** | Trang Checkout thiếu hoàn toàn form nhập thông tin nhận hàng (Họ tên, SĐT, Địa chỉ) | Checkout (`FR-08`) | `IA-02` (Forms) | **Critical** | [Issue #6](https://github.com/tvquang0511/hw03-gui-usability/issues/6) |
| **`BUG-07`** | Trang Chi tiết sản phẩm thiếu thanh điều hướng phân cấp (Breadcrumb) quay lại danh mục | Product Detail (`FR-06`) | `IA-03` (Navigation) | **Minor** | [Issue #7](https://github.com/tvquang0511/hw03-gui-usability/issues/7) |
| **`BUG-08`** | Thiếu tính năng hủy/gỡ mã giảm giá (Remove Coupon) sau khi đã áp dụng thành công | Checkout (`FR-09`) | `IA-04` (Feedback/State) | **Minor** | [Issue #8](https://github.com/tvquang0511/hw03-gui-usability/issues/8) |
| **`BUG-09`** | Ô nhập số lượng ở trang chi tiết cho phép nhập số âm, số 0 hoặc chữ 'e' | Product Detail (`FR-06`) | `IA-02` (Forms) | **Minor** | Confirmed |
| **`BUG-10`** | Nút "Thêm vào giỏ" trên trang chi tiết bị ẩn trên một số độ phân giải Mobile | Product Detail (`FR-06`) | `IA-01` (General UI) | **Major** | Confirmed |
| **`BUG-11`** | Trang tìm kiếm hiển thị lưới trống, thiếu câu thông báo "Không tìm thấy sản phẩm" | Product List (`FR-05`) | `IA-04` (Feedback/State) | **Minor** | Confirmed |
| **`BUG-12`** | Bảng giỏ hàng không hỗ trợ nút bấm tăng giảm số lượng sản phẩm trực tiếp | Shopping Cart (`FR-07`) | `IA-02` (Forms) | **Minor** | Confirmed |

---

## 2. HỒ SƠ CHI TIẾT CÁC LỖI TRỌNG TÂM (EVIDENCE & ROOT CAUSE)

### `BUG-01`: Nút "Thêm vào giỏ hàng" ở trang chi tiết không phản hồi ở lần click đầu tiên
- **Màn hình xảy ra lỗi:** `frontend-web/src/pages/ProductDetail.jsx`
- **Khía cạnh giao diện:** `IA-04: Feedback / State`
- **Mức độ nghiêm trọng:** **Major** (Lỗi trải nghiệm gây hoang mang cho 100% người tham gia test)
- **Mô tả hành vi lỗi:** Khi người dùng vào trang chi tiết bất kỳ sản phẩm nào và bấm vào nút "Thêm vào giỏ hàng", lần click đầu tiên hoàn toàn không có phản ứng gì (nút không đổi trạng thái, giỏ hàng không tăng). Người dùng buộc phải click thêm lần thứ 2 thì nút mới chuyển sang "Đã thêm" và sản phẩm mới vào giỏ.
- **Nguyên nhân kỹ thuật trong mã nguồn:** Đoạn code cố tình bắt bẫy logic tại dòng 22–25 của `ProductDetail.jsx`:
  ```javascript
  const handleAddToCart = () => {
    if (clickCount === 0) {
      setClickCount(1);
      return; // Cố tình bỏ qua lần click đầu tiên
    }
    addToCart(product, parseInt(quantity));
    setAdded(true);
    setClickCount(0);
    setTimeout(() => setAdded(false), 2000);
  };
  ```
- **Kết quả kỳ vọng:** Khi bấm 1 lần duy nhất, hệ thống phải lập tức thêm sản phẩm vào giỏ và hiển thị phản hồi ngay lập tức.
- **Bằng chứng ảnh chụp:** [bug01_add_to_cart_and_breadcrumb.png](file:///d:/university/n4hk1/test/hw03/evidence/task1_failed_screenshots/bug01_add_to_cart_and_breadcrumb.png)

---

### `BUG-02`: Biểu tượng Giỏ hàng trên Header thiếu Badge số lượng sản phẩm thời gian thực
- **Màn hình xảy ra lỗi:** `frontend-web/src/App.jsx` (Component `Header`)
- **Khía cạnh giao diện:** `IA-03: Navigation`
- **Mức độ nghiêm trọng:** **Minor**
- **Mô tả hành vi lỗi:** Trên thanh Header cố định, chữ "Giỏ hàng" chỉ là một thẻ `<Link to="/cart">Giỏ hàng</Link>` tĩnh. Người dùng sau khi thêm hàng vào giỏ không có cách nào biết hiện tại giỏ có bao nhiêu sản phẩm nếu không click thẳng vào trang giỏ hàng.
- **Kết quả kỳ vọng:** Hiển thị huy hiệu (Badge) tròn màu đỏ đếm tổng số lượng món hàng theo thời gian thực (ví dụ: `Giỏ hàng (3)`).
- **Bằng chứng ảnh chụp:** [bug02_header_missing_badge.png](file:///d:/university/n4hk1/test/hw03/evidence/task1_failed_screenshots/bug02_header_missing_badge.png)

---

### `BUG-03`: Lỗ hổng nghiêm trọng: Trang Checkout cho phép khách hàng tự sửa đổi Tổng tiền thanh toán
- **Màn hình xảy ra lỗi:** `frontend-web/src/pages/Checkout.jsx` (Dòng 93–102)
- **Khía cạnh giao diện:** `IA-02: Forms`
- **Mức độ nghiêm trọng:** **Critical** (Lỗ hổng logic nghiệp vụ & bảo mật)
- **Mô tả hành vi lỗi:** Ô "Tổng tiền thanh toán (VND)" trên trang Checkout được hiển thị dưới dạng một thẻ `<input type="number">` cho phép người dùng click vào, xóa đi và tự nhập số tiền bất kỳ (ví dụ nhập `1000` cho đơn hàng 30 triệu VND). Khi bấm "Xác Nhận Thanh Toán", số tiền này được gửi thẳng lên backend và tạo đơn thành công.
- **Nguyên nhân kỹ thuật trong mã nguồn:**
  ```jsx
  <input
    type="number"
    value={editableTotal}
    onChange={(e) => {
      setEditableTotal(Number(e.target.value));
      setCouponResult(null);
      setCouponError('');
    }}
    className="border p-2 rounded text-red-600 font-bold"
  />
  ```
- **Kết quả kỳ vọng:** Tổng tiền thanh toán phải là văn bản chỉ đọc (Read-only Text / Label), được tính toán tự động từ backend dựa trên giỏ hàng và mã coupon, cấm tuyệt đối việc client can thiệp sửa đổi.
- **Bằng chứng ảnh chụp:** [bug03_checkout_editable_total_and_missing_form.png](file:///d:/university/n4hk1/test/hw03/evidence/task1_failed_screenshots/bug03_checkout_editable_total_and_missing_form.png)

---

### `BUG-04`: Xóa sản phẩm khỏi giỏ hàng không có hộp thoại/Modal xác nhận
- **Màn hình xảy ra lỗi:** `frontend-web/src/pages/Cart.jsx` (Dòng 50–56)
- **Khía cạnh giao diện:** `IA-04: Feedback / State`
- **Mức độ nghiêm trọng:** **Major**
- **Mô tả hành vi lỗi:** Khi người dùng xem giỏ hàng và bấm vào nút "Xóa", sản phẩm lập tức bị xóa vĩnh viễn khỏi danh sách giỏ hàng mà không hề xuất hiện hộp thoại xác nhận (`window.confirm` hoặc Modal) hỏi lại người dùng. Trong các phiên Usability test, người tham gia `P03` đã vô tình bấm nhầm và bị mất đơn hàng đang chọn.
- **Kết quả kỳ vọng:** Phải có popup thông báo: *"Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng?"* kèm nút [Hủy] và [Đồng ý].
- **Bằng chứng ảnh chụp:** [bug04_cart_delete_no_confirm.png](file:///d:/university/n4hk1/test/hw03/evidence/task1_failed_screenshots/bug04_cart_delete_no_confirm.png)

---

### `BUG-05`: Mất sạch toàn bộ dữ liệu giỏ hàng khi người dùng bấm F5 (Reload trình duyệt)
- **Màn hình xảy ra lỗi:** `frontend-web/src/context/CartContext.jsx` (Dòng 6)
- **Khía cạnh giao diện:** `IA-04: Feedback / State`
- **Mức độ nghiêm trọng:** **Critical** (Mất mát dữ liệu khách hàng)
- **Mô tả hành vi lỗi:** Dữ liệu giỏ hàng chỉ được lưu trong React State tạm thời (`useState([])`). Khi người dùng thêm sản phẩm vào giỏ hàng, nếu lỡ tay bấm F5 (Reload) hoặc tải lại trang thì toàn bộ giỏ hàng bị reset về rỗng.
- **Kết quả kỳ vọng:** Giỏ hàng phải được đồng bộ lưu trữ vào `localStorage` của trình duyệt để khi F5 hoặc mở lại tab vẫn giữ nguyên giỏ hàng.

---

### `BUG-06`: Trang Checkout thiếu hoàn toàn form nhập thông tin nhận hàng
- **Màn hình xảy ra lỗi:** `frontend-web/src/pages/Checkout.jsx`
- **Khía cạnh giao diện:** `IA-02: Forms`
- **Mức độ nghiêm trọng:** **Critical**
- **Mô tả hành vi lỗi:** Trang thanh toán chỉ hiển thị danh sách sản phẩm và ô áp mã giảm giá, hoàn toàn thiếu các trường nhập thông tin giao hàng cơ bản: *Họ tên người nhận, Số điện thoại liên hệ, Địa chỉ nhận hàng, và Lựa chọn phương thức thanh toán (COD / Chuyển khoản)*.
- **Kết quả kỳ vọng:** Phải có Form thông tin giao hàng đầy đủ kèm kiểm tra tính hợp lệ trước khi cho phép bấm nút thanh toán.

---

### `BUG-07`: Trang Chi tiết sản phẩm thiếu thanh điều hướng phân cấp (Breadcrumb)
- **Màn hình xảy ra lỗi:** `frontend-web/src/pages/ProductDetail.jsx`
- **Khía cạnh giao diện:** `IA-03: Navigation`
- **Mức độ nghiêm trọng:** **Minor**
- **Mô tả hành vi lỗi:** Trang chi tiết sản phẩm thiếu đường dẫn phân cấp (ví dụ: `Trang chủ > Điện thoại > Tên SP`) và không có nút "Quay lại", khiến người dùng lúng túng phải dùng phím Back của trình duyệt.
- **Kết quả kỳ vọng:** Bổ sung Breadcrumb ở đầu trang chi tiết cho phép quay lại danh mục cha bằng 1 cú nhấp chuột.

---

### `BUG-08`: Thiếu tính năng hủy/gỡ mã giảm giá (Remove Coupon)
- **Màn hình xảy ra lỗi:** `frontend-web/src/pages/Checkout.jsx` (Dòng 106–134)
- **Khía cạnh giao diện:** `IA-04: Feedback / State`
- **Mức độ nghiêm trọng:** **Minor**
- **Mô tả hành vi lỗi:** Sau khi áp dụng mã giảm giá thành công (ví dụ `SALE10`), hệ thống hiển thị thông báo đã giảm tiền nhưng không có nút `[X]` hoặc nút "Hủy mã" để người dùng gỡ mã ra nếu muốn đổi sang mã khác.
- **Kết quả kỳ vọng:** Cung cấp nút "Hủy mã giảm giá" bên cạnh thông báo thành công.
