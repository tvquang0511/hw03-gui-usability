# Bug Reports — HW03 GUI & Usability

**Student:** Tr?n Vu Quang — 23120346  
**SUT:** EShop — web `http://localhost:5173`, admin `http://localhost:5174`, API `http://localhost:3001/api`  
**Ngày:** 15/11/2026  
**Môi trường:** Chromium 141 (Playwright 1.64.1), viewport 1280×800; mobile 375×812  
**Tài khoản:** `test@eshop.com / Test1234!` · admin `admin@eshop.com / Admin123!`

> Mỗi bug dưới đây tương ứng **1 GitHub Issue** có screenshot đính kèm.
> Một bug có thể gộp nhiều checklist item cùng nguyên nhân (cột `Checklist item`).
> Severity: **Blocker** (không hoàn thành được tác vụ / sai toàn vẹn dữ liệu) · **Major** (hoàn thành được nhưng sai kết quả hoặc phải workaround) · **Minor** (ảnh hưởng trải nghiệm) · **Cosmetic** (thuần thẩm mỹ).

## Tổng hợp

| Severity | Số bug |
| :--- | ---: |
| Blocker | 5 |
| Major | 16 |
| Minor | 12 |
| Cosmetic | 1 |
| **Tổng** | **34** |

Bug phủ **44/44** checklist item Failed. Screenshot của mọi item Failed nằm trong `screenshots/checklist/`; bản copy theo bug nằm trong `screenshots/bugs/`.

