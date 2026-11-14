# BẢN DỰ THẢO GUI CHECKLIST BAN ĐẦU SINH BỞI AI (INITIAL AI-GENERATED DRAFT)

> **Mã bài tập:** HW03 - Task 1 (GUI Checklist)  
> **Sinh viên thực hiện:** Trần Vũ Quang - MSSV: 23120346  
> **Hệ thống kiểm thử (SUT):** EShop Web Frontend (`http://localhost:5173/`)  
> **Phạm vi kiểm thử (3 màn hình chính):**
> 1. Màn hình 1: Danh sách sản phẩm, Tìm kiếm, Bộ lọc & Chi tiết sản phẩm (`FR-05`, `FR-06`)
> 2. Màn hình 2: Giỏ hàng (`FR-07`)
> 3. Màn hình 3: Thanh toán / Đặt hàng & Áp dụng mã giảm giá (`FR-08`, `FR-09`)
> 
> **Số lượng checklist items ban đầu do AI sinh ra:** 40 items  
> **Bao phủ 4 khía cạnh giao diện:** `IA-01` (General UI), `IA-02` (Forms), `IA-03` (Navigation), `IA-04` (Feedback/State)

---

## BẢNG 40 GUI CHECKLIST ITEMS BAN ĐẦU (AI-GENERATED)

