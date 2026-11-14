# BÁO CÁO TOÀN DIỆN: GUI CHECKLIST THIẾT KẾ & PHẢN BIỆN (TASK 1)

> **Môn học:** Kiểm thử Phần mềm (Software Testing) – Bài tập HW03-AI  
> **Sinh viên thực hiện:** Trần Vũ Quang – MSSV: **23120346**  
> **Email:** 23120346@student.hcmus.edu.vn  
> **Hệ thống kiểm thử (SUT):** EShop Web Application (`http://localhost:5173/`)  
> **Phạm vi kiểm thử:** 
> 1. Màn hình Danh sách & Chi tiết sản phẩm (`FR-05`, `FR-06`)
> 2. Màn hình Giỏ hàng (`FR-07`)
> 3. Màn hình Thanh toán & Áp dụng mã giảm giá (`FR-08`, `FR-09`)
> 
> **Tổng số mục kiểm thử (Checklist items):** **54 items** (> 40 theo yêu cầu đề bài)  
> - **Mục do AI sinh ban đầu:** 40 items  
> - **Mục do con người rà soát & bổ sung:** 14 items (kèm giải thích chi tiết lý do AI bỏ sót)

---

## 1. PHÂN BỐ CÁC MỤC THEO 4 KHÍA CẠNH GIAO DIỆN (INTERFACE ASPECTS)

| Mã khía cạnh | Tên khía cạnh giao diện (Aspect) | AI sinh ra | Con người bổ sung | Tổng số mục | Tỷ lệ bao phủ |
| :---: | :--- | :---: | :---: | :---: | :---: |
| **`IA-01`** | **General UI Standards** (Tiêu chuẩn giao diện chung) | 10 | 4 | **14** | 25.9% |
| **`IA-02`** | **Forms** (Biểu mẫu & Trường nhập liệu) | 10 | 3 | **13** | 24.1% |
| **`IA-03`** | **Navigation** (Điều hướng & Khả năng tiếp cận) | 10 | 4 | **14** | 25.9% |
| **`IA-04`** | **Feedback / State** (Phản hồi & Máy trạng thái) | 10 | 3 | **13** | 24.1% |
| **Tổng** | | **40** | **14** | **54 items** | **100%** |

---

## 2. BẢNG GUI CHECKLIST CHI TIẾT (54 ITEMS)

*Ghi chú cột:*
* **Source:** `AI` (Bản nháp ban đầu) | `Human` (Con người bổ sung sau khi phản biện).
* **Why AI Missed It:** Phân tích nguyên nhân AI bỏ sót theo 3 nhóm: (1) Giới hạn của Prompt (Prompt limitation); (2) Giới hạn của Mô hình AI (Model limitation); (3) Đặc thù giao diện thực tế của SUT (SUT-specific nuance).