| Bug ID | Title | Severity | Screen | Checklist item | Issue |
| :--- | :--- | :--- | :--- | :--- | :--- |
| [GUI-BUG-01](#gui-bug-01--cấu-trúc-heading-sai-home-có-2-h1-57-trang-không-có-h1) | Cấu trúc heading sai: Home có 2 <h1>, 5/7 trang không có <h1> | Minor | Home, Login, Register, Cart, Checkout, Profile | IA-01-01, IA-01-02 | [#1](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/1) |
| [GUI-BUG-02](#gui-bug-02--html-langen-trong-khi-toàn-bộ-nội-dung-là-tiếng-việt) | <html lang="en"> trong khi toàn bộ nội dung là tiếng Việt | Minor | Global | IA-01-03 | [#2](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/2) |
| [GUI-BUG-03](#gui-bug-03--định-dạng-dữ-liệu-locale-không-nhất-quán-tiền-dùng-cả-vnd-và-ngày-theo-mdyyyy) | Định dạng dữ liệu locale không nhất quán: tiền dùng cả "VND" và "₫", ngày theo M/D/YYYY | Minor | Home, Cart, Checkout, Profile | IA-01-05, IA-01-08 | [#3](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/3) |
| [GUI-BUG-04](#gui-bug-04--nhãn-chức-năng-trộn-tiếng-anh-và-tiếng-việt-trên-cùng-một-màn-hình) | Nhãn chức năng trộn tiếng Anh và tiếng Việt trên cùng một màn hình | Major | Login, Register, Admin login | IA-01-04 | [#4](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/4) |
| [GUI-BUG-05](#gui-bug-05--màu-nút-không-theo-quy-ước-primary-lúc-đỏ-lúc-xanh-lá-nút-xóa-không-có-màu-nguy-hiểm) | Màu nút không theo quy ước: primary lúc đỏ lúc xanh lá, nút xóa không có màu nguy hiểm | Minor | Register, Cart | IA-01-06, IA-01-07 | [#5](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/5) |
| [GUI-BUG-06](#gui-bug-06--55-ảnh-sản-phẩm-có-alt-rỗng) | 5/5 ảnh sản phẩm có alt rỗng | Major | Home | IA-01-09 | [#6](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/6) |
| [GUI-BUG-07](#gui-bug-07--6-node-chữ-không-đạt-wcag-aa-contrast-451) | 6 node chữ không đạt WCAG AA (contrast < 4.5:1) | Major | Home, Cart | IA-01-10 | [#7](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/7) |
| [GUI-BUG-08](#gui-bug-08--15-control-nhỏ-hơn-4444-px-trên-mobile) | 15 control nhỏ hơn 44×44 px trên mobile | Major | Home (375px) | IA-01-16 | [#8](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/8) |
| [GUI-BUG-09](#gui-bug-09--input-không-có-label-liên-kết-và-không-có-dấu-cho-trường-bắt-buộc) | Input không có label liên kết và không có dấu * cho trường bắt buộc | Major | Login, Register, Checkout | IA-02-01, IA-02-04 | [#9](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/9) |
| [GUI-BUG-10](#gui-bug-10--email-dùng-typetext-mật-khẩu-ở-login-dùng-typetext-lộ-ký-tự) | Email dùng type="text", mật khẩu ở Login dùng type="text" (lộ ký tự) | Major | Login, Register | IA-02-02, IA-02-03 | [#10](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/10) |
| [GUI-BUG-11](#gui-bug-11--thông-báo-lỗi-đăng-nhập-nằm-dưới-nút-submit-và-không-chỉ-ra-trường-sai) | Thông báo lỗi đăng nhập nằm dưới nút submit và không chỉ ra trường sai | Major | Login | IA-02-05, IA-02-06 | [#11](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/11) |
| [GUI-BUG-12](#gui-bug-12--luồng-quên-mật-khẩu-không-có-step-indicator) | Luồng quên mật khẩu không có step indicator | Minor | ForgotPassword | IA-02-07 | [#12](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/12) |
| [GUI-BUG-13](#gui-bug-13--không-có-trạng-thái-đang-xử-lý-khi-submit-có-thể-submit-2-lần) | Không có trạng thái đang xử lý khi submit — có thể submit 2 lần | Major | Login, Register, Checkout | IA-02-09, IA-04-14 | [#13](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/13) |
| [GUI-BUG-14](#gui-bug-14--ô-số-lượng-sản-phẩm-không-có-minstep) | Ô số lượng sản phẩm không có min/step | Major | ProductDetail | IA-02-10 | [#14](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/14) |
| [GUI-BUG-15](#gui-bug-15--tổng-tiền-thanh-toán-là-input-editable-người-dùng-sửa-được-số-tiền-phải-trả) | Tổng tiền thanh toán là input editable — người dùng sửa được số tiền phải trả | Blocker | Checkout | IA-02-11 | [#15](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/15) |
| [GUI-BUG-16](#gui-bug-16--người-chưa-đăng-nhập-vẫn-vào-được-trang-thanh-toán) | Người chưa đăng nhập vẫn vào được trang thanh toán | Blocker | Checkout | IA-02-12 | [#16](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/16) |
| [GUI-BUG-17](#gui-bug-17--form-đăng-nhậpđăng-ký-thiếu-autocomplete) | Form đăng nhập/đăng ký thiếu autocomplete | Minor | Login, Register | IA-02-13 | [#17](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/17) |
| [GUI-BUG-18](#gui-bug-18--ô-tìm-kiếm-chỉ-có-placeholder-không-có-labelaria-label) | Ô tìm kiếm chỉ có placeholder, không có label/aria-label | Minor | Home | IA-02-14 | [#18](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/18) |
| [GUI-BUG-19](#gui-bug-19--email-có-khoảng-trắng-đầucuối-bị-từ-chối-đăng-nhập) | Email có khoảng trắng đầu/cuối bị từ chối đăng nhập | Minor | Login | IA-02-15 | [#19](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/19) |
| [GUI-BUG-20](#gui-bug-20--form-đăng-ký-không-có-trường-xác-nhận-mật-khẩu) | Form đăng ký không có trường xác nhận mật khẩu | Major | Register | IA-02-16 | [#20](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/20) |
| [GUI-BUG-21](#gui-bug-21--thêm-vào-giỏ-không-có-phản-hồi-không-toast-không-badge-số-lượng) | Thêm vào giỏ không có phản hồi: không toast, không badge số lượng | Major | Home, Global header | IA-03-02, IA-04-01 | [#21](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/21) |
| [GUI-BUG-22](#gui-bug-22--nút-đăng-xuất-có-nhãn-thoát-thay-vì-đăng-xuất) | Nút đăng xuất có nhãn "Thoát" thay vì "Đăng xuất" | Minor | Global header | IA-03-03 | [#22](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/22) |
| [GUI-BUG-23](#gui-bug-23--không-có-breadcrumb-ở-các-trang-con) | Không có breadcrumb ở các trang con | Minor | Cart, Checkout, ProductDetail | IA-03-04 | [#23](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/23) |
| [GUI-BUG-24](#gui-bug-24--giỏ-hàng-mất-toàn-bộ-khi-reload-f5) | Giỏ hàng mất toàn bộ khi reload (F5) | Major | Cart | IA-03-09 | [#24](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/24) |
| [GUI-BUG-25](#gui-bug-25--click-đầu-tiên-vào-thêm-vào-giỏ-hàng-ở-product-detail-không-có-tác-dụng) | Click đầu tiên vào "Thêm vào giỏ hàng" ở Product Detail không có tác dụng | Blocker | ProductDetail | IA-04-02 | [#25](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/25) |
| [GUI-BUG-26](#gui-bug-26--xóa-sản-phẩm-khỏi-giỏ-và-hủy-đơn-hàng-không-có-bước-xác-nhận) | Xóa sản phẩm khỏi giỏ và hủy đơn hàng không có bước xác nhận | Major | Cart, Profile | IA-04-03, IA-04-15 | [#26](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/26) |
| [GUI-BUG-27](#gui-bug-27--empty-state-giỏ-hàng-chỉ-có-chữ-không-có-iconhình-minh-họa) | Empty state giỏ hàng chỉ có chữ, không có icon/hình minh họa | Cosmetic | Cart | IA-04-04 | [#27](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/27) |
| [GUI-BUG-28](#gui-bug-28--tìm-kiếm-0-kết-quả-không-có-empty-state) | Tìm kiếm 0 kết quả không có empty state | Major | Home | IA-04-05 | [#28](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/28) |
| [GUI-BUG-29](#gui-bug-29--thiếu-loading-state-và-error-state-khi-gọi-api-sản-phẩm) | Thiếu loading state và error state khi gọi API sản phẩm | Major | Home | IA-04-06, IA-04-07 | [#29](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/29) |
| [GUI-BUG-30](#gui-bug-30--coupon-save10-hiển-thị-số-tiền-giảm-âm-và-thành-tiền-cao-hơn-giá-gốc) | Coupon SAVE10 hiển thị số tiền giảm âm và thành tiền cao hơn giá gốc | Blocker | Checkout | IA-04-08 | [#30](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/30) |
| [GUI-BUG-31](#gui-bug-31--sau-thanh-toán-thành-công-giỏ-hàng-không-được-xóa) | Sau thanh toán thành công, giỏ hàng không được xóa | Major | Checkout success, Cart | IA-04-11 | [#31](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/31) |
| [GUI-BUG-32](#gui-bug-32--chuỗi-tìm-kiếm-được-render-thành-html-xss-qua-dangerouslysetinnerhtml) | Chuỗi tìm kiếm được render thành HTML (XSS qua dangerouslySetInnerHTML) | Blocker | Home | IA-04-12 | [#32](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/32) |
| [GUI-BUG-33](#gui-bug-33--thông-báo-lỗi-thanh-toán-lộ-chi-tiết-kỹ-thuật-network-error) | Thông báo lỗi thanh toán lộ chi tiết kỹ thuật "Network Error" | Minor | Checkout | IA-04-13 | [#33](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/33) |
| [GUI-BUG-34](#gui-bug-34--không-có-cơ-chế-đóngtự-đóng-cho-thông-báo-thành-công) | Không có cơ chế đóng/tự đóng cho thông báo thành công | Minor | Global | IA-04-16 | [#34](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/34) |

---

## GUI-BUG-01 — Cấu trúc heading sai: Home có 2 <h1>, 5/7 trang không có <h1>

| Field | Value |
| :--- | :--- |
| Checklist item | IA-01-01, IA-01-02 |
| Screen / URL | Home, Login, Register, Cart, Checkout, Profile — `/, /login, /register, /cart, /checkout, /profile` |
| Severity | **Minor** |
| Spec reference | FR-21 |
| Detected by | Checklist execution (automated + manual review) |

**Steps to reproduce**

1. Mở http://localhost:5173/
2. Đếm thẻ h1 trong DOM
3. Lặp lại với /login, /register, /cart, /checkout, /profile

**Expected** — Mỗi trang có đúng một <h1> mô tả nội dung trang; heading không nhảy cấp.

**Actual** — Home có 2 <h1> ("Danh sách sản phẩm" và "Hiển thị 5 sản phẩm"); /login, /register, /forgot-password, /cart dùng <h2> làm tiêu đề đầu tiên, /profile không có heading nào.

**Impact** — Screen reader điều hướng theo heading bị mất mốc; SEO và cấu trúc tài liệu sai.

**Evidence** — `screenshots/bugs/GUI-BUG-01.png`

![GUI-BUG-01 — Cấu trúc heading sai: Home có 2 <h1>, 5/7 trang không có <h1>](screenshots/bugs/GUI-BUG-01.png)

**GitHub Issue:** [#1](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/1)

---

## GUI-BUG-02 — <html lang="en"> trong khi toàn bộ nội dung là tiếng Việt

| Field | Value |
| :--- | :--- |
| Checklist item | IA-01-03 |
| Screen / URL | Global — `mọi trang` |
| Severity | **Minor** |
| Spec reference | FR-21 |
| Detected by | Checklist execution (automated + manual review) |

**Steps to reproduce**

1. Mở bất kỳ trang web
2. Kiểm tra document.documentElement.lang

**Expected** — lang bắt đầu bằng "vi" để screen reader phát âm đúng và trình duyệt dịch/chính tả đúng.

**Actual** — lang="en" (cấu hình mặc định của Vite template).

**Impact** — Screen reader đọc tiếng Việt bằng giọng tiếng Anh, sai dấu và khó hiểu.

**Evidence** — `screenshots/bugs/GUI-BUG-02.png`

![GUI-BUG-02 — <html lang="en"> trong khi toàn bộ nội dung là tiếng Việt](screenshots/bugs/GUI-BUG-02.png)

**GitHub Issue:** [#2](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/2)

---

## GUI-BUG-03 — Định dạng dữ liệu locale không nhất quán: tiền dùng cả "VND" và "₫", ngày theo M/D/YYYY

| Field | Value |
| :--- | :--- |
| Checklist item | IA-01-05, IA-01-08 |
| Screen / URL | Home, Cart, Checkout, Profile — `/, /cart, /profile` |
| Severity | **Minor** |
| Spec reference | FR-21 |
| Detected by | Checklist execution (automated + manual review) |

**Steps to reproduce**

1. Mở Home: giá hiển thị "30,000,000 VND"
2. Thêm sản phẩm, mở Cart: giá hiển thị "30,000,000 ₫"
3. Đăng nhập, tạo đơn, mở /profile: cột Ngày đặt hiển thị "11/15/2026"

**Expected** — Cùng một định dạng tiền "30.000.000 ₫" trên mọi màn hình; ngày theo dd/mm/yyyy.

**Actual** — Home dùng "VND" + dấu phẩy nghìn; Cart/Checkout dùng "₫"; ngày đơn hàng là 11/15/2026 (M/D/YYYY) do toLocaleDateString() mặc định en-US.

**Impact** — Người dùng Việt đọc 11/15/2026 thành 15/11 hoặc 11/15 tùy thói quen; giá thiếu nhất quán gây khó so sánh.

**Evidence** — `screenshots/bugs/GUI-BUG-03.png`

![GUI-BUG-03 — Định dạng dữ liệu locale không nhất quán: tiền dùng cả "VND" và "₫", ngày theo M/D/YYYY](screenshots/bugs/GUI-BUG-03.png)

**GitHub Issue:** [#3](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/3)

---

## GUI-BUG-04 — Nhãn chức năng trộn tiếng Anh và tiếng Việt trên cùng một màn hình

| Field | Value |
| :--- | :--- |
| Checklist item | IA-01-04 |
| Screen / URL | Login, Register, Admin login — `/login, /admin` |
| Severity | **Major** |
| Spec reference | FR-21 |
| Detected by | Checklist execution (automated + manual review) |

**Steps to reproduce**

1. Mở /login
2. Đọc tiêu đề, nhãn field và nút submit
3. Mở http://localhost:5174

**Expected** — Toàn bộ nhãn chức năng chính dùng tiếng Việt nhất quán.

**Actual** — /login: "Đăng Ký" (tiêu đề) + "Username" + "Mật khẩu" + "Sign In"; admin: "Admin Login", "Login".

**Impact** — Người dùng tiếng Việt không chắc "Sign In" là đăng nhập hay đăng ký; tăng do dự ở bước đầu của flow.

**Evidence** — `screenshots/bugs/GUI-BUG-04.png`

![GUI-BUG-04 — Nhãn chức năng trộn tiếng Anh và tiếng Việt trên cùng một màn hình](screenshots/bugs/GUI-BUG-04.png)

**GitHub Issue:** [#4](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/4)

---

## GUI-BUG-05 — Màu nút không theo quy ước: primary lúc đỏ lúc xanh lá, nút xóa không có màu nguy hiểm

| Field | Value |
| :--- | :--- |
| Checklist item | IA-01-06, IA-01-07 |
| Screen / URL | Register, Cart — `/register, /cart` |
| Severity | **Minor** |
| Spec reference | FR-21 |
| Detected by | Checklist execution (automated + manual review) |

**Steps to reproduce**

1. Mở /register, đo background của nút "Đăng Ký"
2. Thêm sản phẩm, mở /cart, đo background nút "Tiến hành thanh toán" và "Xóa"

**Expected** — Primary action dùng blue-600; destructive action dùng đỏ.

**Actual** — "Đăng Ký" = rgb(239,68,68) đỏ; "Tiến hành thanh toán" = rgb(34,197,94) xanh lá; "Xóa" = rgba(0,0,0,0) text button, trong khi "Hủy đơn" ở Profile lại đỏ.

**Impact** — Màu đỏ vốn là tín hiệu nguy hiểm lại dùng cho hành động chính; nút xóa dễ bấm nhầm vì không nổi bật.

**Evidence** — `screenshots/bugs/GUI-BUG-05.png`

![GUI-BUG-05 — Màu nút không theo quy ước: primary lúc đỏ lúc xanh lá, nút xóa không có màu nguy hiểm](screenshots/bugs/GUI-BUG-05.png)

**GitHub Issue:** [#5](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/5)

---

## GUI-BUG-06 — 5/5 ảnh sản phẩm có alt rỗng

| Field | Value |
| :--- | :--- |
| Checklist item | IA-01-09 |
| Screen / URL | Home — `/` |
| Severity | **Major** |
| Spec reference | FR-24, WCAG 1.1.1 |
| Detected by | Checklist execution (automated + manual review) |

**Steps to reproduce**

1. Mở /
2. Đọc thuộc tính alt của mọi <img>

**Expected** — alt mô tả tên sản phẩm (ảnh mang thông tin, không phải trang trí).

**Actual** — 5/5 ảnh có alt="" (ảnh placeholder png?text=...).

**Impact** — Người dùng screen reader không biết sản phẩm nào; ảnh cũng không có text thay thế khi tải lỗi.

**Evidence** — `screenshots/bugs/GUI-BUG-06.png`

![GUI-BUG-06 — 5/5 ảnh sản phẩm có alt rỗng](screenshots/bugs/GUI-BUG-06.png)

**GitHub Issue:** [#6](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/6)

---

## GUI-BUG-07 — 6 node chữ không đạt WCAG AA (contrast < 4.5:1)

| Field | Value |
| :--- | :--- |
| Checklist item | IA-01-10 |
| Screen / URL | Home, Cart — `/` |
| Severity | **Major** |
| Spec reference | FR-21, WCAG 1.4.3 |
| Detected by | Checklist execution (automated + manual review) |

**Steps to reproduce**

1. Mở /
2. Chạy axe-core runOnly color-contrast
3. Đối chiếu các node bị báo

**Expected** — Không còn node text thường nào dưới 4.5:1.

**Actual** — 6 node vi phạm, ví dụ giá "30,000,000 VND" màu text-red-500 trên nền trắng chỉ đạt ~3.9:1; nhiều nhãn xám nhạt khác.

**Impact** — Người lớn tuổi/thị lực kém khó đọc giá và nhãn phụ — đúng nhóm người dùng chính của trang mua sắm.

**Evidence** — `screenshots/bugs/GUI-BUG-07.png`

![GUI-BUG-07 — 6 node chữ không đạt WCAG AA (contrast < 4.5:1)](screenshots/bugs/GUI-BUG-07.png)

**GitHub Issue:** [#7](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/7)

---

## GUI-BUG-08 — 15 control nhỏ hơn 44×44 px trên mobile

| Field | Value |
| :--- | :--- |
| Checklist item | IA-01-16 |
| Screen / URL | Home (375px) — `/` |
| Severity | **Major** |
| Spec reference | FR-21, WCAG 2.5.8 |
| Detected by | Checklist execution (automated + manual review) |

**Steps to reproduce**

1. Đặt viewport 375×812
2. Đo bounding box của mọi button/a
3. Lọc control có cạnh < 44px

**Expected** — Mọi control chính có vùng chạm ≥ 44×44 px.

**Actual** — 15 control nhỏ hơn ngưỡng, ví dụ logo "EShop" 70×32, link nav cao 24px.

**Impact** — Người dùng điện thoại dễ bấm sai, đặc biệt khi một tay/đang di chuyển.

**Evidence** — `screenshots/bugs/GUI-BUG-08.png`

![GUI-BUG-08 — 15 control nhỏ hơn 44×44 px trên mobile](screenshots/bugs/GUI-BUG-08.png)

**GitHub Issue:** [#8](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/8)

---

## GUI-BUG-09 — Input không có label liên kết và không có dấu * cho trường bắt buộc

| Field | Value |
| :--- | :--- |
| Checklist item | IA-02-01, IA-02-04 |
| Screen / URL | Login, Register, Checkout — `/login, /register, /checkout` |
| Severity | **Major** |
| Spec reference | FR-22 |
| Detected by | Checklist execution (automated + manual review) |

**Steps to reproduce**

1. Mở /login và /register
2. Kiểm tra mỗi input có labels.length > 0 hoặc aria-label
3. Kiểm tra nhãn required có ký tự *

**Expected** — Mỗi input có label for/id hoặc aria-label; trường bắt buộc có dấu *.

**Actual** — 8 input không có label liên kết (chỉ có placeholder); 5 trường required không có dấu *.

**Impact** — Click vào nhãn không focus được field; screen reader chỉ đọc "edit text"; người dùng không biết trường nào bắt buộc.

**Evidence** — `screenshots/bugs/GUI-BUG-09.png`

![GUI-BUG-09 — Input không có label liên kết và không có dấu * cho trường bắt buộc](screenshots/bugs/GUI-BUG-09.png)

**GitHub Issue:** [#9](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/9)

---

## GUI-BUG-10 — Email dùng type="text", mật khẩu ở Login dùng type="text" (lộ ký tự)

| Field | Value |
| :--- | :--- |
| Checklist item | IA-02-02, IA-02-03 |
| Screen / URL | Login, Register — `/login, /register` |
| Severity | **Major** |
| Spec reference | FR-22, FR-02 |
| Detected by | Checklist execution (automated + manual review) |

**Steps to reproduce**

1. Mở /login
2. Nhập mật khẩu bất kỳ
3. Quan sát ký tự hiển thị nguyên văn
4. Kiểm tra type của input email

**Expected** — Email type=email; mật khẩu type=password.

**Actual** — /login: types=[text,text] — mật khẩu hiện rõ; /register: email type=text; chỉ 1 trường password.

**Impact** — Lộ mật khẩu khi nhập trước mặt người khác/quay màn hình; mất autofill và bàn phím email.

**Evidence** — `screenshots/bugs/GUI-BUG-10.png`

![GUI-BUG-10 — Email dùng type="text", mật khẩu ở Login dùng type="text" (lộ ký tự)](screenshots/bugs/GUI-BUG-10.png)

**GitHub Issue:** [#10](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/10)

---

## GUI-BUG-11 — Thông báo lỗi đăng nhập nằm dưới nút submit và không chỉ ra trường sai

| Field | Value |
| :--- | :--- |
| Checklist item | IA-02-05, IA-02-06 |
| Screen / URL | Login — `/login` |
| Severity | **Major** |
| Spec reference | FR-22 |
| Detected by | Checklist execution (automated + manual review) |

**Steps to reproduce**

1. Mở /login
2. Nhập wrong@eshop.com / Wrong123!
3. Bấm "Sign In"
4. Quan sát vị trí và nội dung lỗi

**Expected** — Lỗi nằm phía trên nút submit, nêu rõ trường nào sai và cách sửa.

**Actual** — Dòng "Đăng nhập thất bại. Vui lòng kiểm tra lại." nằm dưới nút; không phân biệt email không tồn tại hay sai mật khẩu.

**Impact** — Người dùng bấm lại nút trước khi thấy lỗi; không biết cần sửa gì nên thử mò nhiều lần.

**Evidence** — `screenshots/bugs/GUI-BUG-11.png`

![GUI-BUG-11 — Thông báo lỗi đăng nhập nằm dưới nút submit và không chỉ ra trường sai](screenshots/bugs/GUI-BUG-11.png)

**GitHub Issue:** [#11](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/11)

---

## GUI-BUG-12 — Luồng quên mật khẩu không có step indicator

| Field | Value |
| :--- | :--- |
| Checklist item | IA-02-07 |
| Screen / URL | ForgotPassword — `/forgot-password` |
| Severity | **Minor** |
| Spec reference | FR-22, FR-03 |
| Detected by | Checklist execution (automated + manual review) |

**Steps to reproduce**

1. Mở /forgot-password
2. Đọc nội dung trang bước 1

**Expected** — Hiển thị "Bước 1/2" (nhập email) và "Bước 2/2" (nhập OTP).

**Actual** — Không có chỉ báo bước; người dùng chỉ thấy form email rồi đột ngột chuyển sang form OTP.

**Impact** — Không biết còn bao nhiêu bước, dễ bỏ dở giữa flow.

**Evidence** — `screenshots/bugs/GUI-BUG-12.png`

![GUI-BUG-12 — Luồng quên mật khẩu không có step indicator](screenshots/bugs/GUI-BUG-12.png)

**GitHub Issue:** [#12](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/12)

---

## GUI-BUG-13 — Không có trạng thái đang xử lý khi submit — có thể submit 2 lần

| Field | Value |
| :--- | :--- |
| Checklist item | IA-02-09, IA-04-14 |
| Screen / URL | Login, Register, Checkout — `/login` |
| Severity | **Major** |
| Spec reference | FR-22, FR-24 |
| Detected by | Checklist execution (automated + manual review) |

**Steps to reproduce**

1. Mở /login
2. Nhập tài khoản đúng
3. Bấm "Sign In" và đọc trạng thái nút ngay sau click

**Expected** — Nút disabled và đổi nhãn ("Đang đăng nhập…") trong lúc gửi.

**Actual** — Nút vẫn enabled, nhãn giữ nguyên "Sign In"; không có spinner. Riêng nút thanh toán có "Đang xử lý..." nhưng form auth thì không.

**Impact** — Người dùng bấm 2–3 lần gây request trùng; với checkout có thể tạo đơn trùng nếu mạng chậm.

**Evidence** — `screenshots/bugs/GUI-BUG-13.png`

![GUI-BUG-13 — Không có trạng thái đang xử lý khi submit — có thể submit 2 lần](screenshots/bugs/GUI-BUG-13.png)

**GitHub Issue:** [#13](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/13)

---

## GUI-BUG-14 — Ô số lượng sản phẩm không có min/step

| Field | Value |
| :--- | :--- |
| Checklist item | IA-02-10 |
| Screen / URL | ProductDetail — `/product/1` |
| Severity | **Major** |
| Spec reference | FR-06 |
| Detected by | Checklist execution (automated + manual review) |

**Steps to reproduce**

1. Mở /product/1
2. Kiểm tra thuộc tính min/step/max của input number
3. Thử nhập 0 hoặc -1

**Expected** — min=1, step=1 và thông báo khi nhập sai.

**Actual** — min=null, step=null; chấp nhận 0, số âm, thập phân.

**Impact** — Có thể thêm 0 hoặc số lượng âm vào giỏ, làm tổng tiền sai/làm hỏng đơn.

**Evidence** — `screenshots/bugs/GUI-BUG-14.png`

![GUI-BUG-14 — Ô số lượng sản phẩm không có min/step](screenshots/bugs/GUI-BUG-14.png)

**GitHub Issue:** [#14](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/14)

---

## GUI-BUG-15 — Tổng tiền thanh toán là input editable — người dùng sửa được số tiền phải trả

| Field | Value |
| :--- | :--- |
| Checklist item | IA-02-11 |
| Screen / URL | Checkout — `/checkout` |
| Severity | **Blocker** |
| Spec reference | FR-08 |
| Detected by | Checklist execution (automated + manual review) |

**Steps to reproduce**

1. Đăng nhập, thêm sản phẩm, mở /cart → Thanh toán
2. Tìm input chứa tổng tiền
3. Sửa giá trị thành 1

**Expected** — Tổng tiền là text/readonly, tính từ giỏ hàng.

**Actual** — Input type=number với value=cartTotal, không readonly/disabled; sửa được tự do và giá trị này được gửi lên API checkout.

**Impact** — Người dùng (hoặc kẻ xấu) trả 1 ₫ cho đơn 30 triệu; phá vỡ tính toàn vẹn của đơn hàng.

**Evidence** — `screenshots/bugs/GUI-BUG-15.png`

![GUI-BUG-15 — Tổng tiền thanh toán là input editable — người dùng sửa được số tiền phải trả](screenshots/bugs/GUI-BUG-15.png)

**GitHub Issue:** [#15](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/15)

---

## GUI-BUG-16 — Người chưa đăng nhập vẫn vào được trang thanh toán

| Field | Value |
| :--- | :--- |
| Checklist item | IA-02-12 |
| Screen / URL | Checkout — `/checkout` |
| Severity | **Blocker** |
| Spec reference | FR-08 |
| Detected by | Checklist execution (automated + manual review) |

**Steps to reproduce**

1. Xoá localStorage (chưa đăng nhập)
2. Mở trực tiếp http://localhost:5173/checkout

**Expected** — Chặn truy cập, hiển thị thông báo và lối đăng nhập.

**Actual** — Form "Xác Nhận Đơn Hàng" + nút "Xác Nhận Thanh Toán" hiển thị đầy đủ; đơn được tạo không gắn user.

**Impact** — Đơn hàng mồ côi không thuộc tài khoản nào; người dùng tưởng đã đặt hàng nhưng không xem được lịch sử.

**Evidence** — `screenshots/bugs/GUI-BUG-16.png`

![GUI-BUG-16 — Người chưa đăng nhập vẫn vào được trang thanh toán](screenshots/bugs/GUI-BUG-16.png)

**GitHub Issue:** [#16](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/16)

---

## GUI-BUG-17 — Form đăng nhập/đăng ký thiếu autocomplete

| Field | Value |
| :--- | :--- |
| Checklist item | IA-02-13 |
| Screen / URL | Login, Register — `/login, /register` |
| Severity | **Minor** |
| Spec reference | FR-22 |
| Detected by | Checklist execution (automated + manual review) |

**Steps to reproduce**

1. Mở /login và /register
2. Đọc thuộc tính autocomplete của từng input

**Expected** — email → autocomplete="email"; login password → current-password; register password → new-password.

**Actual** — 5/5 input không có autocomplete.

**Impact** — Trình duyệt/password manager không tự điền; người dùng phải gõ lại, tăng lỗi nhập.

**Evidence** — `screenshots/bugs/GUI-BUG-17.png`

![GUI-BUG-17 — Form đăng nhập/đăng ký thiếu autocomplete](screenshots/bugs/GUI-BUG-17.png)

**GitHub Issue:** [#17](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/17)

---

## GUI-BUG-18 — Ô tìm kiếm chỉ có placeholder, không có label/aria-label

| Field | Value |
| :--- | :--- |
| Checklist item | IA-02-14 |
| Screen / URL | Home — `/` |
| Severity | **Minor** |
| Spec reference | FR-22, WCAG 3.3.2 |
| Detected by | Checklist execution (automated + manual review) |

**Steps to reproduce**

1. Mở /
2. Kiểm tra input tìm kiếm

**Expected** — Có label hoặc aria-label; placeholder chỉ là gợi ý.

**Actual** — Chỉ có placeholder "Tìm kiếm...", không label/aria-label.

**Impact** — Placeholder biến mất khi gõ nên người dùng quên ô đang nhập gì; screen reader không gọi tên được.

**Evidence** — `screenshots/bugs/GUI-BUG-18.png`

![GUI-BUG-18 — Ô tìm kiếm chỉ có placeholder, không có label/aria-label](screenshots/bugs/GUI-BUG-18.png)

**GitHub Issue:** [#18](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/18)

---

## GUI-BUG-19 — Email có khoảng trắng đầu/cuối bị từ chối đăng nhập

| Field | Value |
| :--- | :--- |
| Checklist item | IA-02-15 |
| Screen / URL | Login — `/login` |
| Severity | **Minor** |
| Spec reference | FR-22 |
| Detected by | Checklist execution (automated + manual review) |

**Steps to reproduce**

1. Mở /login
2. Nhập "  test@eshop.com  " (có 2 space mỗi bên) và mật khẩu đúng
3. Bấm Sign In

**Expected** — Trim trước khi gửi (đăng nhập thành công) hoặc báo rõ "email không được chứa khoảng trắng".

**Actual** — Đăng nhập thất bại với thông báo chung chung; giá trị thô được gửi nguyên.

**Impact** — Người dùng copy email từ clipboard (rất hay kèm space) bị chặn mà không hiểu lý do.

**Evidence** — `screenshots/bugs/GUI-BUG-19.png`

![GUI-BUG-19 — Email có khoảng trắng đầu/cuối bị từ chối đăng nhập](screenshots/bugs/GUI-BUG-19.png)

**GitHub Issue:** [#19](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/19)

---

## GUI-BUG-20 — Form đăng ký không có trường xác nhận mật khẩu

| Field | Value |
| :--- | :--- |
| Checklist item | IA-02-16 |
| Screen / URL | Register — `/register` |
| Severity | **Major** |
| Spec reference | FR-01 |
| Detected by | Checklist execution (automated + manual review) |

**Steps to reproduce**

1. Mở /register
2. Đếm số input type=password

**Expected** — Có "Mật khẩu" + "Xác nhận mật khẩu" và chặn khi không khớp.

**Actual** — Chỉ 1 trường password, không có bước xác nhận.

**Impact** — Người dùng gõ sai mật khẩu (không thấy ký tự) sẽ tạo tài khoản với mật khẩu họ không biết.

**Evidence** — `screenshots/bugs/GUI-BUG-20.png`

![GUI-BUG-20 — Form đăng ký không có trường xác nhận mật khẩu](screenshots/bugs/GUI-BUG-20.png)

**GitHub Issue:** [#20](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/20)

---

## GUI-BUG-21 — Thêm vào giỏ không có phản hồi: không toast, không badge số lượng

| Field | Value |
| :--- | :--- |
| Checklist item | IA-03-02, IA-04-01 |
| Screen / URL | Home, Global header — `/` |
| Severity | **Major** |
| Spec reference | FR-23, FR-24, FR-06 |
| Detected by | Checklist execution (automated + manual review) |

**Steps to reproduce**

1. Mở /
2. Bấm "Thêm vào giỏ" ở một card
3. Quan sát toast và link Giỏ hàng trên header

**Expected** — Toast/badge cập nhật ngay để xác nhận hành động.

**Actual** — Không có toast, không có role=status; nav vẫn chỉ có "Giỏ hàng | Đăng nhập | Đăng ký", không badge số lượng.

**Impact** — Người dùng bấm lại nhiều lần vì tưởng chưa thêm; giỏ bị nhân bản ngoài ý muốn.

**Evidence** — `screenshots/bugs/GUI-BUG-21.png`

![GUI-BUG-21 — Thêm vào giỏ không có phản hồi: không toast, không badge số lượng](screenshots/bugs/GUI-BUG-21.png)

**GitHub Issue:** [#21](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/21)

---

## GUI-BUG-22 — Nút đăng xuất có nhãn "Thoát" thay vì "Đăng xuất"

| Field | Value |
| :--- | :--- |
| Checklist item | IA-03-03 |
| Screen / URL | Global header — `sau khi đăng nhập` |
| Severity | **Minor** |
| Spec reference | FR-23 |
| Detected by | Checklist execution (automated + manual review) |

**Steps to reproduce**

1. Đăng nhập
2. Đọc nhãn button góc phải header

**Expected** — Nhãn "Đăng xuất" đúng terminology của SRS.

**Actual** — Nhãn "Thoát".

**Impact** — "Thoát" mơ hồ (thoát trang? thoát app?), người dùng không chắc có mất phiên đăng nhập.

**Evidence** — `screenshots/bugs/GUI-BUG-22.png`

![GUI-BUG-22 — Nút đăng xuất có nhãn "Thoát" thay vì "Đăng xuất"](screenshots/bugs/GUI-BUG-22.png)

**GitHub Issue:** [#22](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/22)

---

## GUI-BUG-23 — Không có breadcrumb ở các trang con

| Field | Value |
| :--- | :--- |
| Checklist item | IA-03-04 |
| Screen / URL | Cart, Checkout, ProductDetail — `/cart, /checkout, /product/1` |
| Severity | **Minor** |
| Spec reference | FR-23 |
| Detected by | Checklist execution (automated + manual review) |

**Steps to reproduce**

1. Mở lần lượt /cart, /checkout, /product/1
2. Tìm breadcrumb/aria-label breadcrumb

**Expected** — Breadcrumb hiển thị đường dẫn về trang chủ.

**Actual** — Cả 3 trang không có breadcrumb.

**Impact** — Người dùng vào sâu từ link ngoài không biết mình đang ở đâu trong cấu trúc site.

**Evidence** — `screenshots/bugs/GUI-BUG-23.png`

![GUI-BUG-23 — Không có breadcrumb ở các trang con](screenshots/bugs/GUI-BUG-23.png)

**GitHub Issue:** [#23](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/23)

---

## GUI-BUG-24 — Giỏ hàng mất toàn bộ khi reload (F5)

| Field | Value |
| :--- | :--- |
| Checklist item | IA-03-09 |
| Screen / URL | Cart — `/cart` |
| Severity | **Major** |
| Spec reference | FR-07 |
| Detected by | Checklist execution (automated + manual review) |

**Steps to reproduce**

1. Thêm 1 sản phẩm
2. Mở /cart, thấy sản phẩm
3. Bấm F5

**Expected** — Giỏ hàng được lưu (localStorage/server) và còn nguyên sau reload.

**Actual** — Giỏ trống với thông báo "Giỏ hàng của bạn đang trống" — cart chỉ nằm trong React state.

**Impact** — Mất giỏ khi vô tình reload/chuyển tab; đặc biệt đau với người mua nhiều sản phẩm.

**Evidence** — `screenshots/bugs/GUI-BUG-24.png`

![GUI-BUG-24 — Giỏ hàng mất toàn bộ khi reload (F5)](screenshots/bugs/GUI-BUG-24.png)

**GitHub Issue:** [#24](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/24)

---

## GUI-BUG-25 — Click đầu tiên vào "Thêm vào giỏ hàng" ở Product Detail không có tác dụng

| Field | Value |
| :--- | :--- |
| Checklist item | IA-04-02 |
| Screen / URL | ProductDetail — `/product/1` |
| Severity | **Blocker** |
| Spec reference | FR-06, FR-24 |
| Detected by | Checklist execution (automated + manual review) |

**Steps to reproduce**

1. Mở /product/1
2. Bấm "Thêm vào giỏ hàng" đúng 1 lần
3. Mở Giỏ hàng

**Expected** — Giỏ có 1 sản phẩm sau lần bấm đầu.

**Actual** — Giỏ vẫn trống; phải bấm lần thứ hai mới thêm (lần đầu chỉ đổi state quantity).

**Impact** — Người dùng tưởng nút hỏng; luồng mua hàng bị chặn ngay bước đầu.

**Evidence** — `screenshots/bugs/GUI-BUG-25.png`

![GUI-BUG-25 — Click đầu tiên vào "Thêm vào giỏ hàng" ở Product Detail không có tác dụng](screenshots/bugs/GUI-BUG-25.png)

**GitHub Issue:** [#25](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/25)

---

## GUI-BUG-26 — Xóa sản phẩm khỏi giỏ và hủy đơn hàng không có bước xác nhận

| Field | Value |
| :--- | :--- |
| Checklist item | IA-04-03, IA-04-15 |
| Screen / URL | Cart, Profile — `/cart, /profile` |
| Severity | **Major** |
| Spec reference | FR-07, FR-10, FR-24 |
| Detected by | Checklist execution (automated + manual review) |

**Steps to reproduce**

1. Thêm sản phẩm, mở /cart
2. Bấm "Xóa"
3. Ở /profile bấm "Hủy đơn" trên đơn Chờ xác nhận

**Expected** — Có dialog xác nhận trước khi xóa/hủy.

**Actual** — Xóa giỏ thực hiện ngay; "Hủy đơn" gọi API cancel trước, dialog chỉ là alert kết quả sau đó.

**Impact** — Một cú click nhầm là mất sản phẩm/đơn; không có cách hoàn tác.

**Evidence** — `screenshots/bugs/GUI-BUG-26.png`

![GUI-BUG-26 — Xóa sản phẩm khỏi giỏ và hủy đơn hàng không có bước xác nhận](screenshots/bugs/GUI-BUG-26.png)

**GitHub Issue:** [#26](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/26)

---

## GUI-BUG-27 — Empty state giỏ hàng chỉ có chữ, không có icon/hình minh họa

| Field | Value |
| :--- | :--- |
| Checklist item | IA-04-04 |
| Screen / URL | Cart — `/cart` |
| Severity | **Cosmetic** |
| Spec reference | FR-24, FR-07 |
| Detected by | Checklist execution (automated + manual review) |

**Steps to reproduce**

1. Xoá localStorage, mở /cart

**Expected** — Có icon/illustration + thông điệp thân thiện + lối mua tiếp.

**Actual** — Chỉ một dòng chữ "Giỏ hàng của bạn đang trống", không SVG/IMG.

**Impact** — Trang trống trông như lỗi tải; giảm niềm tin và không hướng người dùng quay lại mua.

**Evidence** — `screenshots/bugs/GUI-BUG-27.png`

![GUI-BUG-27 — Empty state giỏ hàng chỉ có chữ, không có icon/hình minh họa](screenshots/bugs/GUI-BUG-27.png)

**GitHub Issue:** [#27](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/27)

---

## GUI-BUG-28 — Tìm kiếm 0 kết quả không có empty state

| Field | Value |
| :--- | :--- |
| Checklist item | IA-04-05 |
| Screen / URL | Home — `/` |
| Severity | **Major** |
| Spec reference | FR-05, FR-24 |
| Detected by | Checklist execution (automated + manual review) |

**Steps to reproduce**

1. Mở /
2. Nhập "zzzz-khong-ton-tai" vào ô tìm kiếm
3. Bấm "Tìm"

**Expected** — Thông báo "Không tìm thấy sản phẩm" + gợi ý xóa từ khóa.

**Actual** — Trang chỉ còn tiêu đề và dòng "Kết quả tìm kiếm cho: …", lưới sản phẩm rỗng, không thông báo.

**Impact** — Người dùng không phân biệt được "hết hàng", "lỗi tải" hay "không có kết quả".

**Evidence** — `screenshots/bugs/GUI-BUG-28.png`

![GUI-BUG-28 — Tìm kiếm 0 kết quả không có empty state](screenshots/bugs/GUI-BUG-28.png)

**GitHub Issue:** [#28](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/28)

---

## GUI-BUG-29 — Thiếu loading state và error state khi gọi API sản phẩm

| Field | Value |
| :--- | :--- |
| Checklist item | IA-04-06, IA-04-07 |
| Screen / URL | Home — `/` |
| Severity | **Major** |
| Spec reference | FR-05, FR-24 |
| Detected by | Checklist execution (automated + manual review) |

**Steps to reproduce**

1. Chặn/delay request /api/products bằng DevTools hoặc Playwright route
2. Mở /

**Expected** — Khi chờ: spinner/skeleton; khi lỗi: thông báo thân thiện + nút "Thử lại".

**Actual** — Chờ 2.5s không có indicator; khi request bị abort trang im lặng, không thông báo, không retry.

**Impact** — Mạng chậm bị hiểu là app treo; lỗi API bị hiểu là "hết sản phẩm".

**Evidence** — `screenshots/bugs/GUI-BUG-29.png`

![GUI-BUG-29 — Thiếu loading state và error state khi gọi API sản phẩm](screenshots/bugs/GUI-BUG-29.png)

**GitHub Issue:** [#29](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/29)

---

## GUI-BUG-30 — Coupon SAVE10 hiển thị số tiền giảm âm và thành tiền cao hơn giá gốc

| Field | Value |
| :--- | :--- |
| Checklist item | IA-04-08 |
| Screen / URL | Checkout — `/checkout` |
| Severity | **Blocker** |
| Spec reference | FR-09, FR-24 |
| Detected by | Checklist execution (automated + manual review) |

**Steps to reproduce**

1. Đăng nhập, thêm iPhone (30.000.000 ₫), mở /checkout
2. Nhập SAVE10, bấm Áp dụng
3. Đọc khối feedback màu xanh

**Expected** — Giảm 3.000.000 ₫ (10%) → thành tiền 27.000.000 ₫.

**Actual** — Hiển thị "Tiết kiệm: -270,000,000 ₫" và "Thành tiền: 300,000,000 ₫"; API trả discount_amount âm do công thức percent sai (total*(1−value)).

**Impact** — Người dùng bị báo giá sai gấp 10 lần; nếu bấm thanh toán sẽ gửi total_amount = 300.000.000 ₫.

**Evidence** — `screenshots/bugs/GUI-BUG-30.png`

![GUI-BUG-30 — Coupon SAVE10 hiển thị số tiền giảm âm và thành tiền cao hơn giá gốc](screenshots/bugs/GUI-BUG-30.png)

**GitHub Issue:** [#30](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/30)

---

## GUI-BUG-31 — Sau thanh toán thành công, giỏ hàng không được xóa

| Field | Value |
| :--- | :--- |
| Checklist item | IA-04-11 |
| Screen / URL | Checkout success, Cart — `/checkout → /cart` |
| Severity | **Major** |
| Spec reference | FR-08, FR-24 |
| Detected by | Checklist execution (automated + manual review) |

**Steps to reproduce**

1. Đăng nhập, thêm sản phẩm
2. Thanh toán thành công
3. Bấm "Quay lại trang chủ" rồi mở Giỏ hàng

**Expected** — Giỏ trống sau khi đơn được tạo.

**Actual** — Giỏ vẫn còn sản phẩm vừa mua (clearCart import nhưng không gọi trong handleCheckout).

**Impact** — Người dùng dễ đặt trùng đơn thứ hai; trạng thái giỏ không phản ánh sự thật.

**Evidence** — `screenshots/bugs/GUI-BUG-31.png`

![GUI-BUG-31 — Sau thanh toán thành công, giỏ hàng không được xóa](screenshots/bugs/GUI-BUG-31.png)

**GitHub Issue:** [#31](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/31)

---

## GUI-BUG-32 — Chuỗi tìm kiếm được render thành HTML (XSS qua dangerouslySetInnerHTML)

| Field | Value |
| :--- | :--- |
| Checklist item | IA-04-12 |
| Screen / URL | Home — `/` |
| Severity | **Blocker** |
| Spec reference | SEC-04, FR-05 |
| Detected by | Checklist execution (automated + manual review) |

**Steps to reproduce**

1. Mở /
2. Nhập <b id="xss-probe">abc</b> vào ô tìm kiếm
3. Bấm "Tìm"
4. Kiểm tra DOM

**Expected** — Chuỗi hiển thị nguyên văn; không tạo element từ input người dùng.

**Actual** — Thẻ <b> được tạo trong DOM (1 lần) — dòng "Kết quả tìm kiếm cho:" dùng dangerouslySetInnerHTML. Payload <img onerror> cũng sẽ thực thi.

**Impact** — Lỗ hổng XSS phản xạ qua URL (?search=...): kẻ tấn công gửi link độc, chiếm phiên người dùng.

**Evidence** — `screenshots/bugs/GUI-BUG-32.png`

![GUI-BUG-32 — Chuỗi tìm kiếm được render thành HTML (XSS qua dangerouslySetInnerHTML)](screenshots/bugs/GUI-BUG-32.png)

**GitHub Issue:** [#32](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/32)

---

## GUI-BUG-33 — Thông báo lỗi thanh toán lộ chi tiết kỹ thuật "Network Error"

| Field | Value |
| :--- | :--- |
| Checklist item | IA-04-13 |
| Screen / URL | Checkout — `/checkout` |
| Severity | **Minor** |
| Spec reference | FR-24 |
| Detected by | Checklist execution (automated + manual review) |

**Steps to reproduce**

1. Vào /checkout với giỏ có hàng
2. Chặn request /api/checkout
3. Bấm "Xác Nhận Thanh Toán"

**Expected** — Thông báo thân thiện: "Không thể kết nối, vui lòng thử lại".

**Actual** — alert("Lỗi khi thanh toán: Network Error") — lộ message thô của axios.

**Impact** — Người dùng không hiểu lỗi; lộ thông tin nội bộ, tạo cảm giác hệ thống kém tin cậy.

**Evidence** — `screenshots/bugs/GUI-BUG-33.png`

![GUI-BUG-33 — Thông báo lỗi thanh toán lộ chi tiết kỹ thuật "Network Error"](screenshots/bugs/GUI-BUG-33.png)

**GitHub Issue:** [#33](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/33)

---

## GUI-BUG-34 — Không có cơ chế đóng/tự đóng cho thông báo thành công

| Field | Value |
| :--- | :--- |
| Checklist item | IA-04-16 |
| Screen / URL | Global — `/checkout, /` |
| Severity | **Minor** |
| Spec reference | FR-24 |
| Detected by | Checklist execution (automated + manual review) |

**Steps to reproduce**

1. Quan sát thông báo thành công sau khi áp coupon và sau khi thêm giỏ
2. Tìm nút đóng hoặc timeout

**Expected** — Toast/banner có nút đóng hoặc tự ẩn sau vài giây.

**Actual** — Không có toast; khối thành công inline không có nút đóng, chỉ mất khi sửa input.

**Impact** — Thông báo cũ còn trên màn hình gây nhiễu; người dùng không chủ động dọn được.

**Evidence** — `screenshots/bugs/GUI-BUG-34.png`

![GUI-BUG-34 — Không có cơ chế đóng/tự đóng cho thông báo thành công](screenshots/bugs/GUI-BUG-34.png)

**GitHub Issue:** [#34](https://github.com/tvquang0511/HW03_AI_GUIUsability/issues/34)

---