| STT | Mã kiểm thử (ID) | Khía cạnh (Aspect) | Màn hình (Screen) | Tên tiêu chí kiểm tra (Checkpoint) | Kết quả kỳ vọng (Expected Result) | Nguồn (Source) |
| :-: | :---: | :---: | :---: | :--- | :--- | :---: |
| 1 | `CHK-IA01-01` | IA-01 | Product List (`FR-05`) | Bố cục lưới sản phẩm (Grid Alignment) | Các thẻ sản phẩm (Product cards) có chiều cao, chiều rộng đồng đều; ảnh và tiêu đề căn thẳng hàng theo hàng ngang và cột dọc. | AI |
| 2 | `CHK-IA01-02` | IA-01 | Product List (`FR-05`) | Phân cấp thị giác tiêu đề và giá (Typography) | Tên sản phẩm rõ ràng, giá tiền được làm nổi bật (font đậm, màu nhấn tương phản) để người dùng dễ nhận biết. | AI |
| 3 | `CHK-IA01-03` | IA-01 | Product List (`FR-05`) | Định dạng tiền tệ hiển thị | Giá sản phẩm hiển thị có dấu phân cách hàng nghìn (ví dụ: `150.000 ₫` hoặc `150,000 VND`), không hiển thị số trần dạng `150000`. | AI |
| 4 | `CHK-IA01-04` | IA-01 | Product Detail (`FR-06`) | Tỷ lệ và chất lượng ảnh sản phẩm | Ảnh sản phẩm hiển thị sắc nét, đúng tỷ lệ khung hình (aspect ratio), không bị méo mó, co giãn (stretched). | AI |
| 5 | `CHK-IA01-05` | IA-01 | Product Detail (`FR-06`) | Bố cục thông tin chi tiết | Thông tin tên, giá, mô tả, tồn kho và nút mua được phân vùng rõ ràng, khoảng cách đệm (padding/margin) hợp lý. | AI |
| 6 | `CHK-IA01-06` | IA-01 | Shopping Cart (`FR-07`) | Căn lề bảng giỏ hàng (Table Alignment) | Các cột: Ảnh, Tên SP, Đơn giá, Số lượng, Thành tiền được căn lề thẳng thớm; giá tiền căn phải hoặc căn giữa hợp lý. | AI |
| 7 | `CHK-IA01-07` | IA-01 | Shopping Cart (`FR-07`) | Nổi bật tổng thanh toán | Khu vực Tạm tính (Subtotal) và Tổng thanh toán (Grand Total) được phân biệt rõ với danh sách sản phẩm. | AI |
| 8 | `CHK-IA01-08` | IA-01 | Checkout (`FR-08`) | Bố cục trang thanh toán 2 cột | Cột trái là biểu mẫu thông tin giao hàng, cột phải là bảng tóm tắt đơn hàng (Order summary) rõ ràng, không bị xô lệch. | AI |
| 9 | `CHK-IA01-09` | IA-01 | Toàn hệ thống | Tính nhất quán màu sắc & Font chữ | Các nút hành động chính (Primary buttons) dùng đồng nhất một tông màu thương hiệu; font chữ toàn site thống nhất. | AI |
| 10 | `CHK-IA01-10` | IA-01 | Toàn hệ thống | Khả năng co giãn trên Mobile View | Khi thu nhỏ cửa sổ trình duyệt xuống kích thước điện thoại (375px), giao diện chuyển thành 1 cột mượt mà, không bị thanh cuộn ngang (horizontal scrollbar). | AI |
| 11 | `CHK-IA02-01` | IA-02 | Product List (`FR-05`) | Ô tìm kiếm có placeholder và nút xóa | Ô tìm kiếm hiển thị placeholder gợi ý (ví dụ: "Tìm kiếm sản phẩm..."); hiển thị nút xóa nhanh từ khóa khi có chữ. | AI |
| 12 | `CHK-IA02-02` | IA-02 | Product Detail (`FR-06`) | Bộ chọn số lượng (Quantity Input) | Ô nhập số lượng chỉ cho phép nhập số nguyên dương $\ge 1$; có nút `+` và `-` hoạt động chính xác. | AI |
| 13 | `CHK-IA02-03` | IA-02 | Product Detail (`FR-06`) | Giới hạn số lượng mua theo tồn kho | Không cho phép bấm nút `+` hoặc gõ số lượng vượt quá số lượng hàng tồn kho thực tế. | AI |
| 14 | `CHK-IA02-04` | IA-02 | Shopping Cart (`FR-07`) | Thay đổi số lượng trực tiếp trong giỏ | Khi thay đổi ô số lượng trong giỏ hàng, thành tiền của dòng sản phẩm và tổng giá trị đơn hàng tự động tính toán lại. | AI |
| 15 | `CHK-IA02-05` | IA-02 | Checkout (`FR-08`) | Đánh dấu trường bắt buộc (Mandatory) | Các trường bắt buộc như Họ tên, SĐT, Địa chỉ có dấu sao đỏ (`*`) hoặc nhãn rõ ràng để người dùng nhận biết. | AI |
| 16 | `CHK-IA02-06` | IA-02 | Checkout (`FR-08`) | Kiểm tra tính hợp lệ số điện thoại | Hiển thị thông báo lỗi rõ ràng khi người dùng nhập số điện thoại không đúng định dạng (ví dụ: chứa chữ cái hoặc không đủ 10 số). | AI |
| 17 | `CHK-IA02-07` | IA-02 | Checkout (`FR-08`) | Kiểm tra định dạng Email giao hàng | Báo lỗi ngay dưới ô nhập nếu email không có ký tự `@` hoặc sai cấu trúc tên miền. | AI |
| 18 | `CHK-IA02-08` | IA-02 | Checkout (`FR-08`) | Giữ lại dữ liệu đã nhập khi submit lỗi | Nếu submit form giao hàng bị lỗi một trường, các trường thông tin hợp lệ khác đã nhập không bị xóa trắng. | AI |
| 19 | `CHK-IA02-09` | IA-02 | Coupon (`FR-09`) | Ô nhập mã giảm giá (Coupon Input) | Có ô nhập mã giảm giá và nút "Áp dụng"; ký tự nhập vào tự động viết hoa hoặc không phân biệt hoa/thường. | AI |
| 20 | `CHK-IA02-10` | IA-02 | Checkout (`FR-08`) | Lựa chọn phương thức thanh toán | Các nút Radio button chọn COD, Chuyển khoản hoặc Thẻ hoạt động loại trừ lẫn nhau (chỉ chọn được 1). | AI |
| 21 | `CHK-IA03-01` | IA-03 | Toàn hệ thống | Thanh điều hướng chính (Navbar) | Navbar cố định hoặc dễ tiếp cận, hiển thị Logo, liên kết Trang chủ, Danh mục và biểu tượng Giỏ hàng. | AI |
| 22 | `CHK-IA03-02` | IA-03 | Toàn hệ thống | Badge hiển thị số lượng giỏ hàng | Biểu tượng giỏ hàng trên Header có hiển thị huy hiệu (badge) đếm tổng số lượng sản phẩm đang có trong giỏ. | AI |
| 23 | `CHK-IA03-03` | IA-03 | Product List (`FR-05`) | Thanh điều hướng phân cấp (Breadcrumb) | Trang chi tiết sản phẩm hiển thị breadcrumb (Trang chủ > Danh mục > Tên SP) cho phép người dùng quay lại danh mục cha bằng 1 click. | AI |
| 24 | `CHK-IA03-04` | IA-03 | Product List (`FR-05`) | Phân trang hoặc tải thêm (Pagination) | Các nút phân trang (Trang trước, số trang, Trang sau) hoạt động đúng; chuyển trang cuộn mượt lên đầu danh sách. | AI |
| 25 | `CHK-IA03-05` | IA-03 | Product Detail (`FR-06`) | Nút "Tiếp tục mua hàng" / "Quay lại" | Có nút rõ ràng cho phép người dùng quay trở lại trang danh sách sản phẩm vừa xem mà không mất bộ lọc. | AI |
| 26 | `CHK-IA03-06` | IA-03 | Shopping Cart (`FR-07`) | Nút chuyển đến trang Thanh toán | Nút "Tiến hành đặt hàng" (Proceed to Checkout) nổi bật, điều hướng chính xác sang trang Checkout (`FR-08`). | AI |
| 27 | `CHK-IA03-07` | IA-03 | Checkout (`FR-08`) | Nút quay lại giỏ hàng | Từ trang Checkout có liên kết hoặc nút bấm rõ ràng để người dùng quay lại kiểm tra/sửa đổi giỏ hàng. | AI |
| 28 | `CHK-IA03-08` | IA-03 | Toàn hệ thống | Tính toàn vẹn của liên kết Logo | Nhấp vào Logo ở Header tại bất kỳ màn hình nào đều chuyển hướng người dùng về Trang chủ an toàn. | AI |
| 29 | `CHK-IA03-09` | IA-03 | Toàn hệ thống | Tương thích nút Back/Forward của trình duyệt | Bấm nút Back/Forward trên trình duyệt chuyển đổi qua lại giữa Trang chủ, Chi tiết SP, Giỏ hàng và Checkout đúng trạng thái. | AI |
| 30 | `CHK-IA03-10` | IA-03 | Toàn hệ thống | Kiểm tra liên kết gãy (Broken links) | Không có liên kết nào ở Header/Footer trỏ tới trang lỗi `404 Not Found` không xác định. | AI |
| 31 | `CHK-IA04-01` | IA-04 | Product Detail (`FR-06`) | Phản hồi khi thêm vào giỏ hàng | Khi bấm "Thêm vào giỏ hàng", hệ thống hiển thị thông báo Toast/Popup thành công và cập nhật ngay lập tức badge trên Header. | AI |
| 32 | `CHK-IA04-02` | IA-04 | Product Detail (`FR-06`) | Trạng thái nút khi hết hàng | Nếu sản phẩm có tồn kho bằng 0, nút "Thêm vào giỏ hàng" bị vô hiệu hóa (disabled) và hiển thị chữ "Hết hàng". | AI |
| 33 | `CHK-IA04-03` | IA-04 | Shopping Cart (`FR-07`) | Trạng thái giỏ hàng trống (Empty State) | Khi giỏ hàng không có sản phẩm, hiển thị hình minh họa/thông báo "Giỏ hàng của bạn đang trống" kèm nút "Mua sắm ngay". | AI |
| 34 | `CHK-IA04-04` | IA-04 | Shopping Cart (`FR-07`) | Xác nhận trước khi xóa sản phẩm | Bấm nút xóa sản phẩm trong giỏ hàng hiển thị hộp thoại xác nhận (Confirm modal/dialog) để tránh xóa nhầm. | AI |
| 35 | `CHK-IA04-05` | IA-04 | Coupon (`FR-09`) | Phản hồi khi áp mã giảm giá thành công | Hiển thị thông báo màu xanh báo áp mã thành công, hiển thị rõ số tiền được giảm và cập nhật lại Tổng thanh toán. | AI |
| 36 | `CHK-IA04-06` | IA-04 | Coupon (`FR-09`) | Phản hồi khi nhập mã giảm giá sai/hết hạn | Hiển thị thông báo lỗi màu đỏ rõ ràng (ví dụ: "Mã giảm giá không hợp lệ hoặc đã hết hạn") ngay cạnh ô nhập. | AI |
| 37 | `CHK-IA04-07` | IA-04 | Checkout (`FR-08`) | Trạng thái gửi đơn hàng (Loading / Submitting) | Khi bấm nút "Đặt hàng", nút hiển thị trạng thái đang tải (spinner) và tạm thời vô hiệu hóa để tránh bấm đúp (double-click). | AI |
| 38 | `CHK-IA04-08` | IA-04 | Checkout (`FR-08`) | Màn hình đặt hàng thành công | Sau khi đặt hàng thành công, hiển thị trang xác nhận có Mã đơn hàng, tóm tắt đơn và lời cảm ơn. | AI |
| 39 | `CHK-IA04-09` | IA-04 | Product List (`FR-05`) | Phản hồi tìm kiếm không có kết quả | Khi gõ từ khóa không khớp sản phẩm nào, hiển thị thông báo "Không tìm thấy sản phẩm phù hợp" thay vì trang trắng. | AI |
| 40 | `CHK-IA04-10` | IA-04 | Toàn hệ thống | Trạng thái tải trang (Skeleton / Loading State) | Trong khi chờ gọi API lấy dữ liệu sản phẩm, hiển thị khung xương xám (Skeleton) hoặc vòng xoay tải dữ liệu. | AI |