| ID | Khía cạnh | Màn hình | Tiêu chí kiểm tra (Checkpoint) | Kết quả kỳ vọng (Expected Result) | Nguồn | Lý do AI bỏ sót (Why AI Missed It) |
| :---: | :---: | :---: | :--- | :--- | :---: | :--- |
| `CHK-01` | IA-01 | Product List | Bố cục lưới sản phẩm (Grid Alignment) | Các thẻ card sản phẩm có chiều cao bằng nhau; ảnh, tiêu đề và giá tiền căn thẳng hàng theo hàng ngang/dọc. | AI | N/A (AI sinh ban đầu) |
| `CHK-02` | IA-01 | Product List | Phân cấp thị giác tiêu đề và giá (Typography) | Tiêu đề dễ đọc, giá tiền được làm nổi bật (font đậm, kích thước lớn hơn, màu nhấn tương phản) để dễ nhận diện. | AI | N/A (AI sinh ban đầu) |
| `CHK-03` | IA-01 | Product List | Định dạng tiền tệ hiển thị (Currency Format) | Giá sản phẩm hiển thị có dấu chấm phân cách hàng nghìn (ví dụ: `150.000 ₫` hoặc `150,000 VND`), không in số trần `150000`. | AI | N/A (AI sinh ban đầu) |
| `CHK-04` | IA-01 | Product Detail | Tỷ lệ và khung hiển thị ảnh sản phẩm | Ảnh sản phẩm sắc nét, đúng tỷ lệ khung hình (aspect ratio), có thuộc tính `object-fit: cover/contain` để không méo ảnh. | AI | N/A (AI sinh ban đầu) |
| `CHK-05` | IA-01 | Product Detail | Bố cục thông tin chi tiết | Vùng ảnh, tên, giá, nút số lượng và nút mua được chia khối cân đối, khoảng đệm lề (padding/margin) hợp lý. | AI | N/A (AI sinh ban đầu) |
| `CHK-06` | IA-01 | Shopping Cart | Căn lề bảng giỏ hàng (Table Alignment) | Các cột: Ảnh, Tên SP, Đơn giá, Số lượng, Thành tiền căn thẳng hàng; các cột số tiền được căn phải chuẩn mực. | AI | N/A (AI sinh ban đầu) |
| `CHK-07` | IA-01 | Shopping Cart | Nổi bật tổng thanh toán (Total Highlight) | Khu vực Tạm tính và Tổng thanh toán (Grand Total) phân biệt rõ với danh sách sản phẩm bằng đường kẻ hoặc nền nổi. | AI | N/A (AI sinh ban đầu) |
| `CHK-08` | IA-01 | Checkout | Bố cục trang thanh toán 2 cột | Cột trái là thông tin giao hàng, cột phải là tóm tắt đơn hàng (Order summary) cố định rõ ràng, không xô lệch. | AI | N/A (AI sinh ban đầu) |
| `CHK-09` | IA-01 | Toàn hệ thống | Tính nhất quán màu sắc & Font chữ | Các nút hành động chính (Primary CTA) dùng đồng nhất một màu thương hiệu; font chữ toàn site đồng bộ một kiểu. | AI | N/A (AI sinh ban đầu) |
| `CHK-10` | IA-01 | Toàn hệ thống | Khả năng co giãn trên Mobile View | Khi thu nhỏ cửa sổ xuống kích thước điện thoại (375px), giao diện chuyển thành 1 cột mượt mà, không xuất hiện thanh cuộn ngang. | AI | N/A (AI sinh ban đầu) |
| `CHK-11` | **IA-01** | **Product List** | **Tràn chữ tiếng Việt có dấu (Text Truncation)** | Khi tên sản phẩm bằng tiếng Việt quá dài (nhiều dấu thanh), thẻ card dùng `line-clamp` ngắt dòng bằng dấu ba chấm `...`, không làm vỡ chiều cao thẻ hay đè lên giá tiền. | **Human** | **Prompt & Model limitation:** Prompt không chỉ định rõ kiểm tra độ dài chuỗi tiếng Việt; LLM thường giả định tên sản phẩm tiếng Anh ngắn gọn mẫu ("Shoe", "T-shirt") nên không lường trước hiện tượng vỡ flexbox khi chuỗi UTF-8 tiếng Việt bị dài. |
| `CHK-12` | **IA-01** | **Toàn hệ thống** | **Độ tương phản màu sắc tiếp cận (WCAG Contrast)** | Tỷ lệ tương phản giữa màu chữ (nhất là nhãn màu xám mờ placeholder hoặc văn bản phụ) với màu nền đạt tối thiểu `4.5:1` theo chuẩn WCAG 2.1 AA. | **Human** | **Model limitation:** AI xử lý văn bản ngữ nghĩa (textual tokens) nên không có "mắt nhìn" đo lường giá trị hex màu sắc (`#888` trên nền `#f9f9f9`) để đánh giá độ chìm chữ trong thực tế. |
| `CHK-13` | **IA-01** | **Toàn hệ thống** | **Khả năng hiển thị khi Zoom 200% (WCAG 1.4.4)** | Khi người dùng phóng to trình duyệt lên mức `200%`, bố cục tự thích ứng (reflow), nội dung văn bản và các nút bấm chính không bị che khuất hoặc đè lấn nhau. | **Human** | **Prompt limitation:** Prompt ban đầu chỉ yêu cầu kiểm tra responsive trên kích thước cửa sổ di động thông thường, bỏ quên kịch bản kiểm thử tiếp cận (Accessibility testing) cho người khiếm thị sử dụng trình duyệt phóng to. |
| `CHK-14` | **IA-01** | **Product Detail** | **Ký hiệu tiền tệ tiếng Việt không bị ngắt dòng** | Ký hiệu tiền tệ `₫` hoặc `VND` không bị ngắt xuống dòng đứng trơ trọi một mình (sử dụng khoảng trắng không ngắt dòng `&nbsp;`). | **Human** | **SUT-specific nuance:** Giao diện EShop sử dụng font chữ hệ thống trên màn hình nhỏ dễ khiến ký hiệu tiền tệ rớt xuống dòng tiếp theo nếu không bọc thẻ inline-block. |
| `CHK-15` | IA-02 | Product List | Ô tìm kiếm có placeholder và nút xóa | Ô tìm kiếm hiển thị placeholder gợi ý; khi có chữ xuất hiện nút xóa nhanh (`x`) để người dùng xóa trắng từ khóa tiện lợi. | AI | N/A (AI sinh ban đầu) |
| `CHK-16` | IA-02 | Product Detail | Bộ chọn số lượng (Quantity Input) | Ô nhập số lượng chỉ cho phép nhập số nguyên dương $\ge 1$; có nút `+` và `-` hoạt động nhạy bén. | AI | N/A (AI sinh ban đầu) |
| `CHK-17` | IA-02 | Product Detail | Giới hạn số lượng mua theo tồn kho | Không cho phép bấm nút `+` hoặc gõ số lượng vượt quá số lượng hàng tồn kho thực tế. | AI | N/A (AI sinh ban đầu) |
| `CHK-18` | IA-02 | Shopping Cart | Thay đổi số lượng trực tiếp trong giỏ | Khi thay đổi ô số lượng trong giỏ hàng, thành tiền của dòng sản phẩm và tổng giá trị đơn hàng tự động tính toán lại. | AI | N/A (AI sinh ban đầu) |
| `CHK-19` | IA-02 | Checkout | Đánh dấu trường bắt buộc (Mandatory) | Các trường bắt buộc như Họ tên, SĐT, Địa chỉ có dấu sao đỏ (`*`) hoặc nhãn rõ ràng để người dùng nhận biết. | AI | N/A (AI sinh ban đầu) |
| `CHK-20` | IA-02 | Checkout | Kiểm tra tính hợp lệ số điện thoại | Hiển thị thông báo lỗi rõ ràng khi người dùng nhập số điện thoại không đúng định dạng (ví dụ: chứa chữ cái hoặc không đủ 10 số). | AI | N/A (AI sinh ban đầu) |
| `CHK-21` | IA-02 | Checkout | Kiểm tra định dạng Email giao hàng | Báo lỗi ngay dưới ô nhập nếu email không có ký tự `@` hoặc sai cấu trúc tên miền. | AI | N/A (AI sinh ban đầu) |
| `CHK-22` | IA-02 | Checkout | Giữ lại dữ liệu đã nhập khi submit lỗi | Nếu submit form giao hàng bị lỗi một trường, các trường thông tin hợp lệ khác đã nhập không bị xóa trắng. | AI | N/A (AI sinh ban đầu) |
| `CHK-23` | IA-02 | Coupon | Ô nhập mã giảm giá (Coupon Input) | Có ô nhập mã giảm giá và nút "Áp dụng"; ký tự nhập vào tự động viết hoa hoặc không phân biệt hoa/thường. | AI | N/A (AI sinh ban đầu) |
| `CHK-24` | IA-02 | Checkout | Lựa chọn phương thức thanh toán | Các nút Radio button chọn COD, Chuyển khoản hoặc Thẻ hoạt động loại trừ lẫn nhau (chỉ chọn được 1). | AI | N/A (AI sinh ban đầu) |
| `CHK-25` | **IA-02** | **Checkout** | **Chặn tự động hoàn thành đè CSS (Autofill Style)** | Khi trình duyệt Chrome tự động điền form (Browser Autofill), màu nền vàng/xanh nhạt của Chrome không làm mất màu sắc và kiểu dáng thiết kế của ô nhập liệu. | **Human** | **Model limitation:** AI thường chỉ xem xét mã nguồn HTML/JS nội bộ mà không lường trước được hành vi can thiệp của `WebKit-autofill` từ phía trình duyệt ngoài đời thực. |
| `CHK-26` | **IA-02** | **Product Detail** | **Ngăn chặn nhập số âm hoặc ký tự đặc biệt (`e`, `E`, `-`)** | Trong ô nhập số lượng kiểu `type="number"`, ngăn chặn triệt để việc người dùng gõ ký tự khoa học (`e`, `E`, `+`, `-`) hoặc số `0`. | **Human** | **SUT-specific nuance:** Thẻ `<input type="number">` mặc định của HTML5 vẫn cho phép gõ ký tự `e` (ký hiệu lũy thừa trong toán học), nếu không xử lý sự kiện `onKeyDown`, người dùng sẽ nhập được các giá trị bất hợp lý. |
| `CHK-27` | **IA-02** | **Checkout** | **Cắt tỉa khoảng trắng đầu cuối (Trim Whitespace)** | Khi người dùng copy-paste mã coupon hoặc số điện thoại có chứa dấu cách thừa ở đầu hoặc cuối, hệ thống tự động loại bỏ (trim) thay vì báo lỗi không tìm thấy. | **Human** | **Prompt limitation:** Prompt không nhắc AI về thói quen sao chép dữ liệu thực tế của người dùng trên điện thoại/máy tính (thường vô tình dính kèm dấu khoảng trắng cuối chuỗi). |
| `CHK-28` | IA-03 | Toàn hệ thống | Thanh điều hướng chính (Navbar) | Navbar cố định hoặc dễ tiếp cận, hiển thị Logo, liên kết Trang chủ, Danh mục và biểu tượng Giỏ hàng. | AI | N/A (AI sinh ban đầu) |
| `CHK-29` | IA-03 | Toàn hệ thống | Badge hiển thị số lượng giỏ hàng | Biểu tượng giỏ hàng trên Header có hiển thị huy hiệu (badge) đếm tổng số lượng sản phẩm đang có trong giỏ. | AI | N/A (AI sinh ban đầu) |
| `CHK-30` | IA-03 | Product List | Thanh điều hướng phân cấp (Breadcrumb) | Trang chi tiết sản phẩm hiển thị breadcrumb (Trang chủ > Danh mục > Tên SP) cho phép người dùng quay lại danh mục cha bằng 1 click. | AI | N/A (AI sinh ban đầu) |
| `CHK-31` | IA-03 | Product List | Phân trang hoặc tải thêm (Pagination) | Các nút phân trang (Trang trước, số trang, Trang sau) hoạt động đúng; chuyển trang cuộn mượt lên đầu danh sách. | AI | N/A (AI sinh ban đầu) |
| `CHK-32` | IA-03 | Product Detail | Nút "Tiếp tục mua hàng" / "Quay lại" | Có nút rõ ràng cho phép người dùng quay trở lại trang danh sách sản phẩm vừa xem mà không mất bộ lọc. | AI | N/A (AI sinh ban đầu) |
| `CHK-33` | IA-03 | Shopping Cart | Nút chuyển đến trang Thanh toán | Nút "Tiến hành đặt hàng" (Proceed to Checkout) nổi bật, điều hướng chính xác sang trang Checkout (`FR-08`). | AI | N/A (AI sinh ban đầu) |
| `CHK-34` | IA-03 | Checkout | Nút quay lại giỏ hàng | Từ trang Checkout có liên kết hoặc nút bấm rõ ràng để người dùng quay lại kiểm tra/sửa đổi giỏ hàng. | AI | N/A (AI sinh ban đầu) |
| `CHK-35` | IA-03 | Toàn hệ thống | Tính toàn vẹn của liên kết Logo | Nhấp vào Logo ở Header tại bất kỳ màn hình nào đều chuyển hướng người dùng về Trang chủ an toàn. | AI | N/A (AI sinh ban đầu) |
| `CHK-36` | IA-03 | Toàn hệ thống | Tương thích nút Back/Forward của trình duyệt | Bấm nút Back/Forward trên trình duyệt chuyển đổi qua lại giữa Trang chủ, Chi tiết SP, Giỏ hàng và Checkout đúng trạng thái. | AI | N/A (AI sinh ban đầu) |
| `CHK-37` | IA-03 | Toàn hệ thống | Kiểm tra liên kết gãy (Broken links) | Không có liên kết nào ở Header/Footer trỏ tới trang lỗi `404 Not Found` không xác định. | AI | N/A (AI sinh ban đầu) |
| `CHK-38` | **IA-03** | **Toàn hệ thống** | **Điều hướng bằng bàn phím tuần tự (Keyboard Tab Order)** | Người dùng có thể nhấn phím `Tab` để di chuyển tuần tự hợp lý qua từng ô nhập liệu, nút bấm; phần tử đang chọn có viền `focus-visible` nhận diện rõ. | **Human** | **Model limitation:** AI thường chỉ kiểm tra cấu trúc DOM theo mắt người nhìn (chuột click), bỏ qua hành vi của người dùng khuyết tật hoặc người dùng chuyên nghiệp chỉ điều khiển bằng bàn phím (Keyboard accessibility). |
| `CHK-39` | **IA-03** | **Toàn hệ thống** | **Đóng Modal bằng phím `Escape` (Esc Key Handling)** | Khi mở Modal giỏ hàng hoặc popup thông báo, bấm phím `Esc` trên bàn phím có thể đóng modal ngay lập tức mà không cần di chuột bấm dấu `x`. | **Human** | **Prompt limitation:** Prompt kiểm thử giao diện thông thường chỉ mô tả tương tác click chuột, không nhắc AI về sự kiện lắng nghe bàn phím (Event Listeners `keydown`). |
| `CHK-40` | **IA-03** | **Shopping Cart** | **Bẫy tiêu điểm bàn phím trong Modal (Focus Trap)** | Khi mở popup xác nhận xóa sản phẩm hoặc modal xem nhanh, tiêu điểm phím `Tab` bị giữ lại bên trong modal, không bị nhảy lọt ra ngoài nền web phía sau. | **Human** | **Model limitation:** Khái niệm "Focus Trap" là kỹ thuật tiếp cận chuyên sâu của chuẩn WCAG mà các mô hình ngôn ngữ lớn rất hiếm khi tự chủ động đề xuất nếu người dùng không yêu cầu thẳng. |
| `CHK-41` | **IA-03** | **Toàn hệ thống** | **Cuộn mượt lên đầu trang khi chuyển trang (Scroll to Top)** | Khi người dùng ở cuối trang danh sách và bấm chuyển sang Trang 2, trang web tự động cuộn lên đầu danh sách sản phẩm thay vì giữ nguyên vị trí cuộn ở đáy trang. | **Human** | **SUT-specific nuance:** Ứng dụng Single Page Application (React/Vue) như EShop thường xuyên mắc lỗi không reset vị trí `window.scrollTo(0, 0)` khi chuyển route. |
| `CHK-42` | IA-04 | Product Detail | Phản hồi khi thêm vào giỏ hàng | Khi bấm "Thêm vào giỏ hàng", hệ thống hiển thị thông báo Toast/Popup thành công và cập nhật ngay lập tức badge trên Header. | AI | N/A (AI sinh ban đầu) |
| `CHK-43` | IA-04 | Product Detail | Trạng thái nút khi hết hàng | Nếu sản phẩm có tồn kho bằng 0, nút "Thêm vào giỏ hàng" bị vô hiệu hóa (disabled) và hiển thị chữ "Hết hàng". | AI | N/A (AI sinh ban đầu) |
| `CHK-44` | IA-04 | Shopping Cart | Trạng thái giỏ hàng trống (Empty State) | Khi giỏ hàng không có sản phẩm, hiển thị hình minh họa/thông báo "Giỏ hàng của bạn đang trống" kèm nút "Mua sắm ngay". | AI | N/A (AI sinh ban đầu) |
| `CHK-45` | IA-04 | Shopping Cart | Xác nhận trước khi xóa sản phẩm | Bấm nút xóa sản phẩm trong giỏ hàng hiển thị hộp thoại xác nhận (Confirm modal/dialog) để tránh xóa nhầm. | AI | N/A (AI sinh ban đầu) |
| `CHK-46` | IA-04 | Coupon | Phản hồi khi áp mã giảm giá thành công | Hiển thị thông báo màu xanh báo áp mã thành công, hiển thị rõ số tiền được giảm và cập nhật lại Tổng thanh toán. | AI | N/A (AI sinh ban đầu) |
| `CHK-47` | IA-04 | Coupon | Phản hồi khi nhập mã giảm giá sai/hết hạn | Hiển thị thông báo lỗi màu đỏ rõ ràng (ví dụ: "Mã giảm giá không hợp lệ hoặc đã hết hạn") ngay cạnh ô nhập. | AI | N/A (AI sinh ban đầu) |
| `CHK-48` | IA-04 | Checkout | Trạng thái gửi đơn hàng (Loading / Submitting) | Khi bấm nút "Đặt hàng", nút hiển thị trạng thái đang tải (spinner) và tạm thời vô hiệu hóa để tránh bấm đúp (double-click). | AI | N/A (AI sinh ban đầu) |
| `CHK-49` | IA-04 | Checkout | Màn hình đặt hàng thành công | Sau khi đặt hàng thành công, hiển thị trang xác nhận có Mã đơn hàng, tóm tắt đơn và lời cảm ơn. | AI | N/A (AI sinh ban đầu) |
| `CHK-50` | IA-04 | Product List | Phản hồi tìm kiếm không có kết quả | Khi gõ từ khóa không khớp sản phẩm nào, hiển thị thông báo "Không tìm thấy sản phẩm phù hợp" thay vì trang trắng. | AI | N/A (AI sinh ban đầu) |
| `CHK-51` | IA-04 | Toàn hệ thống | Trạng thái tải trang (Skeleton / Loading State) | Trong khi chờ gọi API lấy dữ liệu sản phẩm, hiển thị khung xương xám (Skeleton) hoặc vòng xoay tải dữ liệu. | AI | N/A (AI sinh ban đầu) |
| `CHK-52` | **IA-04** | **Shopping Cart** | **Duy trì giỏ hàng khi F5 / Reload trang** | Sau khi thêm sản phẩm vào giỏ, bấm F5 làm mới trình duyệt thì danh sách giỏ hàng và badge số lượng vẫn được duy trì nguyên vẹn (qua LocalStorage hoặc Session). | **Human** | **SUT-specific nuance:** Rất nhiều ứng dụng đồ án demo chỉ lưu giỏ hàng trong bộ nhớ React State tạm thời; bấm F5 là mất sạch giỏ hàng khiến người dùng ức chế. |
| `CHK-53` | **IA-04** | **Product Detail** | **Chống spam bấm nhanh nút tăng giảm (Debounce Clicks)** | Khi người dùng click chuột liên tục thật nhanh vào nút `+` số lượng, hệ thống xử lý mượt mà, không bị xung đột gửi hàng chục request API dồn dập làm đơ giao diện. | **Human** | **Model limitation:** AI tư duy kiểm thử theo từng bước đơn lẻ (step-by-step), không tính đến hành vi người dùng "spam click" ngoài đời thực gây race condition. |
| `CHK-54` | **IA-04** | **Checkout** | **Hủy áp dụng mã giảm giá (Remove Applied Coupon)** | Khi đã áp dụng mã coupon thành công, hệ thống cung cấp nút hoặc biểu tượng `[X]` cho phép người dùng hủy mã coupon đó để đổi sang mã khác nếu muốn. | **Human** | **Prompt limitation:** AI chỉ chú ý đến chiều xuôi (Áp mã thành công/thất bại) mà quên chiều ngược lại (Người dùng muốn gỡ mã ra). |
