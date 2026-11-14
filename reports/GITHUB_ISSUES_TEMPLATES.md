# MẪU BÁO CÁO 12 GITHUB ISSUES CHI TIẾT (COPY-PASTE VÀO GITHUB)

> **Repository Issues:** [https://github.com/tvquang0511/hw03-gui-usability/issues/new](https://github.com/tvquang0511/hw03-gui-usability/issues/new)  
> **Hướng dẫn:** Bạn vào link trên, bấm **New issue**, copy từng **Tiêu đề (Title)** và toàn bộ khung **Nội dung (Markdown Body)** dán vào rồi bấm **Submit new issue**.

---

### ISSUE #1: [BUG-01] Nút "Thêm vào giỏ hàng" ở trang chi tiết không phản hồi ở lần click đầu tiên
**Labels:** `bug`, `major`, `IA-04`, `GUI`

**Nội dung (Copy dán vào GitHub):**
```markdown
### 1. Mô tả lỗi (Bug Description)
Khi người dùng truy cập trang chi tiết sản phẩm và bấm vào nút "Thêm vào giỏ hàng", lần click đầu tiên hoàn toàn không có phản hồi (không hiển thị thông báo, không đổi trạng thái nút, và giỏ hàng không nhận sản phẩm). Người dùng bắt buộc phải click lần thứ hai thì sản phẩm mới được thêm vào giỏ.

### 2. Các bước tái hiện (Steps to Reproduce)
1. Truy cập trang chủ `http://localhost:5173/`.
2. Bấm vào xem chi tiết một sản phẩm bất kỳ (ví dụ: `http://localhost:5173/product/1`).
3. Bấm nút "Thêm vào giỏ hàng" lần thứ nhất.
4. Quan sát: Giao diện hoàn toàn đứng yên, không có phản ứng.
5. Bấm nút "Thêm vào giỏ hàng" lần thứ hai: Nút mới đổi sang "Đã thêm".

### 3. Nguyên nhân kỹ thuật (Root Cause)
Trong file `frontend-web/src/pages/ProductDetail.jsx` (dòng 22-25) có đoạn code logic bị bẫy:
```javascript
if (clickCount === 0) {
  setClickCount(1);
  return; // Cố tình bỏ qua lần click đầu tiên
}
```

### 4. Kết quả kỳ vọng (Expected Result)
Hệ thống phải thêm sản phẩm vào giỏ ngay ở lần click đầu tiên và hiển thị thông báo phản hồi tức thì.

### 5. Mức độ nghiêm trọng & Môi trường
- **Severity:** Major (Gây ức chế và hiểu lầm cho 100% người dùng)
- **Environment:** Google Chrome, Microsoft Edge, Mozilla Firefox (Windows 11)
```

---

### ISSUE #2: [BUG-02] Biểu tượng Giỏ hàng trên Header thiếu Badge số lượng sản phẩm thời gian thực
**Labels:** `bug`, `minor`, `IA-03`, `Header`

**Nội dung:**
```markdown
### 1. Mô tả lỗi
Trên thanh Header cố định, nút "Giỏ hàng" chỉ là một thẻ liên kết tĩnh thông thường (`<Link to="/cart">Giỏ hàng</Link>`), hoàn toàn không có huy hiệu (Badge) đếm số lượng sản phẩm hiện có trong giỏ hàng.

### 2. Các bước tái hiện
1. Truy cập `http://localhost:5173/`.
2. Bấm "Thêm vào giỏ" cho 2 sản phẩm khác nhau.
3. Nhìn lên góc phải thanh Header.
4. Chữ "Giỏ hàng" không hiển thị bất kỳ con số nào để báo hiệu người dùng đã có hàng.

### 3. Kết quả kỳ vọng
Phải hiển thị Badge tròn màu đỏ đếm số lượng (ví dụ: `Giỏ hàng (2)`) và tự động nhảy số theo thời gian thực khi thêm hoặc bớt sản phẩm.

- **Severity:** Minor (Khuyết tật về UI/UX)
- **Aspect:** IA-03 (Navigation)
```

---

### ISSUE #3: [BUG-03] Lỗ hổng nghiêm trọng: Trang Checkout cho phép người dùng tự sửa đổi Tổng tiền thanh toán
**Labels:** `bug`, `critical`, `security`, `IA-02`

**Nội dung:**
```markdown
### 1. Mô tả lỗi
Trên trang Xác nhận đơn hàng (`/checkout`), ô "Tổng tiền thanh toán (VND)" được lập trình dưới dạng thẻ `<input type="number">` có thể chỉnh sửa tự do. Người dùng có thể xóa đi và gõ số tiền tùy ý (ví dụ `1000`) để mua món hàng trị giá hàng chục triệu đồng.

### 2. Các bước tái hiện
1. Thêm 1 sản phẩm giá `30,000,000 VND` vào giỏ hàng.
2. Điều hướng tới `http://localhost:5173/checkout`.
3. Bấm vào ô "Tổng tiền thanh toán (VND)", xóa số cũ đi và nhập `1000`.
4. Bấm "Xác Nhận Thanh Toán".
5. Đơn hàng được gửi lên Backend API với số tiền `1000 VND` thành công.

### 3. Nguyên nhân kỹ thuật
Trong file `frontend-web/src/pages/Checkout.jsx` (dòng 93-102):
```jsx
<input
  type="number"
  value={editableTotal}
  onChange={(e) => setEditableTotal(Number(e.target.value))}
  className="border p-2 rounded text-red-600 font-bold"
/>
```

### 4. Kết quả kỳ vọng
Trường Tổng tiền thanh toán bắt buộc phải là văn bản chỉ đọc (Read-only text), được tính toán tự động từ backend, không cho phép client chỉnh sửa.

- **Severity:** Critical (Lỗi nghiêm trọng cấp độ bảo mật & nghiệp vụ)
```

---

### ISSUE #4: [BUG-04] Xóa sản phẩm trong Giỏ hàng không có hộp thoại/Modal xác nhận
**Labels:** `bug`, `major`, `IA-04`, `Cart`

**Nội dung:**
```markdown
### 1. Mô tả lỗi
Trong bảng danh sách giỏ hàng (`/cart`), khi người dùng bấm vào nút "Xóa", sản phẩm lập tức bị xóa vĩnh viễn khỏi giỏ mà không hề có hộp thoại xác nhận (Confirm modal/dialog) hỏi lại ý kiến người dùng.

### 2. Tác động người dùng
Người dùng sử dụng màn hình cảm ứng hoặc rê chuột rất dễ bấm nhầm nút Xóa. Khi bị xóa nhầm, họ không thể khôi phục lại món đồ và phải mất thời gian tìm kiếm lại từ đầu.

### 3. Kết quả kỳ vọng
Hệ thống phải hiển thị popup: *"Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng không?"* với 2 nút [Hủy] và [Xác nhận xóa].

- **Severity:** Major
- **Aspect:** IA-04 (Feedback / State)
```

---

### ISSUE #5: [BUG-05] Mất sạch dữ liệu giỏ hàng khi người dùng F5 / Reload trang web
**Labels:** `bug`, `critical`, `IA-04`, `Data Loss`

**Nội dung:**
```markdown
### 1. Mô tả lỗi
Khi người dùng đã chọn nhiều món hàng vào giỏ hàng, nếu người dùng vô tình bấm F5, reload trình duyệt hoặc mở lại tab cũ, toàn bộ dữ liệu giỏ hàng bị mất trắng và quay về trạng thái rỗng.

### 2. Nguyên nhân kỹ thuật
Trong file `frontend-web/src/context/CartContext.jsx` (dòng 6):
```javascript
const [cart, setCart] = useState([]);
```
Giỏ hàng chỉ được lưu tạm thời trong bộ nhớ RAM của component React (State), chưa được đồng bộ lưu trữ vào `localStorage` của trình duyệt.

### 3. Kết quả kỳ vọng
Dữ liệu giỏ hàng phải được tự động lưu vào `localStorage.setItem('cart', ...)` để khi F5 hoặc mở lại trình duyệt vẫn giữ nguyên giỏ hàng cho khách hàng.

- **Severity:** Critical
```

---

### ISSUE #6: [BUG-06] Trang Checkout thiếu hoàn toàn form nhập Họ tên, SĐT, Địa chỉ nhận hàng
**Labels:** `bug`, `critical`, `IA-02`, `Checkout`

**Nội dung:**
```markdown
### 1. Mô tả lỗi
Trang Thanh toán (`/checkout`) chỉ hiển thị tóm tắt sản phẩm và ô mã giảm giá, hoàn toàn thiếu các trường thông tin nhận hàng cốt lõi:
- Họ và tên người nhận hàng
- Số điện thoại liên hệ
- Địa chỉ giao hàng (Tỉnh/Thành, Quận/Huyện, Số nhà)
- Lựa chọn phương thức thanh toán (COD / Chuyển khoản ngân hàng)

### 2. Tác động
Người dùng không biết đơn hàng sẽ được gửi về đâu và thanh toán qua hình thức nào, gây mất độ tin cậy và không thể hoàn tất quy trình thương mại điện tử thực tế.

### 3. Kết quả kỳ vọng
Cần bổ sung Form thông tin giao hàng hoàn chỉnh có kiểm tra tính hợp lệ (Validation số điện thoại, bắt buộc điền địa chỉ) trước khi cho phép bấm nút "Xác Nhận Thanh Toán".

- **Severity:** Critical
- **Aspect:** IA-02 (Forms)
```

---

### ISSUE #7: [BUG-07] Trang Chi tiết sản phẩm thiếu thanh điều hướng phân cấp (Breadcrumb)
**Labels:** `bug`, `minor`, `IA-03`, `Navigation`

**Nội dung:**
```markdown
### 1. Mô tả lỗi
Khi người dùng bấm vào xem chi tiết một sản phẩm từ trang chủ, trang chi tiết (`/product/:id`) không có thanh Breadcrumb (ví dụ: `Trang chủ > Điện thoại > iPhone 15 Pro Max`) và cũng không có nút "Quay lại" hoặc "Tiếp tục mua sắm".

### 2. Tác động
Người dùng buộc phải bấm nút Back của trình duyệt hoặc bấm vào Logo EShop để quay về đầu trang.

### 3. Kết quả kỳ vọng
Bổ sung thanh Breadcrumb ở đầu trang chi tiết cho phép người dùng click quay lại danh mục cha bằng 1 cú nhấp chuột.

- **Severity:** Minor
- **Aspect:** IA-03 (Navigation)
```

---

### ISSUE #8: [BUG-08] Thiếu tính năng hủy áp dụng mã giảm giá (Remove Coupon)
**Labels:** `bug`, `minor`, `IA-04`, `Coupon`

**Nội dung:**
```markdown
### 1. Mô tả lỗi
Trên trang Checkout, sau khi người dùng nhập mã coupon thành công (ví dụ `SALE10`), hệ thống hiển thị thông báo đã giảm tiền, nhưng không cung cấp nút `[X]` hoặc nút "Hủy mã" / "Gỡ bỏ".

### 2. Tác động
Nếu người dùng có mã giảm giá khác tốt hơn hoặc muốn đổi mã, họ không thể gỡ mã cũ ra để nhập mã mới nếu không tự sửa tay lại ô tổng tiền.

### 3. Kết quả kỳ vọng
Hiển thị nút "Hủy mã giảm giá" bên cạnh thông báo thành công để người dùng khôi phục lại giá gốc hoặc đổi mã khác.

- **Severity:** Minor
- **Aspect:** IA-04 (Feedback / State)
```

---

### ISSUE #9: [BUG-09] Ô nhập số lượng ở trang chi tiết cho phép gõ số âm, số 0 và chữ 'e'
**Labels:** `bug`, `minor`, `IA-02`, `Validation`

**Nội dung:**
```markdown
### 1. Mô tả lỗi
Ô nhập số lượng tại trang `ProductDetail.jsx` sử dụng thẻ `<input type="number">` thông thường, không chặn sự kiện bàn phím. Người dùng có thể gõ các số bất hợp lý như `-5`, `0`, `999999` hoặc các ký tự khoa học `e`, `E`, `+`, `-`.

### 2. Các bước tái hiện
1. Vào `http://localhost:5173/product/1`.
2. Bấm vào ô số lượng, gõ `-10` hoặc `e`.
3. Bấm "Thêm vào giỏ hàng" (2 lần).
4. Hệ thống vẫn nhận số lượng âm vào giỏ hàng.

### 3. Kết quả kỳ vọng
Chặn triệt để các ký tự không phải số nguyên dương, thiết lập `min="1"` và tự động reset về `1` nếu người dùng nhập số $\le 0$.

- **Severity:** Minor
- **Aspect:** IA-02 (Forms)
```

---

### ISSUE #10: [BUG-10] Nút "Thêm vào giỏ" trên trang chi tiết bị ẩn trên giao diện Mobile
**Labels:** `bug`, `major`, `IA-01`, `Mobile`

**Nội dung:**
```markdown
### 1. Mô tả lỗi
Trong mã nguồn `ProductDetail.jsx` dòng 66, nút "Thêm vào giỏ hàng" bị gắn class `bug-mobile-hidden`. Khi xem trên một số màn hình di động hoặc responsive nhỏ, nút này bị ẩn mất khiến người dùng điện thoại không thể mua hàng.

### 2. Kết quả kỳ vọng
Nút "Thêm vào giỏ hàng" phải luôn hiển thị nổi bật và bấm được trên mọi độ phân giải màn hình từ Desktop đến Mobile.

- **Severity:** Major
- **Aspect:** IA-01 (General UI)
```

---

### ISSUE #11: [BUG-11] Trang tìm kiếm hiển thị lưới trống, thiếu thông báo "Không tìm thấy sản phẩm"
**Labels:** `bug`, `minor`, `IA-04`, `Search`

**Nội dung:**
```markdown
### 1. Mô tả lỗi
Khi người dùng tìm kiếm từ khóa không tồn tại trong cơ sở dữ liệu (ví dụ: `xyz123456`), hệ thống không hiển thị bất kỳ dòng thông báo thân thiện nào như *"Không tìm thấy sản phẩm phù hợp với từ khóa của bạn"*, mà chỉ hiển thị khoảng trống màu trắng mênh mông.

### 2. Kết quả kỳ vọng
Hiển thị trạng thái rỗng (Empty State) kèm hình minh họa và gợi ý: *"Không tìm thấy kết quả. Vui lòng thử lại với từ khóa khác!"*.

- **Severity:** Minor
- **Aspect:** IA-04 (Feedback / State)
```

---

### ISSUE #12: [BUG-12] Giỏ hàng không cho phép chỉnh sửa số lượng sản phẩm trực tiếp
**Labels:** `bug`, `minor`, `IA-02`, `Cart`

**Nội dung:**
```markdown
### 1. Mô tả lỗi
Tại trang Giỏ hàng (`/cart`), cột "Số lượng" chỉ hiển thị văn bản tĩnh `{item.quantity}`. Người dùng muốn mua thêm số lượng hoặc giảm bớt số lượng buộc phải xóa đi và quay lại trang chi tiết sản phẩm để thêm lại từ đầu.

### 2. Kết quả kỳ vọng
Cột số lượng trong bảng giỏ hàng cần có ô input số lượng hoặc nút bấm `[+]` và `[-]` để người dùng điều chỉnh trực tiếp và tự động cập nhật lại tổng tiền.

- **Severity:** Minor
- **Aspect:** IA-02 (Forms)
```
